import { GeneratedName } from '../data/nameStyles';
import { Heart, Sparkles } from 'lucide-react';

interface NameResultsProps {
  names: GeneratedName[];
  styleName: string;
  onSaveFavorite: (name: string) => void;
}

export function NameResults({ names, styleName, onSaveFavorite }: NameResultsProps) {
  if (names.length === 0) return null;

  // 分离八字生成的名字和风格生成的名字
  const baziNames = names.filter(name => name.style === '八字分析');
  const styleNames = names.filter(name => name.style !== '八字分析');

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
      {/* 八字分析名字部分 */}
      {baziNames.length > 0 && (
        <>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-amber-600" />
            <h3 className="text-xl font-bold text-gray-900">
              八字分析推荐名字
            </h3>
            <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
              根据生辰八字
            </span>
          </div>

          <div className="space-y-4 mb-8">
            {baziNames.map((nameData, index) => (
              <div
                key={`bazi-${index}`}
                className="p-5 rounded-lg border-2 border-gray-100 hover:border-amber-200 transition-all bg-gradient-to-r from-amber-50/50 to-orange-50/50"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                      {nameData.name}
                    </h4>
                    <p className="text-xs text-amber-600 font-medium">
                      来源：八字分析
                    </p>
                  </div>
                  <button
                    onClick={() => onSaveFavorite(nameData.name)}
                    className="p-2 hover:bg-red-50 rounded-full transition-colors group"
                    title="收藏此名字"
                  >
                    <Heart className="w-5 h-5 text-gray-400 group-hover:text-red-500 group-hover:fill-red-500 transition-all" />
                  </button>
                </div>

                <p className="text-gray-700 leading-relaxed">{nameData.meaning}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 风格名字部分 */}
      {styleNames.length > 0 && (
        <>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">
              风格推荐名字
            </h3>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              {styleName}风格
            </span>
          </div>

          <div className="space-y-4">
            {styleNames.map((nameData, index) => (
              <div
                key={`style-${index}`}
                className="p-5 rounded-lg border-2 border-gray-100 hover:border-blue-200 transition-all bg-gradient-to-r from-blue-50/50 to-indigo-50/50"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                      {nameData.name}
                    </h4>
                    <p className="text-xs text-blue-600 font-medium">
                      来源：{nameData.style}
                    </p>
                  </div>
                  <button
                    onClick={() => onSaveFavorite(nameData.name)}
                    className="p-2 hover:bg-red-50 rounded-full transition-colors group"
                    title="收藏此名字"
                  >
                    <Heart className="w-5 h-5 text-gray-400 group-hover:text-red-500 group-hover:fill-red-500 transition-all" />
                  </button>
                </div>

                <p className="text-gray-700 leading-relaxed">{nameData.meaning}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <span className="font-medium">温馨提示：</span>
          以上名字根据宝宝生辰时间（精确到秒）精心挑选，点击爱心图标可收藏喜欢的名字。
        </p>
      </div>
    </div>
  );
}
