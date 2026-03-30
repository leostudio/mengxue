# 萌学儿歌 设计文档

## 概述

在萌学乐园首页新增「萌学儿歌」模块，提供 50 首英文 + 50 首中文经典儿歌，通过 YouTube 嵌入播放视频，配合 Unsplash 意境背景图，支持滑动切换和顺序播放。

## 首页入口

- 新增第四张首页卡片：图标 🎵，标题「萌学儿歌」，描述「听儿歌学语言」
- 背景色：橙色渐变 `linear-gradient(135deg, #f6d365 0%, #fda085 100%)`

## 歌曲数据

100 首歌曲，内联在 app.js 中，结构：

```javascript
const SONG_LIST = [
  {
    title: '小星星',           // 歌名
    titleEn: 'Twinkle Twinkle Little Star',  // 英文名（中文歌可为空）
    lang: 'zh',               // 'zh' 或 'en'
    youtubeId: 'yCjJyiqpAuU', // YouTube 视频 ID
    imgQuery: 'starry,night,sky',  // Unsplash 背景关键词
    emoji: '⭐🌙',            // emoji 备用
    gradient: 'linear-gradient(135deg, #0c3483 0%, #a2b6df 100%)' // 渐变色备用
  },
  // ...
];
```

### 歌曲选择标准
- 经典、广为人知的儿歌
- YouTube 上有优质儿歌视频版本
- 适合 3-6 岁幼儿

## 界面设计

### 儿歌主屏 (song-screen)

**布局**：全屏，从上到下：
1. 顶部栏：返回按钮 + 标题「🎵 萌学儿歌」
2. 分类 tab：全部 / 🇬🇧 英文歌 / 🇨🇳 中文歌
3. 卡片区域：占满剩余空间，单张卡片全屏显示

**卡片设计**：
- 全屏背景：Unsplash 图片（`https://source.unsplash.com/800x600/?{imgQuery}`），加载失败时显示 emoji + 渐变色
- 背景上叠加半透明遮罩，确保文字可读
- 居中显示：歌名（大字）、播放按钮（圆形，▶）
- 底部：歌曲序号指示 (如 3/50)

**播放状态**：
- 点击播放按钮 → 卡片中央展开 YouTube iframe（16:9 比例，圆角）
- iframe 上方显示歌名，下方显示控制按钮
- 再次点击或点收起按钮可关闭视频

### 滑动操作

- **上下滑动**：切换上一首/下一首歌曲，带滑动过渡动画
- **左右滑动**：切换分类 tab（全部 ↔ 英文 ↔ 中文）
- 滑动距离阈值：50px

### 播放控制

- ⏮ 上一首 / ⏭ 下一首 按钮（始终可见，在卡片底部）
- 🔁 顺序播放开关：开启后当前视频播放完毕自动切换下一首
- 使用 YouTube IFrame API 的 `onStateChange` 事件检测视频结束

## 技术方案

### YouTube IFrame API
- 在 index.html 中加载 YouTube IFrame API：`<script src="https://www.youtube.com/iframe_api"></script>`
- 通过 `new YT.Player()` 创建播放器
- 监听 `YT.PlayerState.ENDED` 实现自动下一首

### Unsplash 背景图
- URL 格式：`https://source.unsplash.com/800x600/?{imgQuery}`
- 加载失败时：显示 emoji（大号居中）+ gradient 背景色
- 图片使用 `object-fit: cover` 全屏覆盖

### 触摸手势
- 记录 touchstart 坐标
- touchend 时计算 deltaX/deltaY
- |deltaY| > |deltaX| 且 > 50px → 上下切歌
- |deltaX| > |deltaY| 且 > 50px → 左右切分类

## 响应式

- 平板：卡片全屏，YouTube iframe 宽度 80% 容器
- 手机：YouTube iframe 宽度 95% 容器
- 播放按钮和文字在小屏上适当缩小

## 文件修改

- `index.html`：添加 YouTube API script、song-screen HTML、首页第四张卡片
- `styles.css`：添加所有儿歌相关样式
- `app.js`：添加 SONG_LIST 数据、儿歌屏幕逻辑、滑动手势、YouTube 播放器控制
