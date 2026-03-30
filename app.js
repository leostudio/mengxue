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
      // 始终绘制干净的引导线作为完成笔画，确保字母形状正确
      drawGuideStroke(ctx, letterData.strokes[index], {
        color: '#ff6b9d',
        lineWidth: 14,
        dash: []
      });
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
  if (path.length < 5) return false;

  const canvasSize = guideCanvas.width;
  const nearTolerance = canvasSize * 0.1;   // 10% of canvas for path proximity
  const endTolerance = canvasSize * 0.15;   // 15% for start/end points

  const start = { x: toCanvasX(stroke[0].x), y: toCanvasY(stroke[0].y) };
  const end = { x: toCanvasX(stroke[stroke.length-1].x), y: toCanvasY(stroke[stroke.length-1].y) };
  const pathStart = path[0];
  const pathEnd = path[path.length-1];

  // 1. Start point must be near guide start
  const distToStart = Math.hypot(pathStart.x - start.x, pathStart.y - start.y);
  if (distToStart > endTolerance) return false;

  // 2. End point must be near guide end
  const distToEnd = Math.hypot(pathEnd.x - end.x, pathEnd.y - end.y);
  if (distToEnd > endTolerance) return false;

  // 3. Most path points must be near the guide stroke
  let nearStrokeCount = 0;
  path.forEach(p => {
    if (isPointNearStroke(p, stroke, nearTolerance)) nearStrokeCount++;
  });
  if (nearStrokeCount < path.length * 0.5) return false;

  // 4. Path must cover most of the guide stroke (prevent short scribbles)
  const guidePoints = [];
  for (let i = 0; i < stroke.length - 1; i++) {
    const p1 = { x: toCanvasX(stroke[i].x), y: toCanvasY(stroke[i].y) };
    const p2 = { x: toCanvasX(stroke[i+1].x), y: toCanvasY(stroke[i+1].y) };
    const segLen = Math.hypot(p2.x - p1.x, p2.y - p1.y);
    const steps = Math.max(3, Math.ceil(segLen / 15));
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      guidePoints.push({ x: p1.x + t * (p2.x - p1.x), y: p1.y + t * (p2.y - p1.y) });
    }
  }
  let coveredCount = 0;
  const coverTolerance = nearTolerance * 1.3;
  guidePoints.forEach(gp => {
    for (const pp of path) {
      if (Math.hypot(pp.x - gp.x, pp.y - gp.y) < coverTolerance) {
        coveredCount++;
        break;
      }
    }
  });
  if (coveredCount < guidePoints.length * 0.55) return false;

  // 5. Direction must be roughly correct
  const strokeDx = end.x - start.x;
  const strokeDy = end.y - start.y;
  const pathDx = pathEnd.x - pathStart.x;
  const pathDy = pathEnd.y - pathStart.y;
  const dot = strokeDx * pathDx + strokeDy * pathDy;
  const strokeLen = Math.hypot(strokeDx, strokeDy);
  // Only check direction for strokes with meaningful length
  if (strokeLen > canvasSize * 0.1 && dot < 0) return false;

  return true;
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

  // Must start near the guide start point
  const startTolerance = guideCanvas.width * 0.18;

  if (distToStart > startTolerance) {
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
  const letterData = getLetterData(currentLetter);
  const stroke = letterData.strokes[currentStrokeIndex];

  // Real-time feedback: check if point is near the guide stroke
  const nearTolerance = guideCanvas.width * 0.1;
  const onPath = isPointNearStroke(pos, stroke, nearTolerance);

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(pos.x, pos.y);
  ctx.strokeStyle = onPath ? '#ff6b9d' : 'rgba(255, 150, 150, 0.3)';
  ctx.lineWidth = onPath ? 12 : 6;
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
  if (path.length < 5) return false;

  const canvasSize = bookGuideCanvas.width;
  const nearTolerance = canvasSize * 0.12;
  const endTolerance = canvasSize * 0.16;

  const start = { x: toBookCanvasX(stroke[0].x), y: toBookCanvasY(stroke[0].y) };
  const end = { x: toBookCanvasX(stroke[stroke.length-1].x), y: toBookCanvasY(stroke[stroke.length-1].y) };
  const pathStart = path[0];
  const pathEnd = path[path.length-1];

  const distToStart = Math.hypot(pathStart.x - start.x, pathStart.y - start.y);
  const distToEnd = Math.hypot(pathEnd.x - end.x, pathEnd.y - end.y);

  if (distToStart > endTolerance || distToEnd > endTolerance) return false;

  let nearStrokeCount = 0;
  path.forEach(p => {
    if (isPointNearBookStroke(p, stroke, nearTolerance)) nearStrokeCount++;
  });
  if (nearStrokeCount < path.length * 0.45) return false;

  // Check coverage of guide stroke
  const guidePoints = [];
  for (let i = 0; i < stroke.length - 1; i++) {
    const p1 = { x: toBookCanvasX(stroke[i].x), y: toBookCanvasY(stroke[i].y) };
    const p2 = { x: toBookCanvasX(stroke[i+1].x), y: toBookCanvasY(stroke[i+1].y) };
    const segLen = Math.hypot(p2.x - p1.x, p2.y - p1.y);
    const steps = Math.max(3, Math.ceil(segLen / 15));
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      guidePoints.push({ x: p1.x + t * (p2.x - p1.x), y: p1.y + t * (p2.y - p1.y) });
    }
  }
  let coveredCount = 0;
  const coverTolerance = nearTolerance * 1.3;
  guidePoints.forEach(gp => {
    for (const pp of path) {
      if (Math.hypot(pp.x - gp.x, pp.y - gp.y) < coverTolerance) {
        coveredCount++;
        break;
      }
    }
  });
  if (coveredCount < guidePoints.length * 0.5) return false;

  return true;
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

  if (distToStart > bookGuideCanvas.width * 0.16) return;

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
  const stroke = bookData.strokes[bookCurrentStrokeIndex];

  // Real-time feedback
  const nearTolerance = bookGuideCanvas.width * 0.12;
  const onPath = isPointNearBookStroke(pos, stroke, nearTolerance);

  ctx.beginPath();
  ctx.moveTo(bookLastX, bookLastY);
  ctx.lineTo(pos.x, pos.y);
  ctx.strokeStyle = onPath ? bookData.color : 'rgba(200, 200, 200, 0.3)';
  ctx.lineWidth = onPath ? 10 : 5;
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
  hanziGridScreen.classList.remove('active');
  hanziDetailScreen.classList.remove('active');
  hanziTraceScreen.classList.remove('active');
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
  btnHanzi.addEventListener('click', openHanziGridScreen);
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

  hanziDetailBackBtn.addEventListener('click', () => {
    hideAllScreens();
    hanziGridScreen.classList.add('active');
  });
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
    if (hanziTraceScreen.classList.contains('active') && currentHanzi) {
      openHanziTraceScreen();
    }
  });
}

// === 萌学汉字 ===

function openHanziGridScreen() {
  hideAllScreens();
  hanziGridScreen.classList.add('active');
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

  hideAllScreens();
  hanziDetailScreen.classList.add('active');

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

  hideAllScreens();
  hanziTraceScreen.classList.add('active');

  // Clear previous writer
  const target = document.getElementById('hanzi-writer-target');
  target.innerHTML = '';

  // Determine size based on container
  const containerWidth = target.clientWidth || 300;
  const size = Math.min(containerWidth, 300);

  hanziWriter = HanziWriter.create('hanzi-writer-target', currentHanzi.char, {
    width: size,
    height: size,
    padding: 20,
    showCharacter: false,
    showOutline: true,
    strokeColor: '#333',
    outlineColor: '#ddd',
    drawingColor: '#ff6b9d',
    drawingWidth: 6,
    strokeAnimationSpeed: 1,
    delayBetweenStrokes: 300,
    highlightColor: '#a18cd1',
    showHintAfterMisses: 3,
    highlightOnComplete: true
  });

  hanziStrokeIndicator.textContent = '看笔顺...';

  // Animate first, then start quiz
  hanziWriter.animateCharacter({
    onComplete: function() {
      startHanziQuiz();
    }
  });
}

function startHanziQuiz() {
  hanziStrokeIndicator.textContent = '第 1 笔';

  hanziWriter.quiz({
    leniency: 1.5,
    showHintAfterMisses: 3,
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

  hideAllScreens();
  hanziDetailScreen.classList.add('active');
}

init();
