import { Lunar } from 'lunar-typescript';

// 天干
const TIAN_GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
// 地支
const DI_ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
// 五行
const WU_XING = ['金', '木', '水', '火', '土'];
// 天干对应的五行
const TIAN_GAN_WU_XING = {
  '甲': '木', '乙': '木',
  '丙': '火', '丁': '火',
  '戊': '土', '己': '土',
  '庚': '金', '辛': '金',
  '壬': '水', '癸': '水'
};
// 地支对应的五行
const DI_ZHI_WU_XING = {
  '子': '水', '丑': '土',
  '寅': '木', '卯': '木',
  '辰': '土', '巳': '火',
  '午': '火', '未': '土',
  '申': '金', '酉': '金',
  '戌': '土', '亥': '水'
};

// 五行相生关系
const WU_XING_SHENG = {
  '金': '水', '水': '木',
  '木': '火', '火': '土',
  '土': '金'
};

// 五行相克关系
const WU_XING_KE = {
  '金': '木', '木': '土',
  '土': '水', '水': '火',
  '火': '金'
};

// 五行喜用神对应的字义
const WU_XING_MEANINGS = {
  '金': ['坚强', '勇敢', '正直', '威严', '果断', '毅力', '决断', '义气', '忠诚'],
  '木': ['仁爱', '博爱', '善良', '和顺', '谦虚', '温和', '敦厚', '稳健', '成长'],
  '水': ['智慧', '聪明', '灵活', '机智', '清澈', '善变', '通达', '包容', '柔韧'],
  '火': ['热情', '活力', '光明', '温暖', '明亮', '激情', '爱心', '乐观', '开朗'],
  '土': ['诚实', '稳重', '踏实', '包容', '中正', '厚道', '忠厚', '宽容', '大度']
};

// 五行喜用神对应的字根
const WU_XING_RADICALS = {
  '金': ['金', '铁', '钢', '银', '铜', '钟', '锋', '镇', '铭', '锦', '钊', '钰', '铮', '铿', '锐', '锡', '锻', '镶', '鑫', '钗'],
  '木': ['木', '林', '森', '桂', '柏', '松', '梅', '桃', '杉', '树', '本', '杨', '栋', '楠', '榕', '樱', '橙', '枫', '棠', '椿'],
  '水': ['水', '江', '河', '湖', '海', '洋', '泉', '清', '润', '涵', '淼', '渊', '潮', '浩', '滨', '漾', '汐', '沐', '泓', '涛'],
  '火': ['火', '炎', '焱', '炫', '炳', '煜', '熙', '烨', '炜', '煊', '晖', '烁', '炬', '焕', '煌', '炽', '烈', '炅', '燃', '烯'],
  '土': ['土', '地', '坤', '垣', '坛', '坦', '培', '基', '埔', '城', '域', '境', '坪', '墩', '壤', '堂', '塬', '垚', '坷', '坎']
};

export interface BaziInfo {
  lunarDate: string;
  baziYear: string;
  baziMonth: string;
  baziDay: string;
  baziHour: string;
  wuxing: {
    year: string;
    month: string;
    day: string;
    hour: string;
  };
  analysis: {
    wuxingCount: Record<string, number>;
    lacking: string[];
    excess: string[];
    balanced: string[];
  };
  recommendations: {
    favorableElements: string[];
    favorableRadicals: string[];
    nameMeanings: string[];
  };
}

export function calculateBazi(birthDate: Date): BaziInfo {
  // 使用lunar-typescript库计算农历日期和八字
  const lunar = Lunar.fromDate(birthDate);
  
  // 获取八字
  const baziYear = lunar.getYearInGanZhi();
  const baziMonth = lunar.getMonthInGanZhi();
  const baziDay = lunar.getDayInGanZhi();
  const baziHour = lunar.getTimeInGanZhi();
  
  // 提取天干和地支
  const yearTG = baziYear.charAt(0);
  const yearDZ = baziYear.charAt(1);
  const monthTG = baziMonth.charAt(0);
  const monthDZ = baziMonth.charAt(1);
  const dayTG = baziDay.charAt(0);
  const dayDZ = baziDay.charAt(1);
  const hourTG = baziHour.charAt(0);
  const hourDZ = baziHour.charAt(1);
  
  // 计算五行
  const wuxing = {
    year: TIAN_GAN_WU_XING[yearTG],
    month: TIAN_GAN_WU_XING[monthTG],
    day: TIAN_GAN_WU_XING[dayTG],
    hour: TIAN_GAN_WU_XING[hourTG]
  };
  
  // 分析五行平衡
  const wuxingCount = {
    '金': 0, '木': 0, '水': 0, '火': 0, '土': 0
  };
  
  // 计算天干五行
  wuxingCount[TIAN_GAN_WU_XING[yearTG]]++;
  wuxingCount[TIAN_GAN_WU_XING[monthTG]]++;
  wuxingCount[TIAN_GAN_WU_XING[dayTG]]++;
  wuxingCount[TIAN_GAN_WU_XING[hourTG]]++;
  
  // 计算地支五行
  wuxingCount[DI_ZHI_WU_XING[yearDZ]]++;
  wuxingCount[DI_ZHI_WU_XING[monthDZ]]++;
  wuxingCount[DI_ZHI_WU_XING[dayDZ]]++;
  wuxingCount[DI_ZHI_WU_XING[hourDZ]]++;
  
  // 分析五行缺失和过剩
  const lacking = Object.keys(wuxingCount).filter(element => wuxingCount[element] <= 1);
  const excess = Object.keys(wuxingCount).filter(element => wuxingCount[element] >= 3);
  const balanced = Object.keys(wuxingCount).filter(element => wuxingCount[element] === 2);
  
  // 确定喜用神（缺什么补什么）
  const favorableElements = [...lacking];
  
  // 如果没有缺失的五行，则选择平衡的五行
  if (favorableElements.length === 0) {
    favorableElements.push(...balanced);
  }
  
  // 如果没有缺失和平衡的五行，则选择最少的五行
  if (favorableElements.length === 0) {
    const minCount = Math.min(...Object.values(wuxingCount));
    Object.keys(wuxingCount).forEach(element => {
      if (wuxingCount[element] === minCount) {
        favorableElements.push(element);
      }
    });
  }
  
  // 获取推荐的字根和字义
  const favorableRadicals = favorableElements.flatMap(element => WU_XING_RADICALS[element]);
  const nameMeanings = favorableElements.flatMap(element => WU_XING_MEANINGS[element]);
  
  return {
    lunarDate: `${lunar.getYearInChinese()}年${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`,
    baziYear,
    baziMonth,
    baziDay,
    baziHour,
    wuxing,
    analysis: {
      wuxingCount,
      lacking,
      excess,
      balanced
    },
    recommendations: {
      favorableElements,
      favorableRadicals,
      nameMeanings
    }
  };
}

// 根据八字和五行分析生成名字建议
export function generateNameSuggestions(baziInfo: BaziInfo, gender: 'male' | 'female'): string[] {
  // 根据性别选择适合的字
  const genderSpecificChars = gender === 'male' 
    ? ['伟', '强', '勇', '刚', '毅', '峰', '山', '力', '鸿', '博', '文', '志', '远', '昊', '天', '明', '辉', '宇', '浩', '瀚']
    : ['婷', '娜', '美', '丽', '雅', '静', '柔', '云', '慧', '巧', '雪', '莲', '芳', '蕾', '琳', '璐', '瑶', '颖', '嫣', '萱'];
  
  // 从喜用神中选择适合的字根
  const favorableRadicals = baziInfo.recommendations.favorableRadicals;
  
  // 生成名字建议
  const suggestions: string[] = [];
  
  // 单字名
  for (let i = 0; i < 3 && i < favorableRadicals.length; i++) {
    suggestions.push(favorableRadicals[i]);
  }
  
  // 双字名
  for (let i = 0; i < 7 && i < favorableRadicals.length; i++) {
    for (let j = 0; j < 3 && j < genderSpecificChars.length; j++) {
      suggestions.push(`${favorableRadicals[i]}${genderSpecificChars[j]}`);
    }
  }
  
  return suggestions.slice(0, 10); // 返回最多10个建议
}