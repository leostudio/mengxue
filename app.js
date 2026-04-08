// 萌学字母 - 主逻辑

// 字母数据 — 每个字母对应 3-4 个常见单词
const ALPHABET_DATA = [
  { letter: 'A', lower: 'a', words: [
    { word: 'apple', chinese: '苹果', imgQuery: 'red apple', emoji: '🍎' },
    { word: 'ant', chinese: '蚂蚁', imgQuery: 'ant insect', emoji: '🐜' },
    { word: 'airplane', chinese: '飞机', imgQuery: 'airplane sky', emoji: '✈️' },
    { word: 'alligator', chinese: '短吻鳄', imgQuery: 'alligator', emoji: '🐊' },
    { word: 'apricot', chinese: '杏', imgQuery: 'apricot fruit', emoji: '🍑' },
    { word: 'arrow', chinese: '箭', imgQuery: 'arrow target', emoji: '🏹' },
  ]},
  { letter: 'B', lower: 'b', words: [
    { word: 'ball', chinese: '球', imgQuery: 'colorful ball toy', emoji: '⚽' },
    { word: 'banana', chinese: '香蕉', imgQuery: 'banana yellow', emoji: '🍌' },
    { word: 'bear', chinese: '熊', imgQuery: 'cute bear', emoji: '🐻' },
    { word: 'butterfly', chinese: '蝴蝶', imgQuery: 'butterfly wings', emoji: '🦋' },
    { word: 'bee', chinese: '蜜蜂', imgQuery: 'bee honey', emoji: '🐝' },
    { word: 'book', chinese: '书', imgQuery: 'book children', emoji: '📕' },
  ]},
  { letter: 'C', lower: 'c', words: [
    { word: 'cat', chinese: '猫', imgQuery: 'cute kitten', emoji: '🐱' },
    { word: 'cake', chinese: '蛋糕', imgQuery: 'birthday cake', emoji: '🎂' },
    { word: 'car', chinese: '汽车', imgQuery: 'toy car', emoji: '🚗' },
    { word: 'cookie', chinese: '饼干', imgQuery: 'cookie chocolate', emoji: '🍪' },
    { word: 'cow', chinese: '奶牛', imgQuery: 'cow farm', emoji: '🐮' },
    { word: 'cloud', chinese: '云', imgQuery: 'cloud sky', emoji: '☁️' },
  ]},
  { letter: 'D', lower: 'd', words: [
    { word: 'dog', chinese: '狗', imgQuery: 'cute puppy', emoji: '🐶' },
    { word: 'duck', chinese: '鸭子', imgQuery: 'yellow duck', emoji: '🦆' },
    { word: 'dolphin', chinese: '海豚', imgQuery: 'dolphin ocean', emoji: '🐬' },
    { word: 'dinosaur', chinese: '恐龙', imgQuery: 'dinosaur', emoji: '🦖' },
    { word: 'donut', chinese: '甜甜圈', imgQuery: 'donut sweet', emoji: '🍩' },
    { word: 'drum', chinese: '鼓', imgQuery: 'drum music', emoji: '🥁' },
  ]},
  { letter: 'E', lower: 'e', words: [
    { word: 'elephant', chinese: '大象', imgQuery: 'elephant', emoji: '🐘' },
    { word: 'egg', chinese: '鸡蛋', imgQuery: 'egg breakfast', emoji: '🥚' },
    { word: 'eagle', chinese: '鹰', imgQuery: 'eagle bird', emoji: '🦅' },
    { word: 'eye', chinese: '眼睛', imgQuery: 'eye closeup', emoji: '👁️' },
    { word: 'ear', chinese: '耳朵', imgQuery: 'ear', emoji: '👂' },
    { word: 'eggplant', chinese: '茄子', imgQuery: 'eggplant', emoji: '🍆' },
  ]},
  { letter: 'F', lower: 'f', words: [
    { word: 'fish', chinese: '鱼', imgQuery: 'colorful fish', emoji: '🐟' },
    { word: 'flower', chinese: '花', imgQuery: 'beautiful flower', emoji: '🌸' },
    { word: 'frog', chinese: '青蛙', imgQuery: 'green frog', emoji: '🐸' },
    { word: 'fox', chinese: '狐狸', imgQuery: 'fox animal', emoji: '🦊' },
    { word: 'fire', chinese: '火', imgQuery: 'fire flame', emoji: '🔥' },
    { word: 'foot', chinese: '脚', imgQuery: 'foot baby', emoji: '🦶' },
  ]},
  { letter: 'G', lower: 'g', words: [
    { word: 'grape', chinese: '葡萄', imgQuery: 'purple grape', emoji: '🍇' },
    { word: 'giraffe', chinese: '长颈鹿', imgQuery: 'giraffe', emoji: '🦒' },
    { word: 'guitar', chinese: '吉他', imgQuery: 'guitar', emoji: '🎸' },
    { word: 'goat', chinese: '山羊', imgQuery: 'goat farm', emoji: '🐐' },
    { word: 'grass', chinese: '草', imgQuery: 'green grass', emoji: '🌱' },
    { word: 'gift', chinese: '礼物', imgQuery: 'gift box', emoji: '🎁' },
  ]},
  { letter: 'H', lower: 'h', words: [
    { word: 'house', chinese: '房子', imgQuery: 'cute house', emoji: '🏠' },
    { word: 'horse', chinese: '马', imgQuery: 'horse field', emoji: '🐴' },
    { word: 'hat', chinese: '帽子', imgQuery: 'hat', emoji: '🎩' },
    { word: 'hen', chinese: '母鸡', imgQuery: 'hen chicken', emoji: '🐔' },
    { word: 'heart', chinese: '心', imgQuery: 'red heart', emoji: '❤️' },
    { word: 'hand', chinese: '手', imgQuery: 'hand', emoji: '✋' },
  ]},
  { letter: 'I', lower: 'i', words: [
    { word: 'ice cream', chinese: '冰淇淋', imgQuery: 'ice cream cone', emoji: '🍦' },
    { word: 'island', chinese: '岛屿', imgQuery: 'tropical island', emoji: '🏝️' },
    { word: 'igloo', chinese: '冰屋', imgQuery: 'igloo snow', emoji: '🏔️' },
    { word: 'ink', chinese: '墨水', imgQuery: 'ink bottle', emoji: '🖋️' },
    { word: 'iguana', chinese: '鬣蜥', imgQuery: 'iguana lizard', emoji: '🦎' },
    { word: 'insect', chinese: '昆虫', imgQuery: 'insect bug', emoji: '🐛' },
  ]},
  { letter: 'J', lower: 'j', words: [
    { word: 'juice', chinese: '果汁', imgQuery: 'orange juice', emoji: '🧃' },
    { word: 'jellyfish', chinese: '水母', imgQuery: 'jellyfish', emoji: '🪼' },
    { word: 'jungle', chinese: '丛林', imgQuery: 'jungle forest', emoji: '🌴' },
    { word: 'jam', chinese: '果酱', imgQuery: 'strawberry jam', emoji: '🍓' },
    { word: 'jacket', chinese: '夹克', imgQuery: 'jacket clothes', emoji: '🧥' },
    { word: 'jeep', chinese: '吉普车', imgQuery: 'jeep car', emoji: '🚙' },
  ]},
  { letter: 'K', lower: 'k', words: [
    { word: 'kite', chinese: '风筝', imgQuery: 'kite flying', emoji: '🪁' },
    { word: 'koala', chinese: '考拉', imgQuery: 'koala', emoji: '🐨' },
    { word: 'key', chinese: '钥匙', imgQuery: 'golden key', emoji: '🔑' },
    { word: 'kangaroo', chinese: '袋鼠', imgQuery: 'kangaroo', emoji: '🦘' },
    { word: 'king', chinese: '国王', imgQuery: 'king crown', emoji: '🤴' },
    { word: 'kiwi', chinese: '猕猴桃', imgQuery: 'kiwi fruit', emoji: '🥝' },
  ]},
  { letter: 'L', lower: 'l', words: [
    { word: 'lion', chinese: '狮子', imgQuery: 'lion', emoji: '🦁' },
    { word: 'lemon', chinese: '柠檬', imgQuery: 'lemon yellow', emoji: '🍋' },
    { word: 'ladybug', chinese: '瓢虫', imgQuery: 'ladybug', emoji: '🐞' },
    { word: 'leaf', chinese: '叶子', imgQuery: 'green leaf', emoji: '🍃' },
    { word: 'lamp', chinese: '台灯', imgQuery: 'lamp light', emoji: '💡' },
    { word: 'lollipop', chinese: '棒棒糖', imgQuery: 'lollipop candy', emoji: '🍭' },
  ]},
  { letter: 'M', lower: 'm', words: [
    { word: 'moon', chinese: '月亮', imgQuery: 'full moon', emoji: '🌙' },
    { word: 'monkey', chinese: '猴子', imgQuery: 'monkey', emoji: '🐵' },
    { word: 'mushroom', chinese: '蘑菇', imgQuery: 'mushroom', emoji: '🍄' },
    { word: 'milk', chinese: '牛奶', imgQuery: 'milk glass', emoji: '🥛' },
    { word: 'mouse', chinese: '老鼠', imgQuery: 'mouse', emoji: '🐭' },
    { word: 'mango', chinese: '芒果', imgQuery: 'mango fruit', emoji: '🥭' },
  ]},
  { letter: 'N', lower: 'n', words: [
    { word: 'nest', chinese: '鸟巢', imgQuery: 'bird nest', emoji: '🪹' },
    { word: 'nose', chinese: '鼻子', imgQuery: 'nose', emoji: '👃' },
    { word: 'nut', chinese: '坚果', imgQuery: 'walnut nut', emoji: '🥜' },
    { word: 'noodle', chinese: '面条', imgQuery: 'noodles', emoji: '🍜' },
    { word: 'newspaper', chinese: '报纸', imgQuery: 'newspaper', emoji: '📰' },
    { word: 'night', chinese: '夜晚', imgQuery: 'night sky', emoji: '🌃' },
  ]},
  { letter: 'O', lower: 'o', words: [
    { word: 'orange', chinese: '橙子', imgQuery: 'orange fruit', emoji: '🍊' },
    { word: 'owl', chinese: '猫头鹰', imgQuery: 'owl', emoji: '🦉' },
    { word: 'octopus', chinese: '章鱼', imgQuery: 'octopus', emoji: '🐙' },
    { word: 'ocean', chinese: '海洋', imgQuery: 'ocean wave', emoji: '🌊' },
    { word: 'onion', chinese: '洋葱', imgQuery: 'onion', emoji: '🧅' },
    { word: 'orange juice', chinese: '橙汁', imgQuery: 'orange juice', emoji: '🥤' },
  ]},
  { letter: 'P', lower: 'p', words: [
    { word: 'panda', chinese: '熊猫', imgQuery: 'panda bamboo', emoji: '🐼' },
    { word: 'penguin', chinese: '企鹅', imgQuery: 'penguin', emoji: '🐧' },
    { word: 'pizza', chinese: '披萨', imgQuery: 'pizza', emoji: '🍕' },
    { word: 'pig', chinese: '猪', imgQuery: 'pig farm', emoji: '🐷' },
    { word: 'peach', chinese: '桃子', imgQuery: 'peach fruit', emoji: '🍑' },
    { word: 'pencil', chinese: '铅笔', imgQuery: 'pencil', emoji: '✏️' },
  ]},
  { letter: 'Q', lower: 'q', words: [
    { word: 'queen', chinese: '女王', imgQuery: 'queen crown', emoji: '👸' },
    { word: 'quail', chinese: '鹌鹑', imgQuery: 'quail bird', emoji: '🐦' },
    { word: 'quilt', chinese: '被子', imgQuery: 'quilt blanket', emoji: '🛏️' },
    { word: 'question', chinese: '问题', imgQuery: 'question mark', emoji: '❓' },
    { word: 'quokka', chinese: '短尾矮袋鼠', imgQuery: 'quokka', emoji: '🐹' },
    { word: 'queue', chinese: '排队', imgQuery: 'queue line', emoji: '🚶' },
  ]},
  { letter: 'R', lower: 'r', words: [
    { word: 'rabbit', chinese: '兔子', imgQuery: 'rabbit bunny', emoji: '🐰' },
    { word: 'rainbow', chinese: '彩虹', imgQuery: 'rainbow', emoji: '🌈' },
    { word: 'rocket', chinese: '火箭', imgQuery: 'rocket space', emoji: '🚀' },
    { word: 'rose', chinese: '玫瑰', imgQuery: 'red rose', emoji: '🌹' },
    { word: 'rain', chinese: '雨', imgQuery: 'rain drops', emoji: '🌧️' },
    { word: 'rice', chinese: '米饭', imgQuery: 'rice bowl', emoji: '🍚' },
  ]},
  { letter: 'S', lower: 's', words: [
    { word: 'star', chinese: '星星', imgQuery: 'star sky', emoji: '⭐' },
    { word: 'sun', chinese: '太阳', imgQuery: 'sun', emoji: '☀️' },
    { word: 'snake', chinese: '蛇', imgQuery: 'snake', emoji: '🐍' },
    { word: 'strawberry', chinese: '草莓', imgQuery: 'strawberry', emoji: '🍓' },
    { word: 'snow', chinese: '雪', imgQuery: 'snow winter', emoji: '❄️' },
    { word: 'shoe', chinese: '鞋子', imgQuery: 'shoe', emoji: '👟' },
  ]},
  { letter: 'T', lower: 't', words: [
    { word: 'tree', chinese: '树', imgQuery: 'green tree', emoji: '🌳' },
    { word: 'tiger', chinese: '老虎', imgQuery: 'tiger', emoji: '🐯' },
    { word: 'turtle', chinese: '乌龟', imgQuery: 'turtle', emoji: '🐢' },
    { word: 'train', chinese: '火车', imgQuery: 'train', emoji: '🚂' },
    { word: 'tomato', chinese: '番茄', imgQuery: 'tomato', emoji: '🍅' },
    { word: 'tooth', chinese: '牙齿', imgQuery: 'tooth', emoji: '🦷' },
  ]},
  { letter: 'U', lower: 'u', words: [
    { word: 'umbrella', chinese: '雨伞', imgQuery: 'umbrella rain', emoji: '☂️' },
    { word: 'unicorn', chinese: '独角兽', imgQuery: 'unicorn', emoji: '🦄' },
    { word: 'ukulele', chinese: '尤克里里', imgQuery: 'ukulele', emoji: '🎵' },
    { word: 'uncle', chinese: '叔叔', imgQuery: 'uncle man', emoji: '👨' },
    { word: 'underwear', chinese: '内衣', imgQuery: 'underwear', emoji: '🩲' },
    { word: 'up', chinese: '向上', imgQuery: 'up arrow', emoji: '⬆️' },
  ]},
  { letter: 'V', lower: 'v', words: [
    { word: 'violin', chinese: '小提琴', imgQuery: 'violin', emoji: '🎻' },
    { word: 'volcano', chinese: '火山', imgQuery: 'volcano', emoji: '🌋' },
    { word: 'vase', chinese: '花瓶', imgQuery: 'vase flowers', emoji: '🏺' },
    { word: 'van', chinese: '面包车', imgQuery: 'van vehicle', emoji: '🚐' },
    { word: 'vegetable', chinese: '蔬菜', imgQuery: 'vegetables', emoji: '🥦' },
    { word: 'violet', chinese: '紫罗兰', imgQuery: 'violet flower', emoji: '🌷' },
  ]},
  { letter: 'W', lower: 'w', words: [
    { word: 'whale', chinese: '鲸鱼', imgQuery: 'whale ocean', emoji: '🐳' },
    { word: 'watermelon', chinese: '西瓜', imgQuery: 'watermelon', emoji: '🍉' },
    { word: 'wolf', chinese: '狼', imgQuery: 'wolf', emoji: '🐺' },
    { word: 'water', chinese: '水', imgQuery: 'water glass', emoji: '💧' },
    { word: 'window', chinese: '窗户', imgQuery: 'window', emoji: '🪟' },
    { word: 'watch', chinese: '手表', imgQuery: 'watch wrist', emoji: '⌚' },
  ]},
  { letter: 'X', lower: 'x', words: [
    { word: 'xylophone', chinese: '木琴', imgQuery: 'xylophone', emoji: '🎵' },
    { word: 'x-ray', chinese: 'X光', imgQuery: 'xray', emoji: '🩻' },
    { word: 'fox', chinese: '狐狸', imgQuery: 'fox', emoji: '🦊' },
    { word: 'box', chinese: '盒子', imgQuery: 'box', emoji: '📦' },
    { word: 'six', chinese: '六', imgQuery: 'number six', emoji: '6️⃣' },
    { word: 'mix', chinese: '混合', imgQuery: 'mix bowl', emoji: '🥣' },
  ]},
  { letter: 'Y', lower: 'y', words: [
    { word: 'yak', chinese: '牦牛', imgQuery: 'yak', emoji: '🐂' },
    { word: 'yacht', chinese: '游艇', imgQuery: 'yacht boat', emoji: '🛥️' },
    { word: 'yogurt', chinese: '酸奶', imgQuery: 'yogurt', emoji: '🥛' },
    { word: 'yellow', chinese: '黄色', imgQuery: 'yellow color', emoji: '💛' },
    { word: 'yo-yo', chinese: '溜溜球', imgQuery: 'yoyo toy', emoji: '🪀' },
    { word: 'yarn', chinese: '毛线', imgQuery: 'yarn ball', emoji: '🧶' },
  ]},
  { letter: 'Z', lower: 'z', words: [
    { word: 'zebra', chinese: '斑马', imgQuery: 'zebra', emoji: '🦓' },
    { word: 'zoo', chinese: '动物园', imgQuery: 'zoo', emoji: '🦁' },
    { word: 'zipper', chinese: '拉链', imgQuery: 'zipper', emoji: '🧥' },
    { word: 'zero', chinese: '零', imgQuery: 'number zero', emoji: '0️⃣' },
    { word: 'zigzag', chinese: '锯齿形', imgQuery: 'zigzag pattern', emoji: '⚡' },
    { word: 'zucchini', chinese: '西葫芦', imgQuery: 'zucchini', emoji: '🥒' },
  ]},
];


let currentLetter = null; // current ALPHABET_DATA item
let letterTraceAnimating = false;
let letterTraceDrawing = false;
let letterTraceLastX = 0;
let letterTraceLastY = 0;

// 视力表相关变量
let currentVisionDirection = null;

// 300 个最常用汉字数据（按使用频率排序）
const HANZI_LIST = [
  // === 初级 ⭐ (1-5画) ===
  { char: '一', pinyin: 'yī', level: 1, words: [
    { word: '一个', pinyin: 'yī gè', imgQuery: 'one,number', emoji: '1️⃣' },
    { word: '一起', pinyin: 'yī qǐ', imgQuery: 'together,friends,children', emoji: '🤝' }
  ]},
  { char: '二', pinyin: 'èr', level: 1, words: [
    { word: '二月', pinyin: 'èr yuè', imgQuery: 'february,spring', emoji: '🌸' },
    { word: '第二', pinyin: 'dì èr', imgQuery: 'second,medal', emoji: '🥈' }
  ]},
  { char: '三', pinyin: 'sān', level: 1, words: [
    { word: '三个', pinyin: 'sān gè', imgQuery: 'three,number', emoji: '3️⃣' },
    { word: '三月', pinyin: 'sān yuè', imgQuery: 'march,spring,flowers', emoji: '🌷' }
  ]},
  { char: '十', pinyin: 'shí', level: 1, words: [
    { word: '十个', pinyin: 'shí gè', imgQuery: 'ten,number', emoji: '🔟' },
    { word: '十月', pinyin: 'shí yuè', imgQuery: 'october,autumn', emoji: '🍂' }
  ]},
  { char: '人', pinyin: 'rén', level: 1, words: [
    { word: '人们', pinyin: 'rén men', imgQuery: 'people,crowd,happy', emoji: '👥' },
    { word: '大人', pinyin: 'dà ren', imgQuery: 'adult,parent', emoji: '🧑' }
  ]},
  { char: '大', pinyin: 'dà', level: 1, words: [
    { word: '大小', pinyin: 'dà xiǎo', imgQuery: 'big,small,compare', emoji: '📏' },
    { word: '大家', pinyin: 'dà jiā', imgQuery: 'everyone,group', emoji: '👨‍👩‍👧‍👦' }
  ]},
  { char: '小', pinyin: 'xiǎo', level: 1, words: [
    { word: '小鸟', pinyin: 'xiǎo niǎo', imgQuery: 'small,bird,cute', emoji: '🐦' },
    { word: '小猫', pinyin: 'xiǎo māo', imgQuery: 'kitten,cute,cat', emoji: '🐱' }
  ]},
  { char: '上', pinyin: 'shàng', level: 1, words: [
    { word: '上学', pinyin: 'shàng xué', imgQuery: 'school,children,study', emoji: '🏫' },
    { word: '上面', pinyin: 'shàng miàn', imgQuery: 'above,up,sky', emoji: '⬆️' }
  ]},
  { char: '下', pinyin: 'xià', level: 1, words: [
    { word: '下雨', pinyin: 'xià yǔ', imgQuery: 'rain,rainy,weather', emoji: '🌧️' },
    { word: '下面', pinyin: 'xià miàn', imgQuery: 'below,down', emoji: '⬇️' }
  ]},
  { char: '口', pinyin: 'kǒu', level: 1, words: [
    { word: '口水', pinyin: 'kǒu shuǐ', imgQuery: 'mouth,water,drink', emoji: '💧' },
    { word: '开口', pinyin: 'kāi kǒu', imgQuery: 'speak,talk,mouth', emoji: '🗣️' }
  ]},
  { char: '中', pinyin: 'zhōng', level: 1, words: [
    { word: '中国', pinyin: 'zhōng guó', imgQuery: 'china,chinese,flag', emoji: '🇨🇳' },
    { word: '中间', pinyin: 'zhōng jiān', imgQuery: 'middle,center', emoji: '⏺️' }
  ]},
  { char: '不', pinyin: 'bù', level: 1, words: [
    { word: '不好', pinyin: 'bù hǎo', imgQuery: 'no,wrong', emoji: '❌' },
    { word: '不要', pinyin: 'bú yào', imgQuery: 'stop,no', emoji: '🚫' }
  ]},
  { char: '了', pinyin: 'le', level: 1, words: [
    { word: '好了', pinyin: 'hǎo le', imgQuery: 'done,complete,ok', emoji: '✅' },
    { word: '来了', pinyin: 'lái le', imgQuery: 'coming,arrive', emoji: '🏃' }
  ]},
  { char: '天', pinyin: 'tiān', level: 1, words: [
    { word: '天空', pinyin: 'tiān kōng', imgQuery: 'sky,blue,clouds', emoji: '🌤️' },
    { word: '今天', pinyin: 'jīn tiān', imgQuery: 'today,calendar', emoji: '📅' }
  ]},
  { char: '日', pinyin: 'rì', level: 1, words: [
    { word: '日出', pinyin: 'rì chū', imgQuery: 'sunrise,morning,sun', emoji: '🌅' },
    { word: '生日', pinyin: 'shēng rì', imgQuery: 'birthday,cake,party', emoji: '🎂' }
  ]},
  { char: '月', pinyin: 'yuè', level: 1, words: [
    { word: '月亮', pinyin: 'yuè liàng', imgQuery: 'moon,night,sky', emoji: '🌙' },
    { word: '月饼', pinyin: 'yuè bǐng', imgQuery: 'mooncake,food', emoji: '🥮' }
  ]},
  { char: '水', pinyin: 'shuǐ', level: 1, words: [
    { word: '水果', pinyin: 'shuǐ guǒ', imgQuery: 'fruit,colorful,fresh', emoji: '🍎' },
    { word: '河水', pinyin: 'hé shuǐ', imgQuery: 'river,water,nature', emoji: '🏞️' },
    { word: '喝水', pinyin: 'hē shuǐ', imgQuery: 'drink,water,glass', emoji: '🥤' }
  ]},
  { char: '火', pinyin: 'huǒ', level: 1, words: [
    { word: '火车', pinyin: 'huǒ chē', imgQuery: 'train,railway', emoji: '🚂' },
    { word: '火山', pinyin: 'huǒ shān', imgQuery: 'volcano,mountain', emoji: '🌋' }
  ]},
  { char: '山', pinyin: 'shān', level: 1, words: [
    { word: '大山', pinyin: 'dà shān', imgQuery: 'mountain,landscape', emoji: '⛰️' },
    { word: '山水', pinyin: 'shān shuǐ', imgQuery: 'landscape,nature,scenic', emoji: '🏔️' }
  ]},
  { char: '木', pinyin: 'mù', level: 1, words: [
    { word: '树木', pinyin: 'shù mù', imgQuery: 'tree,forest,green', emoji: '🌳' },
    { word: '木头', pinyin: 'mù tou', imgQuery: 'wood,log', emoji: '🪵' }
  ]},
  { char: '土', pinyin: 'tǔ', level: 1, words: [
    { word: '土地', pinyin: 'tǔ dì', imgQuery: 'land,soil,earth', emoji: '🌍' },
    { word: '泥土', pinyin: 'ní tǔ', imgQuery: 'mud,dirt,soil', emoji: '🟤' }
  ]},
  { char: '五', pinyin: 'wǔ', level: 1, words: [
    { word: '五个', pinyin: 'wǔ gè', imgQuery: 'five,number,hand', emoji: '5️⃣' },
    { word: '五月', pinyin: 'wǔ yuè', imgQuery: 'may,spring', emoji: '🌺' }
  ]},
  { char: '四', pinyin: 'sì', level: 1, words: [
    { word: '四个', pinyin: 'sì gè', imgQuery: 'four,number', emoji: '4️⃣' },
    { word: '四方', pinyin: 'sì fāng', imgQuery: 'square,four,directions', emoji: '🔲' }
  ]},
  { char: '六', pinyin: 'liù', level: 1, words: [
    { word: '六个', pinyin: 'liù gè', imgQuery: 'six,number', emoji: '6️⃣' },
    { word: '六月', pinyin: 'liù yuè', imgQuery: 'june,summer', emoji: '☀️' }
  ]},
  { char: '七', pinyin: 'qī', level: 1, words: [
    { word: '七个', pinyin: 'qī gè', imgQuery: 'seven,number', emoji: '7️⃣' },
    { word: '七月', pinyin: 'qī yuè', imgQuery: 'july,summer', emoji: '🌻' }
  ]},
  { char: '八', pinyin: 'bā', level: 1, words: [
    { word: '八个', pinyin: 'bā gè', imgQuery: 'eight,number', emoji: '8️⃣' },
    { word: '八月', pinyin: 'bā yuè', imgQuery: 'august,summer', emoji: '🏖️' }
  ]},
  { char: '九', pinyin: 'jiǔ', level: 1, words: [
    { word: '九个', pinyin: 'jiǔ gè', imgQuery: 'nine,number', emoji: '9️⃣' },
    { word: '九月', pinyin: 'jiǔ yuè', imgQuery: 'september,autumn', emoji: '🍁' }
  ]},
  { char: '也', pinyin: 'yě', level: 1, words: [
    { word: '也是', pinyin: 'yě shì', imgQuery: 'also,same', emoji: '🔄' },
    { word: '也好', pinyin: 'yě hǎo', imgQuery: 'ok,fine', emoji: '👌' }
  ]},
  { char: '子', pinyin: 'zǐ', level: 1, words: [
    { word: '孩子', pinyin: 'hái zi', imgQuery: 'child,children,happy', emoji: '👧' },
    { word: '儿子', pinyin: 'ér zi', imgQuery: 'boy,son,child', emoji: '👦' }
  ]},
  { char: '女', pinyin: 'nǚ', level: 1, words: [
    { word: '女孩', pinyin: 'nǚ hái', imgQuery: 'girl,child,happy', emoji: '👧' },
    { word: '女人', pinyin: 'nǚ rén', imgQuery: 'woman,lady', emoji: '👩' }
  ]},
  { char: '手', pinyin: 'shǒu', level: 1, words: [
    { word: '小手', pinyin: 'xiǎo shǒu', imgQuery: 'hand,small,child', emoji: '🤚' },
    { word: '手指', pinyin: 'shǒu zhǐ', imgQuery: 'finger,pointing', emoji: '👆' }
  ]},
  { char: '门', pinyin: 'mén', level: 1, words: [
    { word: '开门', pinyin: 'kāi mén', imgQuery: 'door,open,entrance', emoji: '🚪' },
    { word: '大门', pinyin: 'dà mén', imgQuery: 'gate,entrance,big', emoji: '🏛️' }
  ]},
  { char: '王', pinyin: 'wáng', level: 1, words: [
    { word: '国王', pinyin: 'guó wáng', imgQuery: 'king,crown,royal', emoji: '👑' },
    { word: '王子', pinyin: 'wáng zǐ', imgQuery: 'prince,boy,castle', emoji: '🤴' }
  ]},
  { char: '白', pinyin: 'bái', level: 1, words: [
    { word: '白云', pinyin: 'bái yún', imgQuery: 'cloud,white,sky', emoji: '☁️' },
    { word: '白色', pinyin: 'bái sè', imgQuery: 'white,color,snow', emoji: '🤍' }
  ]},
  { char: '目', pinyin: 'mù', level: 1, words: [
    { word: '目光', pinyin: 'mù guāng', imgQuery: 'eyes,sight,look', emoji: '👀' },
    { word: '耳目', pinyin: 'ěr mù', imgQuery: 'ear,eye,senses', emoji: '👁️' }
  ]},
  { char: '田', pinyin: 'tián', level: 1, words: [
    { word: '田地', pinyin: 'tián dì', imgQuery: 'field,farm,agriculture', emoji: '🌾' },
    { word: '水田', pinyin: 'shuǐ tián', imgQuery: 'rice,paddy,field', emoji: '🌱' }
  ]},
  { char: '石', pinyin: 'shí', level: 1, words: [
    { word: '石头', pinyin: 'shí tou', imgQuery: 'stone,rock,nature', emoji: '🪨' },
    { word: '宝石', pinyin: 'bǎo shí', imgQuery: 'gem,jewel,diamond', emoji: '💎' }
  ]},
  { char: '头', pinyin: 'tóu', level: 1, words: [
    { word: '头发', pinyin: 'tóu fa', imgQuery: 'hair,head', emoji: '💇' },
    { word: '点头', pinyin: 'diǎn tóu', imgQuery: 'nod,agree,yes', emoji: '🙂' }
  ]},
  { char: '出', pinyin: 'chū', level: 1, words: [
    { word: '出去', pinyin: 'chū qù', imgQuery: 'go,out,door', emoji: '🚶' },
    { word: '日出', pinyin: 'rì chū', imgQuery: 'sunrise,morning', emoji: '🌅' }
  ]},
  { char: '生', pinyin: 'shēng', level: 1, words: [
    { word: '学生', pinyin: 'xué shēng', imgQuery: 'student,school,study', emoji: '👨‍🎓' },
    { word: '生日', pinyin: 'shēng rì', imgQuery: 'birthday,party,cake', emoji: '🎂' }
  ]},
  { char: '用', pinyin: 'yòng', level: 1, words: [
    { word: '使用', pinyin: 'shǐ yòng', imgQuery: 'use,tool,work', emoji: '🔧' },
    { word: '有用', pinyin: 'yǒu yòng', imgQuery: 'useful,helpful', emoji: '💡' }
  ]},
  { char: '正', pinyin: 'zhèng', level: 1, words: [
    { word: '正好', pinyin: 'zhèng hǎo', imgQuery: 'perfect,exact,right', emoji: '✅' },
    { word: '正在', pinyin: 'zhèng zài', imgQuery: 'doing,action,now', emoji: '⏳' }
  ]},
  { char: '可', pinyin: 'kě', level: 1, words: [
    { word: '可以', pinyin: 'kě yǐ', imgQuery: 'ok,yes,approve', emoji: '👍' },
    { word: '可爱', pinyin: 'kě ài', imgQuery: 'cute,adorable,baby', emoji: '🥰' }
  ]},
  { char: '左', pinyin: 'zuǒ', level: 1, words: [
    { word: '左右', pinyin: 'zuǒ yòu', imgQuery: 'left,right,direction', emoji: '↔️' },
    { word: '左手', pinyin: 'zuǒ shǒu', imgQuery: 'left,hand', emoji: '🤚' }
  ]},
  { char: '右', pinyin: 'yòu', level: 1, words: [
    { word: '右手', pinyin: 'yòu shǒu', imgQuery: 'right,hand', emoji: '✋' },
    { word: '左右', pinyin: 'zuǒ yòu', imgQuery: 'left,right', emoji: '↔️' }
  ]},
  { char: '电', pinyin: 'diàn', level: 1, words: [
    { word: '电话', pinyin: 'diàn huà', imgQuery: 'phone,telephone', emoji: '📞' },
    { word: '电视', pinyin: 'diàn shì', imgQuery: 'television,tv,screen', emoji: '📺' }
  ]},
  { char: '本', pinyin: 'běn', level: 1, words: [
    { word: '本子', pinyin: 'běn zi', imgQuery: 'notebook,book', emoji: '📓' },
    { word: '书本', pinyin: 'shū běn', imgQuery: 'book,reading', emoji: '📖' }
  ]},
  { char: '开', pinyin: 'kāi', level: 1, words: [
    { word: '开心', pinyin: 'kāi xīn', imgQuery: 'happy,smile,joy', emoji: '😊' },
    { word: '开门', pinyin: 'kāi mén', imgQuery: 'open,door', emoji: '🚪' }
  ]},
  { char: '长', pinyin: 'cháng', level: 1, words: [
    { word: '长大', pinyin: 'zhǎng dà', imgQuery: 'grow,up,child', emoji: '📈' },
    { word: '很长', pinyin: 'hěn cháng', imgQuery: 'long,length', emoji: '📏' }
  ]},
  { char: '方', pinyin: 'fāng', level: 1, words: [
    { word: '地方', pinyin: 'dì fāng', imgQuery: 'place,location,map', emoji: '📍' },
    { word: '方向', pinyin: 'fāng xiàng', imgQuery: 'direction,compass', emoji: '🧭' }
  ]},
  { char: '文', pinyin: 'wén', level: 1, words: [
    { word: '文字', pinyin: 'wén zì', imgQuery: 'writing,text,chinese', emoji: '✍️' },
    { word: '语文', pinyin: 'yǔ wén', imgQuery: 'chinese,language,book', emoji: '📚' }
  ]},
  { char: '心', pinyin: 'xīn', level: 1, words: [
    { word: '开心', pinyin: 'kāi xīn', imgQuery: 'happy,heart,smile', emoji: '❤️' },
    { word: '爱心', pinyin: 'ài xīn', imgQuery: 'love,heart,care', emoji: '💕' }
  ]},
  { char: '见', pinyin: 'jiàn', level: 1, words: [
    { word: '看见', pinyin: 'kàn jiàn', imgQuery: 'see,look,watch', emoji: '👀' },
    { word: '再见', pinyin: 'zài jiàn', imgQuery: 'goodbye,wave,bye', emoji: '👋' }
  ]},
  { char: '只', pinyin: 'zhī', level: 1, words: [
    { word: '一只', pinyin: 'yī zhī', imgQuery: 'one,animal,pet', emoji: '🐾' },
    { word: '只有', pinyin: 'zhǐ yǒu', imgQuery: 'only,single', emoji: '☝️' }
  ]},
  { char: '东', pinyin: 'dōng', level: 1, words: [
    { word: '东西', pinyin: 'dōng xi', imgQuery: 'things,stuff,items', emoji: '📦' },
    { word: '东方', pinyin: 'dōng fāng', imgQuery: 'east,sunrise,orient', emoji: '🌅' }
  ]},
  { char: '北', pinyin: 'běi', level: 1, words: [
    { word: '北方', pinyin: 'běi fāng', imgQuery: 'north,cold,winter', emoji: '❄️' },
    { word: '北京', pinyin: 'běi jīng', imgQuery: 'beijing,china,city', emoji: '🏙️' }
  ]},
  { char: '半', pinyin: 'bàn', level: 1, words: [
    { word: '一半', pinyin: 'yī bàn', imgQuery: 'half,divide', emoji: '➗' },
    { word: '半天', pinyin: 'bàn tiān', imgQuery: 'half,day,time', emoji: '⏰' }
  ]},
  { char: '叫', pinyin: 'jiào', level: 1, words: [
    { word: '叫声', pinyin: 'jiào shēng', imgQuery: 'call,shout,voice', emoji: '📢' },
    { word: '叫做', pinyin: 'jiào zuò', imgQuery: 'name,called', emoji: '🏷️' }
  ]},
  { char: '对', pinyin: 'duì', level: 1, words: [
    { word: '对不起', pinyin: 'duì bu qǐ', imgQuery: 'sorry,apologize', emoji: '🙏' },
    { word: '对了', pinyin: 'duì le', imgQuery: 'right,correct', emoji: '✅' }
  ]},
  { char: '耳', pinyin: 'ěr', level: 1, words: [
    { word: '耳朵', pinyin: 'ěr duo', imgQuery: 'ear,listen,hearing', emoji: '👂' },
    { word: '耳机', pinyin: 'ěr jī', imgQuery: 'headphone,earphone', emoji: '🎧' }
  ]},
  { char: '西', pinyin: 'xī', level: 1, words: [
    { word: '东西', pinyin: 'dōng xi', imgQuery: 'things,stuff', emoji: '📦' },
    { word: '西方', pinyin: 'xī fāng', imgQuery: 'west,sunset', emoji: '🌇' }
  ]},
  { char: '虫', pinyin: 'chóng', level: 1, words: [
    { word: '小虫', pinyin: 'xiǎo chóng', imgQuery: 'insect,bug,cute', emoji: '🐛' },
    { word: '虫子', pinyin: 'chóng zi', imgQuery: 'worm,caterpillar', emoji: '🐞' }
  ]},
  { char: '云', pinyin: 'yún', level: 1, words: [
    { word: '白云', pinyin: 'bái yún', imgQuery: 'cloud,sky,white', emoji: '☁️' },
    { word: '云朵', pinyin: 'yún duǒ', imgQuery: 'cloud,fluffy,sky', emoji: '🌤️' }
  ]},
  { char: '鸟', pinyin: 'niǎo', level: 1, words: [
    { word: '小鸟', pinyin: 'xiǎo niǎo', imgQuery: 'bird,small,cute', emoji: '🐦' },
    { word: '鸟儿', pinyin: 'niǎo er', imgQuery: 'bird,flying,sky', emoji: '🕊️' }
  ]},
  { char: '马', pinyin: 'mǎ', level: 1, words: [
    { word: '小马', pinyin: 'xiǎo mǎ', imgQuery: 'horse,pony,cute', emoji: '🐴' },
    { word: '马路', pinyin: 'mǎ lù', imgQuery: 'road,street', emoji: '🛤️' }
  ]},
  { char: '风', pinyin: 'fēng', level: 1, words: [
    { word: '大风', pinyin: 'dà fēng', imgQuery: 'wind,windy,blow', emoji: '💨' },
    { word: '风车', pinyin: 'fēng chē', imgQuery: 'windmill,pinwheel', emoji: '🌀' }
  ]},
  { char: '鱼', pinyin: 'yú', level: 1, words: [
    { word: '小鱼', pinyin: 'xiǎo yú', imgQuery: 'fish,small,water', emoji: '🐟' },
    { word: '金鱼', pinyin: 'jīn yú', imgQuery: 'goldfish,pet,fish', emoji: '🐠' }
  ]},
  // === 中级 ⭐⭐ (6-9画) ===
  { char: '在', pinyin: 'zài', level: 2, words: [
    { word: '在家', pinyin: 'zài jiā', imgQuery: 'home,house,family', emoji: '🏠' },
    { word: '现在', pinyin: 'xiàn zài', imgQuery: 'now,present,clock', emoji: '⏰' }
  ]},
  { char: '有', pinyin: 'yǒu', level: 2, words: [
    { word: '有人', pinyin: 'yǒu rén', imgQuery: 'someone,person', emoji: '🙋' },
    { word: '没有', pinyin: 'méi yǒu', imgQuery: 'nothing,empty', emoji: '🚫' }
  ]},
  { char: '来', pinyin: 'lái', level: 2, words: [
    { word: '过来', pinyin: 'guò lái', imgQuery: 'come,here,walk', emoji: '🏃' },
    { word: '回来', pinyin: 'huí lái', imgQuery: 'return,back,home', emoji: '🔙' }
  ]},
  { char: '年', pinyin: 'nián', level: 2, words: [
    { word: '新年', pinyin: 'xīn nián', imgQuery: 'new,year,celebration', emoji: '🎆' },
    { word: '去年', pinyin: 'qù nián', imgQuery: 'last,year,calendar', emoji: '📆' }
  ]},
  { char: '多', pinyin: 'duō', level: 2, words: [
    { word: '很多', pinyin: 'hěn duō', imgQuery: 'many,lots,abundance', emoji: '🔢' },
    { word: '多少', pinyin: 'duō shǎo', imgQuery: 'how,many,question', emoji: '❓' }
  ]},
  { char: '好', pinyin: 'hǎo', level: 2, words: [
    { word: '你好', pinyin: 'nǐ hǎo', imgQuery: 'hello,greeting,wave', emoji: '👋' },
    { word: '好吃', pinyin: 'hǎo chī', imgQuery: 'delicious,food,yummy', emoji: '😋' }
  ]},
  { char: '回', pinyin: 'huí', level: 2, words: [
    { word: '回家', pinyin: 'huí jiā', imgQuery: 'home,return,house', emoji: '🏠' },
    { word: '回来', pinyin: 'huí lái', imgQuery: 'come,back,return', emoji: '🔙' }
  ]},
  { char: '会', pinyin: 'huì', level: 2, words: [
    { word: '学会', pinyin: 'xué huì', imgQuery: 'learn,study,success', emoji: '📚' },
    { word: '不会', pinyin: 'bú huì', imgQuery: 'cannot,no,unable', emoji: '🤷' }
  ]},
  { char: '自', pinyin: 'zì', level: 2, words: [
    { word: '自己', pinyin: 'zì jǐ', imgQuery: 'self,myself,mirror', emoji: '🪞' },
    { word: '自然', pinyin: 'zì rán', imgQuery: 'nature,natural,green', emoji: '🌿' }
  ]},
  { char: '先', pinyin: 'xiān', level: 2, words: [
    { word: '先生', pinyin: 'xiān shēng', imgQuery: 'teacher,sir,mister', emoji: '👨‍🏫' },
    { word: '先走', pinyin: 'xiān zǒu', imgQuery: 'go,first,ahead', emoji: '🚶' }
  ]},
  { char: '过', pinyin: 'guò', level: 2, words: [
    { word: '过来', pinyin: 'guò lái', imgQuery: 'come,over,here', emoji: '👈' },
    { word: '过年', pinyin: 'guò nián', imgQuery: 'new,year,spring,festival', emoji: '🧧' }
  ]},
  { char: '走', pinyin: 'zǒu', level: 2, words: [
    { word: '走路', pinyin: 'zǒu lù', imgQuery: 'walk,road,path', emoji: '🚶' },
    { word: '走开', pinyin: 'zǒu kāi', imgQuery: 'go,away,leave', emoji: '👋' }
  ]},
  { char: '地', pinyin: 'dì', level: 2, words: [
    { word: '地上', pinyin: 'dì shàng', imgQuery: 'ground,floor,earth', emoji: '🌍' },
    { word: '地方', pinyin: 'dì fāng', imgQuery: 'place,location', emoji: '📍' }
  ]},
  { char: '吃', pinyin: 'chī', level: 2, words: [
    { word: '吃饭', pinyin: 'chī fàn', imgQuery: 'eat,food,meal,rice', emoji: '🍚' },
    { word: '好吃', pinyin: 'hǎo chī', imgQuery: 'delicious,tasty', emoji: '😋' }
  ]},
  { char: '花', pinyin: 'huā', level: 2, words: [
    { word: '花朵', pinyin: 'huā duǒ', imgQuery: 'flower,bloom,garden', emoji: '🌸' },
    { word: '花园', pinyin: 'huā yuán', imgQuery: 'garden,flowers,park', emoji: '🌷' }
  ]},
  { char: '红', pinyin: 'hóng', level: 2, words: [
    { word: '红色', pinyin: 'hóng sè', imgQuery: 'red,color,bright', emoji: '🔴' },
    { word: '红花', pinyin: 'hóng huā', imgQuery: 'red,flower,beautiful', emoji: '🌹' }
  ]},
  { char: '两', pinyin: 'liǎng', level: 2, words: [
    { word: '两个', pinyin: 'liǎng gè', imgQuery: 'two,pair,double', emoji: '✌️' },
    { word: '两边', pinyin: 'liǎng biān', imgQuery: 'both,sides', emoji: '↔️' }
  ]},
  { char: '你', pinyin: 'nǐ', level: 2, words: [
    { word: '你好', pinyin: 'nǐ hǎo', imgQuery: 'hello,wave,greeting', emoji: '👋' },
    { word: '你们', pinyin: 'nǐ men', imgQuery: 'you,people,group', emoji: '👥' }
  ]},
  { char: '我', pinyin: 'wǒ', level: 2, words: [
    { word: '我们', pinyin: 'wǒ men', imgQuery: 'we,us,team,group', emoji: '👫' },
    { word: '我的', pinyin: 'wǒ de', imgQuery: 'mine,my,self', emoji: '🙋' }
  ]},
  { char: '他', pinyin: 'tā', level: 2, words: [
    { word: '他们', pinyin: 'tā men', imgQuery: 'they,them,people', emoji: '👥' },
    { word: '他的', pinyin: 'tā de', imgQuery: 'his,he', emoji: '👦' }
  ]},
  { char: '她', pinyin: 'tā', level: 2, words: [
    { word: '她们', pinyin: 'tā men', imgQuery: 'they,girls,women', emoji: '👩‍👩‍👧' },
    { word: '她的', pinyin: 'tā de', imgQuery: 'her,she', emoji: '👧' }
  ]},
  { char: '问', pinyin: 'wèn', level: 2, words: [
    { word: '问题', pinyin: 'wèn tí', imgQuery: 'question,ask,think', emoji: '❓' },
    { word: '请问', pinyin: 'qǐng wèn', imgQuery: 'ask,polite,question', emoji: '🙋' }
  ]},
  { char: '听', pinyin: 'tīng', level: 2, words: [
    { word: '听话', pinyin: 'tīng huà', imgQuery: 'listen,obey,good', emoji: '👂' },
    { word: '好听', pinyin: 'hǎo tīng', imgQuery: 'beautiful,music,sound', emoji: '🎵' }
  ]},
  { char: '说', pinyin: 'shuō', level: 2, words: [
    { word: '说话', pinyin: 'shuō huà', imgQuery: 'speak,talk,conversation', emoji: '🗣️' },
    { word: '小说', pinyin: 'xiǎo shuō', imgQuery: 'novel,book,story', emoji: '📖' }
  ]},
  { char: '里', pinyin: 'lǐ', level: 2, words: [
    { word: '里面', pinyin: 'lǐ miàn', imgQuery: 'inside,interior', emoji: '📥' },
    { word: '家里', pinyin: 'jiā lǐ', imgQuery: 'home,inside,house', emoji: '🏠' }
  ]},
  { char: '足', pinyin: 'zú', level: 2, words: [
    { word: '足球', pinyin: 'zú qiú', imgQuery: 'football,soccer,sport', emoji: '⚽' },
    { word: '手足', pinyin: 'shǒu zú', imgQuery: 'hands,feet,siblings', emoji: '🤝' }
  ]},
  { char: '把', pinyin: 'bǎ', level: 2, words: [
    { word: '把握', pinyin: 'bǎ wò', imgQuery: 'grasp,hold,hand', emoji: '✊' },
    { word: '一把', pinyin: 'yī bǎ', imgQuery: 'handful,grab', emoji: '🤏' }
  ]},
  { char: '快', pinyin: 'kuài', level: 2, words: [
    { word: '快乐', pinyin: 'kuài lè', imgQuery: 'happy,joy,smile', emoji: '😊' },
    { word: '很快', pinyin: 'hěn kuài', imgQuery: 'fast,quick,speed', emoji: '⚡' }
  ]},
  { char: '朋', pinyin: 'péng', level: 2, words: [
    { word: '朋友', pinyin: 'péng yǒu', imgQuery: 'friend,friends,children', emoji: '👫' },
    { word: '小朋友', pinyin: 'xiǎo péng yǒu', imgQuery: 'children,kids,play', emoji: '🧒' }
  ]},
  { char: '明', pinyin: 'míng', level: 2, words: [
    { word: '明天', pinyin: 'míng tiān', imgQuery: 'tomorrow,future,sunrise', emoji: '🌅' },
    { word: '聪明', pinyin: 'cōng míng', imgQuery: 'smart,clever,brain', emoji: '🧠' }
  ]},
  { char: '雨', pinyin: 'yǔ', level: 2, words: [
    { word: '下雨', pinyin: 'xià yǔ', imgQuery: 'rain,rainy,umbrella', emoji: '🌧️' },
    { word: '雨伞', pinyin: 'yǔ sǎn', imgQuery: 'umbrella,rain', emoji: '☂️' }
  ]},
  { char: '学', pinyin: 'xué', level: 2, words: [
    { word: '学校', pinyin: 'xué xiào', imgQuery: 'school,education,building', emoji: '🏫' },
    { word: '学习', pinyin: 'xué xí', imgQuery: 'study,learn,book', emoji: '📚' }
  ]},
  { char: '果', pinyin: 'guǒ', level: 2, words: [
    { word: '水果', pinyin: 'shuǐ guǒ', imgQuery: 'fruit,apple,fresh', emoji: '🍎' },
    { word: '果汁', pinyin: 'guǒ zhī', imgQuery: 'juice,orange,drink', emoji: '🧃' }
  ]},
  { char: '国', pinyin: 'guó', level: 2, words: [
    { word: '中国', pinyin: 'zhōng guó', imgQuery: 'china,chinese,flag', emoji: '🇨🇳' },
    { word: '国家', pinyin: 'guó jiā', imgQuery: 'country,nation,flag', emoji: '🏳️' }
  ]},
  { char: '南', pinyin: 'nán', level: 2, words: [
    { word: '南方', pinyin: 'nán fāng', imgQuery: 'south,warm,tropical', emoji: '🌴' },
    { word: '南瓜', pinyin: 'nán guā', imgQuery: 'pumpkin,orange,autumn', emoji: '🎃' }
  ]},
  { char: '春', pinyin: 'chūn', level: 2, words: [
    { word: '春天', pinyin: 'chūn tiān', imgQuery: 'spring,flowers,bloom', emoji: '🌸' },
    { word: '春风', pinyin: 'chūn fēng', imgQuery: 'spring,breeze,wind', emoji: '🍃' }
  ]},
  { char: '秋', pinyin: 'qiū', level: 2, words: [
    { word: '秋天', pinyin: 'qiū tiān', imgQuery: 'autumn,fall,leaves', emoji: '🍂' },
    { word: '秋风', pinyin: 'qiū fēng', imgQuery: 'autumn,wind,cool', emoji: '🍁' }
  ]},
  { char: '星', pinyin: 'xīng', level: 2, words: [
    { word: '星星', pinyin: 'xīng xing', imgQuery: 'star,night,sky,twinkle', emoji: '⭐' },
    { word: '星期', pinyin: 'xīng qī', imgQuery: 'week,calendar,day', emoji: '📅' }
  ]},
  { char: '草', pinyin: 'cǎo', level: 2, words: [
    { word: '小草', pinyin: 'xiǎo cǎo', imgQuery: 'grass,green,lawn', emoji: '🌿' },
    { word: '草地', pinyin: 'cǎo dì', imgQuery: 'grassland,field,green', emoji: '🌱' }
  ]},
  { char: '亮', pinyin: 'liàng', level: 2, words: [
    { word: '月亮', pinyin: 'yuè liàng', imgQuery: 'moon,bright,night', emoji: '🌙' },
    { word: '明亮', pinyin: 'míng liàng', imgQuery: 'bright,light,shine', emoji: '💡' }
  ]},
  { char: '金', pinyin: 'jīn', level: 2, words: [
    { word: '金色', pinyin: 'jīn sè', imgQuery: 'gold,golden,shiny', emoji: '🌟' },
    { word: '金鱼', pinyin: 'jīn yú', imgQuery: 'goldfish,fish,pet', emoji: '🐠' }
  ]},
  { char: '林', pinyin: 'lín', level: 2, words: [
    { word: '树林', pinyin: 'shù lín', imgQuery: 'forest,trees,woods', emoji: '🌲' },
    { word: '森林', pinyin: 'sēn lín', imgQuery: 'forest,jungle,nature', emoji: '🌳' }
  ]},
  { char: '河', pinyin: 'hé', level: 2, words: [
    { word: '河水', pinyin: 'hé shuǐ', imgQuery: 'river,water,stream', emoji: '🏞️' },
    { word: '小河', pinyin: 'xiǎo hé', imgQuery: 'stream,creek,small', emoji: '💧' }
  ]},
  { char: '话', pinyin: 'huà', level: 2, words: [
    { word: '说话', pinyin: 'shuō huà', imgQuery: 'talk,speak,chat', emoji: '💬' },
    { word: '电话', pinyin: 'diàn huà', imgQuery: 'phone,call', emoji: '📞' }
  ]},
  { char: '画', pinyin: 'huà', level: 2, words: [
    { word: '画画', pinyin: 'huà huà', imgQuery: 'draw,paint,art', emoji: '🎨' },
    { word: '画家', pinyin: 'huà jiā', imgQuery: 'artist,painter', emoji: '👨‍🎨' }
  ]},
  { char: '飞', pinyin: 'fēi', level: 2, words: [
    { word: '飞机', pinyin: 'fēi jī', imgQuery: 'airplane,plane,fly', emoji: '✈️' },
    { word: '飞鸟', pinyin: 'fēi niǎo', imgQuery: 'bird,flying,sky', emoji: '🦅' }
  ]},
  { char: '色', pinyin: 'sè', level: 2, words: [
    { word: '颜色', pinyin: 'yán sè', imgQuery: 'color,rainbow,bright', emoji: '🌈' },
    { word: '红色', pinyin: 'hóng sè', imgQuery: 'red,color', emoji: '🔴' }
  ]},
  { char: '青', pinyin: 'qīng', level: 2, words: [
    { word: '青草', pinyin: 'qīng cǎo', imgQuery: 'green,grass,nature', emoji: '🌿' },
    { word: '青蛙', pinyin: 'qīng wā', imgQuery: 'frog,green,cute', emoji: '🐸' }
  ]},
  { char: '书', pinyin: 'shū', level: 1, words: [
    { word: '书本', pinyin: 'shū běn', imgQuery: 'book,reading,library', emoji: '📚' },
    { word: '看书', pinyin: 'kàn shū', imgQuery: 'read,book,study', emoji: '📖' }
  ]},
  { char: '到', pinyin: 'dào', level: 2, words: [
    { word: '到了', pinyin: 'dào le', imgQuery: 'arrive,reach,here', emoji: '📍' },
    { word: '看到', pinyin: 'kàn dào', imgQuery: 'see,notice,find', emoji: '👁️' }
  ]},
  { char: '动', pinyin: 'dòng', level: 2, words: [
    { word: '动物', pinyin: 'dòng wù', imgQuery: 'animal,zoo,cute', emoji: '🦁' },
    { word: '运动', pinyin: 'yùn dòng', imgQuery: 'sport,exercise,play', emoji: '⚽' }
  ]},
  { char: '要', pinyin: 'yào', level: 2, words: [
    { word: '要去', pinyin: 'yào qù', imgQuery: 'go,want,travel', emoji: '🏃' },
    { word: '不要', pinyin: 'bú yào', imgQuery: 'no,stop,don\'t', emoji: '🚫' }
  ]},
  { char: '没', pinyin: 'méi', level: 2, words: [
    { word: '没有', pinyin: 'méi yǒu', imgQuery: 'nothing,empty,zero', emoji: '0️⃣' },
    { word: '没事', pinyin: 'méi shì', imgQuery: 'ok,fine,alright', emoji: '👌' }
  ]},
  { char: '看', pinyin: 'kàn', level: 2, words: [
    { word: '看书', pinyin: 'kàn shū', imgQuery: 'read,book,study', emoji: '📖' },
    { word: '看见', pinyin: 'kàn jiàn', imgQuery: 'see,look,watch', emoji: '👀' }
  ]},
  { char: '很', pinyin: 'hěn', level: 2, words: [
    { word: '很好', pinyin: 'hěn hǎo', imgQuery: 'very,good,great', emoji: '👍' },
    { word: '很多', pinyin: 'hěn duō', imgQuery: 'many,lots,much', emoji: '🔢' }
  ]},
  { char: '这', pinyin: 'zhè', level: 2, words: [
    { word: '这里', pinyin: 'zhè lǐ', imgQuery: 'here,this,place', emoji: '📍' },
    { word: '这个', pinyin: 'zhè gè', imgQuery: 'this,one,point', emoji: '👉' }
  ]},
  { char: '那', pinyin: 'nà', level: 2, words: [
    { word: '那里', pinyin: 'nà lǐ', imgQuery: 'there,that,place', emoji: '👈' },
    { word: '那个', pinyin: 'nà gè', imgQuery: 'that,one', emoji: '👆' }
  ]},
  { char: '时', pinyin: 'shí', level: 2, words: [
    { word: '时间', pinyin: 'shí jiān', imgQuery: 'time,clock,watch', emoji: '⏰' },
    { word: '小时', pinyin: 'xiǎo shí', imgQuery: 'hour,time', emoji: '🕐' }
  ]},
  { char: '后', pinyin: 'hòu', level: 2, words: [
    { word: '后面', pinyin: 'hòu miàn', imgQuery: 'behind,back', emoji: '🔙' },
    { word: '以后', pinyin: 'yǐ hòu', imgQuery: 'future,later,after', emoji: '⏩' }
  ]},
  { char: '作', pinyin: 'zuò', level: 2, words: [
    { word: '作业', pinyin: 'zuò yè', imgQuery: 'homework,study,writing', emoji: '📝' },
    { word: '工作', pinyin: 'gōng zuò', imgQuery: 'work,job,office', emoji: '💼' }
  ]},
  { char: '点', pinyin: 'diǎn', level: 2, words: [
    { word: '一点', pinyin: 'yī diǎn', imgQuery: 'little,small,bit', emoji: '🤏' },
    { word: '点头', pinyin: 'diǎn tóu', imgQuery: 'nod,agree', emoji: '🙂' }
  ]},
  { char: '笑', pinyin: 'xiào', level: 2, words: [
    { word: '笑脸', pinyin: 'xiào liǎn', imgQuery: 'smile,face,happy', emoji: '😊' },
    { word: '大笑', pinyin: 'dà xiào', imgQuery: 'laugh,funny,happy', emoji: '😂' }
  ]},
  { char: '高', pinyin: 'gāo', level: 2, words: [
    { word: '高兴', pinyin: 'gāo xìng', imgQuery: 'happy,glad,joy', emoji: '😃' },
    { word: '很高', pinyin: 'hěn gāo', imgQuery: 'tall,high,height', emoji: '📏' }
  ]},
  { char: '家', pinyin: 'jiā', level: 2, words: [
    { word: '回家', pinyin: 'huí jiā', imgQuery: 'home,house,family', emoji: '🏠' },
    { word: '大家', pinyin: 'dà jiā', imgQuery: 'everyone,group', emoji: '👨‍👩‍👧‍👦' }
  ]},
  { char: '爱', pinyin: 'ài', level: 2, words: [
    { word: '爱心', pinyin: 'ài xīn', imgQuery: 'love,heart,care', emoji: '❤️' },
    { word: '可爱', pinyin: 'kě ài', imgQuery: 'cute,adorable,lovely', emoji: '🥰' }
  ]},
  { char: '是', pinyin: 'shì', level: 2, words: [
    { word: '是的', pinyin: 'shì de', imgQuery: 'yes,correct,right', emoji: '✅' },
    { word: '不是', pinyin: 'bú shì', imgQuery: 'no,wrong,incorrect', emoji: '❌' }
  ]},
  { char: '美', pinyin: 'měi', level: 2, words: [
    { word: '美丽', pinyin: 'měi lì', imgQuery: 'beautiful,pretty,flower', emoji: '🌺' },
    { word: '美好', pinyin: 'měi hǎo', imgQuery: 'wonderful,beautiful', emoji: '✨' }
  ]},
  { char: '前', pinyin: 'qián', level: 2, words: [
    { word: '前面', pinyin: 'qián miàn', imgQuery: 'front,ahead,forward', emoji: '⏩' },
    { word: '以前', pinyin: 'yǐ qián', imgQuery: 'before,past,history', emoji: '⏪' }
  ]},
  { char: '面', pinyin: 'miàn', level: 2, words: [
    { word: '面条', pinyin: 'miàn tiáo', imgQuery: 'noodle,food,bowl', emoji: '🍜' },
    { word: '前面', pinyin: 'qián miàn', imgQuery: 'front,ahead', emoji: '⏩' }
  ]},
  { char: '气', pinyin: 'qì', level: 1, words: [
    { word: '天气', pinyin: 'tiān qì', imgQuery: 'weather,sun,cloud', emoji: '🌤️' },
    { word: '生气', pinyin: 'shēng qì', imgQuery: 'angry,mad,upset', emoji: '😠' }
  ]},
  { char: '的', pinyin: 'de', level: 2, words: [
    { word: '我的', pinyin: 'wǒ de', imgQuery: 'mine,my,self', emoji: '🙋' },
    { word: '好的', pinyin: 'hǎo de', imgQuery: 'ok,yes,agree', emoji: '👍' }
  ]},
  { char: '和', pinyin: 'hé', level: 2, words: [
    { word: '和平', pinyin: 'hé píng', imgQuery: 'peace,dove,harmony', emoji: '🕊️' },
    { word: '你和我', pinyin: 'nǐ hé wǒ', imgQuery: 'you,me,together', emoji: '🤝' }
  ]},
  { char: '跑', pinyin: 'pǎo', level: 2, words: [
    { word: '跑步', pinyin: 'pǎo bù', imgQuery: 'run,jogging,exercise', emoji: '🏃' },
    { word: '快跑', pinyin: 'kuài pǎo', imgQuery: 'run,fast,speed', emoji: '💨' }
  ]},
  { char: '雪', pinyin: 'xuě', level: 2, words: [
    { word: '雪花', pinyin: 'xuě huā', imgQuery: 'snowflake,snow,winter', emoji: '❄️' },
    { word: '下雪', pinyin: 'xià xuě', imgQuery: 'snow,winter,cold', emoji: '🌨️' }
  ]},
  { char: '朵', pinyin: 'duǒ', level: 2, words: [
    { word: '花朵', pinyin: 'huā duǒ', imgQuery: 'flower,blossom,garden', emoji: '🌺' },
    { word: '云朵', pinyin: 'yún duǒ', imgQuery: 'cloud,fluffy,sky', emoji: '☁️' }
  ]},
  { char: '树', pinyin: 'shù', level: 2, words: [
    { word: '大树', pinyin: 'dà shù', imgQuery: 'tree,big,nature', emoji: '🌳' },
    { word: '树叶', pinyin: 'shù yè', imgQuery: 'leaf,leaves,tree', emoji: '🍃' }
  ]},
  { char: '蓝', pinyin: 'lán', level: 2, words: [
    { word: '蓝天', pinyin: 'lán tiān', imgQuery: 'blue,sky,clear', emoji: '🔵' },
    { word: '蓝色', pinyin: 'lán sè', imgQuery: 'blue,color,ocean', emoji: '💙' }
  ]},
  { char: '绿', pinyin: 'lǜ', level: 2, words: [
    { word: '绿色', pinyin: 'lǜ sè', imgQuery: 'green,color,nature', emoji: '💚' },
    { word: '绿叶', pinyin: 'lǜ yè', imgQuery: 'green,leaf,plant', emoji: '🌿' }
  ]},
  { char: '黄', pinyin: 'huáng', level: 2, words: [
    { word: '黄色', pinyin: 'huáng sè', imgQuery: 'yellow,color,bright', emoji: '💛' },
    { word: '黄花', pinyin: 'huáng huā', imgQuery: 'yellow,flower,sunflower', emoji: '🌻' }
  ]},
  { char: '黑', pinyin: 'hēi', level: 2, words: [
    { word: '黑色', pinyin: 'hēi sè', imgQuery: 'black,color,dark', emoji: '🖤' },
    { word: '天黑', pinyin: 'tiān hēi', imgQuery: 'dark,night,evening', emoji: '🌃' }
  ]},
  { char: '亲', pinyin: 'qīn', level: 2, words: [
    { word: '亲人', pinyin: 'qīn rén', imgQuery: 'family,relative,love', emoji: '👪' },
    { word: '母亲', pinyin: 'mǔ qīn', imgQuery: 'mother,mom,love', emoji: '👩' }
  ]},
  { char: '妈', pinyin: 'mā', level: 2, words: [
    { word: '妈妈', pinyin: 'mā ma', imgQuery: 'mother,mom,love', emoji: '👩' },
    { word: '大妈', pinyin: 'dà mā', imgQuery: 'aunt,lady,woman', emoji: '🧓' }
  ]},
  { char: '爸', pinyin: 'bà', level: 2, words: [
    { word: '爸爸', pinyin: 'bà ba', imgQuery: 'father,dad,family', emoji: '👨' },
    { word: '爸妈', pinyin: 'bà mā', imgQuery: 'parents,family', emoji: '👨‍👩‍👧' }
  ]},
  // === 高级 ⭐⭐⭐ (10+画) ===
  { char: '就', pinyin: 'jiù', level: 3, words: [
    { word: '就是', pinyin: 'jiù shì', imgQuery: 'exactly,right,yes', emoji: '✅' },
    { word: '就要', pinyin: 'jiù yào', imgQuery: 'about,to,soon', emoji: '⏳' }
  ]},
  { char: '都', pinyin: 'dōu', level: 3, words: [
    { word: '都是', pinyin: 'dōu shì', imgQuery: 'all,everyone,every', emoji: '🌐' },
    { word: '都有', pinyin: 'dōu yǒu', imgQuery: 'all,have,everyone', emoji: '✨' }
  ]},
  { char: '能', pinyin: 'néng', level: 3, words: [
    { word: '能力', pinyin: 'néng lì', imgQuery: 'ability,power,strong', emoji: '💪' },
    { word: '不能', pinyin: 'bù néng', imgQuery: 'cannot,unable,no', emoji: '🚫' }
  ]},
  { char: '做', pinyin: 'zuò', level: 3, words: [
    { word: '做事', pinyin: 'zuò shì', imgQuery: 'work,do,action', emoji: '⚡' },
    { word: '做梦', pinyin: 'zuò mèng', imgQuery: 'dream,sleep,night', emoji: '💭' }
  ]},
  { char: '得', pinyin: 'de', level: 3, words: [
    { word: '得到', pinyin: 'dé dào', imgQuery: 'get,receive,gift', emoji: '🎁' },
    { word: '觉得', pinyin: 'jué de', imgQuery: 'feel,think,believe', emoji: '🤔' }
  ]},
  { char: '想', pinyin: 'xiǎng', level: 3, words: [
    { word: '想念', pinyin: 'xiǎng niàn', imgQuery: 'miss,remember,love', emoji: '💭' },
    { word: '想要', pinyin: 'xiǎng yào', imgQuery: 'want,wish,desire', emoji: '🌟' }
  ]},
  { char: '跳', pinyin: 'tiào', level: 3, words: [
    { word: '跳舞', pinyin: 'tiào wǔ', imgQuery: 'dance,dancing,fun', emoji: '💃' },
    { word: '跳绳', pinyin: 'tiào shéng', imgQuery: 'jump,rope,play', emoji: '🤸' }
  ]},
  { char: '道', pinyin: 'dào', level: 3, words: [
    { word: '知道', pinyin: 'zhī dào', imgQuery: 'know,understand,think', emoji: '💡' },
    { word: '道路', pinyin: 'dào lù', imgQuery: 'road,path,way', emoji: '🛤️' }
  ]},
  { char: '谢', pinyin: 'xiè', level: 3, words: [
    { word: '谢谢', pinyin: 'xiè xiè', imgQuery: 'thanks,thank,grateful', emoji: '🙏' },
    { word: '感谢', pinyin: 'gǎn xiè', imgQuery: 'grateful,thanks', emoji: '💝' }
  ]},
  { char: '请', pinyin: 'qǐng', level: 3, words: [
    { word: '请问', pinyin: 'qǐng wèn', imgQuery: 'please,ask,polite', emoji: '🙋' },
    { word: '请进', pinyin: 'qǐng jìn', imgQuery: 'welcome,enter,door', emoji: '🚪' }
  ]},
  { char: '着', pinyin: 'zhe', level: 3, words: [
    { word: '看着', pinyin: 'kàn zhe', imgQuery: 'watching,looking,eyes', emoji: '👀' },
    { word: '穿着', pinyin: 'chuān zhe', imgQuery: 'wearing,clothes,dress', emoji: '👗' }
  ]},
  { char: '喜', pinyin: 'xǐ', level: 3, words: [
    { word: '喜欢', pinyin: 'xǐ huān', imgQuery: 'like,love,happy', emoji: '💕' },
    { word: '欢喜', pinyin: 'huān xǐ', imgQuery: 'joy,delight,happy', emoji: '🥳' }
  ]},
  { char: '欢', pinyin: 'huān', level: 2, words: [
    { word: '喜欢', pinyin: 'xǐ huān', imgQuery: 'like,love,heart', emoji: '💕' },
    { word: '欢乐', pinyin: 'huān lè', imgQuery: 'joy,happy,fun', emoji: '🎉' }
  ]},
  { char: '游', pinyin: 'yóu', level: 3, words: [
    { word: '游泳', pinyin: 'yóu yǒng', imgQuery: 'swimming,pool,water', emoji: '🏊' },
    { word: '游戏', pinyin: 'yóu xì', imgQuery: 'game,play,fun', emoji: '🎮' }
  ]},
  { char: '猫', pinyin: 'māo', level: 3, words: [
    { word: '小猫', pinyin: 'xiǎo māo', imgQuery: 'cat,kitten,cute', emoji: '🐱' },
    { word: '猫咪', pinyin: 'māo mī', imgQuery: 'kitty,cat,adorable', emoji: '😺' }
  ]},
  { char: '狗', pinyin: 'gǒu', level: 2, words: [
    { word: '小狗', pinyin: 'xiǎo gǒu', imgQuery: 'dog,puppy,cute', emoji: '🐶' },
    { word: '狗狗', pinyin: 'gǒu gou', imgQuery: 'dog,pet,adorable', emoji: '🐕' }
  ]},
  { char: '兔', pinyin: 'tù', level: 2, words: [
    { word: '小兔', pinyin: 'xiǎo tù', imgQuery: 'rabbit,bunny,cute', emoji: '🐰' },
    { word: '兔子', pinyin: 'tù zi', imgQuery: 'rabbit,bunny,hop', emoji: '🐇' }
  ]},
  { char: '牛', pinyin: 'niú', level: 1, words: [
    { word: '小牛', pinyin: 'xiǎo niú', imgQuery: 'calf,cow,farm', emoji: '🐄' },
    { word: '牛奶', pinyin: 'niú nǎi', imgQuery: 'milk,dairy,drink', emoji: '🥛' }
  ]},
  { char: '羊', pinyin: 'yáng', level: 2, words: [
    { word: '小羊', pinyin: 'xiǎo yáng', imgQuery: 'sheep,lamb,cute', emoji: '🐑' },
    { word: '山羊', pinyin: 'shān yáng', imgQuery: 'goat,mountain', emoji: '🐐' }
  ]},
  { char: '象', pinyin: 'xiàng', level: 3, words: [
    { word: '大象', pinyin: 'dà xiàng', imgQuery: 'elephant,big,animal', emoji: '🐘' },
    { word: '想象', pinyin: 'xiǎng xiàng', imgQuery: 'imagine,dream,think', emoji: '💭' }
  ]},
  { char: '饭', pinyin: 'fàn', level: 2, words: [
    { word: '吃饭', pinyin: 'chī fàn', imgQuery: 'eat,rice,meal', emoji: '🍚' },
    { word: '米饭', pinyin: 'mǐ fàn', imgQuery: 'rice,bowl,food', emoji: '🍙' }
  ]},
  { char: '菜', pinyin: 'cài', level: 3, words: [
    { word: '蔬菜', pinyin: 'shū cài', imgQuery: 'vegetable,fresh,green', emoji: '🥬' },
    { word: '白菜', pinyin: 'bái cài', imgQuery: 'cabbage,vegetable', emoji: '🥦' }
  ]},
  { char: '米', pinyin: 'mǐ', level: 2, words: [
    { word: '大米', pinyin: 'dà mǐ', imgQuery: 'rice,grain,food', emoji: '🌾' },
    { word: '米饭', pinyin: 'mǐ fàn', imgQuery: 'rice,bowl,cooked', emoji: '🍚' }
  ]},
  { char: '瓜', pinyin: 'guā', level: 1, words: [
    { word: '西瓜', pinyin: 'xī guā', imgQuery: 'watermelon,fruit,summer', emoji: '🍉' },
    { word: '南瓜', pinyin: 'nán guā', imgQuery: 'pumpkin,orange', emoji: '🎃' }
  ]},
  { char: '衣', pinyin: 'yī', level: 2, words: [
    { word: '衣服', pinyin: 'yī fu', imgQuery: 'clothes,dress,outfit', emoji: '👗' },
    { word: '上衣', pinyin: 'shàng yī', imgQuery: 'shirt,top,clothing', emoji: '👕' }
  ]},
  { char: '老', pinyin: 'lǎo', level: 2, words: [
    { word: '老师', pinyin: 'lǎo shī', imgQuery: 'teacher,school,education', emoji: '👩‍🏫' },
    { word: '老人', pinyin: 'lǎo rén', imgQuery: 'elderly,grandpa,old', emoji: '👴' }
  ]},
  { char: '师', pinyin: 'shī', level: 2, words: [
    { word: '老师', pinyin: 'lǎo shī', imgQuery: 'teacher,classroom', emoji: '👨‍🏫' },
    { word: '师父', pinyin: 'shī fu', imgQuery: 'master,teacher', emoji: '🧑‍🏫' }
  ]},
  { char: '同', pinyin: 'tóng', level: 2, words: [
    { word: '同学', pinyin: 'tóng xué', imgQuery: 'classmate,school,friend', emoji: '👫' },
    { word: '相同', pinyin: 'xiāng tóng', imgQuery: 'same,equal,identical', emoji: '🟰' }
  ]},
  { char: '车', pinyin: 'chē', level: 1, words: [
    { word: '汽车', pinyin: 'qì chē', imgQuery: 'car,automobile,drive', emoji: '🚗' },
    { word: '火车', pinyin: 'huǒ chē', imgQuery: 'train,railway', emoji: '🚂' }
  ]},
  { char: '船', pinyin: 'chuán', level: 3, words: [
    { word: '小船', pinyin: 'xiǎo chuán', imgQuery: 'boat,ship,sail', emoji: '⛵' },
    { word: '轮船', pinyin: 'lún chuán', imgQuery: 'ship,ocean,cruise', emoji: '🚢' }
  ]},
  { char: '玩', pinyin: 'wán', level: 2, words: [
    { word: '玩具', pinyin: 'wán jù', imgQuery: 'toy,play,children', emoji: '🧸' },
    { word: '好玩', pinyin: 'hǎo wán', imgQuery: 'fun,play,enjoy', emoji: '🎠' }
  ]},
  { char: '冬', pinyin: 'dōng', level: 1, words: [
    { word: '冬天', pinyin: 'dōng tiān', imgQuery: 'winter,snow,cold', emoji: '❄️' },
    { word: '冬瓜', pinyin: 'dōng guā', imgQuery: 'winter,melon', emoji: '🥒' }
  ]},
  { char: '夏', pinyin: 'xià', level: 2, words: [
    { word: '夏天', pinyin: 'xià tiān', imgQuery: 'summer,sun,beach', emoji: '☀️' },
    { word: '夏日', pinyin: 'xià rì', imgQuery: 'summer,sunshine', emoji: '🌞' }
  ]},
  { char: '穿', pinyin: 'chuān', level: 2, words: [
    { word: '穿衣', pinyin: 'chuān yī', imgQuery: 'wear,dress,clothes', emoji: '👔' },
    { word: '穿上', pinyin: 'chuān shàng', imgQuery: 'put,on,wear', emoji: '👕' }
  ]},
  { char: '睡', pinyin: 'shuì', level: 3, words: [
    { word: '睡觉', pinyin: 'shuì jiào', imgQuery: 'sleep,bed,night', emoji: '😴' },
    { word: '午睡', pinyin: 'wǔ shuì', imgQuery: 'nap,rest,afternoon', emoji: '💤' }
  ]},
  { char: '起', pinyin: 'qǐ', level: 2, words: [
    { word: '起来', pinyin: 'qǐ lái', imgQuery: 'get,up,wake,morning', emoji: '🌅' },
    { word: '一起', pinyin: 'yī qǐ', imgQuery: 'together,friends', emoji: '🤝' }
  ]},
  { char: '太', pinyin: 'tài', level: 1, words: [
    { word: '太阳', pinyin: 'tài yáng', imgQuery: 'sun,sunshine,bright', emoji: '☀️' },
    { word: '太好', pinyin: 'tài hǎo', imgQuery: 'great,wonderful,good', emoji: '👍' }
  ]},
  { char: '阳', pinyin: 'yáng', level: 2, words: [
    { word: '太阳', pinyin: 'tài yáng', imgQuery: 'sun,sunshine,morning', emoji: '☀️' },
    { word: '阳光', pinyin: 'yáng guāng', imgQuery: 'sunlight,bright,warm', emoji: '🌞' }
  ]},
  { char: '光', pinyin: 'guāng', level: 2, words: [
    { word: '阳光', pinyin: 'yáng guāng', imgQuery: 'sunlight,shine,warm', emoji: '🌟' },
    { word: '月光', pinyin: 'yuè guāng', imgQuery: 'moonlight,night', emoji: '🌙' }
  ]},
  { char: '晚', pinyin: 'wǎn', level: 3, words: [
    { word: '晚上', pinyin: 'wǎn shang', imgQuery: 'evening,night,moon', emoji: '🌙' },
    { word: '晚安', pinyin: 'wǎn ān', imgQuery: 'goodnight,sleep,stars', emoji: '🌜' }
  ]},
  { char: '早', pinyin: 'zǎo', level: 2, words: [
    { word: '早上', pinyin: 'zǎo shang', imgQuery: 'morning,sunrise,dawn', emoji: '🌅' },
    { word: '早安', pinyin: 'zǎo ān', imgQuery: 'good,morning,sun', emoji: '🌞' }
  ]},
  { char: '午', pinyin: 'wǔ', level: 1, words: [
    { word: '中午', pinyin: 'zhōng wǔ', imgQuery: 'noon,lunch,midday', emoji: '🕛' },
    { word: '下午', pinyin: 'xià wǔ', imgQuery: 'afternoon,time', emoji: '🕐' }
  ]},
  { char: '今', pinyin: 'jīn', level: 1, words: [
    { word: '今天', pinyin: 'jīn tiān', imgQuery: 'today,now,calendar', emoji: '📅' },
    { word: '今年', pinyin: 'jīn nián', imgQuery: 'this,year,calendar', emoji: '🗓️' }
  ]},
  { char: '坐', pinyin: 'zuò', level: 2, words: [
    { word: '坐下', pinyin: 'zuò xià', imgQuery: 'sit,down,chair', emoji: '🪑' },
    { word: '请坐', pinyin: 'qǐng zuò', imgQuery: 'please,sit,welcome', emoji: '💺' }
  ]},
  { char: '站', pinyin: 'zhàn', level: 3, words: [
    { word: '站立', pinyin: 'zhàn lì', imgQuery: 'stand,standing,up', emoji: '🧍' },
    { word: '车站', pinyin: 'chē zhàn', imgQuery: 'station,bus,train', emoji: '🚏' }
  ]},
  { char: '哥', pinyin: 'gē', level: 3, words: [
    { word: '哥哥', pinyin: 'gē ge', imgQuery: 'brother,boy,older', emoji: '👦' },
    { word: '大哥', pinyin: 'dà gē', imgQuery: 'big,brother,elder', emoji: '🧑' }
  ]},
  { char: '姐', pinyin: 'jiě', level: 2, words: [
    { word: '姐姐', pinyin: 'jiě jie', imgQuery: 'sister,girl,older', emoji: '👧' },
    { word: '小姐', pinyin: 'xiǎo jiě', imgQuery: 'miss,lady,young', emoji: '👩' }
  ]},
  { char: '弟', pinyin: 'dì', level: 2, words: [
    { word: '弟弟', pinyin: 'dì di', imgQuery: 'brother,boy,younger', emoji: '👦' },
    { word: '兄弟', pinyin: 'xiōng dì', imgQuery: 'brothers,siblings', emoji: '👬' }
  ]},
  { char: '妹', pinyin: 'mèi', level: 2, words: [
    { word: '妹妹', pinyin: 'mèi mei', imgQuery: 'sister,girl,younger', emoji: '👧' },
    { word: '姐妹', pinyin: 'jiě mèi', imgQuery: 'sisters,siblings', emoji: '👭' }
  ]},
  { char: '爷', pinyin: 'yé', level: 2, words: [
    { word: '爷爷', pinyin: 'yé ye', imgQuery: 'grandpa,grandfather,old', emoji: '👴' },
    { word: '老爷', pinyin: 'lǎo yé', imgQuery: 'old,man,grandfather', emoji: '🧓' }
  ]},
  { char: '奶', pinyin: 'nǎi', level: 1, words: [
    { word: '奶奶', pinyin: 'nǎi nai', imgQuery: 'grandma,grandmother', emoji: '👵' },
    { word: '牛奶', pinyin: 'niú nǎi', imgQuery: 'milk,dairy,glass', emoji: '🥛' }
  ]},
  { char: '眼', pinyin: 'yǎn', level: 3, words: [
    { word: '眼睛', pinyin: 'yǎn jīng', imgQuery: 'eye,eyes,look', emoji: '👁️' },
    { word: '眼泪', pinyin: 'yǎn lèi', imgQuery: 'tears,cry,sad', emoji: '😢' }
  ]},
  { char: '嘴', pinyin: 'zuǐ', level: 3, words: [
    { word: '嘴巴', pinyin: 'zuǐ ba', imgQuery: 'mouth,lips,face', emoji: '👄' },
    { word: '小嘴', pinyin: 'xiǎo zuǐ', imgQuery: 'mouth,small,cute', emoji: '👶' }
  ]},
  { char: '鼻', pinyin: 'bí', level: 3, words: [
    { word: '鼻子', pinyin: 'bí zi', imgQuery: 'nose,face,smell', emoji: '👃' },
    { word: '鼻涕', pinyin: 'bí tì', imgQuery: 'runny,nose,cold', emoji: '🤧' }
  ]},
  { char: '脸', pinyin: 'liǎn', level: 3, words: [
    { word: '笑脸', pinyin: 'xiào liǎn', imgQuery: 'smile,face,happy', emoji: '😊' },
    { word: '洗脸', pinyin: 'xǐ liǎn', imgQuery: 'wash,face,water', emoji: '🧼' }
  ]},
  { char: '给', pinyin: 'gěi', level: 2, words: [
    { word: '给你', pinyin: 'gěi nǐ', imgQuery: 'give,gift,present', emoji: '🎁' },
    { word: '送给', pinyin: 'sòng gěi', imgQuery: 'give,send,present', emoji: '💝' }
  ]},
  { char: '让', pinyin: 'ràng', level: 1, words: [
    { word: '让开', pinyin: 'ràng kāi', imgQuery: 'move,aside,way', emoji: '👉' },
    { word: '让我', pinyin: 'ràng wǒ', imgQuery: 'let,me,please', emoji: '🙋' }
  ]},
  { char: '最', pinyin: 'zuì', level: 3, words: [
    { word: '最好', pinyin: 'zuì hǎo', imgQuery: 'best,number,one', emoji: '🏆' },
    { word: '最大', pinyin: 'zuì dà', imgQuery: 'biggest,largest', emoji: '🔝' }
  ]},
  { char: '还', pinyin: 'hái', level: 2, words: [
    { word: '还有', pinyin: 'hái yǒu', imgQuery: 'also,more,still', emoji: '➕' },
    { word: '还好', pinyin: 'hái hǎo', imgQuery: 'ok,not,bad', emoji: '😌' }
  ]},
  { char: '新', pinyin: 'xīn', level: 3, words: [
    { word: '新年', pinyin: 'xīn nián', imgQuery: 'new,year,celebrate', emoji: '🎆' },
    { word: '新的', pinyin: 'xīn de', imgQuery: 'new,fresh,brand', emoji: '✨' }
  ]},
  { char: '拿', pinyin: 'ná', level: 2, words: [
    { word: '拿到', pinyin: 'ná dào', imgQuery: 'hold,get,grab', emoji: '✊' },
    { word: '拿来', pinyin: 'ná lái', imgQuery: 'bring,take,hand', emoji: '🤲' }
  ]},
  { char: '找', pinyin: 'zhǎo', level: 2, words: [
    { word: '找到', pinyin: 'zhǎo dào', imgQuery: 'find,search,discover', emoji: '🔍' },
    { word: '找人', pinyin: 'zhǎo rén', imgQuery: 'find,search,look', emoji: '🕵️' }
  ]},
  { char: '进', pinyin: 'jìn', level: 2, words: [
    { word: '进来', pinyin: 'jìn lái', imgQuery: 'enter,come,in', emoji: '🚶' },
    { word: '进去', pinyin: 'jìn qù', imgQuery: 'go,in,enter', emoji: '➡️' }
  ]},
  { char: '打', pinyin: 'dǎ', level: 1, words: [
    { word: '打球', pinyin: 'dǎ qiú', imgQuery: 'play,ball,sport', emoji: '🏀' },
    { word: '打开', pinyin: 'dǎ kāi', imgQuery: 'open,unlock,door', emoji: '🔓' }
  ]},
  { char: '比', pinyin: 'bǐ', level: 1, words: [
    { word: '比较', pinyin: 'bǐ jiào', imgQuery: 'compare,versus,match', emoji: '⚖️' },
    { word: '比赛', pinyin: 'bǐ sài', imgQuery: 'competition,race,game', emoji: '🏆' }
  ]},
  { char: '些', pinyin: 'xiē', level: 2, words: [
    { word: '一些', pinyin: 'yī xiē', imgQuery: 'some,few,several', emoji: '🔢' },
    { word: '这些', pinyin: 'zhè xiē', imgQuery: 'these,some,group', emoji: '👉' }
  ]},
  { char: '种', pinyin: 'zhǒng', level: 2, words: [
    { word: '种花', pinyin: 'zhòng huā', imgQuery: 'plant,flower,garden', emoji: '🌱' },
    { word: '各种', pinyin: 'gè zhǒng', imgQuery: 'various,different,kinds', emoji: '🎨' }
  ]},
  { char: '乐', pinyin: 'lè', level: 1, words: [
    { word: '快乐', pinyin: 'kuài lè', imgQuery: 'happy,joy,smile', emoji: '😊' },
    { word: '音乐', pinyin: 'yīn yuè', imgQuery: 'music,song,play', emoji: '🎵' }
  ]},
  { char: '送', pinyin: 'sòng', level: 2, words: [
    { word: '送给', pinyin: 'sòng gěi', imgQuery: 'give,present,gift', emoji: '🎁' },
    { word: '欢送', pinyin: 'huān sòng', imgQuery: 'farewell,goodbye', emoji: '👋' }
  ]},
  { char: '真', pinyin: 'zhēn', level: 3, words: [
    { word: '真好', pinyin: 'zhēn hǎo', imgQuery: 'really,good,great', emoji: '👍' },
    { word: '真的', pinyin: 'zhēn de', imgQuery: 'real,true,genuine', emoji: '✅' }
  ]},
  { char: '住', pinyin: 'zhù', level: 2, words: [
    { word: '住在', pinyin: 'zhù zài', imgQuery: 'live,home,house', emoji: '🏠' },
    { word: '记住', pinyin: 'jì zhù', imgQuery: 'remember,memory', emoji: '🧠' }
  ]},
  { char: '吧', pinyin: 'ba', level: 2, words: [
    { word: '好吧', pinyin: 'hǎo ba', imgQuery: 'ok,fine,agree', emoji: '👌' },
    { word: '走吧', pinyin: 'zǒu ba', imgQuery: 'go,let,leave', emoji: '🚶' }
  ]},
  { char: '跟', pinyin: 'gēn', level: 3, words: [
    { word: '跟着', pinyin: 'gēn zhe', imgQuery: 'follow,behind,walk', emoji: '🚶' },
    { word: '跟我', pinyin: 'gēn wǒ', imgQuery: 'with,me,follow', emoji: '👈' }
  ]},
  { char: '从', pinyin: 'cóng', level: 1, words: [
    { word: '从前', pinyin: 'cóng qián', imgQuery: 'once,upon,time,story', emoji: '📖' },
    { word: '从来', pinyin: 'cóng lái', imgQuery: 'never,always,ever', emoji: '⏳' }
  ]},
  { char: '到', pinyin: 'dào', level: 2, words: [
    { word: '到了', pinyin: 'dào le', imgQuery: 'arrive,reach,here', emoji: '📍' },
    { word: '看到', pinyin: 'kàn dào', imgQuery: 'see,find,notice', emoji: '👁️' }
  ]},
  { char: '完', pinyin: 'wán', level: 2, words: [
    { word: '完成', pinyin: 'wán chéng', imgQuery: 'complete,finish,done', emoji: '✅' },
    { word: '吃完', pinyin: 'chī wán', imgQuery: 'finish,eating,done', emoji: '🍽️' }
  ]},
  { char: '名', pinyin: 'míng', level: 2, words: [
    { word: '名字', pinyin: 'míng zi', imgQuery: 'name,tag,label', emoji: '🏷️' },
    { word: '有名', pinyin: 'yǒu míng', imgQuery: 'famous,known,star', emoji: '⭐' }
  ]},
  { char: '字', pinyin: 'zì', level: 2, words: [
    { word: '写字', pinyin: 'xiě zì', imgQuery: 'write,pen,paper', emoji: '✍️' },
    { word: '汉字', pinyin: 'hàn zì', imgQuery: 'chinese,character,writing', emoji: '🀄' }
  ]},
  { char: '像', pinyin: 'xiàng', level: 3, words: [
    { word: '好像', pinyin: 'hǎo xiàng', imgQuery: 'seem,like,similar', emoji: '🤔' },
    { word: '像是', pinyin: 'xiàng shì', imgQuery: 'looks,like,resemble', emoji: '👀' }
  ]},
  { char: '别', pinyin: 'bié', level: 2, words: [
    { word: '别的', pinyin: 'bié de', imgQuery: 'other,different,another', emoji: '🔄' },
    { word: '别走', pinyin: 'bié zǒu', imgQuery: 'don\'t,go,stay', emoji: '🛑' }
  ]},
  { char: '等', pinyin: 'děng', level: 3, words: [
    { word: '等一下', pinyin: 'děng yī xià', imgQuery: 'wait,moment,time', emoji: '⏳' },
    { word: '等人', pinyin: 'děng rén', imgQuery: 'wait,waiting,person', emoji: '🧍' }
  ]},
  { char: '忙', pinyin: 'máng', level: 2, words: [
    { word: '很忙', pinyin: 'hěn máng', imgQuery: 'busy,work,hurry', emoji: '⏰' },
    { word: '帮忙', pinyin: 'bāng máng', imgQuery: 'help,assist,hand', emoji: '🤝' }
  ]},
  { char: '每', pinyin: 'měi', level: 2, words: [
    { word: '每天', pinyin: 'měi tiān', imgQuery: 'everyday,daily,routine', emoji: '📅' },
    { word: '每个', pinyin: 'měi gè', imgQuery: 'every,each,all', emoji: '🔄' }
  ]},
  { char: '唱', pinyin: 'chàng', level: 3, words: [
    { word: '唱歌', pinyin: 'chàng gē', imgQuery: 'sing,song,music', emoji: '🎤' },
    { word: '合唱', pinyin: 'hé chàng', imgQuery: 'choir,sing,together', emoji: '🎵' }
  ]},
  { char: '歌', pinyin: 'gē', level: 3, words: [
    { word: '唱歌', pinyin: 'chàng gē', imgQuery: 'sing,music,song', emoji: '🎶' },
    { word: '歌曲', pinyin: 'gē qǔ', imgQuery: 'song,music,melody', emoji: '🎵' }
  ]},
  { char: '哭', pinyin: 'kū', level: 3, words: [
    { word: '哭了', pinyin: 'kū le', imgQuery: 'cry,tears,sad', emoji: '😢' },
    { word: '大哭', pinyin: 'dà kū', imgQuery: 'crying,loud,tears', emoji: '😭' }
  ]},
  { char: '洗', pinyin: 'xǐ', level: 2, words: [
    { word: '洗手', pinyin: 'xǐ shǒu', imgQuery: 'wash,hands,clean', emoji: '🧼' },
    { word: '洗澡', pinyin: 'xǐ zǎo', imgQuery: 'bath,shower,clean', emoji: '🛁' }
  ]},
  { char: '刷', pinyin: 'shuā', level: 2, words: [
    { word: '刷牙', pinyin: 'shuā yá', imgQuery: 'brush,teeth,toothbrush', emoji: '🪥' },
    { word: '刷子', pinyin: 'shuā zi', imgQuery: 'brush,clean,paint', emoji: '🖌️' }
  ]},
  { char: '穿', pinyin: 'chuān', level: 2, words: [
    { word: '穿衣服', pinyin: 'chuān yī fu', imgQuery: 'dress,clothes,wear', emoji: '👔' },
    { word: '穿鞋', pinyin: 'chuān xié', imgQuery: 'shoes,wear,put', emoji: '👟' }
  ]},
  { char: '拍', pinyin: 'pāi', level: 2, words: [
    { word: '拍手', pinyin: 'pāi shǒu', imgQuery: 'clap,hands,applaud', emoji: '👏' },
    { word: '拍球', pinyin: 'pāi qiú', imgQuery: 'bounce,ball,play', emoji: '🏀' }
  ]},
  { char: '接', pinyin: 'jiē', level: 3, words: [
    { word: '接住', pinyin: 'jiē zhù', imgQuery: 'catch,hold,grab', emoji: '🤲' },
    { word: '接电话', pinyin: 'jiē diàn huà', imgQuery: 'answer,phone,call', emoji: '📞' }
  ]},
  { char: '球', pinyin: 'qiú', level: 3, words: [
    { word: '足球', pinyin: 'zú qiú', imgQuery: 'football,soccer,sport', emoji: '⚽' },
    { word: '皮球', pinyin: 'pí qiú', imgQuery: 'ball,bouncing,play', emoji: '🏐' }
  ]},
  { char: '身', pinyin: 'shēn', level: 2, words: [
    { word: '身体', pinyin: 'shēn tǐ', imgQuery: 'body,health,strong', emoji: '💪' },
    { word: '身上', pinyin: 'shēn shang', imgQuery: 'body,on,wearing', emoji: '🧍' }
  ]},
  { char: '边', pinyin: 'biān', level: 1, words: [
    { word: '旁边', pinyin: 'páng biān', imgQuery: 'beside,next,near', emoji: '↔️' },
    { word: '外边', pinyin: 'wài biān', imgQuery: 'outside,out,door', emoji: '🚪' }
  ]},
  { char: '拉', pinyin: 'lā', level: 2, words: [
    { word: '拉手', pinyin: 'lā shǒu', imgQuery: 'hold,hands,together', emoji: '🤝' },
    { word: '拉开', pinyin: 'lā kāi', imgQuery: 'pull,open,door', emoji: '🚪' }
  ]},
  { char: '推', pinyin: 'tuī', level: 3, words: [
    { word: '推开', pinyin: 'tuī kāi', imgQuery: 'push,open,door', emoji: '🚪' },
    { word: '推车', pinyin: 'tuī chē', imgQuery: 'push,cart,stroller', emoji: '🛒' }
  ]},
  { char: '甜', pinyin: 'tián', level: 3, words: [
    { word: '甜的', pinyin: 'tián de', imgQuery: 'sweet,candy,sugar', emoji: '🍬' },
    { word: '甜蜜', pinyin: 'tián mì', imgQuery: 'sweet,honey,love', emoji: '🍯' }
  ]},
  { char: '热', pinyin: 'rè', level: 3, words: [
    { word: '好热', pinyin: 'hǎo rè', imgQuery: 'hot,warm,sun', emoji: '🥵' },
    { word: '热水', pinyin: 'rè shuǐ', imgQuery: 'hot,water,tea', emoji: '♨️' }
  ]},
  { char: '冷', pinyin: 'lěng', level: 2, words: [
    { word: '好冷', pinyin: 'hǎo lěng', imgQuery: 'cold,winter,snow', emoji: '🥶' },
    { word: '冷水', pinyin: 'lěng shuǐ', imgQuery: 'cold,water,ice', emoji: '🧊' }
  ]},
  { char: '远', pinyin: 'yuǎn', level: 2, words: [
    { word: '很远', pinyin: 'hěn yuǎn', imgQuery: 'far,distance,away', emoji: '🔭' },
    { word: '远方', pinyin: 'yuǎn fāng', imgQuery: 'faraway,distance,horizon', emoji: '🌅' }
  ]},
  { char: '近', pinyin: 'jìn', level: 2, words: [
    { word: '很近', pinyin: 'hěn jìn', imgQuery: 'near,close,nearby', emoji: '📍' },
    { word: '附近', pinyin: 'fù jìn', imgQuery: 'nearby,around,area', emoji: '🗺️' }
  ]},
  { char: '分', pinyin: 'fēn', level: 1, words: [
    { word: '分开', pinyin: 'fēn kāi', imgQuery: 'separate,divide,apart', emoji: '✂️' },
    { word: '十分', pinyin: 'shí fēn', imgQuery: 'very,much,extremely', emoji: '💯' }
  ]},
  { char: '干', pinyin: 'gān', level: 1, words: [
    { word: '干净', pinyin: 'gān jìng', imgQuery: 'clean,tidy,neat', emoji: '✨' },
    { word: '干活', pinyin: 'gàn huó', imgQuery: 'work,labor,do', emoji: '🔨' }
  ]},
  { char: '关', pinyin: 'guān', level: 2, words: [
    { word: '关门', pinyin: 'guān mén', imgQuery: 'close,door,shut', emoji: '🚪' },
    { word: '关心', pinyin: 'guān xīn', imgQuery: 'care,concern,love', emoji: '💕' }
  ]},
  { char: '皮', pinyin: 'pí', level: 1, words: [
    { word: '皮球', pinyin: 'pí qiú', imgQuery: 'ball,bouncy,play', emoji: '🏐' },
    { word: '调皮', pinyin: 'tiáo pí', imgQuery: 'naughty,playful,fun', emoji: '😜' }
  ]},
  { char: '块', pinyin: 'kuài', level: 2, words: [
    { word: '一块', pinyin: 'yī kuài', imgQuery: 'piece,together,one', emoji: '🧩' },
    { word: '石块', pinyin: 'shí kuài', imgQuery: 'rock,stone,piece', emoji: '🪨' }
  ]},
];

// === 萌学儿歌歌曲数据 ===
const SONG_LIST = [
  // --- 英文儿歌 (50首) ---
  { title: 'Twinkle Twinkle Little Star', lang: 'en', youtubeId: 'yCjJyiqpAuU', imgQuery: 'starry,night,sky', emoji: '⭐🌙', gradient: 'linear-gradient(135deg, #0c3483 0%, #a2b6df 100%)' },
  { title: 'Baby Shark', lang: 'en', youtubeId: 'XqZsoesa55w', imgQuery: 'cute,shark,ocean', emoji: '🦈🌊', gradient: 'linear-gradient(135deg, #00b4db 0%, #0083b0 100%)' },
  { title: 'Old MacDonald Had a Farm', lang: 'en', youtubeId: 'CD44-a2_fB8', imgQuery: 'farm,animals,barn', emoji: '🐄🌾', gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)' },
  { title: 'Wheels on the Bus', lang: 'en', youtubeId: 'e_04ZrNroTo', imgQuery: 'school,bus,road', emoji: '🚌💨', gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' },
  { title: 'Head Shoulders Knees and Toes', lang: 'en', youtubeId: 'ZanHgPprl-0', imgQuery: 'kids,dancing,playground', emoji: '🙆‍♂️🦵', gradient: 'linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)' },
  { title: 'If You\'re Happy and You Know It', lang: 'en', youtubeId: 'l4WNrvVjiTw', imgQuery: 'happy,kids,clapping', emoji: '😊👏', gradient: 'linear-gradient(135deg, #f953c6 0%, #b91d73 100%)' },
  { title: 'Row Row Row Your Boat', lang: 'en', youtubeId: 'jXA2bHU4sng', imgQuery: 'boat,lake,gentle,water', emoji: '🚣🌅', gradient: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)' },
  { title: 'Mary Had a Little Lamb', lang: 'en', youtubeId: 'KxGRhd_iWuE', imgQuery: 'lamb,meadow,spring', emoji: '🐑🌸', gradient: 'linear-gradient(135deg, #e8cbc0 0%, #636fa4 100%)' },
  { title: 'Itsy Bitsy Spider', lang: 'en', youtubeId: 'w_lCBjjJkey', imgQuery: 'spider,rain,rainbow', emoji: '🕷️🌧️', gradient: 'linear-gradient(135deg, #4568dc 0%, #b06ab3 100%)' },
  { title: 'Five Little Ducks', lang: 'en', youtubeId: 'pZw9veQ76fo', imgQuery: 'ducks,pond,cute', emoji: '🐥🐥', gradient: 'linear-gradient(135deg, #f2994a 0%, #f2c94c 100%)' },
  { title: 'Baa Baa Black Sheep', lang: 'en', youtubeId: 'MR5XSOdjKMA', imgQuery: 'sheep,wool,countryside', emoji: '🐑🖤', gradient: 'linear-gradient(135deg, #3a3a3a 0%, #8e8e8e 100%)' },
  { title: 'London Bridge Is Falling Down', lang: 'en', youtubeId: 'xBIXPg0DLCY', imgQuery: 'london,bridge,river', emoji: '🌉🇬🇧', gradient: 'linear-gradient(135deg, #c33764 0%, #1d2671 100%)' },
  { title: 'Jack and Jill', lang: 'en', youtubeId: 'OazMCPHrQnU', imgQuery: 'hill,water,well', emoji: '⛰️🪣', gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
  { title: 'Humpty Dumpty', lang: 'en', youtubeId: 'nrv495corBc', imgQuery: 'egg,wall,castle', emoji: '🥚🧱', gradient: 'linear-gradient(135deg, #e44d26 0%, #f16529 100%)' },
  { title: 'ABC Song', lang: 'en', youtubeId: '75p-N9YKqNo', imgQuery: 'alphabet,colorful,letters', emoji: '🔤🎶', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { title: 'Five Little Monkeys', lang: 'en', youtubeId: 'b0NHrFNZWh0', imgQuery: 'monkeys,jumping,bed', emoji: '🐒🛏️', gradient: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)' },
  { title: 'Rain Rain Go Away', lang: 'en', youtubeId: 'LFrKYjrIDs8', imgQuery: 'rain,umbrella,rainbow', emoji: '🌧️☂️', gradient: 'linear-gradient(135deg, #616161 0%, #9bc5c3 100%)' },
  { title: 'Hickory Dickory Dock', lang: 'en', youtubeId: 'ygcB3QClMfk', imgQuery: 'clock,mouse,antique', emoji: '🕐🐭', gradient: 'linear-gradient(135deg, #834d9b 0%, #d04ed6 100%)' },
  { title: 'This Old Man', lang: 'en', youtubeId: '4dzMPjDGoKU', imgQuery: 'grandpa,playful,park', emoji: '👴🥁', gradient: 'linear-gradient(135deg, #c0392b 0%, #8e44ad 100%)' },
  { title: 'Hey Diddle Diddle', lang: 'en', youtubeId: 'xcJtL7QggTI', imgQuery: 'moon,cow,stars,fantasy', emoji: '🐄🌙', gradient: 'linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)' },
  { title: 'Johny Johny Yes Papa', lang: 'en', youtubeId: 'F4tHL8reNCs', imgQuery: 'baby,sugar,family', emoji: '👶🍬', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
  { title: 'One Two Buckle My Shoe', lang: 'en', youtubeId: 'Uf-aIt-UNMU', imgQuery: 'counting,shoes,numbers', emoji: '👟🔢', gradient: 'linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)' },
  { title: 'Three Blind Mice', lang: 'en', youtubeId: 'BRGqTsHLMyQ', imgQuery: 'mice,cheese,cute', emoji: '🐭🧀', gradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)' },
  { title: 'Pat a Cake', lang: 'en', youtubeId: '3MXBHZLWMOQ', imgQuery: 'cake,baking,kitchen', emoji: '🎂👨‍🍳', gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' },
  { title: 'Yankee Doodle', lang: 'en', youtubeId: 'JPqmMaOwnJI', imgQuery: 'horse,parade,patriotic', emoji: '🐴🎩', gradient: 'linear-gradient(135deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%)' },
  { title: 'Do Re Mi', lang: 'en', youtubeId: 'ps0CMCMKizc', imgQuery: 'music,notes,mountains', emoji: '🎵🏔️', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
  { title: 'Jingle Bells', lang: 'en', youtubeId: 'eQ34DSTjsLQ', imgQuery: 'christmas,snow,bells', emoji: '🔔❄️', gradient: 'linear-gradient(135deg, #c31432 0%, #240b36 100%)' },
  { title: 'Hokey Pokey', lang: 'en', youtubeId: 'iZinb6rVozc', imgQuery: 'dancing,kids,party', emoji: '🕺💃', gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' },
  { title: 'Ten in the Bed', lang: 'en', youtubeId: 'TdDypyS_5zE', imgQuery: 'bed,teddy,bears,cozy', emoji: '🛏️🧸', gradient: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)' },
  { title: 'I\'m a Little Teapot', lang: 'en', youtubeId: '5QMKLQ1Ib-A', imgQuery: 'teapot,tea,cute', emoji: '🫖☕', gradient: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)' },
  { title: 'The Muffin Man', lang: 'en', youtubeId: 'xwjCPB3pDAE', imgQuery: 'muffin,bakery,sweet', emoji: '🧁🧑‍🍳', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { title: 'Ring Around the Rosie', lang: 'en', youtubeId: 'FPyOSzzKBfw', imgQuery: 'roses,garden,children', emoji: '🌹🔴', gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)' },
  { title: 'Teddy Bear Teddy Bear', lang: 'en', youtubeId: 'sTBaq0eTylY', imgQuery: 'teddy,bear,cute,toy', emoji: '🧸💛', gradient: 'linear-gradient(135deg, #C6426E 0%, #642B73 100%)' },
  { title: 'Finger Family', lang: 'en', youtubeId: '3Bw27TQxBKA', imgQuery: 'family,hands,cute', emoji: '👨‍👩‍👧‍👦✋', gradient: 'linear-gradient(135deg, #e1eec3 0%, #f05053 100%)' },
  { title: 'Are You Sleeping', lang: 'en', youtubeId: '2ygr5PYFMLU', imgQuery: 'sleeping,morning,bells', emoji: '😴🔔', gradient: 'linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)' },
  { title: 'Six Little Ducks', lang: 'en', youtubeId: 'jgxOjb8pHKM', imgQuery: 'ducks,river,waddle', emoji: '🦆🌿', gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
  { title: 'BINGO', lang: 'en', youtubeId: '9mmF8zOlh_g', imgQuery: 'dog,puppy,happy', emoji: '🐕🅱️', gradient: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)' },
  { title: 'Down by the Bay', lang: 'en', youtubeId: 'jAOkAQLEf8I', imgQuery: 'bay,watermelon,silly', emoji: '🌊🍉', gradient: 'linear-gradient(135deg, #56CCF2 0%, #2F80ED 100%)' },
  { title: 'She\'ll Be Coming Round the Mountain', lang: 'en', youtubeId: 'aJm6_fXijBU', imgQuery: 'mountain,horses,adventure', emoji: '🏔️🐎', gradient: 'linear-gradient(135deg, #bc4e9c 0%, #f80759 100%)' },
  { title: 'Skip to My Lou', lang: 'en', youtubeId: 'OQ-ZjAMqBYE', imgQuery: 'skipping,sunshine,meadow', emoji: '🌻🦋', gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
  { title: 'The Ants Go Marching', lang: 'en', youtubeId: '2S__fbCGwOM', imgQuery: 'ants,marching,nature', emoji: '🐜🥁', gradient: 'linear-gradient(135deg, #654ea3 0%, #eaafc8 100%)' },
  { title: 'Pop Goes the Weasel', lang: 'en', youtubeId: 'p5qWL-FPykI', imgQuery: 'jack,in,box,surprise', emoji: '🎪🎉', gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' },
  { title: 'Happy Birthday', lang: 'en', youtubeId: 'jk--KDaxMco', imgQuery: 'birthday,cake,balloons', emoji: '🎂🎈', gradient: 'linear-gradient(135deg, #ff6a88 0%, #ff99ac 100%)' },
  { title: 'Apples and Bananas', lang: 'en', youtubeId: 'r5WLXZspD1M', imgQuery: 'apples,bananas,fruit', emoji: '🍎🍌', gradient: 'linear-gradient(135deg, #a8e063 0%, #56ab2f 100%)' },
  { title: 'Five Little Speckled Frogs', lang: 'en', youtubeId: 'WSC-gHBU_d0', imgQuery: 'frogs,pond,lily,pad', emoji: '🐸🌿', gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
  { title: 'Polly Put the Kettle On', lang: 'en', youtubeId: '5a1gemSfPGo', imgQuery: 'kettle,tea,cozy', emoji: '☕🫖', gradient: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)' },
  { title: 'Little Bo Peep', lang: 'en', youtubeId: 'CqXX_WoVfB8', imgQuery: 'sheep,shepherdess,fields', emoji: '🐑🌾', gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)' },
  { title: 'Hot Cross Buns', lang: 'en', youtubeId: '1E-pCBrGrrk', imgQuery: 'bread,buns,bakery', emoji: '🍞🧈', gradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)' },
  { title: 'Here We Go Round the Mulberry Bush', lang: 'en', youtubeId: 'jVFkFjBa2Hw', imgQuery: 'bush,garden,morning', emoji: '🌳🌅', gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)' },
  { title: 'Open Shut Them', lang: 'en', youtubeId: 'RuqvGiZi0qg', imgQuery: 'hands,clapping,toddler', emoji: '👐🤲', gradient: 'linear-gradient(135deg, #f953c6 0%, #b91d73 100%)' },

  // --- 中文儿歌 (50首) ---
  { title: '小星星', lang: 'zh', youtubeId: 'mQ5-ifHMaSo', imgQuery: 'starry,night,sky,beautiful', emoji: '⭐🌙', gradient: 'linear-gradient(135deg, #0c3483 0%, #a2b6df 100%)' },
  { title: '两只老虎', lang: 'zh', youtubeId: 'RBW0NAmsg-I', imgQuery: 'tiger,cute,cartoon', emoji: '🐯🐯', gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' },
  { title: '小兔子乖乖', lang: 'zh', youtubeId: 'dZKIuGOmLcE', imgQuery: 'bunny,rabbit,cute,white', emoji: '🐰🥕', gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
  { title: '数鸭子', lang: 'zh', youtubeId: '8mq4ULHKqrI', imgQuery: 'ducks,river,counting', emoji: '🦆🔢', gradient: 'linear-gradient(135deg, #f2994a 0%, #f2c94c 100%)' },
  { title: '小毛驴', lang: 'zh', youtubeId: 'INS5NRbiPow', imgQuery: 'donkey,cute,countryside', emoji: '🫏🌾', gradient: 'linear-gradient(135deg, #8B7355 0%, #D2B48C 100%)' },
  { title: '拔萝卜', lang: 'zh', youtubeId: 'VFXT4eS4eIo', imgQuery: 'radish,garden,pulling', emoji: '🥕👴', gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)' },
  { title: '世上只有妈妈好', lang: 'zh', youtubeId: 'CE49x0qlHLI', imgQuery: 'mother,child,love,warm', emoji: '👩‍👦❤️', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
  { title: '找朋友', lang: 'zh', youtubeId: 'hhZBT1j0LLY', imgQuery: 'friends,kids,playground', emoji: '👫🤝', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
  { title: '小燕子', lang: 'zh', youtubeId: 'hxW2QKCZP3c', imgQuery: 'swallow,spring,flowers', emoji: '🐦🌸', gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)' },
  { title: '春天在哪里', lang: 'zh', youtubeId: 'V2tqI-9YWNM', imgQuery: 'spring,flowers,meadow', emoji: '🌺🌿', gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
  { title: '让我们荡起双桨', lang: 'zh', youtubeId: 'h2Jl-PW2iCY', imgQuery: 'lake,boat,rowing,sunset', emoji: '🚣🌅', gradient: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)' },
  { title: '采蘑菇的小姑娘', lang: 'zh', youtubeId: 'oYPTCp0PKRU', imgQuery: 'mushroom,forest,girl', emoji: '🍄🌲', gradient: 'linear-gradient(135deg, #654ea3 0%, #eaafc8 100%)' },
  { title: '蜗牛与黄鹂鸟', lang: 'zh', youtubeId: 'qVNn0EHOqPM', imgQuery: 'snail,bird,tree,spring', emoji: '🐌🐦', gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)' },
  { title: '泥娃娃', lang: 'zh', youtubeId: 'eZTDSTIqpQA', imgQuery: 'clay,doll,cute,kids', emoji: '🧸🎎', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { title: '虫儿飞', lang: 'zh', youtubeId: 'IhHgEiszmMs', imgQuery: 'firefly,night,magical', emoji: '🪲✨', gradient: 'linear-gradient(135deg, #0c3483 0%, #a2b6df 100%)' },
  { title: '捉泥鳅', lang: 'zh', youtubeId: 'YXh2cHEVkLo', imgQuery: 'fish,pond,kids,summer', emoji: '🐟🌾', gradient: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)' },
  { title: '卖报歌', lang: 'zh', youtubeId: 'r-SZAfAyBek', imgQuery: 'newspaper,kid,vintage', emoji: '📰👦', gradient: 'linear-gradient(135deg, #c0392b 0%, #8e44ad 100%)' },
  { title: '外婆的澎湖湾', lang: 'zh', youtubeId: 'F-6kFMTx_s8', imgQuery: 'beach,ocean,grandmother', emoji: '🏖️👵', gradient: 'linear-gradient(135deg, #56CCF2 0%, #2F80ED 100%)' },
  { title: '新年好', lang: 'zh', youtubeId: 'bLNqnVuvb8w', imgQuery: 'chinese,new,year,lantern', emoji: '🧧🎆', gradient: 'linear-gradient(135deg, #c31432 0%, #f5af19 100%)' },
  { title: '粉刷匠', lang: 'zh', youtubeId: 'vS0_DSpwwnI', imgQuery: 'painting,house,colorful', emoji: '🖌️🏠', gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' },
  { title: '一分钱', lang: 'zh', youtubeId: 'O0nFnlKzElo', imgQuery: 'coin,police,honest', emoji: '🪙👮', gradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)' },
  { title: '丢手绢', lang: 'zh', youtubeId: 'aqVLx7fxLPc', imgQuery: 'kids,circle,game,park', emoji: '🧣🏃', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
  { title: '小白船', lang: 'zh', youtubeId: 'JBBK7O7A6vI', imgQuery: 'moon,boat,dreamy,night', emoji: '🌙⛵', gradient: 'linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)' },
  { title: '上学歌', lang: 'zh', youtubeId: 'fACPPzm16Bk', imgQuery: 'school,sunrise,backpack', emoji: '🎒🏫', gradient: 'linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)' },
  { title: '幸福拍手歌', lang: 'zh', youtubeId: 'Gj4px8yUlZM', imgQuery: 'clapping,happy,sunshine', emoji: '👏😄', gradient: 'linear-gradient(135deg, #f953c6 0%, #b91d73 100%)' },
  { title: '我是一个粉刷匠', lang: 'zh', youtubeId: 'vr1syxkb12w', imgQuery: 'painter,colorful,wall', emoji: '🎨🧑‍🎨', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { title: '小螺号', lang: 'zh', youtubeId: 'bWNaF63J6dA', imgQuery: 'sea,shell,beach,horn', emoji: '🐚🌊', gradient: 'linear-gradient(135deg, #56CCF2 0%, #2F80ED 100%)' },
  { title: '数字歌', lang: 'zh', youtubeId: 'fXmF1D6z7nw', imgQuery: 'numbers,colorful,counting', emoji: '🔢🎶', gradient: 'linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)' },
  { title: '小老鼠上灯台', lang: 'zh', youtubeId: 'qW7GJKn6RUI', imgQuery: 'mouse,lamp,cute', emoji: '🐭💡', gradient: 'linear-gradient(135deg, #834d9b 0%, #d04ed6 100%)' },
  { title: '生日快乐', lang: 'zh', youtubeId: 'lYBig5iSOhI', imgQuery: 'birthday,cake,candles', emoji: '🎂🎉', gradient: 'linear-gradient(135deg, #ff6a88 0%, #ff99ac 100%)' },
  { title: '三只小熊', lang: 'zh', youtubeId: 'FSgGy5LFqCY', imgQuery: 'bears,cute,family', emoji: '🐻🐻', gradient: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)' },
  { title: '洋娃娃和小熊跳舞', lang: 'zh', youtubeId: 'MrP8rQmn4H0', imgQuery: 'doll,bear,dancing', emoji: '🎎🐻', gradient: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)' },
  { title: '学习雷锋好榜样', lang: 'zh', youtubeId: 'gAJKb_OLVrk', imgQuery: 'hero,helping,sunshine', emoji: '⭐🫡', gradient: 'linear-gradient(135deg, #c31432 0%, #240b36 100%)' },
  { title: '茉莉花', lang: 'zh', youtubeId: 'HTLK4ROY31U', imgQuery: 'jasmine,flower,garden', emoji: '🌼🤍', gradient: 'linear-gradient(135deg, #a8e063 0%, #56ab2f 100%)' },
  { title: '鲁冰花', lang: 'zh', youtubeId: 'M8kJzHBBmDQ', imgQuery: 'lupin,flowers,mother,love', emoji: '💐💗', gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)' },
  { title: '我爱北京天安门', lang: 'zh', youtubeId: 'xaFJkJd1gg0', imgQuery: 'beijing,tiananmen,sunset', emoji: '🇨🇳❤️', gradient: 'linear-gradient(135deg, #c31432 0%, #f5af19 100%)' },
  { title: '小手拍拍', lang: 'zh', youtubeId: 'oaUGkZGOFDk', imgQuery: 'baby,hands,clapping', emoji: '👶👏', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
  { title: '大风车', lang: 'zh', youtubeId: 'SJAKzVkfvQs', imgQuery: 'windmill,colorful,sky', emoji: '🎡🌬️', gradient: 'linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)' },
  { title: '爱我你就抱抱我', lang: 'zh', youtubeId: 'mZ1T_X6yFP4', imgQuery: 'hug,parent,child,love', emoji: '🤗💕', gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)' },
  { title: '我的好妈妈', lang: 'zh', youtubeId: 'lOHB5Epl0bU', imgQuery: 'mother,daughter,warm', emoji: '👩❤️', gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
  { title: '小鸭子', lang: 'zh', youtubeId: 'YHxJ_RUVNH4', imgQuery: 'duckling,cute,pond', emoji: '🐥🌊', gradient: 'linear-gradient(135deg, #f2994a 0%, #f2c94c 100%)' },
  { title: '拍手歌', lang: 'zh', youtubeId: 'f1s7xA3A-ZA', imgQuery: 'clapping,animals,fun', emoji: '👏🐘', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
  { title: '花仙子之歌', lang: 'zh', youtubeId: 'J2FaYu03z3U', imgQuery: 'fairy,flowers,magical', emoji: '🧚🌸', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { title: '蓝精灵之歌', lang: 'zh', youtubeId: 'xnZT9w8S1FE', imgQuery: 'smurf,blue,forest,mushroom', emoji: '🔵🍄', gradient: 'linear-gradient(135deg, #4568dc 0%, #b06ab3 100%)' },
  { title: '哈巴狗', lang: 'zh', youtubeId: 'HaFz7ZL_z9k', imgQuery: 'pug,dog,cute,bone', emoji: '🐶🦴', gradient: 'linear-gradient(135deg, #C6426E 0%, #642B73 100%)' },
  { title: '铃儿响叮当', lang: 'zh', youtubeId: 'nQerdddWoyA', imgQuery: 'jingle,bells,christmas,snow', emoji: '🔔🎄', gradient: 'linear-gradient(135deg, #c31432 0%, #240b36 100%)' },
  { title: '我有一头小毛驴', lang: 'zh', youtubeId: 'J6O9L4-94c8', imgQuery: 'donkey,ride,fun', emoji: '🫏😊', gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' },
  { title: '葫芦娃', lang: 'zh', youtubeId: 'uY8nZ4G1r_E', imgQuery: 'gourd,heroes,mountain', emoji: '🫛⚔️', gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
  { title: '黑猫警长', lang: 'zh', youtubeId: '7qmS6OQFkVU', imgQuery: 'black,cat,police,hero', emoji: '🐱🚔', gradient: 'linear-gradient(135deg, #3a3a3a 0%, #8e8e8e 100%)' },
  { title: '聪明的一休', lang: 'zh', youtubeId: 'dCLuL4h9Mb4', imgQuery: 'monk,thinking,wisdom', emoji: '🧒💡', gradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)' }
];

const gridScreen = document.getElementById('grid-screen');
const traceScreen = document.getElementById('trace-screen');
const alphabetGrid = document.getElementById('alphabet-grid');
const gridBackBtn = document.getElementById('grid-back-btn');
const traceBackBtn = document.getElementById('trace-back-btn');
const traceAudioBtn = document.getElementById('trace-audio-btn');
const traceBookBtn = document.getElementById('trace-book-btn');
const traceReplayBtn = document.getElementById('trace-replay-btn');
const traceClearBtn = document.getElementById('trace-clear-btn');
const traceDoneBtn = document.getElementById('trace-done-btn');
const traceLetterLabel = document.getElementById('trace-letter-label');
const traceGuideCanvas = document.getElementById('trace-guide-canvas');
const traceDrawCanvas = document.getElementById('trace-draw-canvas');
const traceCompleteOverlay = document.getElementById('trace-complete-overlay');
const traceCompleteText = document.getElementById('trace-complete-text');
const traceNextBtn = document.getElementById('trace-next-btn');
const traceBackToGridBtn = document.getElementById('trace-back-to-grid-btn');
const celebrationCanvas = document.getElementById('celebration-canvas');
const traceWordsStrip = document.getElementById('trace-words-strip');

// 视力表相关 DOM 元素
const homeScreen = document.getElementById('home-screen');
const visionScreen = document.getElementById('vision-screen');
const visionDetailScreen = document.getElementById('vision-detail-screen');
const btnVision = document.getElementById('btn-vision');
const btnAlphabet = document.getElementById('btn-alphabet');
const btnHanzi = document.getElementById('btn-hanzi');
// 萌学汉字 DOM refs
const hanziGridScreen = document.getElementById('hanzi-grid-screen');
const hanziDetailScreen = document.getElementById('hanzi-detail-screen');
const hanziTraceScreen = document.getElementById('hanzi-trace-screen');
const hanziGridBackBtn = document.getElementById('hanzi-grid-back-btn');
const hanziSearchInput = document.getElementById('hanzi-search-input');
const hanziGrid = document.getElementById('hanzi-grid');
const hanziDetailBackBtn = document.getElementById('hanzi-detail-back-btn');
const hanziBigChar = document.getElementById('hanzi-big-char');
const hanziPinyin = document.getElementById('hanzi-pinyin');
const hanziAudioBtn = document.getElementById('hanzi-audio-btn');
const hanziTraceBtn = document.getElementById('hanzi-trace-btn');
const hanziWordsList = document.getElementById('hanzi-words-list');
const hanziTraceBackBtn = document.getElementById('hanzi-trace-back-btn');
const hanziAnimateBtn = document.getElementById('hanzi-animate-btn');
const hanziRewriteBtn = document.getElementById('hanzi-rewrite-btn');
const hanziStrokeIndicator = document.getElementById('hanzi-stroke-indicator');
const flowerCelebration = document.getElementById('flower-celebration');

let currentHanzi = null;
let hanziWriter = null;
let hanziCurrentLevel = 'all';

// 萌学儿歌 DOM refs
const btnSong = document.getElementById('btn-song');
const songScreen = document.getElementById('song-screen');
const songBackBtn = document.getElementById('song-back-btn');
const songCardArea = document.getElementById('song-card-area');
const songCard = document.getElementById('song-card');
const songBgImg = document.getElementById('song-bg-img');
const songBgFallback = document.getElementById('song-bg-fallback');
const songTitle = document.getElementById('song-title');
const songPlayBtn = document.getElementById('song-play-btn');
const songPlayerWrapper = document.getElementById('song-player-wrapper');
const songPrevBtn = document.getElementById('song-prev-btn');
const songNextBtn = document.getElementById('song-next-btn');
const songIndex = document.getElementById('song-index');
const songAutoCheck = document.getElementById('song-auto-check');

let currentSongIdx = 0;
let filteredSongs = SONG_LIST;
let songCurrentLang = 'all';
let ytPlayer = null;
let ytReady = false;
const visionBackBtn = document.getElementById('vision-back-btn');
const visionDetailBackBtn = document.getElementById('vision-detail-back-btn');
const visionDetailTitle = document.getElementById('vision-detail-title');
const visionDetailE = document.getElementById('vision-detail-e');
const visionDetailArrow = document.getElementById('vision-detail-arrow');
const visionHintText = document.getElementById('vision-hint-text');
const visionSpeakBtn = document.getElementById('vision-speak-btn');
const visionNextBtn = document.getElementById('vision-next-btn');
const visionHomeBtn = document.getElementById('vision-home-btn');
const visionEGrid = document.getElementById('vision-e-grid');
const visionTraceArea = document.getElementById('vision-trace-area');
const visionTraceGuide = document.getElementById('vision-trace-guide');
const visionTraceDraw = document.getElementById('vision-trace-draw');
const visionTraceHint = document.getElementById('vision-trace-hint');
const visionTraceRetry = document.getElementById('vision-trace-retry');

// 视力表描红状态
let visionTraceIsDrawing = false;
let visionTraceCurrentPath = [];
let visionTraceCompleted = false;

const VISION_E_DIRECTIONS = [
  { name: 'up',    chinese: '上', arrow: '↑', rotation: 270, color: '#ff6b9d', hint: '开口朝上就是上' },
  { name: 'down',  chinese: '下', arrow: '↓', rotation: 90,  color: '#4facfe', hint: '开口朝下就是下' },
  { name: 'left',  chinese: '左', arrow: '←', rotation: 180, color: '#43e97b', hint: '开口朝左就是左' },
  { name: 'right', chinese: '右', arrow: '→', rotation: 0,   color: '#ff9a56', hint: '开口朝右就是右' },
];

const VISION_DIRECTION_GUIDES = {
  up:    [{x:50, y:75}, {x:50, y:25}],
  down:  [{x:50, y:25}, {x:50, y:75}],
  left:  [{x:75, y:50}, {x:25, y:50}],
  right: [{x:25, y:50}, {x:75, y:50}],
};

function init() {
  createAlphabetGrid();
  createVisionEGrid();
  setupEventListeners();

  if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
    speechSynthesis.getVoices();
  }
}

// === 字母网格 ===

function createAlphabetGrid() {
  alphabetGrid.innerHTML = '';
  const completed = getCompletedLetters();
  ALPHABET_DATA.forEach(item => {
    const card = document.createElement('div');
    card.className = 'letter-card';
    card.dataset.letter = item.letter;
    if (completed.includes(item.letter)) card.classList.add('letter-completed');
    card.innerHTML = `
      <div class="letter-card-upper">${item.letter}</div>
      <div class="letter-card-lower">${item.lower}</div>
      ${completed.includes(item.letter) ? '<div class="letter-badge">⭐</div>' : ''}
    `;
    card.addEventListener('click', () => {
      currentLetter = item;
      openLetterTraceScreen();
    });
    alphabetGrid.appendChild(card);
  });
}

function openAlphabetScreen() {
  navigateTo(gridScreen, 'forward');
}

function goBackFromGrid() {
  goBack();
}

function pickCuteGirlVoice() {
  const voices = speechSynthesis.getVoices();
  const zh = voices.filter(v => v.lang && (v.lang.startsWith('zh') || v.lang === 'cmn-Hans-CN'));
  if (!zh.length) return null;
  // Prefer voices that are typically cute/female on common OSes
  const preferOrder = [
    /tingting/i, /mei[-\s]?jia/i, /sin[-\s]?ji/i, /yating/i, /xiaoxiao/i,
    /xiaoyi/i, /xiaomeng/i, /child/i, /kid/i, /female/i, /女/i, /婷婷/i, /小/i,
  ];
  for (const re of preferOrder) {
    const v = zh.find(v => re.test(v.name));
    if (v) return v;
  }
  return zh[0];
}

function speakChinese(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.95;
  utterance.pitch = 1.8;  // higher pitch for cute girl effect
  const v = pickCuteGirlVoice();
  if (v) utterance.voice = v;
  speechSynthesis.speak(utterance);
}

const ENCOURAGEMENTS = ['太棒了！', '写得真漂亮！', '你真厉害！', '好棒好棒！', '越来越好了！', '真是小天才！', '完美！'];
function getRandomEncouragement() {
  return ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
}

// === Progress tracking ===
const PROGRESS_KEY = 'mengxue_completed_letters';
function getCompletedLetters() {
  try {
    const data = localStorage.getItem(PROGRESS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}
function saveLetterProgress(letter) {
  const completed = getCompletedLetters();
  if (!completed.includes(letter)) {
    completed.push(letter);
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(completed));
  }
}

// === Particle celebration ===
function showParticleCelebration() {
  const canvas = celebrationCanvas;
  if (!canvas) return;
  canvas.style.display = 'block';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  const particles = [];
  const colors = ['#ff6b9d', '#ff8a80', '#a18cd1', '#ffd166', '#06d6a0', '#118ab2', '#ef476f'];
  const shapes = ['circle', 'star', 'ribbon'];
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  for (let i = 0; i < 80; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 6;
    particles.push({
      x: cx, y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      size: 4 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
      gravity: 0.08 + Math.random() * 0.04,
      life: 1,
      decay: 0.008 + Math.random() * 0.008,
    });
  }

  let animId;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach(p => {
      if (p.life <= 0) return;
      alive = true;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.99;
      p.rotation += p.rotationSpeed;
      p.life -= p.decay;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'star') {
        drawStar(ctx, 0, 0, 5, p.size, p.size * 0.5);
      } else {
        ctx.fillRect(-p.size * 1.5, -p.size * 0.3, p.size * 3, p.size * 0.6);
      }
      ctx.restore();
    });
    if (alive) {
      animId = requestAnimationFrame(animate);
    } else {
      canvas.style.display = 'none';
    }
  }
  animate();
  setTimeout(() => {
    cancelAnimationFrame(animId);
    canvas.style.display = 'none';
  }, 3000);
}

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
  let rot = Math.PI / 2 * 3;
  const step = Math.PI / spikes;
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
    rot += step;
    ctx.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fill();
}

function speakEnglish(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.7;
  utterance.pitch = 1.2;
  const voices = speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang === 'en-US');
  if (enVoice) utterance.voice = enVoice;
  speechSynthesis.speak(utterance);
}

// === 字母描红（动画演示 + 自由书写）===

function renderTraceWordsStrip() {
  if (!currentLetter) return;
  traceWordsStrip.innerHTML = '';
  currentLetter.words.forEach(w => {
    const card = document.createElement('div');
    card.className = 'trace-word-card';
    const query = encodeURIComponent(w.imgQuery || w.word);
    card.innerHTML = `
      <div class="trace-word-img-wrap">
        <span class="trace-word-emoji">${w.emoji || '🌟'}</span>
        <img src="https://source.unsplash.com/120x120/?${query}" alt="${w.word}"
             onload="this.previousElementSibling.style.display='none'"
             onerror="this.style.display='none'">
      </div>
      <div class="trace-word-en">${w.word}</div>
      <div class="trace-word-zh">${w.chinese}</div>
    `;
    card.addEventListener('click', () => speakEnglish(w.word));
    traceWordsStrip.appendChild(card);
  });
}

function openLetterTraceScreen() {
  if (!currentLetter) return;

  traceCompleteOverlay.classList.add('hidden');
  navigateTo(traceScreen, 'forward');
  traceLetterLabel.textContent = currentLetter.letter;

  renderTraceWordsStrip();
  resizeLetterTraceCanvas();

  // Initialize cat state
  catX = traceGuideCanvas.width / 2;
  catY = traceGuideCanvas.height * 0.3;
  catAngle = 0;
  catExpression = 'normal';
  lastDeviationFeedback = 0;

  drawLetterTraceGuide();

  setTimeout(() => animateLetterWriting(), 400);
}

function exitLetterTraceScreen() {
  letterTraceAnimating = false;
  createAlphabetGrid();
  goBack();
}

function resizeLetterTraceCanvas() {
  const container = traceGuideCanvas.parentElement;
  const headerEl = document.querySelector('.hanzi-trace-header');
  const controlsEl = document.querySelector('.hanzi-trace-controls');
  const headerH = headerEl ? headerEl.offsetHeight : 80;
  const controlsH = controlsEl ? controlsEl.offsetHeight : 80;
  const stripEl = document.querySelector('.trace-words-strip');
  const stripH = stripEl ? stripEl.offsetHeight : 0;
  const availableH = window.innerHeight - headerH - controlsH - stripH - 40;
  const availableW = window.innerWidth - 40;
  const size = Math.min(availableW, availableH, 500);

  traceGuideCanvas.width = size;
  traceGuideCanvas.height = size;
  traceGuideCanvas.style.width = size + 'px';
  traceGuideCanvas.style.height = size + 'px';
  traceDrawCanvas.width = size;
  traceDrawCanvas.height = size;
  traceDrawCanvas.style.width = size + 'px';
  traceDrawCanvas.style.height = size + 'px';
}

function drawLetterTraceGuide() {
  const ctx = traceGuideCanvas.getContext('2d');
  const w = traceGuideCanvas.width;
  const h = traceGuideCanvas.height;
  ctx.clearRect(0, 0, w, h);

  // Draw faint letter outline as reference
  const fontSize = h * 0.78;
  ctx.font = `bold ${fontSize}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.save();
  ctx.globalAlpha = 0.15;
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#ff6b9d');
  grad.addColorStop(0.5, '#ff8a80');
  grad.addColorStop(1, '#a18cd1');
  ctx.fillStyle = grad;
  ctx.fillText(currentLetter.letter, w / 2, h / 2);
  ctx.restore();

  // Draw guide lines (four-line grid)
  ctx.strokeStyle = 'rgba(255, 150, 180, 0.3)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([8, 8]);
  [0.15, 0.5, 0.85].forEach(ratio => {
    ctx.beginPath();
    ctx.moveTo(w * 0.05, h * ratio);
    ctx.lineTo(w * 0.95, h * ratio);
    ctx.stroke();
  });
  ctx.strokeStyle = 'rgba(255, 150, 180, 0.2)';
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.05);
  ctx.lineTo(w * 0.5, h * 0.95);
  ctx.stroke();
  ctx.setLineDash([]);

  // Draw cat
  drawCat(ctx, catX, catY, catAngle, catExpression);
}

function animateLetterWriting() {
  if (letterTraceAnimating) return;
  letterTraceAnimating = true;

  const ctx = traceDrawCanvas.getContext('2d');
  const w = traceDrawCanvas.width;
  const h = traceDrawCanvas.height;
  ctx.clearRect(0, 0, w, h);

  const fontSize = h * 0.78;
  const totalFrames = 60;
  let frame = 0;

  function drawFrame() {
    if (!letterTraceAnimating) return;

    ctx.clearRect(0, 0, w, h);
    ctx.save();
    const revealHeight = (frame / totalFrames) * h;
    ctx.beginPath();
    ctx.rect(0, 0, w, revealHeight);
    ctx.clip();

    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#ff6b9d');
    grad.addColorStop(1, '#a18cd1');
    ctx.fillStyle = grad;
    ctx.globalAlpha = 0.6;
    ctx.fillText(currentLetter.letter, w / 2, h / 2);
    ctx.restore();

    // Move cat along the reveal line
    catX = w / 2;
    catY = revealHeight;
    catAngle = Math.PI / 2;
    catExpression = 'normal';
    drawLetterTraceGuide();

    frame++;
    if (frame <= totalFrames) {
      requestAnimationFrame(drawFrame);
    } else {
      letterTraceAnimating = false;
      catX = w / 2;
      catY = h * 0.3;
      catAngle = 0;
      catExpression = 'happy';
      drawLetterTraceGuide();
      setTimeout(() => {
        ctx.clearRect(0, 0, w, h);
        catExpression = 'normal';
        drawLetterTraceGuide();
      }, 800);
    }
  }

  requestAnimationFrame(drawFrame);
}

function clearLetterTrace() {
  const ctx = traceDrawCanvas.getContext('2d');
  ctx.clearRect(0, 0, traceDrawCanvas.width, traceDrawCanvas.height);
}

function completeLetterTrace() {
  const msg = getRandomEncouragement();
  saveLetterProgress(currentLetter.letter);
  showParticleCelebration();
  speakChinese(msg);
  traceCompleteText.textContent = msg;
  traceCompleteOverlay.classList.remove('hidden');
}

// Letter trace drawing handlers
function startLetterDraw(e) {
  if (letterTraceAnimating) return;
  e.preventDefault();
  letterTraceDrawing = true;
  const pos = getLetterTracePos(e);
  letterTraceLastX = pos.x;
  letterTraceLastY = pos.y;
}

function doLetterDraw(e) {
  if (!letterTraceDrawing || letterTraceAnimating) return;
  e.preventDefault();
  const pos = getLetterTracePos(e);
  const ctx = traceDrawCanvas.getContext('2d');
  ctx.strokeStyle = '#ff6b9d';
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(letterTraceLastX, letterTraceLastY);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
  letterTraceLastX = pos.x;
  letterTraceLastY = pos.y;

  if (!isPointOnLetter(pos.x, pos.y)) {
    triggerDeviationFeedback();
  }
}

function stopLetterDraw(e) {
  letterTraceDrawing = false;
}

function getLetterTracePos(e) {
  const rect = traceDrawCanvas.getBoundingClientRect();
  const touch = e.touches ? e.touches[0] : e;
  const scaleX = traceDrawCanvas.width / rect.width;
  const scaleY = traceDrawCanvas.height / rect.height;
  return {
    x: (touch.clientX - rect.left) * scaleX,
    y: (touch.clientY - rect.top) * scaleY
  };
}

// === Guide Cat ===
const CAT_SIZE = 28;
let catX = 0, catY = 0, catAngle = 0, catExpression = 'normal';

// === Deviation feedback ===
let lastDeviationFeedback = 0;
const DEVIATION_COOLDOWN = 500;

function isPointOnLetter(x, y) {
  const ctx = traceGuideCanvas.getContext('2d');
  if (x < 0 || y < 0 || x >= traceGuideCanvas.width || y >= traceGuideCanvas.height) return false;
  try {
    const pixel = ctx.getImageData(Math.round(x), Math.round(y), 1, 1).data;
    return pixel[3] > 20;
  } catch {
    return true;
  }
}

function triggerDeviationFeedback() {
  const now = Date.now();
  if (now - lastDeviationFeedback < DEVIATION_COOLDOWN) return;
  lastDeviationFeedback = now;
  if (navigator.vibrate) navigator.vibrate(50);
  catExpression = 'lookback';
  drawLetterTraceGuide();
  setTimeout(() => {
    if (catExpression === 'lookback') {
      catExpression = 'normal';
      drawLetterTraceGuide();
    }
  }, DEVIATION_COOLDOWN);
}

function drawCat(ctx, x, y, angle, expression) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  // Body
  ctx.beginPath();
  ctx.ellipse(-CAT_SIZE * 0.4, 0, CAT_SIZE * 0.5, CAT_SIZE * 0.35, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFD166';
  ctx.fill();

  // Head
  ctx.beginPath();
  ctx.arc(CAT_SIZE * 0.3, 0, CAT_SIZE * 0.55, 0, Math.PI * 2);
  ctx.fillStyle = '#FFD166';
  ctx.fill();

  // Ears
  ctx.beginPath();
  ctx.moveTo(CAT_SIZE * 0.05, -CAT_SIZE * 0.45);
  ctx.lineTo(CAT_SIZE * -0.05, -CAT_SIZE * 0.85);
  ctx.lineTo(CAT_SIZE * 0.3, -CAT_SIZE * 0.55);
  ctx.fillStyle = '#FFD166';
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(CAT_SIZE * 0.05, -CAT_SIZE * 0.5);
  ctx.lineTo(CAT_SIZE * 0.02, -CAT_SIZE * 0.75);
  ctx.lineTo(CAT_SIZE * 0.25, -CAT_SIZE * 0.55);
  ctx.fillStyle = '#FFB088';
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(CAT_SIZE * 0.05, CAT_SIZE * 0.45);
  ctx.lineTo(CAT_SIZE * -0.05, CAT_SIZE * 0.85);
  ctx.lineTo(CAT_SIZE * 0.3, CAT_SIZE * 0.55);
  ctx.fillStyle = '#FFD166';
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(CAT_SIZE * 0.05, CAT_SIZE * 0.5);
  ctx.lineTo(CAT_SIZE * 0.02, CAT_SIZE * 0.75);
  ctx.lineTo(CAT_SIZE * 0.25, CAT_SIZE * 0.55);
  ctx.fillStyle = '#FFB088';
  ctx.fill();

  // Eyes
  const eyeY = -CAT_SIZE * 0.12;
  const eyeY2 = CAT_SIZE * 0.12;
  const eyeX = CAT_SIZE * 0.45;
  if (expression === 'happy') {
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(eyeX, eyeY, 4, Math.PI * 0.1, Math.PI * 0.9);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(eyeX, eyeY2, 4, Math.PI * 0.1, Math.PI * 0.9);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.arc(eyeX, eyeY, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#333';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(eyeX, eyeY2, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#333';
    ctx.fill();
  }

  // Mouth / nose
  if (expression === 'happy') {
    ctx.beginPath();
    ctx.arc(CAT_SIZE * 0.4, 0, 5, 0, Math.PI);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.moveTo(CAT_SIZE * 0.58, -2);
    ctx.lineTo(CAT_SIZE * 0.58, 2);
    ctx.lineTo(CAT_SIZE * 0.63, 0);
    ctx.fillStyle = '#FFB088';
    ctx.fill();
  }

  // Whiskers
  ctx.strokeStyle = '#ccc';
  ctx.lineWidth = 1;
  [-1, 1].forEach(side => {
    ctx.beginPath();
    ctx.moveTo(CAT_SIZE * 0.5, side * CAT_SIZE * 0.05);
    ctx.lineTo(CAT_SIZE * 0.85, side * CAT_SIZE * 0.2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(CAT_SIZE * 0.5, side * CAT_SIZE * 0.15);
    ctx.lineTo(CAT_SIZE * 0.85, side * CAT_SIZE * 0.35);
    ctx.stroke();
  });

  ctx.restore();
}

function lightenColor(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1);
}

// === 主页导航 ===

// Screen navigation with slide transitions
let currentScreen = homeScreen;
const screenHistory = []; // stack for back navigation

function navigateTo(targetScreen, direction = 'forward') {
  if (targetScreen === currentScreen) return;

  const outgoing = currentScreen;

  // Show target off-screen
  targetScreen.style.display = 'block';
  targetScreen.classList.remove('active', 'slide-out-left', 'slide-out-right');

  if (direction === 'forward') {
    targetScreen.style.transform = 'translateX(100%)';
    targetScreen.style.opacity = '0';
  } else {
    targetScreen.style.transform = 'translateX(-30%)';
    targetScreen.style.opacity = '0';
  }

  // Force reflow
  targetScreen.offsetHeight;

  // Animate in
  targetScreen.style.transform = 'translateX(0)';
  targetScreen.style.opacity = '1';
  targetScreen.classList.add('active');
  // Clear inline display so CSS .screen.active or screen-specific active rules take effect
  targetScreen.style.display = '';

  // Animate out
  if (direction === 'forward') {
    outgoing.classList.add('slide-out-left');
    outgoing.classList.remove('active');
  } else {
    outgoing.classList.add('slide-out-right');
    outgoing.classList.remove('active');
  }

  setTimeout(() => {
    outgoing.style.display = 'none';
    outgoing.classList.remove('slide-out-left', 'slide-out-right');
    outgoing.style.transform = '';
    outgoing.style.opacity = '';
  }, 310);

  if (direction === 'forward') {
    screenHistory.push(outgoing);
  }
  currentScreen = targetScreen;
}

function goBack() {
  const prev = screenHistory.pop();
  if (prev) {
    navigateTo(prev, 'back');
  }
}

function goToHome() {
  screenHistory.length = 0;
  navigateTo(homeScreen, 'back');
}

function openVisionScreen() {
  navigateTo(visionScreen, 'forward');
}

function hideAllScreens() {
  // Legacy fallback — used during init only
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active', 'slide-out-left', 'slide-out-right');
    s.style.display = 'none';
    s.style.transform = '';
    s.style.opacity = '';
  });
  homeScreen.classList.add('active');
  homeScreen.style.display = 'block';
  currentScreen = homeScreen;
  screenHistory.length = 0;
}

// === 视力表学习 ===
function createVisionEGrid() {
  visionEGrid.innerHTML = '';
  VISION_E_DIRECTIONS.forEach(dir => {
    const card = document.createElement('div');
    card.className = 'vision-e-card';
    card.style.background = `linear-gradient(135deg, ${dir.color} 0%, ${lightenColor(dir.color, 25)} 100%)`;

    const eLetter = document.createElement('div');
    eLetter.className = 'vision-e-letter';
    eLetter.textContent = 'E';
    eLetter.style.transform = `rotate(${dir.rotation}deg)`;
    eLetter.style.display = 'inline-block';

    const label = document.createElement('div');
    label.className = 'vision-e-label';
    label.textContent = dir.chinese;

    card.appendChild(eLetter);
    card.appendChild(label);
    card.addEventListener('click', () => openVisionDetail(dir.name));
    visionEGrid.appendChild(card);
  });
}

function openVisionDetail(directionName) {
  const dir = VISION_E_DIRECTIONS.find(d => d.name === directionName);
  if (!dir) return;
  currentVisionDirection = dir;

  navigateTo(visionDetailScreen, 'forward');

  visionDetailTitle.textContent = `向${dir.chinese} ${dir.arrow}`;
  visionDetailE.style.transform = `rotate(${dir.rotation}deg)`;
  visionDetailE.style.color = dir.color;

  visionDetailArrow.textContent = dir.arrow;
  visionDetailArrow.style.color = dir.color;
  visionDetailArrow.className = 'vision-detail-arrow arrow-' + dir.name;

  visionHintText.textContent = dir.hint;

  // Celebration animation
  const wrapper = document.querySelector('.vision-detail-e-wrapper');
  wrapper.classList.remove('celebrating');
  void wrapper.offsetWidth;
  wrapper.classList.add('celebrating');

  // Auto-speak
  setTimeout(() => speakDirection(dir.chinese), 300);

  // 初始化描红画布
  setTimeout(() => initVisionTrace(), 50);
}

function speakDirection(text) {
  speakChinese(text);
}

function nextRandomDirection() {
  const others = VISION_E_DIRECTIONS.filter(d => d.name !== currentVisionDirection.name);
  const next = others[Math.floor(Math.random() * others.length)];
  openVisionDetail(next.name);
}

function exitVisionDetail() {
  goBack();
}

function exitVisionScreen() {
  goToHome();
}

// === 视力表方向描红 ===

function vToX(x) { return (x / 100) * visionTraceGuide.width; }
function vToY(y) { return (y / 100) * visionTraceGuide.height; }

function resizeVisionTraceCanvas() {
  const container = visionTraceArea;
  const size = container.clientWidth;
  visionTraceGuide.width = size;
  visionTraceGuide.height = size;
  visionTraceGuide.style.width = size + 'px';
  visionTraceGuide.style.height = size + 'px';
  visionTraceDraw.width = size;
  visionTraceDraw.height = size;
  visionTraceDraw.style.width = size + 'px';
  visionTraceDraw.style.height = size + 'px';
}

function initVisionTrace() {
  if (!currentVisionDirection) return;
  visionTraceIsDrawing = false;
  visionTraceCurrentPath = [];
  visionTraceCompleted = false;
  visionTraceHint.style.opacity = '1';
  visionTraceRetry.classList.remove('show');

  resizeVisionTraceCanvas();
  drawVisionTraceGuide();
}

function drawVisionTraceGuide() {
  const guide = VISION_DIRECTION_GUIDES[currentVisionDirection.name];
  if (!guide) return;

  const ctx = visionTraceGuide.getContext('2d');
  ctx.clearRect(0, 0, visionTraceGuide.width, visionTraceGuide.height);

  // 画引导虚线
  ctx.save();
  ctx.strokeStyle = 'rgba(200, 200, 200, 0.6)';
  ctx.lineWidth = 16;
  ctx.lineCap = 'round';
  ctx.setLineDash([12, 8]);
  ctx.beginPath();
  ctx.moveTo(vToX(guide[0].x), vToY(guide[0].y));
  ctx.lineTo(vToX(guide[1].x), vToY(guide[1].y));
  ctx.stroke();
  ctx.restore();

  // 画起点圆点
  const sx = vToX(guide[0].x), sy = vToY(guide[0].y);
  ctx.save();
  ctx.beginPath();
  ctx.arc(sx, sy, 16, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 107, 157, 0.3)';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(sx, sy, 10, 0, Math.PI * 2);
  ctx.fillStyle = '#ff6b9d';
  ctx.fill();
  ctx.restore();

  // 画方向提示点（渐隐圆点）
  const x1 = sx, y1 = sy;
  const x2 = vToX(guide[1].x), y2 = vToY(guide[1].y);
  ctx.save();
  const numDots = 5;
  const dx = x2 - x1, dy = y2 - y1;
  for (let i = 1; i <= numDots; i++) {
    const t = i / (numDots + 1) * 0.5;
    const dotX = x1 + dx * t, dotY = y1 + dy * t;
    const radius = 5 - i * 0.6;
    const alpha = 0.5 - i * 0.07;
    ctx.beginPath();
    ctx.arc(dotX, dotY, Math.max(radius, 1.5), 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 107, 157, ${alpha})`;
    ctx.fill();
  }
  ctx.restore();
}

function startVisionTrace(e) {
  if (visionTraceCompleted) return;
  e.preventDefault();

  const rect = visionTraceDraw.getBoundingClientRect();
  const touch = e.touches ? e.touches[0] : e;
  const scaleX = visionTraceDraw.width / rect.width;
  const scaleY = visionTraceDraw.height / rect.height;
  const x = (touch.clientX - rect.left) * scaleX;
  const y = (touch.clientY - rect.top) * scaleY;

  const guide = VISION_DIRECTION_GUIDES[currentVisionDirection.name];
  const sx = vToX(guide[0].x), sy = vToY(guide[0].y);
  const dist = Math.sqrt((x - sx) ** 2 + (y - sy) ** 2);

  // 宽松起点检测（适合幼儿）
  if (dist > visionTraceGuide.width * 0.35) return;

  visionTraceIsDrawing = true;
  visionTraceCurrentPath = [{x, y}];
  visionTraceHint.style.opacity = '0';

  const ctx = visionTraceDraw.getContext('2d');
  ctx.clearRect(0, 0, visionTraceDraw.width, visionTraceDraw.height);
}

function drawVisionTrace(e) {
  if (!visionTraceIsDrawing) return;
  e.preventDefault();

  const rect = visionTraceDraw.getBoundingClientRect();
  const touch = e.touches ? e.touches[0] : e;
  const scaleX = visionTraceDraw.width / rect.width;
  const scaleY = visionTraceDraw.height / rect.height;
  const x = (touch.clientX - rect.left) * scaleX;
  const y = (touch.clientY - rect.top) * scaleY;

  const ctx = visionTraceDraw.getContext('2d');
  const last = visionTraceCurrentPath[visionTraceCurrentPath.length - 1];

  ctx.strokeStyle = currentVisionDirection.color;
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(last.x, last.y);
  ctx.lineTo(x, y);
  ctx.stroke();

  visionTraceCurrentPath.push({x, y});
}

function stopVisionTrace() {
  if (!visionTraceIsDrawing) return;
  visionTraceIsDrawing = false;

  if (visionTraceCurrentPath.length < 5) {
    clearVisionTraceDraw();
    return;
  }

  if (checkVisionDirection()) {
    // 成功
    visionTraceCompleted = true;
    showParticleCelebration();
    speakChinese('太棒了');
  } else {
    // 失败 - shake + 再试一次
    visionTraceArea.classList.add('shake');
    visionTraceRetry.classList.add('show');
    setTimeout(() => {
      visionTraceArea.classList.remove('shake');
      visionTraceRetry.classList.remove('show');
      clearVisionTraceDraw();
      visionTraceHint.style.opacity = '1';
    }, 800);
  }
}

function checkVisionDirection() {
  const path = visionTraceCurrentPath;
  const guide = VISION_DIRECTION_GUIDES[currentVisionDirection.name];
  const canvasSize = visionTraceGuide.width;

  // 起→终向量
  const start = path[0];
  const end = path[path.length - 1];
  const userDx = end.x - start.x;
  const userDy = end.y - start.y;

  // 引导向量
  const guideDx = vToX(guide[1].x) - vToX(guide[0].x);
  const guideDy = vToY(guide[1].y) - vToY(guide[0].y);

  // 方向检查：点积 > 0
  const dot = userDx * guideDx + userDy * guideDy;
  if (dot <= 0) return false;

  // 路径长度足够（主轴跨越 25%+）
  const userLen = Math.sqrt(userDx * userDx + userDy * userDy);
  if (userLen < canvasSize * 0.25) return false;

  return true;
}

function clearVisionTraceDraw() {
  const ctx = visionTraceDraw.getContext('2d');
  ctx.clearRect(0, 0, visionTraceDraw.width, visionTraceDraw.height);
  visionTraceCurrentPath = [];
}

function setupEventListeners() {
  btnVision.addEventListener('click', openVisionScreen);
  btnAlphabet.addEventListener('click', openAlphabetScreen);
  btnHanzi.addEventListener('click', openHanziGridScreen);
  // 萌学字母事件
  gridBackBtn.addEventListener('click', goBackFromGrid);
  traceBackBtn.addEventListener('click', exitLetterTraceScreen);
  traceAudioBtn.addEventListener('click', () => {
    if (currentLetter) speakEnglish(currentLetter.letter);
  });
  traceBookBtn.addEventListener('click', () => {
    if (currentLetter) speakEnglish(currentLetter.words[0].word);
  });
  traceNextBtn.addEventListener('click', () => {
    traceCompleteOverlay.classList.add('hidden');
    const idx = ALPHABET_DATA.findIndex(a => a.letter === currentLetter.letter);
    const nextIdx = (idx + 1) % ALPHABET_DATA.length;
    currentLetter = ALPHABET_DATA[nextIdx];
    // Re-run the open flow without pushing a new screen
    traceLetterLabel.textContent = currentLetter.letter;
    renderTraceWordsStrip();
    resizeLetterTraceCanvas();
    catX = traceGuideCanvas.width / 2;
    catY = traceGuideCanvas.height * 0.3;
    catAngle = 0;
    catExpression = 'normal';
    lastDeviationFeedback = 0;
    clearLetterTrace();
    drawLetterTraceGuide();
    setTimeout(() => animateLetterWriting(), 400);
  });
  traceBackToGridBtn.addEventListener('click', () => {
    traceCompleteOverlay.classList.add('hidden');
    exitLetterTraceScreen();
  });
  traceReplayBtn.addEventListener('click', () => {
    clearLetterTrace();
    animateLetterWriting();
  });
  traceClearBtn.addEventListener('click', clearLetterTrace);
  traceDoneBtn.addEventListener('click', completeLetterTrace);

  traceDrawCanvas.addEventListener('mousedown', startLetterDraw);
  traceDrawCanvas.addEventListener('mousemove', doLetterDraw);
  traceDrawCanvas.addEventListener('mouseup', stopLetterDraw);
  traceDrawCanvas.addEventListener('mouseout', stopLetterDraw);
  traceDrawCanvas.addEventListener('touchstart', startLetterDraw, { passive: false });
  traceDrawCanvas.addEventListener('touchmove', doLetterDraw, { passive: false });
  traceDrawCanvas.addEventListener('touchend', stopLetterDraw);
  traceDrawCanvas.addEventListener('touchcancel', stopLetterDraw);
  traceScreen.addEventListener('touchmove', e => e.preventDefault(), { passive: false });

  visionBackBtn.addEventListener('click', exitVisionScreen);
  visionDetailBackBtn.addEventListener('click', exitVisionDetail);
  visionSpeakBtn.addEventListener('click', () => {
    if (currentVisionDirection) speakDirection(currentVisionDirection.chinese);
  });
  visionNextBtn.addEventListener('click', nextRandomDirection);
  visionHomeBtn.addEventListener('click', exitVisionDetail);

  // 视力表描红事件
  visionTraceDraw.addEventListener('mousedown', startVisionTrace);
  visionTraceDraw.addEventListener('mousemove', drawVisionTrace);
  visionTraceDraw.addEventListener('mouseup', stopVisionTrace);
  visionTraceDraw.addEventListener('mouseout', stopVisionTrace);

  visionTraceDraw.addEventListener('touchstart', startVisionTrace, { passive: false });
  visionTraceDraw.addEventListener('touchmove', drawVisionTrace, { passive: false });
  visionTraceDraw.addEventListener('touchend', stopVisionTrace);
  visionTraceDraw.addEventListener('touchcancel', stopVisionTrace);

  // 萌学儿歌事件
  btnSong.addEventListener('click', openSongScreen);
  songBackBtn.addEventListener('click', () => {
    destroySongPlayer();
    goToHome();
  });
  songPlayBtn.addEventListener('click', toggleSongPlayer);
  songPrevBtn.addEventListener('click', () => switchSong(-1));
  songNextBtn.addEventListener('click', () => switchSong(1));

  document.querySelectorAll('.song-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.song-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      songCurrentLang = tab.dataset.lang;
      filterSongs();
    });
  });

  // Song card swipe
  let songTouchStartX = 0, songTouchStartY = 0;
  songCardArea.addEventListener('touchstart', e => {
    songTouchStartX = e.touches[0].clientX;
    songTouchStartY = e.touches[0].clientY;
  }, { passive: true });
  songCardArea.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - songTouchStartX;
    const dy = e.changedTouches[0].clientY - songTouchStartY;
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 50) {
      // Up/down swipe: switch song
      switchSong(dy < 0 ? 1 : -1, dy < 0 ? 'up' : 'down');
    } else if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      // Left/right swipe: switch category
      const tabs = ['all', 'en', 'zh'];
      const curIdx = tabs.indexOf(songCurrentLang);
      const newIdx = dx < 0 ? Math.min(curIdx + 1, 2) : Math.max(curIdx - 1, 0);
      if (newIdx !== curIdx) {
        songCurrentLang = tabs[newIdx];
        document.querySelectorAll('.song-tab').forEach(t => t.classList.remove('active'));
        document.querySelector(`.song-tab[data-lang="${songCurrentLang}"]`).classList.add('active');
        filterSongs();
      }
    }
  }, { passive: true });

  // 萌学汉字事件
  hanziGridBackBtn.addEventListener('click', () => goToHome());
  hanziSearchInput.addEventListener('input', filterHanziList);

  document.querySelectorAll('.hanzi-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.hanzi-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      hanziCurrentLevel = tab.dataset.level;
      filterHanziList();
    });
  });

  hanziDetailBackBtn.addEventListener('click', () => goBack());
  hanziAudioBtn.addEventListener('click', () => {
    if (currentHanzi) speakHanzi(currentHanzi.char);
  });
  hanziTraceBtn.addEventListener('click', openHanziTraceScreen);

  hanziTraceBackBtn.addEventListener('click', exitHanziTraceScreen);
  hanziAnimateBtn.addEventListener('click', () => {
    if (hanziWriter) {
      hanziWriter.cancelQuiz();
      hanziStrokeIndicator.textContent = '看笔顺...';
      hanziWriter.animateCharacter({
        onComplete: function() {
          startHanziQuiz();
        }
      });
    }
  });
  hanziRewriteBtn.addEventListener('click', () => {
    if (hanziWriter) {
      hanziWriter.cancelQuiz();
      const target = document.getElementById('hanzi-writer-target');
      target.innerHTML = '';
      openHanziTraceScreen();
    }
  });

  // Prevent scroll on hanzi trace screen
  hanziTraceScreen.addEventListener('touchmove', e => e.preventDefault(), { passive: false });

  window.addEventListener('resize', () => {
    if (traceScreen.classList.contains('active')) {
      resizeLetterTraceCanvas();
      drawLetterTraceGuide();
    }
    if (visionDetailScreen.classList.contains('active')) {
      initVisionTrace();
    }
    if (hanziTraceScreen.classList.contains('active') && currentHanzi) {
      openHanziTraceScreen();
    }
  });
}

// === 萌学汉字 ===

function openHanziGridScreen() {
  navigateTo(hanziGridScreen, 'forward');
  hanziSearchInput.value = '';
  hanziCurrentLevel = 'all';
  document.querySelectorAll('.hanzi-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.hanzi-tab[data-level="all"]').classList.add('active');
  createHanziGrid(HANZI_LIST);
}

function createHanziGrid(list) {
  hanziGrid.innerHTML = '';
  list.forEach(item => {
    const card = document.createElement('div');
    card.className = 'hanzi-card';
    card.innerHTML = `
      <div class="hanzi-card-char">${item.char}</div>
      <div class="hanzi-card-pinyin">${item.pinyin}</div>
    `;
    card.addEventListener('click', () => openHanziDetail(item));
    hanziGrid.appendChild(card);
  });
}

function filterHanziList() {
  const query = hanziSearchInput.value.trim().toLowerCase();
  let filtered = HANZI_LIST;

  if (hanziCurrentLevel !== 'all') {
    filtered = filtered.filter(h => h.level === parseInt(hanziCurrentLevel));
  }

  if (query) {
    filtered = filtered.filter(h =>
      h.char === query ||
      h.pinyin.toLowerCase().startsWith(query) ||
      h.pinyin.toLowerCase().replace(/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/g, c => {
        return 'aaaaeeeeiiiioooouuuuvvvv'['āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ'.indexOf(c)] || c;
      }).startsWith(query)
    );
  }

  createHanziGrid(filtered);
}

function openHanziDetail(hanziItem) {
  currentHanzi = hanziItem;

  navigateTo(hanziDetailScreen, 'forward');

  hanziPinyin.textContent = hanziItem.pinyin;
  hanziBigChar.textContent = hanziItem.char;

  // Render word cards
  hanziWordsList.innerHTML = '';
  const gradients = [
    'linear-gradient(135deg, #74b9ff, #0984e3)',
    'linear-gradient(135deg, #a29bfe, #6c5ce7)',
    'linear-gradient(135deg, #55efc4, #00b894)',
    'linear-gradient(135deg, #fd79a8, #e84393)',
    'linear-gradient(135deg, #fdcb6e, #f39c12)'
  ];

  hanziItem.words.forEach((w, i) => {
    const card = document.createElement('div');
    card.className = 'hanzi-word-card';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'hanzi-word-img';
    imgDiv.style.background = gradients[i % gradients.length];

    const img = document.createElement('img');
    img.src = `https://source.unsplash.com/200x200/?${encodeURIComponent(w.imgQuery)}`;
    img.alt = w.word;
    img.onerror = function() {
      this.style.display = 'none';
      const fallback = document.createElement('div');
      fallback.className = 'emoji-fallback';
      fallback.textContent = w.emoji;
      imgDiv.appendChild(fallback);
    };
    imgDiv.appendChild(img);

    const info = document.createElement('div');
    info.className = 'hanzi-word-info';
    info.innerHTML = `
      <div class="hanzi-word-text">${w.word}</div>
      <div class="hanzi-word-pinyin">${w.pinyin}</div>
    `;

    card.appendChild(imgDiv);
    card.appendChild(info);
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => speakHanzi(w.word));
    hanziWordsList.appendChild(card);
  });

  // Auto-play pronunciation
  setTimeout(() => speakHanzi(hanziItem.char), 300);
}

function speakHanzi(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.7;
  utterance.pitch = 1.1;
  const voices = speechSynthesis.getVoices();
  const zhVoice = voices.find(v => v.lang.startsWith('zh'));
  if (zhVoice) utterance.voice = zhVoice;
  speechSynthesis.speak(utterance);
}

function openHanziTraceScreen() {
  if (!currentHanzi) return;

  navigateTo(hanziTraceScreen, 'forward');

  // Clear previous writer
  const target = document.getElementById('hanzi-writer-target');
  target.innerHTML = '';

  // Wait for layout to complete
  setTimeout(() => {
    const containerWidth = target.clientWidth || 300;
    const size = Math.min(containerWidth, 300);

    hanziWriter = HanziWriter.create('hanzi-writer-target', currentHanzi.char, {
      width: size,
      height: size,
      padding: 20,
      showCharacter: false,
      showOutline: true,
      strokeColor: '#333',
      outlineColor: '#ccc',
      drawingColor: '#ff6b9d',
      drawingWidth: 6,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 300,
      highlightColor: '#a18cd1',
      showHintAfterMisses: 1,
      highlightOnComplete: true,
      charDataLoader: function(char, onComplete) {
        fetch(`lib/hanzi-data/${encodeURIComponent(char)}.json`)
          .then(r => r.json())
          .then(onComplete);
      }
    });

    hanziStrokeIndicator.textContent = '看笔顺...';

    // Animate first, then start quiz
    hanziWriter.animateCharacter({
      onComplete: function() {
        startHanziQuiz();
      }
    });
  }, 200);
}

function startHanziQuiz() {
  hanziStrokeIndicator.textContent = '第 1 笔';

  hanziWriter.quiz({
    leniency: 2.5,
    showHintAfterMisses: 1,
    highlightOnComplete: true,

    onCorrectStroke: function(data) {
      const strokeNum = data.strokeNum + 1;
      const remaining = data.strokesRemaining;
      if (remaining > 0) {
        hanziStrokeIndicator.textContent = `第 ${strokeNum + 1} 笔`;
      } else {
        hanziStrokeIndicator.textContent = '完成！';
      }
    },

    onComplete: function(data) {
      showFlowerCelebration();
    }
  });
}

function showFlowerCelebration() {
  // Falling flowers
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      const flower = document.createElement('div');
      flower.className = 'falling-flower';
      flower.textContent = '🌺';
      flower.style.left = Math.random() * 100 + 'vw';
      flower.style.animationDuration = (2 + Math.random() * 2) + 's';
      flower.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
      document.body.appendChild(flower);
      setTimeout(() => flower.remove(), 4000);
    }, i * 150);
  }

  // Show celebration popup
  flowerCelebration.classList.remove('hidden');
  speakHanzi('太棒了');

  setTimeout(() => {
    flowerCelebration.classList.add('hidden');
    exitHanziTraceScreen();
  }, 2500);
}

function exitHanziTraceScreen() {
  if (hanziWriter) {
    hanziWriter.cancelQuiz();
    hanziWriter = null;
  }
  const target = document.getElementById('hanzi-writer-target');
  target.innerHTML = '';

  goBack();
}

// === 萌学儿歌 ===

function openSongScreen() {
  navigateTo(songScreen, 'forward');
  songCurrentLang = 'all';
  document.querySelectorAll('.song-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.song-tab[data-lang="all"]').classList.add('active');
  filteredSongs = SONG_LIST;
  currentSongIdx = 0;
  renderSongCard();
}

function filterSongs() {
  destroySongPlayer();
  filteredSongs = songCurrentLang === 'all'
    ? SONG_LIST
    : SONG_LIST.filter(s => s.lang === songCurrentLang);
  currentSongIdx = 0;
  renderSongCard();
}

function renderSongCard() {
  if (filteredSongs.length === 0) {
    songTitle.textContent = '暂无歌曲';
    songBgImg.style.display = 'none';
    songBgFallback.style.display = 'none';
    songIndex.textContent = '0/0';
    return;
  }

  const song = filteredSongs[currentSongIdx];
  songTitle.textContent = song.title;
  songIndex.textContent = `${currentSongIdx + 1}/${filteredSongs.length}`;

  // Background image
  songBgImg.style.display = 'block';
  songBgFallback.style.display = 'none';
  songBgImg.src = `https://source.unsplash.com/800x600/?${encodeURIComponent(song.imgQuery)}`;
  songBgImg.onerror = function() {
    this.style.display = 'none';
    songBgFallback.textContent = song.emoji;
    songBgFallback.style.display = 'flex';
    songBgFallback.style.background = song.gradient;
  };

  // Reset player state
  songPlayBtn.textContent = '▶';
  songPlayBtn.classList.remove('playing');
  songPlayerWrapper.classList.add('hidden');
}

function switchSong(dir, animDir) {
  const newIdx = currentSongIdx + dir;
  if (newIdx < 0 || newIdx >= filteredSongs.length) return;

  destroySongPlayer();

  // Animate out
  if (animDir) {
    songCard.classList.add(animDir === 'up' ? 'slide-up' : 'slide-down');
    setTimeout(() => {
      currentSongIdx = newIdx;
      renderSongCard();
      songCard.classList.remove('slide-up', 'slide-down');
      songCard.classList.add(animDir === 'up' ? 'slide-in-up' : 'slide-in-down');
      setTimeout(() => songCard.classList.remove('slide-in-up', 'slide-in-down'), 400);
    }, 300);
  } else {
    currentSongIdx = newIdx;
    renderSongCard();
  }
}

function toggleSongPlayer() {
  if (!songPlayerWrapper.classList.contains('hidden')) {
    // Close player
    destroySongPlayer();
    songPlayBtn.textContent = '▶';
    songPlayBtn.classList.remove('playing');
    songPlayerWrapper.classList.add('hidden');
    return;
  }

  // Open player
  songPlayBtn.textContent = '⏸';
  songPlayBtn.classList.add('playing');
  songPlayerWrapper.classList.remove('hidden');

  const song = filteredSongs[currentSongIdx];

  if (ytReady && typeof YT !== 'undefined' && YT.Player) {
    createYTPlayer(song.youtubeId);
  } else {
    // Fallback: use iframe directly
    const playerDiv = document.getElementById('song-player');
    playerDiv.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = `https://www.youtube.com/embed/${song.youtubeId}?autoplay=1&rel=0&playsinline=1`;
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    iframe.style.border = 'none';
    playerDiv.appendChild(iframe);
  }
}

function createYTPlayer(videoId) {
  destroySongPlayer();
  const playerDiv = document.getElementById('song-player');
  // Create a fresh container div for YT.Player
  const ytDiv = document.createElement('div');
  ytDiv.id = 'yt-player-inner';
  playerDiv.appendChild(ytDiv);

  ytPlayer = new YT.Player('yt-player-inner', {
    width: '100%',
    height: '100%',
    videoId: videoId,
    playerVars: {
      autoplay: 1,
      rel: 0,
      playsinline: 1,
      modestbranding: 1
    },
    events: {
      onStateChange: onYTStateChange
    }
  });
}

function onYTStateChange(event) {
  if (event.data === YT.PlayerState.ENDED && songAutoCheck.checked) {
    // Auto play next
    if (currentSongIdx < filteredSongs.length - 1) {
      currentSongIdx++;
      renderSongCard();
      songPlayBtn.textContent = '⏸';
      songPlayBtn.classList.add('playing');
      songPlayerWrapper.classList.remove('hidden');
      createYTPlayer(filteredSongs[currentSongIdx].youtubeId);
    }
  }
}

function destroySongPlayer() {
  if (ytPlayer && typeof ytPlayer.destroy === 'function') {
    try { ytPlayer.destroy(); } catch(e) {}
    ytPlayer = null;
  }
  const playerDiv = document.getElementById('song-player');
  if (playerDiv) playerDiv.innerHTML = '';
}

// YouTube IFrame API callback
window.onYouTubeIframeAPIReady = function() {
  ytReady = true;
};

// ============================================================
// === 萌学画画 + 萌学数字（Phase 1） ===
// ============================================================

// --- WebAudio sound effects ---
let _audioCtx = null;
function getAudioCtx() {
  if (!_audioCtx) {
    try { _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch {}
  }
  if (_audioCtx && _audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

function playDing() {
  const ctx = getAudioCtx(); if (!ctx) return;
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(880, t);
  osc.frequency.exponentialRampToValueAtTime(1320, t + 0.1);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.3, t + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.45);
}

function playWrong() {
  const ctx = getAudioCtx(); if (!ctx) return;
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(220, t);
  osc.frequency.exponentialRampToValueAtTime(110, t + 0.25);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.18, t + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.35);
}

function playClap() {
  const ctx = getAudioCtx(); if (!ctx) return;
  // Burst of filtered noise three times
  const bufferSize = ctx.sampleRate * 0.08;
  for (let i = 0; i < 4; i++) {
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let j = 0; j < bufferSize; j++) data[j] = (Math.random() * 2 - 1) * (1 - j / bufferSize);
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 1500;
    const gain = ctx.createGain();
    gain.gain.value = 0.25;
    src.connect(filter).connect(gain).connect(ctx.destination);
    const start = ctx.currentTime + i * 0.07;
    src.start(start);
    src.stop(start + 0.08);
  }
}

function playSuccess() {
  const ctx = getAudioCtx(); if (!ctx) return;
  const notes = [523.25, 659.25, 783.99, 1046.5]; // C E G C
  notes.forEach((freq, i) => {
    const t = ctx.currentTime + i * 0.1;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.25, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.3);
  });
  setTimeout(playClap, 450);
}

// --- Number data ---
const NUMBER_ICONS = ['🐻','🍎','⭐','🌸','🐱','🐶','🦋','🐰','🌟','🍓'];
const NUMBER_NAMES = ['零','一','二','三','四','五','六','七','八','九','十'];

// --- DOM refs ---
const btnDraw = document.getElementById('btn-draw');
const btnNumbers = document.getElementById('btn-numbers');

const drawEntryScreen = document.getElementById('draw-entry-screen');
const drawEntryBackBtn = document.getElementById('draw-entry-back-btn');
const btnPaint = document.getElementById('btn-paint');
const btnSketch = document.getElementById('btn-sketch');

const paintScreen = document.getElementById('paint-screen');
const paintBackBtn = document.getElementById('paint-back-btn');
const paintClearBtn = document.getElementById('paint-clear-btn');
const paintColors = document.getElementById('paint-colors');
const paintSizes = document.getElementById('paint-sizes');
const paintEraserBtn = document.getElementById('paint-eraser-btn');
const paintCanvas = document.getElementById('paint-canvas');

const numbersEntryScreen = document.getElementById('numbers-entry-screen');
const numbersEntryBackBtn = document.getElementById('numbers-entry-back-btn');
const btnNumberCard = document.getElementById('btn-number-card');
const btnCount = document.getElementById('btn-count');

const numberCardScreen = document.getElementById('number-card-screen');
const numberCardBackBtn = document.getElementById('number-card-back-btn');
const numberCardSpeakBtn = document.getElementById('number-card-speak-btn');
const numberCardDigit = document.getElementById('number-card-digit');
const numberCardIcons = document.getElementById('number-card-icons');
const numberCardProgress = document.getElementById('number-card-progress');
const numberCardPrevBtn = document.getElementById('number-card-prev-btn');
const numberCardNextBtn = document.getElementById('number-card-next-btn');

const countScreen = document.getElementById('count-screen');
const countBackBtn = document.getElementById('count-back-btn');
const countStage = document.getElementById('count-stage');
const countChoices = document.getElementById('count-choices');
const countScoreEl = document.getElementById('count-score');
const countPrompt = document.getElementById('count-prompt');

// === Paint board ===
const PAINT_COLORS = ['#000000','#ff3b30','#ff9500','#ffcc00','#34c759','#00c7be','#007aff','#af52de','#ff2d55','#a2845e','#8e8e93','#ffffff'];
const PAINT_SIZES = [4, 10, 20];
let paintCurrentColor = '#ff3b30';
let paintCurrentSize = 10;
let paintIsErasing = false;
let paintDrawing = false;
let paintLastX = 0, paintLastY = 0;

function openPaintScreen() {
  navigateTo(paintScreen, 'forward');
  setTimeout(setupPaintCanvas, 50);
}

function setupPaintCanvas() {
  const headerH = paintScreen.querySelector('.paint-header').offsetHeight;
  const toolbarH = paintScreen.querySelector('.paint-toolbar').offsetHeight;
  const w = Math.min(window.innerWidth - 24, 900);
  const h = Math.max(window.innerHeight - headerH - toolbarH - 40, 320);
  paintCanvas.width = w;
  paintCanvas.height = h;
  paintCanvas.style.width = w + 'px';
  paintCanvas.style.height = h + 'px';
  const ctx = paintCanvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, w, h);
}

function buildPaintToolbar() {
  paintColors.innerHTML = '';
  PAINT_COLORS.forEach(c => {
    const sw = document.createElement('div');
    sw.className = 'paint-color-swatch' + (c === paintCurrentColor ? ' active' : '');
    sw.style.background = c;
    sw.dataset.color = c;
    sw.addEventListener('click', () => {
      paintCurrentColor = c;
      paintIsErasing = false;
      paintEraserBtn.classList.remove('active');
      paintColors.querySelectorAll('.paint-color-swatch').forEach(el => el.classList.toggle('active', el.dataset.color === c));
      playDing();
    });
    paintColors.appendChild(sw);
  });
  paintSizes.innerHTML = '';
  PAINT_SIZES.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'paint-size-btn' + (s === paintCurrentSize ? ' active' : '');
    btn.dataset.size = s;
    const dot = document.createElement('div');
    dot.className = 'paint-size-dot';
    dot.style.width = s + 'px';
    dot.style.height = s + 'px';
    btn.appendChild(dot);
    btn.addEventListener('click', () => {
      paintCurrentSize = s;
      paintSizes.querySelectorAll('.paint-size-btn').forEach(el => el.classList.toggle('active', +el.dataset.size === s));
      playDing();
    });
    paintSizes.appendChild(btn);
  });
}

function getPaintPos(e) {
  const rect = paintCanvas.getBoundingClientRect();
  const touch = e.touches ? e.touches[0] : e;
  const sx = paintCanvas.width / rect.width;
  const sy = paintCanvas.height / rect.height;
  return { x: (touch.clientX - rect.left) * sx, y: (touch.clientY - rect.top) * sy };
}

function paintStart(e) {
  e.preventDefault();
  paintDrawing = true;
  const p = getPaintPos(e);
  paintLastX = p.x; paintLastY = p.y;
}
function paintMove(e) {
  if (!paintDrawing) return;
  e.preventDefault();
  const p = getPaintPos(e);
  const ctx = paintCanvas.getContext('2d');
  ctx.strokeStyle = paintIsErasing ? 'white' : paintCurrentColor;
  ctx.lineWidth = paintIsErasing ? paintCurrentSize * 2.5 : paintCurrentSize;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(paintLastX, paintLastY);
  ctx.lineTo(p.x, p.y);
  ctx.stroke();
  paintLastX = p.x; paintLastY = p.y;
}
function paintEnd() { paintDrawing = false; }

function clearPaintCanvas() {
  const ctx = paintCanvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, paintCanvas.width, paintCanvas.height);
  playDing();
}

// === Number card ===
let currentNumberCard = 1;

function openNumberCardScreen() {
  currentNumberCard = 1;
  navigateTo(numberCardScreen, 'forward');
  renderNumberCard();
}

function renderNumberCard() {
  numberCardDigit.textContent = currentNumberCard;
  numberCardProgress.textContent = `${currentNumberCard} / 10`;
  numberCardIcons.innerHTML = '';
  const icon = NUMBER_ICONS[(currentNumberCard - 1) % NUMBER_ICONS.length];
  for (let i = 0; i < currentNumberCard; i++) {
    const span = document.createElement('span');
    span.textContent = icon;
    span.style.animationDelay = (i * 0.08) + 's';
    numberCardIcons.appendChild(span);
  }
  numberCardPrevBtn.disabled = currentNumberCard <= 1;
  numberCardNextBtn.disabled = currentNumberCard >= 10;
  speakChinese(NUMBER_NAMES[currentNumberCard]);
  playDing();
}

// === Count game ===
const COUNT_ANIMALS = ['🐻','🐱','🐶','🐰','🐼','🐯','🐵','🦊','🐸','🐷'];
let countScore = 0;
let countAnswer = 0;

function openCountScreen() {
  countScore = 0;
  countScoreEl.textContent = '⭐ 0';
  navigateTo(countScreen, 'forward');
  newCountRound();
}

function newCountRound() {
  countAnswer = 1 + Math.floor(Math.random() * 9); // 1..9
  const animal = COUNT_ANIMALS[Math.floor(Math.random() * COUNT_ANIMALS.length)];
  countStage.innerHTML = '';
  // Random non-overlapping-ish positions
  const placed = [];
  for (let i = 0; i < countAnswer; i++) {
    let x, y, tries = 0;
    do {
      x = 5 + Math.random() * 85;
      y = 5 + Math.random() * 80;
      tries++;
    } while (tries < 20 && placed.some(p => Math.hypot(p.x - x, p.y - y) < 18));
    placed.push({ x, y });
    const span = document.createElement('span');
    span.textContent = animal;
    span.style.left = x + '%';
    span.style.top = y + '%';
    span.style.animationDelay = (i * 0.05) + 's';
    countStage.appendChild(span);
  }
  countPrompt.textContent = '数一数有几个？';
  speakChinese('数一数有几个');

  // Build choices: correct + 3 distractors
  const choices = new Set([countAnswer]);
  while (choices.size < 4) {
    const d = 1 + Math.floor(Math.random() * 9);
    choices.add(d);
  }
  const arr = Array.from(choices).sort(() => Math.random() - 0.5);
  countChoices.innerHTML = '';
  arr.forEach(n => {
    const btn = document.createElement('button');
    btn.className = 'count-choice-btn';
    btn.textContent = n;
    btn.addEventListener('click', () => handleCountChoice(n, btn));
    countChoices.appendChild(btn);
  });
}

function handleCountChoice(n, btn) {
  if (n === countAnswer) {
    btn.classList.add('correct');
    countScore++;
    countScoreEl.textContent = '⭐ ' + countScore;
    playSuccess();
    speakChinese('答对啦，' + NUMBER_NAMES[countAnswer] + '个');
    showParticleCelebration();
    setTimeout(newCountRound, 1800);
  } else {
    btn.classList.add('wrong');
    playWrong();
    speakChinese('再数一数');
    setTimeout(() => btn.classList.remove('wrong'), 500);
  }
}

// === Wire up ===
function setupPhase1Listeners() {
  btnDraw.addEventListener('click', () => { navigateTo(drawEntryScreen, 'forward'); });
  btnNumbers.addEventListener('click', () => { navigateTo(numbersEntryScreen, 'forward'); });

  drawEntryBackBtn.addEventListener('click', () => goToHome());
  btnPaint.addEventListener('click', openPaintScreen);
  // btnSketch wired up in setupPhase3Listeners

  paintBackBtn.addEventListener('click', () => goBack());
  paintClearBtn.addEventListener('click', clearPaintCanvas);
  paintEraserBtn.addEventListener('click', () => {
    paintIsErasing = !paintIsErasing;
    paintEraserBtn.classList.toggle('active', paintIsErasing);
    playDing();
  });
  paintCanvas.addEventListener('mousedown', paintStart);
  paintCanvas.addEventListener('mousemove', paintMove);
  paintCanvas.addEventListener('mouseup', paintEnd);
  paintCanvas.addEventListener('mouseleave', paintEnd);
  paintCanvas.addEventListener('touchstart', paintStart, { passive: false });
  paintCanvas.addEventListener('touchmove', paintMove, { passive: false });
  paintCanvas.addEventListener('touchend', paintEnd);

  numbersEntryBackBtn.addEventListener('click', () => goToHome());
  btnNumberCard.addEventListener('click', openNumberCardScreen);
  btnCount.addEventListener('click', openCountScreen);

  numberCardBackBtn.addEventListener('click', () => goBack());
  numberCardSpeakBtn.addEventListener('click', () => speakChinese(NUMBER_NAMES[currentNumberCard]));
  numberCardPrevBtn.addEventListener('click', () => { if (currentNumberCard > 1) { currentNumberCard--; renderNumberCard(); } });
  numberCardNextBtn.addEventListener('click', () => { if (currentNumberCard < 10) { currentNumberCard++; renderNumberCard(); } });

  countBackBtn.addEventListener('click', () => goBack());

  buildPaintToolbar();
}

// ============================================================
// === Phase 2: 互动游戏 + 进阶 ===
// ============================================================

// --- 找数字 ---
const findnumScreen = document.getElementById('findnum-screen');
const findnumStage = document.getElementById('findnum-stage');
const findnumPrompt = document.getElementById('findnum-prompt');
const findnumScoreEl = document.getElementById('findnum-score');
const findnumBackBtn = document.getElementById('findnum-back-btn');
let findnumScore = 0, findnumTarget = 0;

function openFindnumScreen() {
  findnumScore = 0;
  findnumScoreEl.textContent = '⭐ 0';
  navigateTo(findnumScreen, 'forward');
  newFindnumRound();
}
function newFindnumRound() {
  findnumTarget = Math.floor(Math.random() * 10);
  findnumPrompt.textContent = '找出 ' + findnumTarget;
  speakChinese('找出 ' + NUMBER_NAMES[findnumTarget]);
  // 16 cells, ensure target appears 1-3 times
  const cells = [];
  const targetCount = 1 + Math.floor(Math.random() * 2);
  for (let i = 0; i < targetCount; i++) cells.push(findnumTarget);
  while (cells.length < 16) {
    const n = Math.floor(Math.random() * 10);
    if (n !== findnumTarget) cells.push(n);
  }
  cells.sort(() => Math.random() - 0.5);
  findnumStage.innerHTML = '';
  cells.forEach(n => {
    const cell = document.createElement('div');
    cell.className = 'findnum-cell';
    cell.textContent = n;
    cell.addEventListener('click', () => {
      if (n === findnumTarget) {
        cell.classList.add('correct');
        findnumScore++;
        findnumScoreEl.textContent = '⭐ ' + findnumScore;
        playSuccess();
        showParticleCelebration();
        setTimeout(newFindnumRound, 1500);
      } else {
        cell.classList.add('wrong');
        playWrong();
        setTimeout(() => cell.classList.remove('wrong'), 500);
      }
    });
    findnumStage.appendChild(cell);
  });
}

// --- 大小比较 ---
const compareScreen = document.getElementById('compare-screen');
const compareLeft = document.getElementById('compare-left');
const compareRight = document.getElementById('compare-right');
const compareScoreEl = document.getElementById('compare-score');
const compareBackBtn = document.getElementById('compare-back-btn');
const COMPARE_ICONS = ['🍬','🍭','🍫','🍩','🧁','🍪'];
let compareScore = 0, compareWinner = 'left';

function openCompareScreen() {
  compareScore = 0;
  compareScoreEl.textContent = '⭐ 0';
  navigateTo(compareScreen, 'forward');
  newCompareRound();
}
function newCompareRound() {
  let a = 1 + Math.floor(Math.random() * 9);
  let b = 1 + Math.floor(Math.random() * 9);
  while (a === b) b = 1 + Math.floor(Math.random() * 9);
  compareWinner = a > b ? 'left' : 'right';
  const icon = COMPARE_ICONS[Math.floor(Math.random() * COMPARE_ICONS.length)];
  fillCompareSide(compareLeft, a, icon);
  fillCompareSide(compareRight, b, icon);
  compareLeft.classList.remove('correct', 'wrong');
  compareRight.classList.remove('correct', 'wrong');
  speakChinese('哪边更多');
}
function fillCompareSide(el, n, icon) {
  el.innerHTML = '';
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span');
    s.textContent = icon;
    s.style.animationDelay = (i * 0.04) + 's';
    el.appendChild(s);
  }
}
function handleCompareClick(side) {
  const el = side === 'left' ? compareLeft : compareRight;
  if (side === compareWinner) {
    el.classList.add('correct');
    compareScore++;
    compareScoreEl.textContent = '⭐ ' + compareScore;
    playSuccess();
    speakChinese('答对啦');
    showParticleCelebration();
    setTimeout(newCompareRound, 1500);
  } else {
    el.classList.add('wrong');
    playWrong();
    setTimeout(() => el.classList.remove('wrong'), 500);
  }
}

// --- 简单加法 ---
const addScreen = document.getElementById('add-screen');
const addEquation = document.getElementById('add-equation');
const addChoices = document.getElementById('add-choices');
const addScoreEl = document.getElementById('add-score');
const addBackBtn = document.getElementById('add-back-btn');
let addScore = 0, addAnswer = 0;

function openAddScreen() {
  addScore = 0;
  addScoreEl.textContent = '⭐ 0';
  navigateTo(addScreen, 'forward');
  newAddRound();
}
function newAddRound() {
  const a = 1 + Math.floor(Math.random() * 5);
  const b = 1 + Math.floor(Math.random() * 5);
  addAnswer = a + b;
  const icon = ['🍎','🍊','🍓','🍇','⭐'][Math.floor(Math.random() * 5)];
  addEquation.innerHTML = `
    <div class="add-group">${icon.repeat(a)}<br><span>${a}</span></div>
    <div class="add-op">+</div>
    <div class="add-group">${icon.repeat(b)}<br><span>${b}</span></div>
    <div class="add-op">=</div>
    <div class="add-group"><span>?</span></div>
  `;
  speakChinese(NUMBER_NAMES[a] + ' 加 ' + NUMBER_NAMES[b] + ' 等于几');
  // Choices: correct + 3 distractors in [1..10]
  const choices = new Set([addAnswer]);
  while (choices.size < 4) {
    const d = 1 + Math.floor(Math.random() * 10);
    choices.add(d);
  }
  const arr = Array.from(choices).sort(() => Math.random() - 0.5);
  addChoices.innerHTML = '';
  arr.forEach(n => {
    const btn = document.createElement('button');
    btn.className = 'count-choice-btn';
    btn.textContent = n;
    btn.addEventListener('click', () => {
      if (n === addAnswer) {
        btn.classList.add('correct');
        addScore++;
        addScoreEl.textContent = '⭐ ' + addScore;
        playSuccess();
        speakChinese('答对啦，等于 ' + NUMBER_NAMES[addAnswer]);
        showParticleCelebration();
        setTimeout(newAddRound, 1800);
      } else {
        btn.classList.add('wrong');
        playWrong();
        setTimeout(() => btn.classList.remove('wrong'), 500);
      }
    });
    addChoices.appendChild(btn);
  });
}

// --- 喂食游戏 (tap to feed) ---
const feedScreen = document.getElementById('feed-screen');
const feedMonster = document.getElementById('feed-monster');
const feedBubble = document.getElementById('feed-bubble');
const feedCounterEl = document.getElementById('feed-counter');
const feedPool = document.getElementById('feed-pool');
const feedScoreEl = document.getElementById('feed-score');
const feedBackBtn = document.getElementById('feed-back-btn');
const FEED_ITEMS = ['🍎','🍌','🍓','🍪','🍩','🥕'];
let feedScore = 0, feedTarget = 0, feedEaten = 0, feedItem = '🍎';

function openFeedScreen() {
  feedScore = 0;
  feedScoreEl.textContent = '⭐ 0';
  navigateTo(feedScreen, 'forward');
  newFeedRound();
}
function newFeedRound() {
  feedTarget = 1 + Math.floor(Math.random() * 5); // 1..5
  feedEaten = 0;
  feedItem = FEED_ITEMS[Math.floor(Math.random() * FEED_ITEMS.length)];
  feedBubble.textContent = `我要吃 ${feedTarget} 个 ${feedItem}`;
  feedCounterEl.textContent = `已吃: 0 / ${feedTarget}`;
  speakChinese(`我要吃 ${NUMBER_NAMES[feedTarget]} 个`);
  // Pool: feedTarget+2 to feedTarget+4 items (always more than needed)
  const total = feedTarget + 2 + Math.floor(Math.random() * 3);
  feedPool.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const el = document.createElement('div');
    el.className = 'feed-item';
    el.textContent = feedItem;
    el.style.animationDelay = (i * 0.05) + 's';
    el.addEventListener('click', () => onFeedTap(el));
    feedPool.appendChild(el);
  }
}
function onFeedTap(el) {
  if (el.classList.contains('eaten')) return;
  if (feedEaten >= feedTarget) {
    // Already done — too many
    playWrong();
    speakChinese('够啦');
    return;
  }
  el.classList.add('eaten');
  feedEaten++;
  feedCounterEl.textContent = `已吃: ${feedEaten} / ${feedTarget}`;
  feedMonster.classList.remove('eating');
  void feedMonster.offsetWidth; // restart animation
  feedMonster.classList.add('eating');
  playDing();
  if (feedEaten === feedTarget) {
    setTimeout(() => {
      playSuccess();
      speakChinese('谢谢你！');
      showParticleCelebration();
      feedScore++;
      feedScoreEl.textContent = '⭐ ' + feedScore;
      setTimeout(newFeedRound, 1800);
    }, 300);
  }
}

// --- Wire up Phase 2 ---
function setupPhase2Listeners() {
  document.getElementById('btn-find-num').addEventListener('click', openFindnumScreen);
  document.getElementById('btn-feed').addEventListener('click', openFeedScreen);
  document.getElementById('btn-compare').addEventListener('click', openCompareScreen);
  document.getElementById('btn-add').addEventListener('click', openAddScreen);

  findnumBackBtn.addEventListener('click', () => goBack());
  compareBackBtn.addEventListener('click', () => goBack());
  addBackBtn.addEventListener('click', () => goBack());
  feedBackBtn.addEventListener('click', () => goBack());

  compareLeft.addEventListener('click', () => handleCompareClick('left'));
  compareRight.addEventListener('click', () => handleCompareClick('right'));
}

// ============================================================
// === Phase 3: 简笔画 + 连线画 ===
// ============================================================

// --- 简笔画 templates (emoji-based, ~100) ---
const SKETCH_TEMPLATES = [
  // Animals (30)
  {e:'🐱',n:'小猫'},{e:'🐶',n:'小狗'},{e:'🐭',n:'老鼠'},{e:'🐹',n:'仓鼠'},{e:'🐰',n:'兔子'},
  {e:'🦊',n:'狐狸'},{e:'🐻',n:'熊'},{e:'🐼',n:'熊猫'},{e:'🐨',n:'考拉'},{e:'🐯',n:'老虎'},
  {e:'🦁',n:'狮子'},{e:'🐮',n:'奶牛'},{e:'🐷',n:'小猪'},{e:'🐸',n:'青蛙'},{e:'🐵',n:'猴子'},
  {e:'🐔',n:'小鸡'},{e:'🐧',n:'企鹅'},{e:'🐦',n:'小鸟'},{e:'🦆',n:'鸭子'},{e:'🦉',n:'猫头鹰'},
  {e:'🦋',n:'蝴蝶'},{e:'🐛',n:'毛毛虫'},{e:'🐝',n:'蜜蜂'},{e:'🐞',n:'瓢虫'},{e:'🐢',n:'乌龟'},
  {e:'🐍',n:'小蛇'},{e:'🐠',n:'热带鱼'},{e:'🐬',n:'海豚'},{e:'🐳',n:'鲸鱼'},{e:'🦄',n:'独角兽'},
  // Food (20)
  {e:'🍎',n:'苹果'},{e:'🍌',n:'香蕉'},{e:'🍇',n:'葡萄'},{e:'🍓',n:'草莓'},{e:'🍉',n:'西瓜'},
  {e:'🍊',n:'橙子'},{e:'🍑',n:'桃子'},{e:'🍒',n:'樱桃'},{e:'🥑',n:'牛油果'},{e:'🍕',n:'披萨'},
  {e:'🍔',n:'汉堡'},{e:'🍟',n:'薯条'},{e:'🌭',n:'热狗'},{e:'🍩',n:'甜甜圈'},{e:'🍪',n:'饼干'},
  {e:'🎂',n:'蛋糕'},{e:'🍦',n:'冰淇淋'},{e:'🍭',n:'棒棒糖'},{e:'🍿',n:'爆米花'},{e:'🥕',n:'胡萝卜'},
  // Nature (15)
  {e:'🌳',n:'大树'},{e:'🌲',n:'松树'},{e:'🌴',n:'椰子树'},{e:'🌵',n:'仙人掌'},{e:'🌸',n:'樱花'},
  {e:'🌹',n:'玫瑰'},{e:'🌻',n:'向日葵'},{e:'🌼',n:'小花'},{e:'🌷',n:'郁金香'},{e:'🍄',n:'蘑菇'},
  {e:'🌞',n:'太阳'},{e:'🌙',n:'月亮'},{e:'⭐',n:'星星'},{e:'☁️',n:'云朵'},{e:'🌈',n:'彩虹'},
  // Vehicles (10)
  {e:'🚗',n:'小汽车'},{e:'🚕',n:'出租车'},{e:'🚌',n:'巴士'},{e:'🚓',n:'警车'},{e:'🚑',n:'救护车'},
  {e:'🚒',n:'消防车'},{e:'🚜',n:'拖拉机'},{e:'🚲',n:'自行车'},{e:'🚂',n:'火车'},{e:'✈️',n:'飞机'},
  // Objects (15)
  {e:'🏠',n:'房子'},{e:'🏰',n:'城堡'},{e:'⛵',n:'帆船'},{e:'🚀',n:'火箭'},{e:'🎈',n:'气球'},
  {e:'🎁',n:'礼物'},{e:'🎩',n:'帽子'},{e:'👑',n:'皇冠'},{e:'⚽',n:'足球'},{e:'🏀',n:'篮球'},
  {e:'🎸',n:'吉他'},{e:'🥁',n:'小鼓'},{e:'🪁',n:'风筝'},{e:'⚓',n:'锚'},{e:'❤️',n:'爱心'},
];

// --- 连线画 patterns: hand-defined dots in 0-100 normalized space ---
// Each pattern: name, emoji shown on completion, dots [{x,y}]
const CONNECT_PATTERNS = [
  { name: '星星', emoji: '⭐', dots: [
    {x:50,y:10},{x:62,y:38},{x:90,y:38},{x:68,y:58},{x:78,y:88},
    {x:50,y:70},{x:22,y:88},{x:32,y:58},{x:10,y:38},{x:38,y:38},
  ]},
  { name: '房子', emoji: '🏠', dots: [
    {x:50,y:10},{x:90,y:45},{x:80,y:45},{x:80,y:88},{x:20,y:88},{x:20,y:45},{x:10,y:45},
  ]},
  { name: '小鱼', emoji: '🐟', dots: [
    {x:20,y:50},{x:50,y:25},{x:80,y:35},{x:90,y:50},{x:80,y:65},{x:50,y:75},{x:20,y:50},
  ]},
  { name: '爱心', emoji: '❤️', dots: [
    {x:50,y:30},{x:35,y:18},{x:18,y:25},{x:15,y:45},{x:35,y:65},{x:50,y:85},
    {x:65,y:65},{x:85,y:45},{x:82,y:25},{x:65,y:18},{x:50,y:30},
  ]},
  { name: '雨伞', emoji: '☂️', dots: [
    {x:15,y:55},{x:50,y:15},{x:85,y:55},{x:70,y:50},{x:55,y:55},{x:55,y:90},{x:65,y:90},
  ]},
  { name: '帆船', emoji: '⛵', dots: [
    {x:55,y:15},{x:55,y:65},{x:25,y:65},{x:55,y:65},{x:85,y:65},{x:75,y:85},{x:25,y:85},{x:15,y:65},{x:55,y:65},
  ]},
  { name: '小花', emoji: '🌸', dots: [
    {x:50,y:20},{x:70,y:30},{x:75,y:50},{x:65,y:68},{x:50,y:75},{x:35,y:68},{x:25,y:50},{x:30,y:30},{x:50,y:20},
  ]},
  { name: '苹果', emoji: '🍎', dots: [
    {x:50,y:20},{x:35,y:25},{x:20,y:45},{x:25,y:75},{x:50,y:88},{x:75,y:75},{x:80,y:45},{x:65,y:25},{x:50,y:20},
  ]},
  { name: '风筝', emoji: '🪁', dots: [
    {x:50,y:10},{x:80,y:45},{x:50,y:80},{x:20,y:45},{x:50,y:10},
  ]},
  { name: '太阳', emoji: '🌞', dots: [
    {x:50,y:25},{x:65,y:30},{x:75,y:50},{x:65,y:70},{x:50,y:75},{x:35,y:70},{x:25,y:50},{x:35,y:30},{x:50,y:25},
  ]},
  { name: '小猫', emoji: '🐱', dots: [
    {x:30,y:25},{x:25,y:15},{x:40,y:25},{x:60,y:25},{x:75,y:15},{x:70,y:25},
    {x:80,y:45},{x:80,y:70},{x:65,y:85},{x:35,y:85},{x:20,y:70},{x:20,y:45},{x:30,y:25},
  ]},
  { name: '汽车', emoji: '🚗', dots: [
    {x:15,y:65},{x:20,y:50},{x:35,y:35},{x:65,y:35},{x:80,y:50},{x:85,y:65},
    {x:80,y:80},{x:70,y:80},{x:65,y:65},{x:35,y:65},{x:30,y:80},{x:20,y:80},{x:15,y:65},
  ]},
  { name: '小鸟', emoji: '🐦', dots: [
    {x:20,y:50},{x:30,y:35},{x:50,y:25},{x:70,y:30},{x:85,y:45},{x:80,y:60},
    {x:65,y:70},{x:50,y:75},{x:35,y:70},{x:20,y:50},
  ]},
  { name: '热气球', emoji: '🎈', dots: [
    {x:50,y:15},{x:70,y:25},{x:80,y:45},{x:70,y:60},{x:55,y:65},
    {x:45,y:65},{x:30,y:60},{x:20,y:45},{x:30,y:25},{x:50,y:15},{x:50,y:90},
  ]},
  { name: '蘑菇', emoji: '🍄', dots: [
    {x:20,y:45},{x:30,y:25},{x:50,y:18},{x:70,y:25},{x:80,y:45},
    {x:65,y:50},{x:60,y:85},{x:40,y:85},{x:35,y:50},{x:20,y:45},
  ]},
  { name: '冰淇淋', emoji: '🍦', dots: [
    {x:30,y:30},{x:50,y:15},{x:70,y:30},{x:65,y:45},{x:55,y:50},{x:50,y:90},{x:45,y:50},{x:35,y:45},{x:30,y:30},
  ]},
  { name: '月亮', emoji: '🌙', dots: [
    {x:55,y:15},{x:35,y:25},{x:25,y:45},{x:25,y:65},{x:35,y:80},{x:55,y:88},
    {x:45,y:75},{x:40,y:55},{x:48,y:35},{x:55,y:15},
  ]},
  { name: '蝴蝶', emoji: '🦋', dots: [
    {x:50,y:30},{x:30,y:15},{x:15,y:30},{x:15,y:55},{x:35,y:65},{x:50,y:55},
    {x:65,y:65},{x:85,y:55},{x:85,y:30},{x:70,y:15},{x:50,y:30},{x:50,y:80},
  ]},
  { name: '钻石', emoji: '💎', dots: [
    {x:30,y:25},{x:70,y:25},{x:88,y:45},{x:50,y:90},{x:12,y:45},{x:30,y:25},{x:50,y:90},{x:50,y:25},
  ]},
  { name: '皇冠', emoji: '👑', dots: [
    {x:15,y:75},{x:20,y:30},{x:35,y:55},{x:50,y:20},{x:65,y:55},{x:80,y:30},{x:85,y:75},{x:15,y:75},
  ]},
  { name: '气球', emoji: '🎈', dots: [
    {x:50,y:18},{x:65,y:25},{x:72,y:40},{x:65,y:55},{x:55,y:60},{x:50,y:62},
    {x:45,y:60},{x:35,y:55},{x:28,y:40},{x:35,y:25},{x:50,y:18},{x:50,y:90},
  ]},
];

// --- Sketch screens ---
const sketchGridScreen = document.getElementById('sketch-grid-screen');
const sketchGrid = document.getElementById('sketch-grid');
const sketchGridBackBtn = document.getElementById('sketch-grid-back-btn');
const sketchTraceScreen = document.getElementById('sketch-trace-screen');
const sketchTraceBackBtn = document.getElementById('sketch-trace-back-btn');
const sketchTraceTitle = document.getElementById('sketch-trace-title');
const sketchClearBtn = document.getElementById('sketch-clear-btn');
const sketchColors = document.getElementById('sketch-colors');
const sketchSizes = document.getElementById('sketch-sizes');
const sketchGuideCanvas = document.getElementById('sketch-guide-canvas');
const sketchDrawCanvas = document.getElementById('sketch-draw-canvas');

let sketchCurrentTpl = null;
let sketchCurrentColor = '#ff3b30';
let sketchCurrentSize = 8;
let sketchDrawing = false, sketchLastX = 0, sketchLastY = 0;

function openSketchGridScreen() {
  navigateTo(sketchGridScreen, 'forward');
  buildSketchGrid();
}

function buildSketchGrid() {
  sketchGrid.innerHTML = '';
  SKETCH_TEMPLATES.forEach(t => {
    const tile = document.createElement('div');
    tile.className = 'sketch-tile';
    tile.innerHTML = `<div class="sketch-tile-emoji">${t.e}</div><div class="sketch-tile-name">${t.n}</div>`;
    tile.addEventListener('click', () => {
      sketchCurrentTpl = t;
      openSketchTraceScreen();
    });
    sketchGrid.appendChild(tile);
  });
}

function openSketchTraceScreen() {
  navigateTo(sketchTraceScreen, 'forward');
  sketchTraceTitle.textContent = sketchCurrentTpl.e + ' ' + sketchCurrentTpl.n;
  setTimeout(setupSketchCanvas, 50);
  speakChinese('画一个 ' + sketchCurrentTpl.n);
}

function setupSketchCanvas() {
  const headerH = sketchTraceScreen.querySelector('.paint-header').offsetHeight;
  const toolbarH = sketchTraceScreen.querySelector('.paint-toolbar').offsetHeight;
  const size = Math.min(window.innerWidth - 24, window.innerHeight - headerH - toolbarH - 40, 600);
  [sketchGuideCanvas, sketchDrawCanvas].forEach(c => {
    c.width = size; c.height = size;
    c.style.width = size + 'px'; c.style.height = size + 'px';
  });
  drawSketchGuide();
}

function drawSketchGuide() {
  const ctx = sketchGuideCanvas.getContext('2d');
  const w = sketchGuideCanvas.width, h = sketchGuideCanvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, w, h);
  // Draw emoji big and faint as a tracing guide
  ctx.save();
  ctx.globalAlpha = 0.18;
  ctx.font = `${h * 0.78}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // Try grayscale via filter — falls back to colored if unsupported
  ctx.filter = 'grayscale(100%) contrast(0.8)';
  ctx.fillText(sketchCurrentTpl.e, w / 2, h / 2);
  ctx.restore();
  // Clear draw layer
  const dctx = sketchDrawCanvas.getContext('2d');
  dctx.clearRect(0, 0, w, h);
}

function buildSketchToolbar() {
  sketchColors.innerHTML = '';
  PAINT_COLORS.forEach(c => {
    if (c === '#ffffff') return; // skip white in sketch context
    const sw = document.createElement('div');
    sw.className = 'paint-color-swatch' + (c === sketchCurrentColor ? ' active' : '');
    sw.style.background = c;
    sw.dataset.color = c;
    sw.addEventListener('click', () => {
      sketchCurrentColor = c;
      sketchColors.querySelectorAll('.paint-color-swatch').forEach(el => el.classList.toggle('active', el.dataset.color === c));
      playDing();
    });
    sketchColors.appendChild(sw);
  });
  sketchSizes.innerHTML = '';
  [4, 8, 14].forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'paint-size-btn' + (s === sketchCurrentSize ? ' active' : '');
    btn.dataset.size = s;
    const dot = document.createElement('div');
    dot.className = 'paint-size-dot';
    dot.style.width = s + 'px'; dot.style.height = s + 'px';
    btn.appendChild(dot);
    btn.addEventListener('click', () => {
      sketchCurrentSize = s;
      sketchSizes.querySelectorAll('.paint-size-btn').forEach(el => el.classList.toggle('active', +el.dataset.size === s));
      playDing();
    });
    sketchSizes.appendChild(btn);
  });
}

function getSketchPos(e) {
  const rect = sketchDrawCanvas.getBoundingClientRect();
  const touch = e.touches ? e.touches[0] : e;
  const sx = sketchDrawCanvas.width / rect.width;
  const sy = sketchDrawCanvas.height / rect.height;
  return { x: (touch.clientX - rect.left) * sx, y: (touch.clientY - rect.top) * sy };
}
function sketchStart(e) { e.preventDefault(); sketchDrawing = true; const p = getSketchPos(e); sketchLastX = p.x; sketchLastY = p.y; }
function sketchMove(e) {
  if (!sketchDrawing) return;
  e.preventDefault();
  const p = getSketchPos(e);
  const ctx = sketchDrawCanvas.getContext('2d');
  ctx.strokeStyle = sketchCurrentColor;
  ctx.lineWidth = sketchCurrentSize;
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(sketchLastX, sketchLastY);
  ctx.lineTo(p.x, p.y);
  ctx.stroke();
  sketchLastX = p.x; sketchLastY = p.y;
}
function sketchEnd() { sketchDrawing = false; }

function clearSketchDraw() {
  const ctx = sketchDrawCanvas.getContext('2d');
  ctx.clearRect(0, 0, sketchDrawCanvas.width, sketchDrawCanvas.height);
  playDing();
}

// --- 连线画 ---
const connectGridScreen = document.getElementById('connect-grid-screen');
const connectGrid = document.getElementById('connect-grid');
const connectGridBackBtn = document.getElementById('connect-grid-back-btn');
const connectPlayScreen = document.getElementById('connect-play-screen');
const connectPlayBackBtn = document.getElementById('connect-play-back-btn');
const connectPlayTitle = document.getElementById('connect-play-title');
const connectPlayProgress = document.getElementById('connect-play-progress');
const connectCanvas = document.getElementById('connect-canvas');

let connectCurrentPattern = null;
let connectCurrentDot = 0; // index of next dot to tap
let connectCompleted = false;

function openConnectGridScreen() {
  navigateTo(connectGridScreen, 'forward');
  buildConnectGrid();
}
function buildConnectGrid() {
  connectGrid.innerHTML = '';
  CONNECT_PATTERNS.forEach((p, idx) => {
    const tile = document.createElement('div');
    tile.className = 'sketch-tile';
    tile.innerHTML = `<div class="sketch-tile-emoji">${p.emoji}</div><div class="sketch-tile-name">${p.name}</div>`;
    tile.addEventListener('click', () => {
      connectCurrentPattern = p;
      openConnectPlayScreen();
    });
    connectGrid.appendChild(tile);
  });
}

function openConnectPlayScreen() {
  navigateTo(connectPlayScreen, 'forward');
  connectPlayTitle.textContent = connectCurrentPattern.emoji + ' ' + connectCurrentPattern.name;
  connectCurrentDot = 0;
  connectCompleted = false;
  setTimeout(setupConnectCanvas, 50);
  speakChinese('按数字顺序连一连');
}

function setupConnectCanvas() {
  const headerH = connectPlayScreen.querySelector('.count-header').offsetHeight;
  const size = Math.min(window.innerWidth - 24, window.innerHeight - headerH - 60, 600);
  connectCanvas.width = size; connectCanvas.height = size;
  connectCanvas.style.width = size + 'px';
  connectCanvas.style.height = size + 'px';
  drawConnect();
}

function drawConnect() {
  const ctx = connectCanvas.getContext('2d');
  const w = connectCanvas.width, h = connectCanvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, w, h);

  const dots = connectCurrentPattern.dots;
  // Draw lines connecting completed dots
  ctx.strokeStyle = '#ff6b9d';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.beginPath();
  for (let i = 0; i < connectCurrentDot; i++) {
    const d = dots[i];
    const x = d.x * w / 100, y = d.y * h / 100;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Draw dots
  dots.forEach((d, i) => {
    const x = d.x * w / 100, y = d.y * h / 100;
    const isNext = i === connectCurrentDot && !connectCompleted;
    const isDone = i < connectCurrentDot;
    ctx.beginPath();
    ctx.arc(x, y, isNext ? 22 : 18, 0, Math.PI * 2);
    ctx.fillStyle = isDone ? '#84fab0' : (isNext ? '#ff6b9d' : 'white');
    ctx.fill();
    ctx.strokeStyle = isNext ? '#ff3b30' : '#888';
    ctx.lineWidth = isNext ? 3 : 2;
    ctx.stroke();
    ctx.fillStyle = isDone || isNext ? 'white' : '#555';
    ctx.font = 'bold 18px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(i + 1), x, y);
  });

  connectPlayProgress.textContent = `${Math.min(connectCurrentDot + 1, dots.length)} / ${dots.length}`;

  if (connectCompleted) {
    // Draw big emoji in center
    ctx.save();
    ctx.globalAlpha = 0.85;
    ctx.font = `${h * 0.45}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(connectCurrentPattern.emoji, w / 2, h / 2);
    ctx.restore();
  }
}

function getConnectPos(e) {
  const rect = connectCanvas.getBoundingClientRect();
  const touch = e.touches ? e.touches[0] : e;
  const sx = connectCanvas.width / rect.width;
  const sy = connectCanvas.height / rect.height;
  return { x: (touch.clientX - rect.left) * sx, y: (touch.clientY - rect.top) * sy };
}

function onConnectTap(e) {
  if (connectCompleted) return;
  e.preventDefault();
  const p = getConnectPos(e);
  const dots = connectCurrentPattern.dots;
  const target = dots[connectCurrentDot];
  const w = connectCanvas.width, h = connectCanvas.height;
  const tx = target.x * w / 100, ty = target.y * h / 100;
  if (Math.hypot(p.x - tx, p.y - ty) < 35) {
    connectCurrentDot++;
    playDing();
    if (connectCurrentDot >= dots.length) {
      connectCompleted = true;
      drawConnect();
      playSuccess();
      speakChinese('画好啦，是 ' + connectCurrentPattern.name);
      showParticleCelebration();
    } else {
      drawConnect();
    }
  } else {
    playWrong();
  }
}

function setupPhase3Listeners() {
  btnSketch.addEventListener('click', openSketchGridScreen);
  document.getElementById('btn-connect').addEventListener('click', openConnectGridScreen);

  sketchGridBackBtn.addEventListener('click', () => goBack());
  sketchTraceBackBtn.addEventListener('click', () => goBack());
  sketchClearBtn.addEventListener('click', clearSketchDraw);
  document.getElementById('sketch-submit-btn').addEventListener('click', () => {
    showFlowerCelebration();
    showParticleCelebration();
    playSuccess();
    speakChinese('太棒了，送你一朵小红花');
  });
  sketchDrawCanvas.addEventListener('mousedown', sketchStart);
  sketchDrawCanvas.addEventListener('mousemove', sketchMove);
  sketchDrawCanvas.addEventListener('mouseup', sketchEnd);
  sketchDrawCanvas.addEventListener('mouseleave', sketchEnd);
  sketchDrawCanvas.addEventListener('touchstart', sketchStart, { passive: false });
  sketchDrawCanvas.addEventListener('touchmove', sketchMove, { passive: false });
  sketchDrawCanvas.addEventListener('touchend', sketchEnd);

  connectGridBackBtn.addEventListener('click', () => goBack());
  connectPlayBackBtn.addEventListener('click', () => goBack());
  connectCanvas.addEventListener('mousedown', onConnectTap);
  connectCanvas.addEventListener('touchstart', onConnectTap, { passive: false });

  buildSketchToolbar();
}

setupPhase1Listeners();
setupPhase2Listeners();
setupPhase3Listeners();

window.addEventListener('resize', () => {
  if (currentScreen === paintScreen) {
    // Save current image, resize, restore
    const dataUrl = paintCanvas.toDataURL();
    setupPaintCanvas();
    const img = new Image();
    img.onload = () => paintCanvas.getContext('2d').drawImage(img, 0, 0);
    img.src = dataUrl;
  }
});

init();
