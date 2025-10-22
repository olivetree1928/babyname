export interface NameStyle {
  id: string;
  title: string;
  description: string;
  characteristics: string;
  icon: string;
}

export interface GeneratedName {
  name: string;
  meaning: string;
  source?: string;
}

export const nameStyles: NameStyle[] = [
  {
    id: 'guoxue',
    title: '国学风',
    description: '引经据典，底蕴厚重',
    characteristics: '从诗词、典籍中取字，自带书卷气，传递传统文化内涵',
    icon: '📚',
  },
  {
    id: 'gudian',
    title: '古典风',
    description: '承袭古韵，雅致婉约',
    characteristics: '用字贴合传统美学，意境悠远，自带东方古典韵味',
    icon: '🏮',
  },
  {
    id: 'xiandai',
    title: '现代风',
    description: '简洁明快，个性鲜活',
    characteristics: '摆脱传统束缚，用字清新灵动，适配现代审美，辨识度高',
    icon: '✨',
  },
  {
    id: 'ziran',
    title: '自然风',
    description: '萃取自然，清新治愈',
    characteristics: '以自然景物（植物、星辰、山水）为灵感，自带生机与悠然感',
    icon: '🌿',
  },
  {
    id: 'yazhi',
    title: '雅致风',
    description: '温润内敛，气质脱俗',
    characteristics: '用字柔和温润，不张扬却显格调，传递优雅内敛的品格',
    icon: '🎋',
  },
  {
    id: 'jianyue',
    title: '简约风',
    description: '极简用字，好记易读',
    characteristics: '多为2字组合，用字通俗不生僻，简洁有力且寓意明确',
    icon: '⚪',
  },
];

export const nameDatabase: Record<string, GeneratedName[]> = {
  guoxue: [
    { name: '子墨', meaning: '君子如墨，品行高洁', source: '《汉书》' },
    { name: '知遥', meaning: '知天命而遥观世事', source: '《庄子》' },
    { name: '清晏', meaning: '清明安定，心境平和', source: '《三国志》' },
    { name: '思齐', meaning: '见贤思齐，追求卓越', source: '《论语》' },
    { name: '慕羽', meaning: '仰慕高远，志在青云', source: '《楚辞》' },
    { name: '言川', meaning: '言语如川流不息', source: '《诗经》' },
    { name: '诗礼', meaning: '诗礼传家，文化传承', source: '《礼记》' },
    { name: '博文', meaning: '博学多闻，厚积薄发', source: '《论语》' },
    { name: '明德', meaning: '明德惟馨，品行高尚', source: '《大学》' },
    { name: '子瑜', meaning: '如琼瑜之美，品性纯良', source: '《史记》' },
    { name: '修远', meaning: '修身齐家，志存高远', source: '《礼记》' },
    { name: '子骞', meaning: '如冉求之才，志向高远', source: '《论语》' },
    { name: '雅颂', meaning: '诗经雅颂，文化底蕴', source: '《诗经》' },
    { name: '弘毅', meaning: '心志弘大，性格坚毅', source: '《论语》' },
    { name: '子敬', meaning: '恭敬谨慎，为人处世', source: '《三国志》' },
    { name: '书仪', meaning: '书礼仪法，文化传承', source: '《礼记》' },
    { name: '诗礼', meaning: '诗书礼乐，文化素养', source: '《论语》' },
    { name: '子渊', meaning: '如渊博之士，学识渊深', source: '《论语》' },
    { name: '明志', meaning: '明理立志，志向远大', source: '《孟子》' },
    { name: '子书', meaning: '如书简之美，文采斐然', source: '《汉书》' },
    { name: '德馨', meaning: '德行馨香，品性高尚', source: '《大学》' },
    { name: '子玉', meaning: '如美玉般纯洁无瑕', source: '《诗经》' },
    { name: '文礼', meaning: '文质彬彬，礼仪周全', source: '《论语》' },
    { name: '子轩', meaning: '如轩昂之士，气宇轩昂', source: '《史记》' },
    { name: '诗韵', meaning: '诗词韵律，文化底蕴', source: '《诗经》' },
  ],
  gudian: [
    { name: '清欢', meaning: '清雅欢喜，内心宁静', source: '苏轼诗句' },
    { name: '疏影', meaning: '疏影横斜，暗香浮动', source: '林逋诗句' },
    { name: '砚书', meaning: '笔墨纸砚，书香门第', source: '文房意象' },
    { name: '素琴', meaning: '素手调琴，雅致脱俗', source: '古典乐器' },
    { name: '云舒', meaning: '云卷云舒，自在从容', source: '古代诗词' },
    { name: '月明', meaning: '月明如水，温润柔和', source: '古典意象' },
    { name: '诗雨', meaning: '诗情画意，如雨滋润', source: '古典意境' },
    { name: '墨香', meaning: '书墨飘香，文化气息', source: '文人雅士' },
    { name: '雅韵', meaning: '高雅韵律，气质非凡', source: '古典音律' },
    { name: '清扬', meaning: '清风扬帆，志向远大', source: '古典意境' },
    { name: '书兰', meaning: '书香兰馨，气质高雅', source: '古典花卉' },
    { name: '玉箫', meaning: '如玉之箫，声音清亮', source: '古典乐器' },
    { name: '诗棋', meaning: '诗情棋趣，才艺双馨', source: '文人雅趣' },
    { name: '雨竹', meaning: '雨润青竹，清雅挺拔', source: '古典植物' },
    { name: '风荷', meaning: '清风拂荷，亭亭净植', source: '古典意境' },
    { name: '梦兰', meaning: '如梦似幻，兰香袭人', source: '古典花卉' },
    { name: '听雨', meaning: '静听雨声，心境平和', source: '古典意境' },
    { name: '琴心', meaning: '琴音悠扬，心境澄澈', source: '古典乐器' },
    { name: '墨梅', meaning: '墨色梅花，高洁傲雪', source: '古典花卉' },
    { name: '云泽', meaning: '云水泽被，恩泽万物', source: '古典意象' },
    { name: '书雁', meaning: '书信如雁，传递情思', source: '古典意象' },
    { name: '清音', meaning: '清澈之音，悦耳动听', source: '古典音律' },
    { name: '雅竹', meaning: '雅致如竹，气节高尚', source: '古典植物' },
    { name: '诗画', meaning: '诗情画意，意境优美', source: '文人雅趣' },
    { name: '月华', meaning: '月光如华，清辉洒落', source: '古典意象' },
  ],
  xiandai: [
    { name: '星眠', meaning: '如星辰般宁静入眠', source: '现代创意' },
    { name: '苏郁', meaning: '苏醒的郁郁生机', source: '现代创意' },
    { name: '知夏', meaning: '知晓夏日的美好', source: '现代创意' },
    { name: '禾光', meaning: '禾苗在阳光下生长', source: '现代创意' },
    { name: '初音', meaning: '初生的美妙之音', source: '现代创意' },
    { name: '晨曦', meaning: '清晨第一缕阳光', source: '现代创意' },
    { name: '未来', meaning: '展望未来，充满希望', source: '现代理念' },
    { name: '思远', meaning: '思考远方，视野开阔', source: '现代创意' },
    { name: '乐天', meaning: '乐观向上，天性活泼', source: '现代气质' },
    { name: '智轩', meaning: '智慧开阔，视野宽广', source: '现代特质' },
    { name: '梦想', meaning: '追逐梦想，勇往直前', source: '现代理念' },
    { name: '阳光', meaning: '阳光明媚，积极向上', source: '现代意象' },
    { name: '希望', meaning: '充满希望，展望未来', source: '现代理念' },
    { name: '创新', meaning: '创新思维，开拓进取', source: '现代精神' },
    { name: '科技', meaning: '科学技术，引领未来', source: '现代领域' },
    { name: '念白', meaning: '心念如白云飘逸', source: '现代创意' },
    { name: '时光', meaning: '珍惜时光，活在当下', source: '现代理念' },
    { name: '悦心', meaning: '心中愉悦，乐观向上', source: '现代情感' },
    { name: '未来', meaning: '展望未来，充满希望', source: '现代理念' },
    { name: '思维', meaning: '思维活跃，创新不断', source: '现代特质' },
    { name: '科技', meaning: '拥抱科技，引领未来', source: '现代元素' },
    { name: '智慧', meaning: '智慧超群，聪明睿智', source: '现代品质' },
    { name: '创新', meaning: '勇于创新，开拓进取', source: '现代精神' },
    { name: '梦想', meaning: '追逐梦想，永不放弃', source: '现代理念' },
    { name: '自由', meaning: '向往自由，无拘无束', source: '现代价值' },
  ],
  ziran: [
    { name: '听松', meaning: '倾听松涛阵阵', source: '山林景象' },
    { name: '汀兰', meaning: '水边的兰花雅致', source: '水岸植物' },
    { name: '星禾', meaning: '星空下的田野', source: '星空与自然' },
    { name: '溪鸣', meaning: '溪水潺潺如歌', source: '山水意境' },
    { name: '林晚', meaning: '林间的晚风轻拂', source: '自然时光' },
    { name: '雨荷', meaning: '雨中的荷花清丽', source: '植物意象' },
    { name: '山泉', meaning: '山间清泉，纯净透明', source: '自然景观' },
    { name: '云松', meaning: '云雾缭绕的青松', source: '山林景象' },
    { name: '海蓝', meaning: '蔚蓝海洋，宽广深邃', source: '海洋景观' },
    { name: '风铃', meaning: '清风拂过的铃声', source: '自然声音' },
    { name: '雪松', meaning: '雪中青松，坚韧不拔', source: '冬季景观' },
    { name: '晨曦', meaning: '清晨的第一缕阳光', source: '自然光线' },
    { name: '星河', meaning: '璀璨星河，浩瀚无垠', source: '宇宙景观' },
    { name: '森林', meaning: '生机勃勃的森林', source: '自然生态' },
    { name: '花雨', meaning: '花瓣如雨般飘落', source: '自然现象' },
    { name: '云溪', meaning: '云雾缭绕的溪流', source: '山水景观' },
    { name: '山月', meaning: '山间的明月如水', source: '夜景意象' },
    { name: '林风', meaning: '林间的清风徐徐', source: '森林景象' },
    { name: '海星', meaning: '海边的星辰闪烁', source: '海洋景观' },
    { name: '雪花', meaning: '洁白雪花，纯净无暇', source: '冬季景象' },
  ],
  yazhi: [
    { name: '书昀', meaning: '书香与日光相伴', source: '文雅意象' },
    { name: '知微', meaning: '见微知著，洞察细腻', source: '智慧品质' },
    { name: '清和', meaning: '纯净和睦，温润如玉', source: '品格修养' },
    { name: '慕晴', meaning: '仰慕晴朗美好', source: '雅致情怀' },
    { name: '静宜', meaning: '安静适宜，恬淡自若', source: '内敛气质' },
    { name: '婉仪', meaning: '温婉有仪，举止优雅', source: '女性美德' },
    { name: '雅琴', meaning: '高雅如琴声悠扬', source: '文艺气质' },
    { name: '诗雅', meaning: '诗意优雅，气质非凡', source: '文学气息' },
    { name: '清韵', meaning: '清新韵律，温婉动人', source: '音乐意境' },
    { name: '雅萱', meaning: '雅致如萱草般美好', source: '花卉意象' },
    { name: '静璇', meaning: '内心平静，如璇玑运转', source: '天文意象' },
    { name: '雅宁', meaning: '雅致宁静，温柔恬淡', source: '性格特质' },
    { name: '婉清', meaning: '婉约清丽，气质脱俗', source: '女性气质' },
    { name: '雅菲', meaning: '雅致芬芳，如花绽放', source: '花卉意象' },
    { name: '静怡', meaning: '静谧怡人，令人舒适', source: '心境描述' },
    { name: '雅馨', meaning: '雅致馨香，气质高雅', source: '花卉意象' },
    { name: '静雅', meaning: '静谧雅致，温婉内敛', source: '性格特质' },
    { name: '雅诗', meaning: '雅致如诗，意境优美', source: '文学气息' },
    { name: '婉容', meaning: '婉约容貌，气质优雅', source: '女性气质' },
    { name: '雅音', meaning: '雅致音律，悦耳动听', source: '音乐意境' },
  ],
  jianyue: [
    { name: '一然', meaning: '一切顺其自然', source: '极简哲学' },
    { name: '亦安', meaning: '亦可安然自在', source: '简约平和' },
    { name: '禾安', meaning: '禾苗安康生长', source: '生机平安' },
    { name: '念一', meaning: '专注当下唯一', source: '简约专注' },
    { name: '言简', meaning: '言语简洁有力', source: '简约表达' },
    { name: '知一', meaning: '知晓一以贯之', source: '简约智慧' },
    { name: '简白', meaning: '简约纯白，返璞归真', source: '极简美学' },
    { name: '素心', meaning: '素净之心，简单纯粹', source: '简约心境' },
    { name: '明简', meaning: '明朗简约，清晰直接', source: '简约风格' },
    { name: '净一', meaning: '净化心灵，归于一处', source: '简约理念' },
    { name: '简悦', meaning: '简单愉悦，知足常乐', source: '简约生活' },
    { name: '朴实', meaning: '朴素实在，不尚浮华', source: '简约品质' },
    { name: '简和', meaning: '简单和谐，平衡自然', source: '简约哲学' },
    { name: '素言', meaning: '素雅言语，简洁有力', source: '简约表达' },
    { name: '简乐', meaning: '简单快乐，知足常乐', source: '简约生活' },
    { name: '一心', meaning: '一心一意，专注纯粹', source: '简约专注' },
    { name: '简意', meaning: '简单意境，返璞归真', source: '极简美学' },
    { name: '素简', meaning: '素雅简约，不尚浮华', source: '简约风格' },
    { name: '净心', meaning: '净化心灵，简单纯粹', source: '简约心境' },
    { name: '朴素', meaning: '朴素无华，返璞归真', source: '简约品质' },
  ],
};

// 单字名字库
// 五行名字库
export const wuxingNameDatabase: Record<string, GeneratedName[]> = {
  jin: [
    { name: '金鑫', meaning: '金光闪闪，财运亨通', source: '五行属性' },
    { name: '铭志', meaning: '铭记于心，志向远大', source: '五行属性' },
    { name: '钧天', meaning: '钧天广乐，才艺超群', source: '五行属性' },
    { name: '锦程', meaning: '前程似锦，未来可期', source: '五行属性' },
    { name: '钰彤', meaning: '如美玉般珍贵，彤彤生辉', source: '五行属性' },
    { name: '铭泽', meaning: '铭记恩泽，感恩之心', source: '五行属性' },
    { name: '鑫磊', meaning: '财源广进，磊落光明', source: '五行属性' },
    { name: '钰轩', meaning: '如玉般尊贵，气宇轩昂', source: '五行属性' },
    { name: '锐志', meaning: '锐意进取，志向远大', source: '五行属性' },
    { name: '铭辉', meaning: '铭记光辉，照耀未来', source: '五行属性' },
    { name: '金辉', meaning: '金光辉煌，前程似锦', source: '五行属性' },
    { name: '铭远', meaning: '铭记于心，志存高远', source: '五行属性' },
    { name: '钧乐', meaning: '钧天之乐，和谐美好', source: '五行属性' },
    { name: '锦辉', meaning: '锦绣辉煌，前程似锦', source: '五行属性' },
    { name: '钰琪', meaning: '如美玉般珍贵，琪花瑶草', source: '五行属性' },
    { name: '铭志', meaning: '铭记于心，志向远大', source: '五行属性' },
    { name: '鑫辉', meaning: '财源广进，光辉灿烂', source: '五行属性' },
    { name: '钰泽', meaning: '如玉般珍贵，恩泽万物', source: '五行属性' },
    { name: '锐进', meaning: '锐意进取，勇往直前', source: '五行属性' },
    { name: '铭盛', meaning: '铭记于心，兴盛发达', source: '五行属性' },
  ],
  mu: [
    { name: '林森', meaning: '如森林般茂盛旺盛', source: '五行属性' },
    { name: '楠木', meaning: '如楠木般坚韧挺拔', source: '五行属性' },
    { name: '桐舒', meaning: '如梧桐般舒展优雅', source: '五行属性' },
    { name: '杉杰', meaning: '如杉树般挺拔杰出', source: '五行属性' },
    { name: '榕泽', meaning: '如榕树般庇荫四方', source: '五行属性' },
    { name: '柏清', meaning: '如松柏般清雅高洁', source: '五行属性' },
    { name: '桦皓', meaning: '如白桦般洁白明亮', source: '五行属性' },
    { name: '棠溪', meaning: '如海棠般美丽多姿', source: '五行属性' },
    { name: '樾阳', meaning: '树荫下的阳光温暖', source: '五行属性' },
    { name: '枫华', meaning: '如枫叶般绚丽多彩', source: '五行属性' },
    { name: '林茂', meaning: '如森林般茂盛繁荣', source: '五行属性' },
    { name: '楠风', meaning: '如楠木般坚韧挺拔，清风徐来', source: '五行属性' },
    { name: '桐雨', meaning: '如梧桐般高雅，雨润万物', source: '五行属性' },
    { name: '杉林', meaning: '如杉树林般挺拔秀丽', source: '五行属性' },
    { name: '榕树', meaning: '如榕树般庇荫四方，根深叶茂', source: '五行属性' },
    { name: '柏青', meaning: '如松柏般青翠常青', source: '五行属性' },
    { name: '桦林', meaning: '如白桦林般纯洁高尚', source: '五行属性' },
    { name: '棠花', meaning: '如海棠花般美丽芬芳', source: '五行属性' },
    { name: '樾林', meaning: '树荫林间，清凉宜人', source: '五行属性' },
    { name: '枫叶', meaning: '如枫叶般绚丽多彩，秋色斑斓', source: '五行属性' },
  ],
  shui: [
    { name: '泽洋', meaning: '恩泽广布，如海洋般宽广', source: '五行属性' },
    { name: '润泽', meaning: '滋润万物，恩泽四方', source: '五行属性' },
    { name: '海川', meaning: '海纳百川，胸怀宽广', source: '五行属性' },
    { name: '清源', meaning: '源头清澈，本源纯净', source: '五行属性' },
    { name: '江涛', meaning: '如江河涛浪，气势磅礴', source: '五行属性' },
    { name: '涵容', meaning: '包涵容纳，胸怀宽广', source: '五行属性' },
    { name: '沛然', meaning: '活力沛然，生机勃勃', source: '五行属性' },
    { name: '潮汐', meaning: '如潮汐般有规律有节奏', source: '五行属性' },
    { name: '渊博', meaning: '学识渊博，智慧如海', source: '五行属性' },
    { name: '浩宇', meaning: '浩瀚宇宙，无限可能', source: '五行属性' },
    { name: '泽民', meaning: '恩泽百姓，造福民众', source: '五行属性' },
    { name: '润华', meaning: '滋润万物，光华夺目', source: '五行属性' },
    { name: '海洋', meaning: '如海洋般宽广深邃', source: '五行属性' },
    { name: '清澈', meaning: '清澈透明，纯净无暇', source: '五行属性' },
    { name: '江河', meaning: '如江河般奔流不息', source: '五行属性' },
    { name: '涵养', meaning: '涵养修身，品德高尚', source: '五行属性' },
    { name: '沛霖', meaning: '活力沛然，如甘霖般滋润', source: '五行属性' },
    { name: '潮流', meaning: '如潮流般引领时代', source: '五行属性' },
    { name: '渊深', meaning: '如深渊般深不可测', source: '五行属性' },
    { name: '浩瀚', meaning: '浩瀚无垠，广阔无边', source: '五行属性' },
  ],
  huo: [
    { name: '炎阳', meaning: '如烈日般光芒万丈', source: '五行属性' },
    { name: '煜辉', meaning: '光芒四射，辉煌灿烂', source: '五行属性' },
    { name: '焱华', meaning: '火焰绚丽，光华夺目', source: '五行属性' },
    { name: '熠彤', meaning: '光芒闪耀，红彤似火', source: '五行属性' },
    { name: '烨霖', meaning: '火光照耀，如雨滋润', source: '五行属性' },
    { name: '炫明', meaning: '炫目夺目，明亮耀眼', source: '五行属性' },
    { name: '烁辰', meaning: '光芒闪烁，如晨星般', source: '五行属性' },
    { name: '煊赫', meaning: '光明盛大，威名赫赫', source: '五行属性' },
    { name: '炎昊', meaning: '如火炎炎，如天昊昊', source: '五行属性' },
    { name: '耀阳', meaning: '光耀四方，如阳光般温暖', source: '五行属性' },
    { name: '炎帝', meaning: '如炎帝般威严尊贵', source: '五行属性' },
    { name: '煜光', meaning: '光芒四射，照耀四方', source: '五行属性' },
    { name: '焱炎', meaning: '火焰熊熊，热情似火', source: '五行属性' },
    { name: '熠星', meaning: '光芒闪耀，如星辰般璀璨', source: '五行属性' },
    { name: '烨阳', meaning: '火光照耀，如阳光般温暖', source: '五行属性' },
    { name: '炫彩', meaning: '炫目多彩，绚丽夺目', source: '五行属性' },
    { name: '烁金', meaning: '光芒闪烁，如黄金般璀璨', source: '五行属性' },
    { name: '煊阳', meaning: '光明盛大，如阳光般温暖', source: '五行属性' },
    { name: '炎盛', meaning: '如火炎炎，兴盛发达', source: '五行属性' },
    { name: '耀辉', meaning: '光耀夺目，辉煌灿烂', source: '五行属性' },
  ],
  tu: [
    { name: '土成', meaning: '厚土载物，成就万物', source: '五行属性' },
    { name: '坤厚', meaning: '地势坤厚，包容万物', source: '五行属性' },
    { name: '岩峰', meaning: '如岩石般坚固，如峰峦般高耸', source: '五行属性' },
    { name: '山岳', meaning: '如山岳般稳重高大', source: '五行属性' },
    { name: '峻熙', meaning: '高峻雄伟，光明喜悦', source: '五行属性' },
    { name: '壤泽', meaning: '沃壤良田，恩泽万物', source: '五行属性' },
    { name: '岭秀', meaning: '山岭秀丽，气质不凡', source: '五行属性' },
    { name: '崇高', meaning: '崇高伟大，品德高尚', source: '五行属性' },
    { name: '嵩山', meaning: '如嵩山般高大巍峨', source: '五行属性' },
    { name: '垚磊', meaning: '如土垒成，磊落光明', source: '五行属性' },
    { name: '土地', meaning: '厚土载物，大地滋养', source: '五行属性' },
    { name: '坤元', meaning: '地势坤厚，元气充沛', source: '五行属性' },
    { name: '岩石', meaning: '如岩石般坚固稳重', source: '五行属性' },
    { name: '山川', meaning: '如山川般壮丽雄伟', source: '五行属性' },
    { name: '峻峰', meaning: '高峻峰峦，气势磅礴', source: '五行属性' },
    { name: '壤土', meaning: '沃壤良土，生机勃勃', source: '五行属性' },
    { name: '岭峰', meaning: '山岭峰峦，巍峨壮观', source: '五行属性' },
    { name: '崇山', meaning: '崇山峻岭，气势恢宏', source: '五行属性' },
    { name: '嵩岳', meaning: '如嵩山岳峙，高大巍峨', source: '五行属性' },
    { name: '垚土', meaning: '如土垒成，厚重踏实', source: '五行属性' },
  ],
};

// 五行单字名字库
export const wuxingSingleCharNameDatabase: Record<string, GeneratedName[]> = {
  jin: [
    { name: '金', meaning: '金光闪闪，坚固耐久', source: '五行属性' },
    { name: '铭', meaning: '铭记于心，永不忘却', source: '五行属性' },
    { name: '钧', meaning: '钧天之乐，和谐平衡', source: '五行属性' },
    { name: '锦', meaning: '锦绣前程，美好未来', source: '五行属性' },
    { name: '钰', meaning: '如美玉般珍贵纯净', source: '五行属性' },
    { name: '铮', meaning: '铮铮铁骨，刚正不阿', source: '五行属性' },
    { name: '鑫', meaning: '财源广进，兴旺发达', source: '五行属性' },
    { name: '锐', meaning: '锐意进取，锋芒毕露', source: '五行属性' },
    { name: '钊', meaning: '如钢铁般坚强有力', source: '五行属性' },
    { name: '镇', meaning: '稳重如山，镇定自若', source: '五行属性' },
    { name: '钢', meaning: '如钢铁般坚强有力', source: '五行属性' },
    { name: '铁', meaning: '如铁般坚硬不屈', source: '五行属性' },
    { name: '铠', meaning: '如铠甲般保护自己', source: '五行属性' },
    { name: '钟', meaning: '如钟声般清亮悠扬', source: '五行属性' },
    { name: '铿', meaning: '铿锵有力，坚定不移', source: '五行属性' },
  ],
  mu: [
    { name: '林', meaning: '如森林般茂盛旺盛', source: '五行属性' },
    { name: '楠', meaning: '如楠木般坚韧挺拔', source: '五行属性' },
    { name: '桐', meaning: '如梧桐般高雅优美', source: '五行属性' },
    { name: '杉', meaning: '如杉树般挺拔秀丽', source: '五行属性' },
    { name: '榕', meaning: '如榕树般庇荫四方', source: '五行属性' },
    { name: '柏', meaning: '如松柏般坚韧长青', source: '五行属性' },
    { name: '桦', meaning: '如白桦般纯洁高尚', source: '五行属性' },
    { name: '棠', meaning: '如海棠般美丽芬芳', source: '五行属性' },
    { name: '樾', meaning: '树荫清凉，庇护万物', source: '五行属性' },
    { name: '枫', meaning: '如枫叶般绚丽多彩', source: '五行属性' },
    { name: '松', meaning: '如松树般挺拔坚韧', source: '五行属性' },
    { name: '竹', meaning: '如竹子般正直高洁', source: '五行属性' },
    { name: '梓', meaning: '如梓树般茁壮成长', source: '五行属性' },
    { name: '樱', meaning: '如樱花般美丽绽放', source: '五行属性' },
    { name: '栋', meaning: '如栋梁般支撑家族', source: '五行属性' },
  ],
  shui: [
    { name: '泽', meaning: '恩泽万物，滋润四方', source: '五行属性' },
    { name: '润', meaning: '滋润万物，恩泽无穷', source: '五行属性' },
    { name: '海', meaning: '海纳百川，胸怀宽广', source: '五行属性' },
    { name: '清', meaning: '清澈纯净，明朗澄澈', source: '五行属性' },
    { name: '江', meaning: '如江河般奔流不息', source: '五行属性' },
    { name: '涵', meaning: '包涵容纳，胸怀宽广', source: '五行属性' },
    { name: '沛', meaning: '活力沛然，生机勃勃', source: '五行属性' },
    { name: '潮', meaning: '如潮水般生生不息', source: '五行属性' },
    { name: '渊', meaning: '学识渊博，深不可测', source: '五行属性' },
    { name: '浩', meaning: '浩瀚广阔，无限可能', source: '五行属性' },
    { name: '洋', meaning: '如海洋般宽广深邃', source: '五行属性' },
    { name: '淼', meaning: '水波荡漾，生生不息', source: '五行属性' },
    { name: '澄', meaning: '澄清透明，纯净无暇', source: '五行属性' },
    { name: '湾', meaning: '如港湾般温暖安全', source: '五行属性' },
    { name: '滔', meaning: '如波涛般气势磅礴', source: '五行属性' },
  ],
  huo: [
    { name: '炎', meaning: '如烈日般光芒万丈', source: '五行属性' },
    { name: '煜', meaning: '光芒四射，照耀四方', source: '五行属性' },
    { name: '焱', meaning: '火焰熊熊，热情似火', source: '五行属性' },
    { name: '熠', meaning: '光芒闪耀，熠熠生辉', source: '五行属性' },
    { name: '烨', meaning: '火光照耀，光明灿烂', source: '五行属性' },
    { name: '炫', meaning: '炫目夺目，光彩照人', source: '五行属性' },
    { name: '烁', meaning: '光芒闪烁，明亮耀眼', source: '五行属性' },
    { name: '煊', meaning: '光明盛大，照耀四方', source: '五行属性' },
    { name: '炅', meaning: '阳光普照，温暖明亮', source: '五行属性' },
    { name: '耀', meaning: '光耀夺目，照耀四方', source: '五行属性' },
    { name: '炬', meaning: '如火炬般照亮前路', source: '五行属性' },
    { name: '煌', meaning: '光辉灿烂，辉煌夺目', source: '五行属性' },
    { name: '炽', meaning: '炽热火焰，热情如火', source: '五行属性' },
    { name: '晖', meaning: '阳光晖映，温暖明亮', source: '五行属性' },
    { name: '曜', meaning: '光芒四射，照耀四方', source: '五行属性' },
  ],
  tu: [
    { name: '土', meaning: '厚土载物，稳重踏实', source: '五行属性' },
    { name: '坤', meaning: '地势坤厚，包容万物', source: '五行属性' },
    { name: '岩', meaning: '如岩石般坚固稳重', source: '五行属性' },
    { name: '山', meaning: '如山岳般稳重高大', source: '五行属性' },
    { name: '峻', meaning: '高峻雄伟，气势磅礴', source: '五行属性' },
    { name: '壤', meaning: '沃壤良田，生机勃勃', source: '五行属性' },
    { name: '岭', meaning: '山岭巍峨，高耸入云', source: '五行属性' },
    { name: '崇', meaning: '崇高伟大，品德高尚', source: '五行属性' },
    { name: '嵩', meaning: '如嵩山般高大巍峨', source: '五行属性' },
    { name: '垚', meaning: '土石堆垒，稳固坚实', source: '五行属性' },
    { name: '岳', meaning: '如高岳般巍峨壮观', source: '五行属性' },
    { name: '峰', meaning: '如山峰般高耸入云', source: '五行属性' },
    { name: '磊', meaning: '磊落光明，坦荡正直', source: '五行属性' },
    { name: '砂', meaning: '如沙砾般细腻柔和', source: '五行属性' },
    { name: '坚', meaning: '坚固稳重，坚定不移', source: '五行属性' },
  ],
};

export const singleCharNameDatabase: Record<string, GeneratedName[]> = {
  guoxue: [
    { name: '墨', meaning: '如墨般品行高洁', source: '《汉书》' },
    { name: '遥', meaning: '遥观世事，胸怀宽广', source: '《庄子》' },
    { name: '晏', meaning: '安定平和的心境', source: '《三国志》' },
    { name: '齐', meaning: '见贤思齐，追求卓越', source: '《论语》' },
    { name: '羽', meaning: '如羽翼般轻盈飞翔', source: '《楚辞》' },
    { name: '川', meaning: '如川流不息，生生不息', source: '《诗经》' },
    { name: '文', meaning: '文质彬彬，君子之风', source: '《论语》' },
    { name: '德', meaning: '德行高尚，品格高洁', source: '《大学》' },
    { name: '礼', meaning: '礼仪廉耻，立身之本', source: '《礼记》' },
    { name: '智', meaning: '智慧聪颖，明辨是非', source: '《论语》' }
  ],
  gudian: [
    { name: '欢', meaning: '欢喜愉悦，内心宁静', source: '苏轼诗句' },
    { name: '影', meaning: '如影随形，相伴相随', source: '林逋诗句' },
    { name: '书', meaning: '书香墨韵，文化气息', source: '文房意象' },
    { name: '琴', meaning: '琴音悠扬，雅致脱俗', source: '古典乐器' },
    { name: '舒', meaning: '舒展从容，自在安然', source: '古代诗词' },
    { name: '明', meaning: '明亮通透，光明磊落', source: '古典意象' },
    { name: '雅', meaning: '雅致高洁，气质非凡', source: '古典意境' },
    { name: '韵', meaning: '韵律优美，温婉动人', source: '古典音律' },
    { name: '清', meaning: '清雅脱俗，心境澄明', source: '古典意境' },
    { name: '和', meaning: '和睦温润，性情温和', source: '古典品格' }
  ],
  xiandai: [
    { name: '星', meaning: '如星辰般璀璨夺目', source: '现代创意' },
    { name: '苏', meaning: '苏醒复苏，充满生机', source: '现代创意' },
    { name: '夏', meaning: '如夏日般热情活力', source: '现代创意' },
    { name: '光', meaning: '光明璀璨，照亮前路', source: '现代理念' },
    { name: '音', meaning: '美妙音符，悦耳动听', source: '现代创意' },
    { name: '白', meaning: '纯白无瑕，清新纯净', source: '现代创意' },
    { name: '晴', meaning: '晴空万里，阳光明媚', source: '现代意象' },
    { name: '蓝', meaning: '蓝天碧海，广阔无垠', source: '现代色彩' },
    { name: '新', meaning: '创新进取，崭新未来', source: '现代精神' },
    { name: '朗', meaning: '开朗明快，阳光积极', source: '现代气质' }
  ],
  ziran: [
    { name: '松', meaning: '如松树般挺拔坚韧', source: '山林景象' },
    { name: '兰', meaning: '如兰花般清雅脱俗', source: '水岸植物' },
    { name: '禾', meaning: '禾苗青青，生机勃勃', source: '田野景象' },
    { name: '鸣', meaning: '鸟鸣啾啾，自然和谐', source: '自然声音' },
    { name: '晚', meaning: '晚霞绚烂，温柔静谧', source: '自然时光' },
    { name: '荷', meaning: '荷花亭亭，出淤泥而不染', source: '植物意象' },
    { name: '山', meaning: '山峦巍峨，气势磅礴', source: '自然景观' },
    { name: '川', meaning: '江川奔流，生生不息', source: '自然水系' },
    { name: '林', meaning: '林木葱郁，生机盎然', source: '自然植被' },
    { name: '溪', meaning: '溪水潺潺，清澈见底', source: '山水意境' }
  ],
  yazhi: [
    { name: '昀', meaning: '如旭日东升，光芒万丈', source: '文雅意象' },
    { name: '微', meaning: '微妙细腻，洞察入微', source: '智慧品质' },
    { name: '和', meaning: '温和平静，心境安宁', source: '品格修养' },
    { name: '晴', meaning: '晴朗明媚，阳光温暖', source: '雅致情怀' },
    { name: '宜', meaning: '适宜大方，举止得体', source: '内敛气质' },
    { name: '仪', meaning: '仪态优雅，举止大方', source: '女性气质' },
    { name: '雅', meaning: '高雅脱俗，气质非凡', source: '文学气息' },
    { name: '婉', meaning: '婉约温柔，气质优雅', source: '女性美德' },
    { name: '清', meaning: '清新淡雅，心境澄明', source: '雅致品格' },
    { name: '淑', meaning: '温婉淑女，贤良淑德', source: '女性美德' }
  ],
  jianyue: [
    { name: '然', meaning: '自然本真，顺其自然', source: '极简哲学' },
    { name: '安', meaning: '安然自在，平和安宁', source: '简约平和' },
    { name: '禾', meaning: '禾苗青青，生机盎然', source: '生机平安' },
    { name: '一', meaning: '专一纯粹，返璞归真', source: '简约专注' },
    { name: '简', meaning: '简单纯粹，返璞归真', source: '简约表达' },
    { name: '知', meaning: '知行合一，明理笃行', source: '简约智慧' },
    { name: '明', meaning: '明朗清晰，简单直接', source: '简约风格' },
    { name: '亮', meaning: '明亮通透，简洁有力', source: '简约特质' },
    { name: '平', meaning: '平和安宁，简单生活', source: '简约生活' },
    { name: '真', meaning: '真实本我，不尚浮华', source: '简约品质' }
  ]
};

export function generateNamesForStyle(
  styleId: string,
  birthDateTime: Date,
  lastName: string = '',
  nameLength: number = 2,
  randomSeed: number = 0,
  gender: 'male' | 'female' = 'male'
): GeneratedName[] {
  const baseNames = nameDatabase[styleId] || [];
  const singleNames = singleCharNameDatabase[styleId] || [];

  // 使用随机种子或时间生成索引
  const seed = randomSeed || (birthDateTime.getHours() * 3600 + birthDateTime.getMinutes() * 60 + birthDateTime.getSeconds());
  
  // 格式化姓氏，确保非空
  const formattedLastName = lastName.trim() || '';

  // 根据名字长度生成不同的结果
  if (nameLength === 1) {
    // 生成单字名
    const timeIndex = seed % singleNames.length;
    
    // 根据性别筛选适合的字
    // 男性名字倾向于阳刚、坚强、稳重的字
    // 女性名字倾向于优雅、柔美、灵动的字
    const filteredNames = singleNames.filter(name => {
      const char = name.name;
      const meaning = name.meaning || '';
      
      if (gender === 'male') {
        // 男性名字特征
        return !(meaning.includes('柔') || meaning.includes('美') || meaning.includes('娇') || 
                meaning.includes('婉') || meaning.includes('嫣') || meaning.includes('娜') ||
                char.includes('娇') || char.includes('婉') || char.includes('媛') || 
                char.includes('嫣') || char.includes('婷') || char.includes('姿'));
      } else {
        // 女性名字特征
        return !(meaning.includes('刚') || meaning.includes('猛') || meaning.includes('壮') || 
                meaning.includes('威') || meaning.includes('武') || meaning.includes('霸') ||
                char.includes('刚') || char.includes('壮') || char.includes('武') || 
                char.includes('威') || char.includes('霸') || char.includes('强'));
      }
    });
    
    // 如果过滤后没有足够的名字，使用原始列表
    const namesToUse = filteredNames.length >= 3 ? filteredNames : singleNames;
    
    const selectedNames = [
      namesToUse[timeIndex % namesToUse.length],
      namesToUse[(timeIndex + 1) % namesToUse.length],
      namesToUse[(timeIndex + 2) % namesToUse.length],
    ].map(singleChar => ({
      name: formattedLastName + singleChar.name,
      meaning: singleChar.meaning || `${styleId === 'guoxue' ? '国学' : 
               styleId === 'gudian' ? '古典' : 
               styleId === 'xiandai' ? '现代' : 
               styleId === 'ziran' ? '自然' : 
               styleId === 'yazhi' ? '雅致' : '简约'}风格单字名，寓意美好`,
      source: singleChar.source || `${styleId}风格`,
      style: `${styleId === 'guoxue' ? '国学风' : 
              styleId === 'gudian' ? '古典风' : 
              styleId === 'xiandai' ? '现代风' : 
              styleId === 'ziran' ? '自然风' : 
              styleId === 'yazhi' ? '雅致风' : '简约风'}`
    }));
    
    return selectedNames;
  } else {
    // 生成双字名
    const timeIndex = seed % baseNames.length;
    
    // 根据性别筛选适合的名字
    const filteredNames = baseNames.filter(name => {
      const fullName = name.name;
      const meaning = name.meaning || '';
      
      if (gender === 'male') {
        // 男性名字特征
        return !(meaning.includes('柔') || meaning.includes('美') || meaning.includes('娇') || 
                meaning.includes('婉') || meaning.includes('嫣') || meaning.includes('娜') ||
                fullName.includes('娇') || fullName.includes('婉') || fullName.includes('媛') || 
                fullName.includes('嫣') || fullName.includes('婷') || fullName.includes('姿'));
      } else {
        // 女性名字特征
        return !(meaning.includes('刚') || meaning.includes('猛') || meaning.includes('壮') || 
                meaning.includes('威') || meaning.includes('武') || meaning.includes('霸') ||
                fullName.includes('刚') || fullName.includes('壮') || fullName.includes('武') || 
                fullName.includes('威') || fullName.includes('霸') || fullName.includes('强'));
      }
    });
    
    // 如果过滤后没有足够的名字，使用原始列表
    const namesToUse = filteredNames.length >= 3 ? filteredNames : baseNames;
    
    const selectedNames = [
      namesToUse[timeIndex % namesToUse.length],
      namesToUse[(timeIndex + 1) % namesToUse.length],
      namesToUse[(timeIndex + 2) % namesToUse.length],
    ].map(nameObj => ({
      ...nameObj,
      name: formattedLastName + nameObj.name  // 在名字前加上姓氏
    }));
    
    return selectedNames;
  }
}
