# 萌学字母 重做设计

## 目标

忽略现有萌学字母架构，重新实现字母学习功能，模仿萌学汉字的交互模式。

## 三屏结构

### 屏幕 1：字母网格（Grid Screen）

- 26 个字母卡片，展示大写 + 小写（如 "A a"）
- 点击卡片进入字母详情
- 无搜索、无分级筛选（26 个字母不需要）
- 复用现有 grid 样式，与萌学汉字网格视觉风格一致

### 屏幕 2：字母详情（Detail Screen）

- 顶部大字母展示（大写 + 小写）
- 发音按钮：点击用 Web Speech API 读出字母名称（英文）
- 描红按钮：进入描红屏幕
- 下方单词卡片区（3-4 个）：
  - 每张卡片：Unsplash 图片 + 英文单词 + 中文翻译 + emoji
  - 点击卡片：用 Web Speech API 读出英文单词
- 左右箭头导航切换字母（与萌学汉字详情页一致）

### 屏幕 3：字母描红（Trace Screen）

- 半透明字母轮廓作为背景参考（Canvas 绘制大号字母）
- 字母书写动画演示（Canvas requestAnimationFrame 动画展示书写过程）
- 用户自由书写区域，不做笔画校验
- 工具栏按钮：重播动画、清除画布、返回详情
- 写完点击完成按钮，触发庆祝动画

## 数据结构

```javascript
const ALPHABET_DATA = [
  {
    letter: 'A',
    lower: 'a',
    words: [
      { word: 'apple', chinese: '苹果', imgQuery: 'red apple fruit', emoji: '🍎' },
      { word: 'ant', chinese: '蚂蚁', imgQuery: 'ant insect', emoji: '🐜' },
      { word: 'airplane', chinese: '飞机', imgQuery: 'airplane sky', emoji: '✈️' },
    ]
  },
  // ... 26 个字母
];
```

每个字母 3-4 个常见单词，选词标准：儿童常见、易于图片展示、发音清晰。

## 删除的内容

- `LETTER_GUIDES` — 自定义笔画路径数据（A-Z 全部）
- `BOOK_DATA` — 绘本简笔画数据
- `createLetterMask()` / `isPointInLetterMask()` — 字母蒙版系统
- 所有 Canvas 描红笔画校验逻辑（`checkStrokeCompletion`、`drawLetterGuide`、`drawStroke`、`catmullRomInterpolate` 等）
- Book 屏幕相关 HTML（`#book-screen`）和所有 book 相关 JS 函数
- 现有 detail screen 中的 "字母绘本" 按钮

## 技术方案

### 读音
- Web Speech API，`lang: 'en-US'`
- 字母读音：读字母名称（如 "A" 读作 "ay"）
- 单词读音：读完整单词

### 图片
- Unsplash source URL：`https://source.unsplash.com/featured/400x300/?{imgQuery}`
- 与萌学汉字的图片加载方式一致

### 描红动画
- Canvas 绘制半透明大号字母作为底层参考
- 用 Canvas 的 `strokeText` / `fillText` 绘制字母轮廓
- 书写动画：沿字母路径用简化的关键点序列做动画（不需要精确笔画数据，只需视觉上展示书写方向）
- 动画方案：用 Canvas 裁剪（clip）+ 移动遮罩方式，从左到右/从上到下逐步显露字母

### 自由书写
- Canvas touch/mouse 事件
- 纯画笔模式，线条颜色 #ff6b9d（与项目主题色一致）
- 不做任何笔画校验

### HTML 结构变更
- 复用 `#grid-screen`，简化内容
- 重写 `#detail-screen`，模仿 `#hanzi-detail-screen` 布局
- 重写 `#trace-screen`，简化为动画 + 自由书写
- 删除 `#book-screen`

## 交互流程

1. 首页点击 "萌学字母" → 字母网格
2. 点击字母卡片 → 字母详情（显示字母、发音按钮、单词卡片）
3. 点击发音按钮 → 播放字母读音
4. 点击单词卡片 → 播放单词读音
5. 点击描红按钮 → 描红屏幕（动画演示 + 自由书写）
6. 描红屏幕工具栏：重播动画 / 清除画布 / 返回
7. 点击完成 → 庆祝动画 → 返回详情
