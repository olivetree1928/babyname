import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { StyleSelector } from './StyleSelector';
import { DateTimePicker } from './DateTimePicker';
import { NameResults } from './NameResults';
import { generateNamesForStyle, GeneratedName, nameStyles } from '../data/nameStyles';
import { supabase } from '../lib/supabase';
import { LogOut, User, Save, Calendar, Star, Sparkles } from 'lucide-react';
import { calculateBazi, BaziInfo } from '../utils/bazi';
import { generateNames } from '../utils/nameGenerator';

export function Dashboard() {
  const { user, signOut } = useAuth();
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [birthDateTime, setBirthDateTime] = useState<Date | null>(null);
  const [generatedNames, setGeneratedNames] = useState<GeneratedName[]>([]);
  const [generatedMaleNames, setGeneratedMaleNames] = useState<GeneratedName[]>([]);
  const [generatedFemaleNames, setGeneratedFemaleNames] = useState<GeneratedName[]>([]);
  const [showBothGenders, setShowBothGenders] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [baziInfo, setBaziInfo] = useState<BaziInfo | null>(null);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [lastName, setLastName] = useState<string>('');
  const [nameLength, setNameLength] = useState<number>(2);

  const handleGenerateNames = async () => {
    if (!selectedStyle || !birthDateTime) return;

    setLoading(true);
    
    // 计算生辰八字和五行分析
    const bazi = calculateBazi(birthDateTime);
    setBaziInfo(bazi);
    
    // 每次生成时使用随机种子确保结果不同
    const randomSeed = Math.floor(Math.random() * 10000);
    
    // 生成男生名字
    const maleBaziNames = generateNames(bazi, 'male', lastName, nameLength, 5, randomSeed).map(item => ({
      name: item.name,
      meaning: item.meaning,
      source: '生辰八字分析（男）'
    }));
    
    const maleStyleNames = generateNamesForStyle(selectedStyle, birthDateTime, lastName, nameLength);
    const maleNames = [...maleBaziNames, ...maleStyleNames.slice(0, 5)];
    setGeneratedMaleNames(maleNames);
    
    // 生成女生名字
    const femaleBaziNames = generateNames(bazi, 'female', lastName, nameLength, 5, randomSeed + 1).map(item => ({
      name: item.name,
      meaning: item.meaning,
      source: '生辰八字分析（女）'
    }));
    
    const femaleStyleNames = generateNamesForStyle(selectedStyle, birthDateTime, lastName, nameLength);
    const femaleNames = [...femaleBaziNames, ...femaleStyleNames.slice(0, 5)];
    setGeneratedFemaleNames(femaleNames);
    
    // 根据当前选择的性别设置显示的名字
    setGeneratedNames(gender === 'male' ? maleNames : femaleNames);
    
    // 设置显示两种性别的名字
    setShowBothGenders(true);

    try {
      await supabase.from('qiming_naming_records').insert({
        user_id: user!.id,
        birth_datetime: birthDateTime.toISOString(),
        selected_style: selectedStyle as any,
        last_name: lastName,
        name_length: nameLength,
        generated_names: gender === 'male' ? maleNames : femaleNames,
        bazi_info: bazi
      });
    } catch (error) {
      console.error('保存记录失败', error);
    }

    setLoading(false);
  };

  const handleSaveFavorite = async (favoriteName: string) => {
    if (!selectedStyle || !birthDateTime) return;

    const { error } = await supabase
      .from('qiming_naming_records')
      .update({ favorite_name: favoriteName })
      .eq('user_id', user!.id)
      .eq('birth_datetime', birthDateTime.toISOString())
      .eq('selected_style', selectedStyle);

    if (!error) {
      setSaveMessage(`已收藏「${favoriteName}」`);
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  const selectedStyleData = nameStyles.find((s) => s.id === selectedStyle);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">宝宝起名</h1>
              <p className="text-sm text-gray-600 mt-1">根据生辰精准起名，传承文化底蕴</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                <span>{user?.email}</span>
              </div>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                退出
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {saveMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
            <Save className="w-5 h-5 text-green-600" />
            <p className="text-green-800 font-medium">{saveMessage}</p>
          </div>
        )}

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">第一步：选择起名风格</h2>
            <StyleSelector
              selectedStyle={selectedStyle}
              onSelectStyle={setSelectedStyle}
            />
          </section>

          {selectedStyle && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">第二步：输入出生时间和性别</h2>
              <div className="space-y-4">
                <DateTimePicker onDateTimeChange={setBirthDateTime} />
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">选择宝宝性别</h3>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setGender('male')}
                      className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                        gender === 'male'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <span className="text-lg font-medium">男宝宝</span>
                    </button>
                    <button
                      onClick={() => setGender('female')}
                      className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                        gender === 'female'
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <span className="text-lg font-medium">女宝宝</span>
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">输入宝宝姓氏</h3>
                  <div className="mb-4">
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="请输入姓氏"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-lg"
                      maxLength={2}
                    />
                  </div>
                  <p className="text-sm text-gray-500">请输入宝宝姓氏，如：张、王、李等</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">选择名字字数</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setNameLength(1)}
                      className={`py-3 px-4 rounded-lg border-2 transition-all ${
                        nameLength === 1
                          ? 'border-amber-500 bg-amber-50'
                          : 'border-gray-200 hover:border-amber-300'
                      }`}
                    >
                      <span className="text-lg font-medium">1个字</span>
                    </button>
                    <button
                      onClick={() => setNameLength(2)}
                      className={`py-3 px-4 rounded-lg border-2 transition-all ${
                        nameLength === 2
                          ? 'border-amber-500 bg-amber-50'
                          : 'border-gray-200 hover:border-amber-300'
                      }`}
                    >
                      <span className="text-lg font-medium">2个字</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {selectedStyle && birthDateTime && (
            <section>
              <button
                onClick={handleGenerateNames}
                disabled={loading}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {loading ? '生成中...' : '开始起名'}
              </button>
            </section>
          )}
          
          {baziInfo && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">生辰八字分析</h2>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-bold text-gray-900">农历日期</h3>
                </div>
                <p className="text-lg mb-4">{baziInfo.lunarDate}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-bold text-gray-900">八字</h3>
                </div>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-amber-50 rounded-lg">
                    <div className="text-sm text-amber-700 mb-1">年柱</div>
                    <div className="text-xl font-bold">{baziInfo.baziYear}</div>
                    <div className="text-xs mt-1 text-amber-600">五行: {baziInfo.wuxing.year}</div>
                  </div>
                  <div className="text-center p-3 bg-amber-50 rounded-lg">
                    <div className="text-sm text-amber-700 mb-1">月柱</div>
                    <div className="text-xl font-bold">{baziInfo.baziMonth}</div>
                    <div className="text-xs mt-1 text-amber-600">五行: {baziInfo.wuxing.month}</div>
                  </div>
                  <div className="text-center p-3 bg-amber-50 rounded-lg">
                    <div className="text-sm text-amber-700 mb-1">日柱</div>
                    <div className="text-xl font-bold">{baziInfo.baziDay}</div>
                    <div className="text-xs mt-1 text-amber-600">五行: {baziInfo.wuxing.day}</div>
                  </div>
                  <div className="text-center p-3 bg-amber-50 rounded-lg">
                    <div className="text-sm text-amber-700 mb-1">时柱</div>
                    <div className="text-xl font-bold">{baziInfo.baziHour}</div>
                    <div className="text-xs mt-1 text-amber-600">五行: {baziInfo.wuxing.hour}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-bold text-gray-900">五行分析</h3>
                </div>
                <div className="space-y-3 mb-4">
                  {baziInfo.analysis.lacking.length > 0 && (
                    <p><span className="font-medium">五行缺失:</span> {baziInfo.analysis.lacking.join('、')}</p>
                  )}
                  {baziInfo.analysis.excess.length > 0 && (
                    <p><span className="font-medium">五行过旺:</span> {baziInfo.analysis.excess.join('、')}</p>
                  )}
                  {baziInfo.analysis.balanced.length > 0 && (
                    <p><span className="font-medium">五行平衡:</span> {baziInfo.analysis.balanced.join('、')}</p>
                  )}
                </div>
                
                <div className="p-4 bg-amber-100 rounded-lg">
                  <p className="font-medium mb-2">起名建议:</p>
                  <p>根据八字分析，建议选用五行属性为 {baziInfo.recommendations.favorableElements.join('、')} 的字，
                  可以平衡命理五行，有利于宝宝未来发展。</p>
                </div>
              </div>
            </section>
          )}

          {showBothGenders && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">第三步：查看推荐名字</h2>
              
              <div className="mb-4 flex gap-4">
                <button
                  onClick={() => setGeneratedNames(generatedMaleNames)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    generatedNames === generatedMaleNames
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 hover:bg-blue-100'
                  }`}
                >
                  男孩名字
                </button>
                <button
                  onClick={() => setGeneratedNames(generatedFemaleNames)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    generatedNames === generatedFemaleNames
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-100 hover:bg-pink-100'
                  }`}
                >
                  女孩名字
                </button>
              </div>
              
              <NameResults
                names={generatedNames}
                styleName={selectedStyleData?.title || ''}
                onSaveFavorite={handleSaveFavorite}
              />
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
