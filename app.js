// 萌学字母 - 主逻辑

// 字母数据
const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// 每个字母的笔画引导中心线 - 仅用于演示动画和方向引导
// 坐标为百分比(0-100)，每笔是起点→终点（可含中间弯曲点）
const LETTER_GUIDES = {
  'A': { strokes: [
    [{x:29,y:76}, {x:50,y:25}],
    [{x:50,y:25}, {x:71,y:76}],
    [{x:34,y:61}, {x:65,y:61}]
  ]},
  'B': { strokes: [
    [{x:31,y:25}, {x:31,y:76}],
    [{x:31,y:25}, {x:55,y:25}, {x:66,y:38}, {x:55,y:52}, {x:31,y:52}],
    [{x:31,y:52}, {x:57,y:52}, {x:69,y:64}, {x:57,y:76}, {x:31,y:76}]
  ]},
  'C': { strokes: [
    [{x:73,y:30}, {x:54,y:24}, {x:33,y:30}, {x:25,y:50}, {x:33,y:70}, {x:54,y:77}, {x:73,y:70}]
  ]},
  'D': { strokes: [
    [{x:31,y:25}, {x:31,y:76}],
    [{x:31,y:25}, {x:52,y:25}, {x:70,y:38}, {x:73,y:50}, {x:70,y:64}, {x:52,y:76}, {x:31,y:76}]
  ]},
  'E': { strokes: [
    [{x:33,y:25}, {x:33,y:76}],
    [{x:33,y:25}, {x:68,y:25}],
    [{x:33,y:50}, {x:61,y:50}],
    [{x:33,y:76}, {x:68,y:76}]
  ]},
  'F': { strokes: [
    [{x:35,y:25}, {x:35,y:76}],
    [{x:35,y:25}, {x:68,y:25}],
    [{x:35,y:50}, {x:61,y:50}]
  ]},
  'G': { strokes: [
    [{x:72,y:30}, {x:54,y:24}, {x:34,y:30}, {x:26,y:50}, {x:34,y:70}, {x:54,y:78}, {x:72,y:70}, {x:72,y:56}],
    [{x:50,y:56}, {x:72,y:56}]
  ]},
  'H': { strokes: [
    [{x:29,y:25}, {x:29,y:76}],
    [{x:71,y:25}, {x:71,y:76}],
    [{x:29,y:50}, {x:71,y:50}]
  ]},
  'I': { strokes: [
    [{x:48,y:25}, {x:52,y:25}],
    [{x:50,y:25}, {x:50,y:76}],
    [{x:48,y:76}, {x:52,y:76}]
  ]},
  'J': { strokes: [
    [{x:56,y:25}, {x:56,y:64}, {x:48,y:76}, {x:39,y:76}, {x:33,y:68}]
  ]},
  'K': { strokes: [
    [{x:30,y:25}, {x:30,y:76}],
    [{x:69,y:25}, {x:30,y:50}],
    [{x:30,y:50}, {x:69,y:76}]
  ]},
  'L': { strokes: [
    [{x:35,y:25}, {x:35,y:76}],
    [{x:35,y:76}, {x:68,y:76}]
  ]},
  'M': { strokes: [
    [{x:24,y:76}, {x:24,y:25}],
    [{x:24,y:25}, {x:50,y:62}],
    [{x:50,y:62}, {x:76,y:25}],
    [{x:76,y:25}, {x:76,y:76}]
  ]},
  'N': { strokes: [
    [{x:29,y:76}, {x:29,y:25}],
    [{x:29,y:25}, {x:71,y:76}],
    [{x:71,y:76}, {x:71,y:25}]
  ]},
  'O': { strokes: [
    [{x:50,y:24}, {x:31,y:30}, {x:26,y:50}, {x:29,y:70}, {x:50,y:78}, {x:71,y:70}, {x:74,y:50}, {x:69,y:30}, {x:50,y:24}]
  ]},
  'P': { strokes: [
    [{x:32,y:25}, {x:32,y:76}],
    [{x:32,y:25}, {x:56,y:25}, {x:70,y:34}, {x:70,y:46}, {x:56,y:54}, {x:32,y:54}]
  ]},
  'Q': { strokes: [
    [{x:49,y:24}, {x:31,y:30}, {x:26,y:50}, {x:29,y:70}, {x:49,y:77}, {x:69,y:70}, {x:73,y:50}, {x:67,y:30}, {x:49,y:24}],
    [{x:56,y:70}, {x:73,y:82}]
  ]},
  'R': { strokes: [
    [{x:31,y:25}, {x:31,y:76}],
    [{x:31,y:25}, {x:54,y:25}, {x:67,y:34}, {x:67,y:46}, {x:54,y:54}, {x:31,y:54}],
    [{x:45,y:54}, {x:67,y:76}]
  ]},
  'S': { strokes: [
    [{x:68,y:30}, {x:52,y:24}, {x:36,y:30}, {x:30,y:42}, {x:39,y:52}, {x:61,y:56}, {x:70,y:64}, {x:66,y:74}, {x:50,y:79}, {x:34,y:72}]
  ]},
  'T': { strokes: [
    [{x:30,y:25}, {x:70,y:25}],
    [{x:50,y:25}, {x:50,y:76}]
  ]},
  'U': { strokes: [
    [{x:29,y:25}, {x:29,y:62}, {x:36,y:74}, {x:50,y:77}, {x:64,y:74}, {x:71,y:62}, {x:71,y:25}]
  ]},
  'V': { strokes: [
    [{x:29,y:25}, {x:50,y:76}],
    [{x:71,y:25}, {x:50,y:76}]
  ]},
  'W': { strokes: [
    [{x:16,y:25}, {x:34,y:76}, {x:50,y:25}],
    [{x:50,y:25}, {x:66,y:76}, {x:84,y:25}]
  ]},
  'X': { strokes: [
    [{x:28,y:25}, {x:71,y:76}],
    [{x:71,y:25}, {x:28,y:76}]
  ]},
  'Y': { strokes: [
    [{x:27,y:25}, {x:50,y:52}],
    [{x:72,y:25}, {x:50,y:52}],
    [{x:50,y:52}, {x:50,y:76}]
  ]},
  'Z': { strokes: [
    [{x:30,y:25}, {x:71,y:25}],
    [{x:71,y:25}, {x:30,y:76}],
    [{x:30,y:76}, {x:71,y:76}]
  ]}
};

// 字母小绘本数据 - 每个字母对应的单词和图片轮廓
const BOOK_DATA = {
  'A': {
    word: 'apple',
    chinese: '苹果',
    color: '#ff6b9d',
    strokes: [
      [ {x:50, y:25, type:'move'}, {x:40, y:20, type:'line'}, {x:30, y:25, type:'line'}, {x:25, y:40, type:'line'}, {x:25, y:60, type:'line'}, {x:30, y:75, type:'line'}, {x:40, y:80, type:'line'}, {x:50, y:82, type:'line'}, {x:60, y:80, type:'line'}, {x:70, y:75, type:'line'}, {x:75, y:60, type:'line'}, {x:75, y:40, type:'line'}, {x:70, y:25, type:'line'}, {x:60, y:20, type:'line'}, {x:50, y:25, type:'line'} ],
      [ {x:50, y:20, type:'move'}, {x:50, y:12, type:'line'} ],
      [ {x:50, y:15, type:'move'}, {x:58, y:10, type:'line'}, {x:65, y:15, type:'line'} ],
      [ {x:50, y:15, type:'move'}, {x:42, y:10, type:'line'}, {x:35, y:15, type:'line'} ]
    ]
  },
  'B': {
    word: 'ball',
    chinese: '球',
    color: '#ff9a9e',
    strokes: [
      [ {x:50, y:15, type:'move'}, {x:70, y:25, type:'line'}, {x:80, y:45, type:'line'}, {x:80, y:55, type:'line'}, {x:70, y:75, type:'line'}, {x:50, y:85, type:'line'}, {x:30, y:75, type:'line'}, {x:20, y:55, type:'line'}, {x:20, y:45, type:'line'}, {x:30, y:25, type:'line'}, {x:50, y:15, type:'line'} ],
      [ {x:35, y:35, type:'move'}, {x:40, y:30, type:'line'}, {x:50, y:35, type:'line'} ],
      [ {x:55, y:55, type:'move'}, {x:60, y:60, type:'line'}, {x:55, y:65, type:'line'} ]
    ]
  },
  'C': {
    word: 'cat',
    chinese: '猫',
    color: '#f093fb',
    strokes: [
      [ {x:25, y:35, type:'move'}, {x:20, y:25, type:'line'}, {x:30, y:15, type:'line'}, {x:50, y:10, type:'line'}, {x:70, y:15, type:'line'}, {x:80, y:25, type:'line'}, {x:82, y:40, type:'line'}, {x:80, y:55, type:'line'}, {x:70, y:70, type:'line'}, {x:50, y:78, type:'line'}, {x:30, y:70, type:'line'}, {x:20, y:55, type:'line'} ],
      [ {x:30, y:40, type:'move'}, {x:25, y:35, type:'line'} ],
      [ {x:70, y:40, type:'move'}, {x:75, y:35, type:'line'} ],
      [ {x:45, y:55, type:'move'}, {x:55, y:55, type:'line'} ]
    ]
  },
  'D': {
    word: 'dog',
    chinese: '狗',
    color: '#a18cd1',
    strokes: [
      [ {x:30, y:20, type:'move'}, {x:25, y:15, type:'line'}, {x:20, y:25, type:'line'}, {x:22, y:35, type:'line'}, {x:28, y:40, type:'line'}, {x:35, y:38, type:'line'}, {x:40, y:30, type:'line'}, {x:38, y:20, type:'line'}, {x:30, y:20, type:'line'} ],
      [ {x:50, y:25, type:'move'}, {x:75, y:25, type:'line'}, {x:80, y:40, type:'line'}, {x:80, y:55, type:'line'}, {x:75, y:70, type:'line'}, {x:50, y:75, type:'line'}, {x:35, y:70, type:'line'}, {x:30, y:55, type:'line'}, {x:30, y:40, type:'line'}, {x:35, y:30, type:'line'} ],
      [ {x:45, y:45, type:'move'}, {x:48, y:45, type:'line'} ],
      [ {x:58, y:45, type:'move'}, {x:61, y:45, type:'line'} ],
      [ {x:50, y:58, type:'move'}, {x:55, y:58, type:'line'} ]
    ]
  },
  'E': {
    word: 'elephant',
    chinese: '大象',
    color: '#667eea',
    strokes: [
      [ {x:20, y:20, type:'move'}, {x:20, y:80, type:'line'}, {x:65, y:80, type:'line'}, {x:75, y:70, type:'line'}, {x:78, y:55, type:'line'}, {x:75, y:45, type:'line'}, {x:68, y:50, type:'line'}, {x:65, y:60, type:'line'}, {x:50, y:60, type:'line'} ],
      [ {x:20, y:20, type:'move'}, {x:55, y:20, type:'line'}, {x:60, y:25, type:'line'}, {x:58, y:35, type:'line'}, {x:50, y:38, type:'line'}, {x:20, y:38, type:'line'} ],
      [ {x:35, y:50, type:'move'}, {x:50, y:50, type:'line'} ]
    ]
  },
  'F': {
    word: 'fish',
    chinese: '鱼',
    color: '#4facfe',
    strokes: [
      [ {x:25, y:45, type:'move'}, {x:30, y:35, type:'line'}, {x:45, y:30, type:'line'}, {x:60, y:35, type:'line'}, {x:70, y:45, type:'line'}, {x:60, y:55, type:'line'}, {x:45, y:60, type:'line'}, {x:30, y:55, type:'line'}, {x:25, y:45, type:'line'} ],
      [ {x:75, y:35, type:'move'}, {x:82, y:45, type:'line'}, {x:75, y:55, type:'line'} ],
      [ {x:45, y:43, type:'move'}, {x:48, y:43, type:'line'} ]
    ]
  },
  'G': {
    word: 'grape',
    chinese: '葡萄',
    color: '#43e97b',
    strokes: [
      [ {x:50, y:20, type:'move'}, {x:35, y:25, type:'line'}, {x:25, y:40, type:'line'}, {x:22, y:55, type:'line'}, {x:28, y:70, type:'line'}, {x:42, y:80, type:'line'}, {x:58, y:80, type:'line'}, {x:72, y:70, type:'line'}, {x:78, y:55, type:'line'}, {x:75, y:45, type:'line'}, {x:65, y:45, type:'line'} ],
      [ {x:40, y:35, type:'move'}, {x:35, y:32, type:'line'}, {x:38, y:28, type:'line'} ],
      [ {x:42, y:55, type:'move'}, {x:38, y:55, type:'line'}, {x:38, y:59, type:'line'}, {x:42, y:59, type:'line'} ],
      [ {x:55, y:50, type:'move'}, {x:51, y:50, type:'line'}, {x:51, y:54, type:'line'}, {x:55, y:54, type:'line'} ],
      [ {x:62, y:65, type:'move'}, {x:58, y:65, type:'line'}, {x:58, y:69, type:'line'}, {x:62, y:69, type:'line'} ]
    ]
  },
  'H': {
    word: 'house',
    chinese: '房子',
    color: '#fa709a',
    strokes: [
      [ {x:50, y:15, type:'move'}, {x:20, y:40, type:'line'}, {x:20, y:82, type:'line'}, {x:80, y:82, type:'line'}, {x:80, y:40, type:'line'}, {x:50, y:15, type:'line'} ],
      [ {x:42, y:55, type:'move'}, {x:42, y:82, type:'line'}, {x:58, y:82, type:'line'}, {x:58, y:55, type:'line'}, {x:50, y:50, type:'line'}, {x:42, y:55, type:'line'} ],
      [ {x:68, y:50, type:'move'}, {x:68, y:58, type:'line'}, {x:76, y:58, type:'line'}, {x:76, y:50, type:'line'}, {x:68, y:50, type:'line'} ]
    ]
  },
  'I': {
    word: 'ice cream',
    chinese: '冰淇淋',
    color: '#ff9a56',
    strokes: [
      [ {x:35, y:70, type:'move'}, {x:50, y:85, type:'line'}, {x:65, y:70, type:'line'} ],
      [ {x:40, y:70, type:'move'}, {x:38, y:50, type:'line'}, {x:42, y:35, type:'line'}, {x:50, y:28, type:'line'}, {x:58, y:35, type:'line'}, {x:62, y:50, type:'line'}, {x:60, y:70, type:'line'}, {x:40, y:70, type:'line'} ],
      [ {x:45, y:25, type:'move'}, {x:43, y:18, type:'line'}, {x:50, y:12, type:'line'}, {x:57, y:18, type:'line'}, {x:55, y:25, type:'line'} ]
    ]
  },
  'J': {
    word: 'juice',
    chinese: '果汁',
    color: '#fcb69f',
    strokes: [
      [ {x:35, y:25, type:'move'}, {x:32, y:22, type:'line'}, {x:30, y:25, type:'line'}, {x:30, y:30, type:'line'}, {x:35, y:32, type:'line'}, {x:70, y:32, type:'line'}, {x:75, y:30, type:'line'}, {x:75, y:25, type:'line'}, {x:73, y:22, type:'line'}, {x:70, y:25, type:'line'} ],
      [ {x:38, y:32, type:'move'}, {x:35, y:75, type:'line'}, {x:50, y:82, type:'line'}, {x:65, y:75, type:'line'}, {x:62, y:32, type:'line'} ],
      [ {x:45, y:45, type:'move'}, {x:45, y:65, type:'line'}, {x:55, y:65, type:'line'}, {x:55, y:45, type:'line'} ]
    ]
  },
  'K': {
    word: 'kite',
    chinese: '风筝',
    color: '#a1c4fd',
    strokes: [
      [ {x:50, y:15, type:'move'}, {x:30, y:45, type:'line'}, {x:50, y:75, type:'line'}, {x:70, y:45, type:'line'}, {x:50, y:15, type:'line'} ],
      [ {x:50, y:75, type:'move'}, {x:45, y:85, type:'line'}, {x:50, y:80, type:'line'}, {x:55, y:88, type:'line'}, {x:50, y:82, type:'line'} ],
      [ {x:50, y:45, type:'move'}, {x:55, y:48, type:'line'}, {x:52, y:52, type:'line'} ]
    ]
  },
  'L': {
    word: 'lion',
    chinese: '狮子',
    color: '#96e6a1',
    strokes: [
      [ {x:50, y:30, type:'move'}, {x:35, y:25, type:'line'}, {x:25, y:35, type:'line'}, {x:22, y:50, type:'line'}, {x:28, y:65, type:'line'}, {x:40, y:72, type:'line'}, {x:55, y:72, type:'line'}, {x:68, y:65, type:'line'}, {x:74, y:50, type:'line'}, {x:72, y:35, type:'line'}, {x:62, y:25, type:'line'}, {x:50, y:30, type:'line'} ],
      [ {x:35, y:45, type:'move'}, {x:38, y:45, type:'line'} ],
      [ {x:62, y:45, type:'move'}, {x:65, y:45, type:'line'} ],
      [ {x:45, y:58, type:'move'}, {x:55, y:58, type:'line'} ],
      [ {x:28, y:20, type:'move'}, {x:25, y:12, type:'line'}, {x:32, y:18, type:'line'} ],
      [ {x:72, y:20, type:'move'}, {x:75, y:12, type:'line'}, {x:68, y:18, type:'line'} ]
    ]
  },
  'M': {
    word: 'moon',
    chinese: '月亮',
    color: '#84fab0',
    strokes: [
      [ {x:50, y:15, type:'move'}, {x:30, y:25, type:'line'}, {x:20, y:45, type:'line'}, {x:20, y:55, type:'line'}, {x:30, y:75, type:'line'}, {x:50, y:85, type:'line'}, {x:70, y:75, type:'line'}, {x:80, y:55, type:'line'}, {x:80, y:45, type:'line'}, {x:70, y:25, type:'line'}, {x:50, y:15, type:'line'} ],
      [ {x:45, y:40, type:'move'}, {x:42, y:40, type:'line'} ],
      [ {x:58, y:40, type:'move'}, {x:55, y:40, type:'line'} ]
    ]
  },
  'N': {
    word: 'nose',
    chinese: '鼻子',
    color: '#fddb92',
    strokes: [
      [ {x:35, y:25, type:'move'}, {x:30, y:45, type:'line'}, {x:32, y:60, type:'line'}, {x:40, y:70, type:'line'}, {x:50, y:72, type:'line'}, {x:60, y:70, type:'line'}, {x:68, y:60, type:'line'}, {x:70, y:45, type:'line'}, {x:65, y:25, type:'line'}, {x:50, y:20, type:'line'}, {x:35, y:25, type:'line'} ],
      [ {x:42, y:42, type:'move'}, {x:42, y:45, type:'line'}, {x:45, y:45, type:'line'} ],
      [ {x:58, y:42, type:'move'}, {x:55, y:42, type:'line'}, {x:55, y:45, type:'line'} ],
      [ {x:50, y:55, type:'move'}, {x:48, y:58, type:'line'}, {x:52, y:58, type:'line'} ]
    ]
  },
  'O': {
    word: 'orange',
    chinese: '橙子',
    color: '#2af598',
    strokes: [
      [ {x:50, y:18, type:'move'}, {x:30, y:28, type:'line'}, {x:20, y:50, type:'line'}, {x:30, y:72, type:'line'}, {x:50, y:82, type:'line'}, {x:70, y:72, type:'line'}, {x:80, y:50, type:'line'}, {x:70, y:28, type:'line'}, {x:50, y:18, type:'line'} ],
      [ {x:50, y:18, type:'move'}, {x:50, y:10, type:'line'} ],
      [ {x:50, y:13, type:'move'}, {x:42, y:8, type:'line'}, {x:38, y:13, type:'line'} ],
      [ {x:45, y:45, type:'move'}, {x:42, y:48, type:'line'}, {x:45, y:51, type:'line'} ]
    ]
  },
  'P': {
    word: 'penguin',
    chinese: '企鹅',
    color: '#f093fb',
    strokes: [
      [ {x:50, y:20, type:'move'}, {x:38, y:25, type:'line'}, {x:32, y:38, type:'line'}, {x:30, y:55, type:'line'}, {x:35, y:70, type:'line'}, {x:45, y:78, type:'line'}, {x:50, y:80, type:'line'}, {x:55, y:78, type:'line'}, {x:65, y:70, type:'line'}, {x:70, y:55, type:'line'}, {x:68, y:38, type:'line'}, {x:62, y:25, type:'line'}, {x:50, y:20, type:'line'} ],
      [ {x:38, y:35, type:'move'}, {x:28, y:28, type:'line'}, {x:32, y:22, type:'line'} ],
      [ {x:62, y:35, type:'move'}, {x:72, y:28, type:'line'}, {x:68, y:22, type:'line'} ],
      [ {x:42, y:45, type:'move'}, {x:45, y:45, type:'line'} ],
      [ {x:55, y:45, type:'move'}, {x:58, y:45, type:'line'} ],
      [ {x:47, y:58, type:'move'}, {x:53, y:58, type:'line'} ],
      [ {x:40, y:78, type:'move'}, {x:38, y:85, type:'line'}, {x:45, y:82, type:'line'} ],
      [ {x:60, y:78, type:'move'}, {x:62, y:85, type:'line'}, {x:55, y:82, type:'line'} ]
    ]
  },
  'Q': {
    word: 'queen',
    chinese: '女王',
    color: '#30cfd0',
    strokes: [
      [ {x:40, y:25, type:'move'}, {x:38, y:20, type:'line'}, {x:42, y:18, type:'line'}, {x:45, y:22, type:'line'}, {x:50, y:15, type:'line'}, {x:55, y:22, type:'line'}, {x:58, y:18, type:'line'}, {x:62, y:20, type:'line'}, {x:60, y:25, type:'line'} ],
      [ {x:35, y:28, type:'move'}, {x:30, y:45, type:'line'}, {x:32, y:65, type:'line'}, {x:45, y:75, type:'line'}, {x:55, y:75, type:'line'}, {x:68, y:65, type:'line'}, {x:70, y:45, type:'line'}, {x:65, y:28, type:'line'}, {x:50, y:25, type:'line'}, {x:35, y:28, type:'line'} ],
      [ {x:45, y:45, type:'move'}, {x:45, y:58, type:'line'}, {x:55, y:58, type:'line'}, {x:55, y:45, type:'line'} ],
      [ {x:62, y:68, type:'move'}, {x:75, y:80, type:'line'} ]
    ]
  },
  'R': {
    word: 'rabbit',
    chinese: '兔子',
    color: '#a8edea',
    strokes: [
      [ {x:35, y:15, type:'move'}, {x:30, y:10, type:'line'}, {x:28, y:25, type:'line'}, {x:32, y:40, type:'line'} ],
      [ {x:65, y:15, type:'move'}, {x:70, y:10, type:'line'}, {x:72, y:25, type:'line'}, {x:68, y:40, type:'line'} ],
      [ {x:50, y:30, type:'move'}, {x:35, y:38, type:'line'}, {x:30, y:55, type:'line'}, {x:35, y:72, type:'line'}, {x:50, y:78, type:'line'}, {x:65, y:72, type:'line'}, {x:70, y:55, type:'line'}, {x:65, y:38, type:'line'}, {x:50, y:30, type:'line'} ],
      [ {x:42, y:50, type:'move'}, {x:44, y:50, type:'line'} ],
      [ {x:56, y:50, type:'move'}, {x:58, y:50, type:'line'} ],
      [ {x:47, y:62, type:'move'}, {x:53, y:62, type:'line'} ]
    ]
  },
  'S': {
    word: 'star',
    chinese: '星星',
    color: '#fcb69f',
    strokes: [
      [ {x:50, y:15, type:'move'}, {x:45, y:35, type:'line'}, {x:25, y:38, type:'line'}, {x:40, y:52, type:'line'}, {x:35, y:75, type:'line'}, {x:50, y:62, type:'line'}, {x:65, y:75, type:'line'}, {x:60, y:52, type:'line'}, {x:75, y:38, type:'line'}, {x:55, y:35, type:'line'}, {x:50, y:15, type:'line'} ]
    ]
  },
  'T': {
    word: 'tree',
    chinese: '树',
    color: '#ff9a9e',
    strokes: [
      [ {x:50, y:12, type:'move'}, {x:30, y:35, type:'line'}, {x:38, y:35, type:'line'}, {x:25, y:55, type:'line'}, {x:40, y:55, type:'line'}, {x:30, y:75, type:'line'}, {x:70, y:75, type:'line'}, {x:60, y:55, type:'line'}, {x:75, y:55, type:'line'}, {x:62, y:35, type:'line'}, {x:70, y:35, type:'line'}, {x:50, y:12, type:'line'} ],
      [ {x:45, y:75, type:'move'}, {x:45, y:85, type:'line'}, {x:55, y:85, type:'line'}, {x:55, y:75, type:'line'} ]
    ]
  },
  'U': {
    word: 'umbrella',
    chinese: '雨伞',
    color: '#ffecd2',
    strokes: [
      [ {x:50, y:15, type:'move'}, {x:30, y:28, type:'line'}, {x:22, y:45, type:'line'}, {x:25, y:55, type:'line'}, {x:40, y:58, type:'line'}, {x:50, y:55, type:'line'}, {x:60, y:58, type:'line'}, {x:75, y:55, type:'line'}, {x:78, y:45, type:'line'}, {x:70, y:28, type:'line'}, {x:50, y:15, type:'line'} ],
      [ {x:50, y:15, type:'move'}, {x:50, y:60, type:'line'} ],
      [ {x:50, y:60, type:'move'}, {x:45, y:72, type:'line'}, {x:55, y:78, type:'line'}, {x:45, y:82, type:'line'} ]
    ]
  },
  'V': {
    word: 'violin',
    chinese: '小提琴',
    color: '#a1c4fd',
    strokes: [
      [ {x:50, y:20, type:'move'}, {x:38, y:35, type:'line'}, {x:32, y:55, type:'line'}, {x:35, y:72, type:'line'}, {x:50, y:80, type:'line'}, {x:65, y:72, type:'line'}, {x:68, y:55, type:'line'}, {x:62, y:35, type:'line'}, {x:50, y:20, type:'line'} ],
      [ {x:50, y:15, type:'move'}, {x:50, y:10, type:'line'} ],
      [ {x:45, y:45, type:'move'}, {x:42, y:48, type:'line'}, {x:45, y:51, type:'line'} ],
      [ {x:55, y:45, type:'move'}, {x:58, y:48, type:'line'}, {x:55, y:51, type:'line'} ]
    ]
  },
  'W': {
    word: 'watermelon',
    chinese: '西瓜',
    color: '#f093fb',
    strokes: [
      [ {x:20, y:50, type:'move'}, {x:30, y:25, type:'line'}, {x:50, y:18, type:'line'}, {x:70, y:25, type:'line'}, {x:80, y:50, type:'line'}, {x:70, y:75, type:'line'}, {x:50, y:82, type:'line'}, {x:30, y:75, type:'line'}, {x:20, y:50, type:'line'} ],
      [ {x:50, y:18, type:'move'}, {x:50, y:82, type:'line'} ],
      [ {x:35, y:30, type:'move'}, {x:45, y:70, type:'line'} ],
      [ {x:65, y:30, type:'move'}, {x:55, y:70, type:'line'} ]
    ]
  },
  'X': {
    word: 'xylophone',
    chinese: '木琴',
    color: '#4facfe',
    strokes: [
      [ {x:25, y:25, type:'move'}, {x:75, y:75, type:'line'} ],
      [ {x:75, y:25, type:'move'}, {x:25, y:75, type:'line'} ],
      [ {x:30, y:40, type:'move'}, {x:25, y:45, type:'line'}, {x:30, y:50, type:'line'}, {x:35, y:45, type:'line'}, {x:30, y:40, type:'line'} ],
      [ {x:45, y:30, type:'move'}, {x:40, y:35, type:'line'}, {x:45, y:40, type:'line'}, {x:50, y:35, type:'line'}, {x:45, y:30, type:'line'} ],
      [ {x:55, y:55, type:'move'}, {x:50, y:60, type:'line'}, {x:55, y:65, type:'line'}, {x:60, y:60, type:'line'}, {x:55, y:55, type:'line'} ],
      [ {x:70, y:45, type:'move'}, {x:65, y:50, type:'line'}, {x:70, y:55, type:'line'}, {x:75, y:50, type:'line'}, {x:70, y:45, type:'line'} ]
    ]
  },
  'Y': {
    word: 'yo-yo',
    chinese: '溜溜球',
    color: '#fa709a',
    strokes: [
      [ {x:50, y:15, type:'move'}, {x:50, y:35, type:'line'} ],
      [ {x:35, y:40, type:'move'}, {x:25, y:50, type:'line'}, {x:25, y:65, type:'line'}, {x:35, y:75, type:'line'}, {x:50, y:78, type:'line'}, {x:65, y:75, type:'line'}, {x:75, y:65, type:'line'}, {x:75, y:50, type:'line'}, {x:65, y:40, type:'line'}, {x:50, y:38, type:'line'}, {x:35, y:40, type:'line'} ],
      [ {x:50, y:50, type:'move'}, {x:48, y:58, type:'line'}, {x:52, y:58, type:'line'}, {x:50, y:50, type:'line'} ]
    ]
  },
  'Z': {
    word: 'zebra',
    chinese: '斑马',
    color: '#ff6b9d',
    strokes: [
      [ {x:35, y:20, type:'move'}, {x:28, y:28, type:'line'}, {x:25, y:45, type:'line'}, {x:30, y:65, type:'line'}, {x:45, y:75, type:'line'}, {x:55, y:75, type:'line'}, {x:70, y:65, type:'line'}, {x:75, y:45, type:'line'}, {x:72, y:28, type:'line'}, {x:65, y:20, type:'line'}, {x:50, y:18, type:'line'}, {x:35, y:20, type:'line'} ],
      [ {x:30, y:30, type:'move'}, {x:22, y:25, type:'line'}, {x:20, y:18, type:'line'} ],
      [ {x:70, y:30, type:'move'}, {x:78, y:25, type:'line'}, {x:80, y:18, type:'line'} ],
      [ {x:40, y:42, type:'move'}, {x:42, y:42, type:'line'} ],
      [ {x:58, y:42, type:'move'}, {x:60, y:42, type:'line'} ],
      [ {x:48, y:55, type:'move'}, {x:52, y:55, type:'line'} ],
      [ {x:35, y:68, type:'move'}, {x:32, y:78, type:'line'}, {x:38, y:75, type:'line'} ],
      [ {x:65, y:68, type:'move'}, {x:68, y:78, type:'line'}, {x:62, y:75, type:'line'} ]
    ]
  }
};

function getDefaultBookData(letter) {
  return {
    word: letter.toLowerCase(),
    chinese: letter.toLowerCase(),
    color: '#ff6b9d',
    strokes: [
      [ {x:30, y:30, type:'move'}, {x:70, y:30, type:'line'}, {x:70, y:70, type:'line'}, {x:30, y:70, type:'line'}, {x:30, y:30, type:'line'} ]
    ]
  };
}

// 视力表 E 字方向数据
const VISION_E_DIRECTIONS = [
  { name: 'up',    chinese: '上', arrow: '↑', rotation: 270, color: '#ff6b9d', hint: '开口朝上就是上' },
  { name: 'down',  chinese: '下', arrow: '↓', rotation: 90,  color: '#4facfe', hint: '开口朝下就是下' },
  { name: 'left',  chinese: '左', arrow: '←', rotation: 180, color: '#43e97b', hint: '开口朝左就是左' },
  { name: 'right', chinese: '右', arrow: '→', rotation: 0,   color: '#ff9a56', hint: '开口朝右就是右' },
];

// 视力表方向描红引导数据（百分比坐标 0-100）
const VISION_DIRECTION_GUIDES = {
  up:    [{x:50, y:75}, {x:50, y:25}],
  down:  [{x:50, y:25}, {x:50, y:75}],
  left:  [{x:75, y:50}, {x:25, y:50}],
  right: [{x:25, y:50}, {x:75, y:50}],
};

function getDefaultStrokes(letter) {
  return {
    strokes: [
      [ {x:50, y:20}, {x:50, y:80} ]
    ]
  };
}

// === 字母 Mask 生成 ===
const letterMaskCache = {};

function createLetterMask(letter, canvasWidth, canvasHeight) {
  const key = `${letter}_${canvasWidth}_${canvasHeight}`;
  if (letterMaskCache[key]) return letterMaskCache[key];

  const offscreen = document.createElement('canvas');
  offscreen.width = canvasWidth;
  offscreen.height = canvasHeight;
  const ctx = offscreen.getContext('2d');

  const fontSize = canvasHeight * 0.78;
  ctx.font = `bold ${fontSize}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#000';
  ctx.fillText(letter, canvasWidth / 2, canvasHeight / 2);

  const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  const mask = new Uint8Array(canvasWidth * canvasHeight);
  for (let i = 0; i < mask.length; i++) {
    mask[i] = imageData.data[i * 4 + 3] > 50 ? 1 : 0;
  }

  letterMaskCache[key] = mask;
  return mask;
}

function isPointInLetterMask(x, y, letter, canvasWidth, canvasHeight) {
  const mask = createLetterMask(letter, canvasWidth, canvasHeight);
  const ix = Math.round(x);
  const iy = Math.round(y);
  if (ix < 0 || ix >= canvasWidth || iy < 0 || iy >= canvasHeight) return false;
  return mask[iy * canvasWidth + ix] === 1;
}

let currentLetter = 'A';
let currentStrokeIndex = 0;
let completedStrokes = new Set();
let completedStrokePaths = {};
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentStrokePath = [];
let isAnimating = false;
let lastStartHintTime = 0;

// 绘本相关变量
let bookCurrentStrokeIndex = 0;
let bookCompletedStrokes = new Set();
let bookIsDrawing = false;
let bookLastX = 0;
let bookLastY = 0;
let bookCurrentStrokePath = [];
let bookIsAnimating = false;

// 视力表相关变量
let currentVisionDirection = null;

const gridScreen = document.getElementById('grid-screen');
const detailScreen = document.getElementById('detail-screen');
const traceScreen = document.getElementById('trace-screen');
const alphabetGrid = document.getElementById('alphabet-grid');
const bigLetter = document.getElementById('big-letter');
const backBtn = document.getElementById('back-btn');
const audioBtn = document.getElementById('audio-btn');
const traceBtn = document.getElementById('trace-btn');
const traceBackBtn = document.getElementById('trace-back-btn');
const traceReplayBtn = document.getElementById('trace-replay-btn');
const traceClearBtn = document.getElementById('trace-clear-btn');
const traceCompleteBtn = document.getElementById('trace-complete-btn');
const strokeIndicator = document.getElementById('stroke-indicator');
const guideCanvas = document.getElementById('trace-guide-canvas');
const drawCanvas = document.getElementById('trace-draw-canvas');
const celebration = document.getElementById('celebration');
const traceTryAgain = document.getElementById('trace-try-again');
const traceStartHint = document.getElementById('trace-start-hint');
const traceHint = document.getElementById('trace-hint');
const traceClearIcon = document.getElementById('trace-clear-icon');
const traceClearText = document.getElementById('trace-clear-text');

// 绘本相关 DOM 元素
const bookScreen = document.getElementById('book-screen');
const bookBtn = document.getElementById('book-btn');
const bookBackBtn = document.getElementById('book-back-btn');
const bookLetter = document.getElementById('book-letter');
const wordText = document.getElementById('word-text');
const wordChinese = document.getElementById('word-chinese');
const wordAudioBtn = document.getElementById('word-audio-btn');
const bookGuideCanvas = document.getElementById('book-guide-canvas');
const bookDrawCanvas = document.getElementById('book-draw-canvas');
const bookReplayBtn = document.getElementById('book-replay-btn');
const bookClearBtn = document.getElementById('book-clear-btn');
const bookCompleteBtn = document.getElementById('book-complete-btn');
const bookHint = document.getElementById('book-hint');

// 视力表相关 DOM 元素
const homeScreen = document.getElementById('home-screen');
const visionScreen = document.getElementById('vision-screen');
const visionDetailScreen = document.getElementById('vision-detail-screen');
const btnVision = document.getElementById('btn-vision');
const btnAlphabet = document.getElementById('btn-alphabet');
const gridBackBtn = document.getElementById('grid-back-btn');
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

function init() {
  createAlphabetGrid();
  createVisionEGrid();
  setupEventListeners();
  resizeTraceCanvas();
  resizeBookCanvas();

  if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = () => {
      speechSynthesis.getVoices();
    };
    speechSynthesis.getVoices();
  }
}

function createAlphabetGrid() {
  alphabetGrid.innerHTML = '';
  ALPHABETS.forEach(letter => {
    const card = document.createElement('div');
    card.className = 'letter-card';
    card.dataset.letter = letter;
    card.textContent = letter;
    card.addEventListener('click', () => openLetterDetail(letter));
    alphabetGrid.appendChild(card);
  });
}

function openLetterDetail(letter) {
  currentLetter = letter;
  bigLetter.textContent = letter;

  const gradients = {
    'A': '#ff6b9d', 'B': '#ff9a9e', 'C': '#f093fb', 'D': '#a18cd1', 'E': '#667eea',
    'F': '#4facfe', 'G': '#43e97b', 'H': '#fa709a', 'I': '#ff9a56', 'J': '#ffecd2',
    'K': '#a1c4fd', 'L': '#d4fc79', 'M': '#84fab0', 'N': '#fddb92', 'O': '#2af598',
    'P': '#f093fb', 'Q': '#30cfd0', 'R': '#a8edea', 'S': '#ffecd2', 'T': '#ff9a9e',
    'U': '#ffecd2', 'V': '#a1c4fd', 'W': '#f093fb', 'X': '#4facfe', 'Y': '#fa709a', 'Z': '#ff6b9d'
  };
  const color = gradients[letter] || '#ff6b9d';
  bigLetter.style.background = `linear-gradient(135deg, ${color} 0%, ${lightenColor(color, 30)} 100%)`;
  bigLetter.style.webkitBackgroundClip = 'text';
  bigLetter.style.webkitTextFillColor = 'transparent';

  gridScreen.classList.remove('active');
  detailScreen.classList.add('active');
}

function goBack() {
  detailScreen.classList.remove('active');
  gridScreen.classList.add('active');
}

let audioElement = null;

function playAudio() {
  audioBtn.classList.add('playing');

  const mp3Path = `assets/audio/${currentLetter}.mp3`;

  if (!audioElement) {
    audioElement = new Audio();
  }

  fetch(mp3Path)
    .then(response => {
      if (response.ok) {
        audioElement.src = mp3Path;
        audioElement.play();
      } else {
        playTTS();
      }
    })
    .catch(() => {
      playTTS();
    });

  setTimeout(() => {
    audioBtn.classList.remove('playing');
  }, 800);
}

function playTTS() {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();

    const voices = speechSynthesis.getVoices();
    const utterance = new SpeechSynthesisUtterance(currentLetter.toLowerCase());

    let preferredVoice = null;
    for (let voice of voices) {
      if (voice.lang === 'en-US' && (voice.name.includes('Female') || voice.name.includes('Samantha') || voice.name.includes('Victoria') || voice.name.includes('Karen') || voice.name.includes('Tessa'))) {
        preferredVoice = voice;
        break;
      }
    }
    if (!preferredVoice) {
      for (let voice of voices) {
        if (voice.lang === 'en-US') {
          preferredVoice = voice;
          break;
        }
      }
    }

    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.lang = 'en-US';
    utterance.rate = 0.65;
    utterance.pitch = 1.4;
    utterance.volume = 1.0;

    speechSynthesis.speak(utterance);
  }
}

function openTraceScreen() {
  currentStrokeIndex = 0;
  completedStrokes = new Set();
  completedStrokePaths = {};
  currentStrokePath = [];
  traceCompleteBtn.classList.add('hidden');
  traceCompleteBtn.classList.remove('show');

  detailScreen.classList.remove('active');
  traceScreen.classList.add('active');

  resizeTraceCanvas();
  clearTraceCanvas();
  drawLetterGuide();
  updateStrokeIndicator();

  setTimeout(() => animateCurrentStroke(), 300);
}

function exitTraceScreen() {
  isAnimating = false;
  traceScreen.classList.remove('active');
  detailScreen.classList.add('active');
}

function completeTrace() {
  showCelebration();
  speakChinese('太棒了');
  setTimeout(() => {
    exitTraceScreen();
  }, 2500);
}

function speakChinese(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.8;
    utterance.pitch = 1.2;
    utterance.volume = 1.0;
    speechSynthesis.speak(utterance);
  }
}

function resizeTraceCanvas() {
  const container = guideCanvas.parentElement;
  const headerEl = document.querySelector('.trace-header');
  const controlsEl = document.querySelector('.trace-controls');
  const headerH = headerEl ? headerEl.offsetHeight : 80;
  const controlsH = controlsEl ? controlsEl.offsetHeight : 80;
  const availableH = window.innerHeight - headerH - controlsH - 40;
  const availableW = window.innerWidth - 40;
  const size = Math.min(availableW, availableH, 800);

  guideCanvas.width = size;
  guideCanvas.height = size;
  drawCanvas.width = size;
  drawCanvas.height = size;

  // Clear mask cache on resize since dimensions changed
  Object.keys(letterMaskCache).forEach(k => delete letterMaskCache[k]);

  if (traceScreen.classList.contains('active')) {
    drawLetterGuide();
    drawCompletedStrokes();
  }
}

function getGuideCtx() { return guideCanvas.getContext('2d'); }
function getDrawCtx() { return drawCanvas.getContext('2d'); }

function clearTraceCanvas() {
  getGuideCtx().clearRect(0, 0, guideCanvas.width, guideCanvas.height);
  getDrawCtx().clearRect(0, 0, drawCanvas.width, drawCanvas.height);
}

function toCanvasX(x) { return (x / 100) * guideCanvas.width; }
function toCanvasY(y) { return (y / 100) * guideCanvas.height; }

function getLetterData(letter) {
  return LETTER_GUIDES[letter] || getDefaultStrokes(letter);
}

function drawLetterGuide() {
  const ctx = getGuideCtx();
  const w = guideCanvas.width;
  const h = guideCanvas.height;

  ctx.clearRect(0, 0, w, h);

  // 渐变字母（先画，在参考线下方）
  const fontSize = h * 0.78;
  ctx.font = `bold ${fontSize}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.save();
  ctx.globalAlpha = 0.35;
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#ff6b9d');
  grad.addColorStop(0.5, '#ff8a80');
  grad.addColorStop(1, '#a18cd1');
  ctx.fillStyle = grad;
  ctx.shadowColor = 'rgba(255, 107, 157, 0.15)';
  ctx.shadowBlur = 15;
  ctx.fillText(currentLetter, w / 2, h / 2);
  ctx.restore();

  // 四线三格参考线（暖粉色调）
  ctx.strokeStyle = 'rgba(255, 150, 180, 0.3)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([8, 8]);
  [0.1, 0.5, 0.9].forEach(ratio => {
    ctx.beginPath();
    ctx.moveTo(w * 0.05, h * ratio);
    ctx.lineTo(w * 0.95, h * ratio);
    ctx.stroke();
  });
  // 垂直中线
  ctx.strokeStyle = 'rgba(255, 150, 180, 0.2)';
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.05);
  ctx.lineTo(w * 0.5, h * 0.95);
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawStroke(ctx, stroke, options = {}) {
  const { color = '#333', lineWidth = 8, dash = [] } = options;
  if (stroke.length < 2) return;

  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash(dash);

  ctx.beginPath();
  stroke.forEach((point, i) => {
    const x = toCanvasX(point.x);
    const y = toCanvasY(point.y);
    if (i === 0 || point.type === 'move') {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();
  ctx.restore();
}

// Catmull-Rom 样条插值 — 让曲线字母（O、S、C 等）的引导线平滑
function catmullRomInterpolate(points, segmentsPerSpan = 12) {
  if (points.length < 3) return points;
  const result = [points[0]];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    for (let t = 1; t <= segmentsPerSpan; t++) {
      const s = t / segmentsPerSpan;
      const s2 = s * s;
      const s3 = s2 * s;
      result.push({
        x: 0.5 * ((2*p1.x) + (-p0.x+p2.x)*s + (2*p0.x-5*p1.x+4*p2.x-p3.x)*s2 + (-p0.x+3*p1.x-3*p2.x+p3.x)*s3),
        y: 0.5 * ((2*p1.y) + (-p0.y+p2.y)*s + (2*p0.y-5*p1.y+4*p2.y-p3.y)*s2 + (-p0.y+3*p1.y-3*p2.y+p3.y)*s3)
      });
    }
  }
  return result;
}

// 4+ 控制点的笔画用样条平滑，2-3 点保持直线（如 A、M、W 的折线）
function smoothStroke(stroke) {
  return stroke.length >= 4 ? catmullRomInterpolate(stroke) : stroke;
}

function drawGuideStroke(ctx, stroke, options = {}) {
  const { color = '#333', lineWidth = 8, dash = [] } = options;
  if (stroke.length < 2) return;
  const pts = smoothStroke(stroke);

  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash(dash);

  ctx.beginPath();
  ctx.moveTo(toCanvasX(pts[0].x), toCanvasY(pts[0].y));
  for (let i = 1; i < pts.length; i++) {
    ctx.lineTo(toCanvasX(pts[i].x), toCanvasY(pts[i].y));
  }
  ctx.stroke();
  ctx.restore();
}

function drawStartPoint(ctx, x, y) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 107, 157, 0.3)';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, y, 12, 0, Math.PI * 2);
  ctx.fillStyle = '#ff6b9d';
  ctx.fill();
  ctx.restore();
}

function drawArrowHint(ctx, stroke) {
  if (stroke.length < 2) return;
  const start = stroke[0];
  const end = stroke[Math.min(3, stroke.length - 1)];
  const x1 = toCanvasX(start.x);
  const y1 = toCanvasY(start.y);
  const x2 = toCanvasX(end.x);
  const y2 = toCanvasY(end.y);

  // 渐隐圆点轨迹 - 比箭头更直观
  ctx.save();
  const numDots = 6;
  const dx = x2 - x1;
  const dy = y2 - y1;
  for (let i = 1; i <= numDots; i++) {
    const t = i / (numDots + 1) * 0.5;
    const dotX = x1 + dx * t;
    const dotY = y1 + dy * t;
    const radius = 6 - i * 0.7;
    const alpha = 0.6 - i * 0.07;
    ctx.beginPath();
    ctx.arc(dotX, dotY, Math.max(radius, 1.5), 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 107, 157, ${alpha})`;
    ctx.fill();
  }
  ctx.restore();
}

function animateCurrentStroke() {
  if (isAnimating) return;

  const letterData = getLetterData(currentLetter);
  if (currentStrokeIndex >= letterData.strokes.length) return;

  const rawStroke = letterData.strokes[currentStrokeIndex];
  const stroke = smoothStroke(rawStroke); // 平滑曲线笔画
  const ctx = getGuideCtx();
  isAnimating = true;

  // Calculate total path length
  let totalLength = 0;
  for (let i = 0; i < stroke.length - 1; i++) {
    const dx = toCanvasX(stroke[i+1].x) - toCanvasX(stroke[i].x);
    const dy = toCanvasY(stroke[i+1].y) - toCanvasY(stroke[i].y);
    totalLength += Math.sqrt(dx*dx + dy*dy);
  }

  let progress = 0;
  const speed = Math.max(1.0, totalLength / 180); // slower for children

  const animate = () => {
    if (!isAnimating || !traceScreen.classList.contains('active')) {
      isAnimating = false;
      return;
    }

    drawLetterGuide();
    drawCompletedStrokes();

    if (progress < totalLength) {
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 107, 157, 0.8)';
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();

      let remaining = progress;
      ctx.moveTo(toCanvasX(stroke[0].x), toCanvasY(stroke[0].y));

      for (let i = 0; i < stroke.length - 1; i++) {
        const x1 = toCanvasX(stroke[i].x);
        const y1 = toCanvasY(stroke[i].y);
        const x2 = toCanvasX(stroke[i+1].x);
        const y2 = toCanvasY(stroke[i+1].y);
        const segLen = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));

        if (remaining >= segLen) {
          ctx.lineTo(x2, y2);
          remaining -= segLen;
        } else {
          const t = remaining / segLen;
          ctx.lineTo(x1 + (x2-x1)*t, y1 + (y2-y1)*t);
          break;
        }
      }
      ctx.stroke();

      // Animated dot at the tip
      let tipX, tipY, tipRemaining = progress;
      tipX = toCanvasX(stroke[0].x);
      tipY = toCanvasY(stroke[0].y);
      for (let i = 0; i < stroke.length - 1; i++) {
        const x1 = toCanvasX(stroke[i].x);
        const y1 = toCanvasY(stroke[i].y);
        const x2 = toCanvasX(stroke[i+1].x);
        const y2 = toCanvasY(stroke[i+1].y);
        const segLen = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
        if (tipRemaining >= segLen) {
          tipX = x2; tipY = y2;
          tipRemaining -= segLen;
        } else {
          const t = tipRemaining / segLen;
          tipX = x1 + (x2-x1)*t;
          tipY = y1 + (y2-y1)*t;
          break;
        }
      }
      ctx.beginPath();
      ctx.arc(tipX, tipY, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#ff6b9d';
      ctx.fill();
      ctx.restore();

      progress += speed;
      requestAnimationFrame(animate);
    } else {
      isAnimating = false;
      drawLetterGuide();
      drawCompletedStrokes();
      drawCurrentStrokeHints();
    }
  };
  animate();
}

function drawCurrentStrokeHints() {
  const letterData = getLetterData(currentLetter);
  if (currentStrokeIndex >= letterData.strokes.length) return;

  const ctx = getGuideCtx();
  const stroke = letterData.strokes[currentStrokeIndex];

  // Draw guide center line as dashed highlight
  drawGuideStroke(ctx, stroke, {
    color: 'rgba(255, 107, 157, 0.35)',
    lineWidth: 6,
    dash: [10, 8]
  });

  // Start point
  const startPoint = stroke[0];
  drawStartPoint(ctx, toCanvasX(startPoint.x), toCanvasY(startPoint.y));

  // Direction arrow
  drawArrowHint(ctx, stroke);
}

function drawCompletedStrokes() {
  const ctx = getDrawCtx();
  const letterData = getLetterData(currentLetter);

  completedStrokes.forEach(index => {
    if (index < letterData.strokes.length) {
      const userPath = completedStrokePaths[index];
      if (userPath && userPath.length > 1) {
        // 绘制用户实际笔迹（从百分比坐标转回像素）
        ctx.save();
        ctx.strokeStyle = '#ff6b9d';
        ctx.lineWidth = 12;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(toCanvasX(userPath[0].x), toCanvasY(userPath[0].y));
        for (let i = 1; i < userPath.length; i++) {
          ctx.lineTo(toCanvasX(userPath[i].x), toCanvasY(userPath[i].y));
        }
        ctx.stroke();
        ctx.restore();
      } else {
        // fallback 到标准线
        drawGuideStroke(ctx, letterData.strokes[index], {
          color: '#ff6b9d',
          lineWidth: 14,
          dash: []
        });
      }
    }
  });
}

function updateStrokeIndicator() {
  const letterData = getLetterData(currentLetter);
  const total = letterData.strokes.length;
  let dots = '';
  for (let i = 0; i < total; i++) {
    if (i < currentStrokeIndex) {
      dots += '<span class="stroke-dot completed"></span>';
    } else if (i === currentStrokeIndex) {
      dots += '<span class="stroke-dot current"></span>';
    } else {
      dots += '<span class="stroke-dot pending"></span>';
    }
  }
  if (currentStrokeIndex >= total) {
    dots = '';
    for (let i = 0; i < total; i++) {
      dots += '<span class="stroke-dot completed"></span>';
    }
  }
  strokeIndicator.innerHTML = dots;
}

function isPointNearStroke(point, stroke, tolerance = 40) {
  for (let i = 0; i < stroke.length - 1; i++) {
    const p1 = { x: toCanvasX(stroke[i].x), y: toCanvasY(stroke[i].y) };
    const p2 = { x: toCanvasX(stroke[i+1].x), y: toCanvasY(stroke[i+1].y) };
    const dist = pointToLineDistance(point, p1, p2);
    if (dist < tolerance) return true;
  }
  return false;
}

function pointToLineDistance(point, lineStart, lineEnd) {
  const A = point.x - lineStart.x;
  const B = point.y - lineStart.y;
  const C = lineEnd.x - lineStart.x;
  const D = lineEnd.y - lineStart.y;
  const dot = A * C + B * D;
  const lenSq = C * C + D * D;
  let param = -1;
  if (lenSq !== 0) param = dot / lenSq;

  let xx, yy;
  if (param < 0) {
    xx = lineStart.x;
    yy = lineStart.y;
  } else if (param > 1) {
    xx = lineEnd.x;
    yy = lineEnd.y;
  } else {
    xx = lineStart.x + param * C;
    yy = lineStart.y + param * D;
  }

  const dx = point.x - xx;
  const dy = point.y - yy;
  return Math.sqrt(dx * dx + dy * dy);
}

function checkStrokeCompletion(path, stroke) {
  if (path.length < 3) return false;

  const start = { x: toCanvasX(stroke[0].x), y: toCanvasY(stroke[0].y) };
  const end = { x: toCanvasX(stroke[stroke.length-1].x), y: toCanvasY(stroke[stroke.length-1].y) };
  const pathStart = path[0];
  const pathEnd = path[path.length-1];

  const distToEnd = Math.hypot(pathEnd.x - end.x, pathEnd.y - end.y);

  // Check path proximity to guide line (wide tolerance)
  let nearStrokeCount = 0;
  path.forEach(p => {
    if (isPointNearStroke(p, stroke, 100)) nearStrokeCount++;
  });

  // Check how many points are within the letter mask
  const w = guideCanvas.width;
  const h = guideCanvas.height;
  let inMaskCount = 0;
  path.forEach(p => {
    if (isPointInLetterMask(p.x, p.y, currentLetter, w, h)) inMaskCount++;
  });

  // Check general direction matches
  const strokeDx = end.x - start.x;
  const strokeDy = end.y - start.y;
  const pathDx = pathEnd.x - pathStart.x;
  const pathDy = pathEnd.y - pathStart.y;
  const dot = strokeDx * pathDx + strokeDy * pathDy;
  const directionCorrect = dot > 0;

  // Method 1: end point close + some path near guide
  const nearGuide = distToEnd < 150 && nearStrokeCount > path.length * 0.15;

  // Method 2: mostly in letter shape + correct direction + enough length
  const inLetterShape = inMaskCount > path.length * 0.5 && directionCorrect && path.length > 8;

  return nearGuide || inLetterShape;
}

function getPosition(e, canvas) {
  const rect = canvas.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return { x: clientX - rect.left, y: clientY - rect.top };
}

function startDrawing(e) {
  if (isAnimating) return;
  e.preventDefault();

  const letterData = getLetterData(currentLetter);
  if (currentStrokeIndex >= letterData.strokes.length) return;

  const pos = getPosition(e, drawCanvas);
  const stroke = letterData.strokes[currentStrokeIndex];
  const start = { x: toCanvasX(stroke[0].x), y: toCanvasY(stroke[0].y) };
  const distToStart = Math.hypot(pos.x - start.x, pos.y - start.y);

  // Accept if near start point OR within the letter area
  const w = guideCanvas.width;
  const h = guideCanvas.height;
  const inMask = isPointInLetterMask(pos.x, pos.y, currentLetter, w, h);

  if (distToStart > 180 && !inMask) {
    // 提示用户从起笔点开始
    const now = Date.now();
    if (now - lastStartHintTime > 2000) {
      lastStartHintTime = now;
      traceStartHint.classList.add('show');
      // 重绘起笔点以引起注意
      const ctx = getGuideCtx();
      drawLetterGuide();
      drawCompletedStrokes();
      drawCurrentStrokeHints();
      // 画更大的起笔点闪烁
      ctx.save();
      ctx.beginPath();
      ctx.arc(start.x, start.y, 30, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 107, 157, 0.25)';
      ctx.fill();
      ctx.restore();
      setTimeout(() => traceStartHint.classList.remove('show'), 1500);
    }
    return;
  }

  // 开始绘制时隐藏提示
  traceHint.style.opacity = '0';
  isDrawing = true;
  lastX = pos.x;
  lastY = pos.y;
  currentStrokePath = [pos];
}

function draw(e) {
  if (!isDrawing) return;
  e.preventDefault();

  const pos = getPosition(e, drawCanvas);
  const ctx = getDrawCtx();

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(pos.x, pos.y);
  ctx.strokeStyle = '#ff6b9d';
  ctx.lineWidth = 12;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke();

  lastX = pos.x;
  lastY = pos.y;
  currentStrokePath.push(pos);
}

function stopDrawing() {
  if (!isDrawing) return;
  isDrawing = false;
  traceHint.style.opacity = '1';

  const letterData = getLetterData(currentLetter);
  if (currentStrokeIndex >= letterData.strokes.length) return;

  const stroke = letterData.strokes[currentStrokeIndex];

  if (checkStrokeCompletion(currentStrokePath, stroke)) {
    // 保存用户实际笔迹（百分比坐标，resize 安全）
    const cw = drawCanvas.width;
    const ch = drawCanvas.height;
    completedStrokePaths[currentStrokeIndex] = currentStrokePath.map(p => ({
      x: (p.x / cw) * 100,
      y: (p.y / ch) * 100
    }));
    completedStrokes.add(currentStrokeIndex);
    currentStrokeIndex++;
    updateStrokeIndicator();

    getDrawCtx().clearRect(0, 0, drawCanvas.width, drawCanvas.height);
    drawLetterGuide();
    drawCompletedStrokes();

    if (currentStrokeIndex >= letterData.strokes.length) {
      traceCompleteBtn.classList.remove('hidden');
      traceCompleteBtn.classList.add('show');
      // 更新重写按钮
      traceClearIcon.textContent = '🔄';
      traceClearText.textContent = '重新写';
    } else {
      setTimeout(() => animateCurrentStroke(), 300);
    }
  } else {
    // 笔画失败反馈：shake + 提示（期间阻止新绘制）
    isAnimating = true;
    const container = guideCanvas.parentElement;
    container.classList.add('shaking');
    traceTryAgain.classList.add('show');
    setTimeout(() => {
      container.classList.remove('shaking');
      traceTryAgain.classList.remove('show');
      getDrawCtx().clearRect(0, 0, drawCanvas.width, drawCanvas.height);
      drawCompletedStrokes();
      drawCurrentStrokeHints();
      isAnimating = false;
    }, 1000);
  }

  currentStrokePath = [];
}

function replayAnimation() {
  if (isAnimating) return;
  getDrawCtx().clearRect(0, 0, drawCanvas.width, drawCanvas.height);
  drawCompletedStrokes();

  const letterData = getLetterData(currentLetter);
  if (currentStrokeIndex < letterData.strokes.length) {
    animateCurrentStroke();
  } else {
    drawLetterGuide();
    drawCompletedStrokes();
  }
}

function clearCurrentStroke() {
  if (isAnimating) return;

  const letterData = getLetterData(currentLetter);
  if (currentStrokeIndex < letterData.strokes.length) {
    getDrawCtx().clearRect(0, 0, drawCanvas.width, drawCanvas.height);
    drawCompletedStrokes();
    drawCurrentStrokeHints();
  } else {
    // 全部重写
    currentStrokeIndex = 0;
    completedStrokes = new Set();
    completedStrokePaths = {};
    traceCompleteBtn.classList.add('hidden');
    traceCompleteBtn.classList.remove('show');
    // 恢复按钮文字
    traceClearIcon.textContent = '🗑️';
    traceClearText.textContent = '重写';
    getDrawCtx().clearRect(0, 0, drawCanvas.width, drawCanvas.height);
    drawLetterGuide();
    updateStrokeIndicator();
    setTimeout(() => animateCurrentStroke(), 300);
  }
}

function showCelebration() {
  celebration.classList.remove('hidden');
  setTimeout(() => {
    celebration.classList.add('hidden');
  }, 2000);
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

// === 字母小绘本相关函数 ===

function openBookScreen() {
  bookCurrentStrokeIndex = 0;
  bookCompletedStrokes = new Set();
  bookCurrentStrokePath = [];
  bookCompleteBtn.classList.add('hidden');

  const bookData = BOOK_DATA[currentLetter] || getDefaultBookData(currentLetter);
  bookLetter.textContent = currentLetter;
  wordText.textContent = bookData.word;
  wordChinese.textContent = bookData.chinese;

  detailScreen.classList.remove('active');
  bookScreen.classList.add('active');

  resizeBookCanvas();
  clearBookCanvas();
  drawBookGuide();
  setTimeout(() => animateBookCurrentStroke(), 300);
}

function exitBookScreen() {
  bookIsAnimating = false;
  bookScreen.classList.remove('active');
  detailScreen.classList.add('active');
}

function playWordAudio() {
  const bookData = BOOK_DATA[currentLetter] || getDefaultBookData(currentLetter);
  wordAudioBtn.classList.add('playing');

  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const voices = speechSynthesis.getVoices();
    const utterance = new SpeechSynthesisUtterance(bookData.word);

    let preferredVoice = null;
    for (let voice of voices) {
      if (voice.lang === 'en-US' && (voice.name.includes('Female') || voice.name.includes('Samantha') || voice.name.includes('Victoria'))) {
        preferredVoice = voice;
        break;
      }
    }
    if (!preferredVoice) {
      for (let voice of voices) {
        if (voice.lang === 'en-US') {
          preferredVoice = voice;
          break;
        }
      }
    }

    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.lang = 'en-US';
    utterance.rate = 0.7;
    utterance.pitch = 1.3;
    utterance.volume = 1.0;

    speechSynthesis.speak(utterance);
  }

  setTimeout(() => {
    wordAudioBtn.classList.remove('playing');
  }, 800);
}

function resizeBookCanvas() {
  const container = bookGuideCanvas.parentElement;
  const size = Math.min(window.innerWidth - 80, window.innerHeight - 350, 400);

  bookGuideCanvas.width = size;
  bookGuideCanvas.height = size;
  bookDrawCanvas.width = size;
  bookDrawCanvas.height = size;

  if (bookScreen.classList.contains('active')) {
    drawBookGuide();
    drawBookCompletedStrokes();
  }
}

function getBookGuideCtx() { return bookGuideCanvas.getContext('2d'); }
function getBookDrawCtx() { return bookDrawCanvas.getContext('2d'); }

function clearBookCanvas() {
  getBookGuideCtx().clearRect(0, 0, bookGuideCanvas.width, bookGuideCanvas.height);
  getBookDrawCtx().clearRect(0, 0, bookDrawCanvas.width, bookDrawCanvas.height);
}

function toBookCanvasX(x) { return (x / 100) * bookGuideCanvas.width; }
function toBookCanvasY(y) { return (y / 100) * bookGuideCanvas.height; }

function getBookData(letter) {
  return BOOK_DATA[letter] || getDefaultBookData(letter);
}

function drawBookGuide() {
  const ctx = getBookGuideCtx();
  const bookData = getBookData(currentLetter);
  const w = bookGuideCanvas.width;
  const h = bookGuideCanvas.height;

  ctx.clearRect(0, 0, w, h);

  ctx.beginPath();
  ctx.arc(w/2, h/2, Math.min(w, h) * 0.45, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(250, 112, 154, 0.15)';
  ctx.lineWidth = 2;
  ctx.setLineDash([10, 10]);
  ctx.stroke();
  ctx.setLineDash([]);

  bookData.strokes.forEach((stroke, index) => {
    drawBookStroke(ctx, stroke, {
      color: bookCompletedStrokes.has(index) ? bookData.color : 'rgba(180, 180, 180, 0.4)',
      lineWidth: 10,
      dash: bookCompletedStrokes.has(index) ? [] : [6, 6]
    });
  });
}

function drawBookStroke(ctx, stroke, options = {}) {
  const { color = '#333', lineWidth = 8, dash = [] } = options;
  if (stroke.length < 2) return;

  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash(dash);

  ctx.beginPath();
  stroke.forEach((point, i) => {
    const x = toBookCanvasX(point.x);
    const y = toBookCanvasY(point.y);
    if (i === 0 || point.type === 'move') {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();
  ctx.restore();
}

function drawBookStartPoint(ctx, x, y, color) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, 18, 0, Math.PI * 2);
  ctx.fillStyle = color.replace(')', ', 0.3)').replace('rgb', 'rgba');
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

function drawBookArrowHint(ctx, stroke, color) {
  if (stroke.length < 2) return;
  const start = stroke[0];
  const end = stroke[Math.min(3, stroke.length - 1)];
  const x1 = toBookCanvasX(start.x);
  const y1 = toBookCanvasY(start.y);
  const x2 = toBookCanvasX(end.x);
  const y2 = toBookCanvasY(end.y);
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const arrowLen = 25;

  ctx.save();
  ctx.strokeStyle = color.replace(')', ', 0.6)').replace('rgb', 'rgba');
  ctx.fillStyle = ctx.strokeStyle;
  ctx.lineWidth = 3;

  const midX = x1 + (x2 - x1) * 0.5;
  const midY = y1 + (y2 - y1) * 0.5;

  ctx.beginPath();
  ctx.moveTo(midX - arrowLen * Math.cos(angle - 0.4), midY - arrowLen * Math.sin(angle - 0.4));
  ctx.lineTo(midX + arrowLen * 0.3 * Math.cos(angle), midY + arrowLen * 0.3 * Math.sin(angle));
  ctx.lineTo(midX - arrowLen * Math.cos(angle + 0.4), midY - arrowLen * Math.sin(angle + 0.4));
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}

function animateBookCurrentStroke() {
  if (bookIsAnimating) return;

  const bookData = getBookData(currentLetter);
  if (bookCurrentStrokeIndex >= bookData.strokes.length) return;

  const stroke = bookData.strokes[bookCurrentStrokeIndex];
  const ctx = getBookGuideCtx();
  bookIsAnimating = true;
  let progress = 0;

  const animate = () => {
    if (!bookIsAnimating || !bookScreen.classList.contains('active')) {
      bookIsAnimating = false;
      return;
    }

    drawBookGuide();
    drawBookCompletedStrokes();

    if (progress < stroke.length) {
      const subStroke = stroke.slice(0, Math.ceil(progress) + 1);
      drawBookStroke(ctx, subStroke, {
        color: bookData.color,
        lineWidth: 12,
        dash: []
      });
      progress += 0.15;
      requestAnimationFrame(animate);
    } else {
      bookIsAnimating = false;
      drawBookGuide();
      drawBookCompletedStrokes();
      drawBookCurrentStrokeHints();
    }
  };
  animate();
}

function drawBookCurrentStrokeHints() {
  const bookData = getBookData(currentLetter);
  if (bookCurrentStrokeIndex >= bookData.strokes.length) return;

  const ctx = getBookGuideCtx();
  const stroke = bookData.strokes[bookCurrentStrokeIndex];
  const startPoint = stroke[0];

  drawBookStartPoint(ctx, toBookCanvasX(startPoint.x), toBookCanvasY(startPoint.y), bookData.color);
  drawBookArrowHint(ctx, stroke, bookData.color);
}

function drawBookCompletedStrokes() {
  const ctx = getBookDrawCtx();
  const bookData = getBookData(currentLetter);

  bookCompletedStrokes.forEach(index => {
    if (index < bookData.strokes.length) {
      drawBookStroke(ctx, bookData.strokes[index], {
        color: bookData.color,
        lineWidth: 12,
        dash: []
      });
    }
  });
}

function isPointNearBookStroke(point, stroke, tolerance = 55) {
  for (let i = 0; i < stroke.length - 1; i++) {
    const p1 = { x: toBookCanvasX(stroke[i].x), y: toBookCanvasY(stroke[i].y) };
    const p2 = { x: toBookCanvasX(stroke[i+1].x), y: toBookCanvasY(stroke[i+1].y) };
    const dist = pointToLineDistance(point, p1, p2);
    if (dist < tolerance) return true;
  }
  return false;
}

function checkBookStrokeCompletion(path, stroke) {
  if (path.length < 3) return false;

  const start = { x: toBookCanvasX(stroke[0].x), y: toBookCanvasY(stroke[0].y) };
  const end = { x: toBookCanvasX(stroke[stroke.length-1].x), y: toBookCanvasY(stroke[stroke.length-1].y) };
  const pathStart = path[0];
  const pathEnd = path[path.length-1];

  const distToStart = Math.hypot(pathStart.x - start.x, pathStart.y - start.y);
  const distToEnd = Math.hypot(pathEnd.x - end.x, pathEnd.y - end.y);

  let nearStrokeCount = 0;
  path.forEach(p => {
    if (isPointNearBookStroke(p, stroke, 65)) nearStrokeCount++;
  });

  return distToStart < 95 && distToEnd < 95 && nearStrokeCount > path.length * 0.2;
}

function getBookPosition(e, canvas) {
  const rect = canvas.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return { x: clientX - rect.left, y: clientY - rect.top };
}

function startBookDrawing(e) {
  if (bookIsAnimating) return;
  e.preventDefault();

  const bookData = getBookData(currentLetter);
  if (bookCurrentStrokeIndex >= bookData.strokes.length) return;

  const pos = getBookPosition(e, bookDrawCanvas);
  const stroke = bookData.strokes[bookCurrentStrokeIndex];
  const start = { x: toBookCanvasX(stroke[0].x), y: toBookCanvasY(stroke[0].y) };
  const distToStart = Math.hypot(pos.x - start.x, pos.y - start.y);

  if (distToStart > 110) return;

  bookIsDrawing = true;
  bookLastX = pos.x;
  bookLastY = pos.y;
  bookCurrentStrokePath = [pos];
}

function drawBook(e) {
  if (!bookIsDrawing) return;
  e.preventDefault();

  const pos = getBookPosition(e, bookDrawCanvas);
  const ctx = getBookDrawCtx();
  const bookData = getBookData(currentLetter);

  ctx.beginPath();
  ctx.moveTo(bookLastX, bookLastY);
  ctx.lineTo(pos.x, pos.y);
  ctx.strokeStyle = bookData.color;
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke();

  bookLastX = pos.x;
  bookLastY = pos.y;
  bookCurrentStrokePath.push(pos);
}

function stopBookDrawing() {
  if (!bookIsDrawing) return;
  bookIsDrawing = false;

  const bookData = getBookData(currentLetter);
  if (bookCurrentStrokeIndex >= bookData.strokes.length) return;

  const stroke = bookData.strokes[bookCurrentStrokeIndex];

  if (checkBookStrokeCompletion(bookCurrentStrokePath, stroke)) {
    bookCompletedStrokes.add(bookCurrentStrokeIndex);
    bookCurrentStrokeIndex++;

    getBookDrawCtx().clearRect(0, 0, bookDrawCanvas.width, bookDrawCanvas.height);
    drawBookGuide();
    drawBookCompletedStrokes();

    if (bookCurrentStrokeIndex >= bookData.strokes.length) {
      bookCompleteBtn.classList.remove('hidden');
      showCelebration();
      speakChinese('画得真好！');
    } else {
      setTimeout(() => animateBookCurrentStroke(), 300);
    }
  } else {
    setTimeout(() => {
      getBookDrawCtx().clearRect(0, 0, bookDrawCanvas.width, bookDrawCanvas.height);
      drawBookCompletedStrokes();
      drawBookCurrentStrokeHints();
    }, 200);
  }

  bookCurrentStrokePath = [];
}

function replayBookAnimation() {
  if (bookIsAnimating) return;
  getBookDrawCtx().clearRect(0, 0, bookDrawCanvas.width, bookDrawCanvas.height);
  drawBookCompletedStrokes();

  const bookData = getBookData(currentLetter);
  if (bookCurrentStrokeIndex < bookData.strokes.length) {
    animateBookCurrentStroke();
  } else {
    drawBookGuide();
    drawBookCompletedStrokes();
  }
}

function clearBookDrawing() {
  if (bookIsAnimating) return;

  const bookData = getBookData(currentLetter);
  if (bookCurrentStrokeIndex < bookData.strokes.length) {
    getBookDrawCtx().clearRect(0, 0, bookDrawCanvas.width, bookDrawCanvas.height);
    drawBookCompletedStrokes();
    drawBookCurrentStrokeHints();
  } else {
    bookCurrentStrokeIndex = 0;
    bookCompletedStrokes = new Set();
    bookCompleteBtn.classList.add('hidden');
    getBookDrawCtx().clearRect(0, 0, bookDrawCanvas.width, bookDrawCanvas.height);
    drawBookGuide();
    setTimeout(() => animateBookCurrentStroke(), 300);
  }
}

function completeBookDrawing() {
  showCelebration();
  speakChinese('太棒了！');
  setTimeout(() => {
    exitBookScreen();
  }, 2000);
}

// === 主页导航 ===
function goToHome() {
  hideAllScreens();
  homeScreen.classList.add('active');
}

function openVisionScreen() {
  hideAllScreens();
  visionScreen.classList.add('active');
}

function openAlphabetScreen() {
  hideAllScreens();
  gridScreen.classList.add('active');
}

function goBackFromGrid() {
  goToHome();
}

function hideAllScreens() {
  homeScreen.classList.remove('active');
  gridScreen.classList.remove('active');
  detailScreen.classList.remove('active');
  traceScreen.classList.remove('active');
  bookScreen.classList.remove('active');
  visionScreen.classList.remove('active');
  visionDetailScreen.classList.remove('active');
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

  hideAllScreens();
  visionDetailScreen.classList.add('active');

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
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.8;
  utterance.pitch = 1.1;
  const voices = speechSynthesis.getVoices();
  const zhVoice = voices.find(v => v.lang.startsWith('zh'));
  if (zhVoice) utterance.voice = zhVoice;
  speechSynthesis.speak(utterance);
}

function nextRandomDirection() {
  const others = VISION_E_DIRECTIONS.filter(d => d.name !== currentVisionDirection.name);
  const next = others[Math.floor(Math.random() * others.length)];
  openVisionDetail(next.name);
}

function exitVisionDetail() {
  hideAllScreens();
  visionScreen.classList.add('active');
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
  visionTraceDraw.width = size;
  visionTraceDraw.height = size;
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
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

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
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

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
    showCelebration();
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
  gridBackBtn.addEventListener('click', goBackFromGrid);

  backBtn.addEventListener('click', goBack);
  audioBtn.addEventListener('click', playAudio);
  traceBtn.addEventListener('click', openTraceScreen);
  bookBtn.addEventListener('click', openBookScreen);
  traceBackBtn.addEventListener('click', exitTraceScreen);
  traceReplayBtn.addEventListener('click', replayAnimation);
  traceClearBtn.addEventListener('click', clearCurrentStroke);
  traceCompleteBtn.addEventListener('click', completeTrace);

  drawCanvas.addEventListener('mousedown', startDrawing);
  drawCanvas.addEventListener('mousemove', draw);
  drawCanvas.addEventListener('mouseup', stopDrawing);
  drawCanvas.addEventListener('mouseout', stopDrawing);

  drawCanvas.addEventListener('touchstart', startDrawing, { passive: false });
  drawCanvas.addEventListener('touchmove', draw, { passive: false });
  drawCanvas.addEventListener('touchend', stopDrawing);
  drawCanvas.addEventListener('touchcancel', stopDrawing);

  // 防止描红页面触摸滚动/弹跳
  traceScreen.addEventListener('touchmove', e => e.preventDefault(), { passive: false });

  bookBackBtn.addEventListener('click', exitBookScreen);
  wordAudioBtn.addEventListener('click', playWordAudio);
  bookReplayBtn.addEventListener('click', replayBookAnimation);
  bookClearBtn.addEventListener('click', clearBookDrawing);
  bookCompleteBtn.addEventListener('click', completeBookDrawing);

  bookDrawCanvas.addEventListener('mousedown', startBookDrawing);
  bookDrawCanvas.addEventListener('mousemove', drawBook);
  bookDrawCanvas.addEventListener('mouseup', stopBookDrawing);
  bookDrawCanvas.addEventListener('mouseout', stopBookDrawing);

  bookDrawCanvas.addEventListener('touchstart', startBookDrawing, { passive: false });
  bookDrawCanvas.addEventListener('touchmove', drawBook, { passive: false });
  bookDrawCanvas.addEventListener('touchend', stopBookDrawing);
  bookDrawCanvas.addEventListener('touchcancel', stopBookDrawing);

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

  window.addEventListener('resize', () => {
    resizeTraceCanvas();
    resizeBookCanvas();
    if (traceScreen.classList.contains('active')) {
      drawLetterGuide();
      drawCompletedStrokes();
      drawCurrentStrokeHints();
    }
    if (bookScreen.classList.contains('active')) {
      drawBookGuide();
      drawBookCompletedStrokes();
    }
    if (visionDetailScreen.classList.contains('active')) {
      initVisionTrace();
    }
  });
}

init();
