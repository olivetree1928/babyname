import { BaziInfo } from './bazi';

// 常用名字字库
const COMMON_NAMES = {
  male: [
    '伟', '强', '勇', '刚', '毅', '峰', '山', '力', '鸿', '博', 
    '文', '志', '远', '昊', '天', '明', '辉', '宇', '浩', '瀚',
    '杰', '睿', '昂', '泽', '凯', '嘉', '俊', '哲', '雨', '泓',
    '轩', '翔', '旭', '晨', '阳', '骏', '乐', '安', '和', '正',
    '德', '嘉', '宏', '伦', '元', '亦', '良', '信', '然', '诚',
    '钊', '铭', '钧', '铮', '锋', '钰', '铿', '锐', '钢', '铁',
    '川', '玄', '震', '霆', '烽', '煊', '尧', '舜', '禹', '皓',
    '擎', '苍', '海', '岳', '鹏', '鹤', '龙', '虎', '豪', '杭',
    '耀', '星', '辰', '光', '启', '智', '慧', '弘', '毅', '恒',
    '超', '越', '飞', '腾', '跃', '进', '拓', '展', '奋', '进',
    '卓', '越', '盛', '世', '锦', '程', '鼎', '盛', '兴', '旺',
    '盈', '余', '丰', '茂', '隆', '盛', '昌', '盛', '繁', '荣',
    '富', '贵', '荣', '华', '显', '赫', '煌', '煜', '炎', '焱'
  ],
  female: [
    '婷', '娜', '美', '丽', '雅', '静', '柔', '云', '慧', '巧', 
    '雪', '莲', '芳', '蕾', '琳', '璐', '瑶', '颖', '嫣', '萱',
    '梦', '琪', '欣', '怡', '佳', '思', '涵', '诗', '晴', '月',
    '悦', '彤', '芸', '馨', '宁', '安', '乐', '菲', '语', '心',
    '若', '芮', '清', '妍', '可', '舒', '雯', '淑', '华', '秀',
    '钗', '铃', '锦', '钰', '银', '铭', '镁', '锶', '镱', '镧',
    '瑾', '玥', '珊', '珠', '玲', '珂', '瑗', '琼', '瑜', '琦',
    '莹', '茹', '荷', '蓉', '茵', '茜', '英', '茗', '兰', '荔',
    '媛', '嫦', '娥', '姿', '妙', '姗', '姝', '娴', '婉', '婕',
    '倩', '丹', '霞', '红', '粉', '艳', '芬', '芝', '芙', '芷',
    '芊', '芯', '芩', '芪', '芫', '芬', '芭', '芽', '芾', '苒',
    '苓', '苔', '苕', '苗', '苜', '苠', '苡', '苣', '若', '茉',
    '茗', '茜', '茱', '茵', '茹', '荷', '荻', '莉', '莎', '莲'
  ]
};

// 常用双字名字库
const DOUBLE_NAMES = {
  male: [
    '子轩', '浩然', '宇轩', '亦辰', '宏远', '博文', '梓轩', '梓豪', '梓睿', '梓铭',
    '梓晨', '梓涵', '梓宸', '梓辰', '梓瑞', '梓琪', '梓萱', '梓熙', '梓航', '梓杰',
    '梓楠', '梓俊', '梓宇', '梓浩', '梓瑜', '梓诚', '梓鑫', '梓峰', '梓栋', '梓泽',
    '浩宇', '浩轩', '浩然', '浩瀚', '浩博', '浩天', '浩辰', '浩宸', '浩泽', '浩鹏',
    '浩铭', '浩杰', '浩睿', '浩哲', '浩翔', '浩峰', '浩楠', '浩栋', '浩涵', '浩瑞',
    '文轩', '文昊', '文博', '文哲', '文宇', '文泽', '文昂', '文韬', '文卓', '文彦',
    '雨泽', '雨轩', '雨辰', '雨涵', '雨航', '雨翔', '雨晨', '雨阳', '雨松', '雨霖',
    '泽宇', '泽轩', '泽辰', '泽洋', '泽铭', '泽鑫', '泽昊', '泽昌', '泽宸', '泽洋',
    '嘉宇', '嘉泽', '嘉豪', '嘉诚', '嘉懿', '嘉佑', '嘉禾', '嘉玮', '嘉伟', '嘉佑',
    '俊宇', '俊哲', '俊杰', '俊逸', '俊彦', '俊明', '俊达', '俊豪', '俊熙', '俊朗'
  ],
  female: [
    '梦瑶', '雨涵', '雨晴', '雨欣', '雨萱', '雨嘉', '雨彤', '雨婷', '雨琪', '雨菲',
    '雨薇', '雨蕾', '雨荷', '雨桐', '雨珊', '雨珠', '雨璐', '雨馨', '雨婕', '雨莹',
    '梦琪', '梦璐', '梦婷', '梦晴', '梦婕', '梦莹', '梦珊', '梦珠', '梦蕾', '梦菲',
    '梦雅', '梦楠', '梦妍', '梦茹', '梦茜', '梦英', '梦兰', '梦媛', '梦姗', '梦姝',
    '欣怡', '欣妍', '欣然', '欣悦', '欣欣', '欣瑶', '欣彤', '欣蕾', '欣雅', '欣美',
    '诗涵', '诗晴', '诗琪', '诗茵', '诗婧', '诗雨', '诗雅', '诗怡', '诗颖', '诗婷',
    '语嫣', '语茵', '语芙', '语蝶', '语燕', '语彤', '语晴', '语心', '语蓝', '语雪',
    '佳怡', '佳欣', '佳琪', '佳琳', '佳颖', '佳雯', '佳玲', '佳莹', '佳蕾', '佳丽',
    '思颖', '思雨', '思琪', '思彤', '思涵', '思蕊', '思莹', '思婷', '思妍', '思雅',
    '若雨', '若萱', '若彤', '若瑶', '若莹', '若琳', '若蕊', '若菲', '若馨', '若兰'
  ]
};

// 根据五行生成名字
export function generateNames(
  baziInfo: BaziInfo, 
  gender: 'male' | 'female', 
  lastName: string = '', 
  nameLength: number = 2,
  count: number = 10,
  seed: number = 0
): Array<{name: string, meaning: string}> {
  const { favorableElements, favorableRadicals, nameMeanings } = baziInfo.recommendations;
  const genderChars = COMMON_NAMES[gender];
  const results: Array<{name: string, meaning: string}> = [];
  const usedNames = new Set<string>();
  
  // 处理姓氏
  const formattedLastName = lastName.trim();
  
  // 根据指定的名字长度生成名字
  switch (nameLength) {
    case 1: // 生成单字名
      // 使用五行喜用字根生成单字名
      for (let i = 0; i < favorableRadicals.length && results.length < count; i++) {
        const singleChar = favorableRadicals[i];
        const givenName = singleChar;
        const fullName = formattedLastName + givenName;
        
        results.push({
          name: fullName,
          meaning: `单字名，五行属${favorableElements[0]}，简洁有力，${getRandomMeaning(nameMeanings)}`
        });
      }
      
      // 如果喜用字根不够，使用性别相符的字补充
      if (results.length < count) {
        const usedChars = new Set(results.map(r => r.name.slice(formattedLastName.length)));
        
        for (let i = 0; i < genderChars.length && results.length < count; i++) {
          const singleChar = genderChars[i];
          if (!usedChars.has(singleChar)) {
            const fullName = formattedLastName + singleChar;
            results.push({
              name: fullName,
              meaning: `单字名，简洁大气，${getRandomMeaning(nameMeanings)}`
            });
          }
        }
      }
      break;
      
    case 2: // 生成2个字的名字
      // 先从预设的双字名库中选择
      const doubleNameList = DOUBLE_NAMES[gender];
      // 使用随机种子确保每次生成不同的结果
      const shuffledDoubleNames = [...doubleNameList].sort(() => (Math.random() + seed/10000) - 0.5);
      
      for (let i = 0; i < shuffledDoubleNames.length && results.length < count / 2; i++) {
        const givenName = shuffledDoubleNames[i];
        const fullName = formattedLastName + givenName;
        
        if (!usedNames.has(givenName)) {
          usedNames.add(givenName);
          results.push({
            name: fullName,
            meaning: `精选双字名，寓意美好，${getRandomMeaning(nameMeanings)}`
          });
        }
      }
      
      // 使用五行喜用字根生成名字
      for (let i = 0; i < favorableRadicals.length && results.length < count; i++) {
        const firstChar = favorableRadicals[i];
        
        // 随机选择性别相符的字作为第二个字
          for (let j = 0; j < 2 && results.length < count; j++) {
            const secondChar = genderChars[Math.floor((Math.random() + seed/10000) * genderChars.length) % genderChars.length];
            const givenName = `${firstChar}${secondChar}`;
            const fullName = formattedLastName + givenName;
          
          if (!usedNames.has(givenName)) {
            usedNames.add(givenName);
            results.push({
              name: fullName,
              meaning: `五行属${favorableElements[0]}，${getRandomMeaning(nameMeanings)}`
            });
          }
        }
      }
      
      // 使用五行喜用字根作为第二个字
      for (let i = 0; i < favorableRadicals.length && results.length < count; i++) {
        const secondChar = favorableRadicals[i];
        
        // 随机选择性别相符的字作为第一个字
          for (let j = 0; j < 2 && results.length < count; j++) {
            const firstChar = genderChars[Math.floor((Math.random() + seed/10000) * genderChars.length) % genderChars.length];
            const givenName = `${firstChar}${secondChar}`;
            const fullName = formattedLastName + givenName;
          
          if (!usedNames.has(givenName)) {
            usedNames.add(givenName);
            results.push({
              name: fullName,
              meaning: `五行属${favorableElements[0]}，${getRandomMeaning(nameMeanings)}`
            });
          }
        }
      }
      break;
      
    default: // 默认生成2个字的名字
      return generateNames(baziInfo, gender, lastName, 2, count);
  }
  
  return results.slice(0, count);
}

// 获取随机字义解释
function getRandomMeaning(meanings: string[]): string {
  if (!meanings || meanings.length === 0) return '寓意吉祥如意';
  return meanings[Math.floor(Math.random() * meanings.length)];
}

// 根据生辰八字分析生成名字解释
export function explainName(name: string, baziInfo: BaziInfo): string {
  const { favorableElements } = baziInfo.recommendations;
  const element = favorableElements[0] || '金';
  
  return `名字"${name}"五行属${element}，符合生辰八字喜用神。${getRandomMeaning(baziInfo.recommendations.nameMeanings)}，助力人生发展。`;
}