# 萌学字母重做 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild 萌学字母 to follow the same grid → detail (with word cards) → free-form tracing pattern as 萌学汉字.

**Architecture:** Single-file app (index.html + app.js + styles.css). Replace all existing alphabet letter data, HTML screens, JS functions, and CSS with new implementations modeled after the hanzi feature. Three screens: grid, detail (with word cards + Unsplash images), trace (animation + free drawing).

**Tech Stack:** Vanilla JS, Canvas API, Web Speech API, Unsplash images.

---

### Task 1: Replace data — remove old constants, add ALPHABET_DATA

**Files:**
- Modify: `app.js:1-448` (replace LETTER_GUIDES, BOOK_DATA, getDefaultBookData, getDefaultStrokes, letterMaskCache, createLetterMask, isPointInLetterMask)

- [ ] **Step 1: Delete old data constants and helper functions (lines 4-485)**

Replace everything from line 4 (`const ALPHABETS = ...`) through line 485 (`return mask[iy * canvasWidth + ix] === 1; }`) with the new `ALPHABET_DATA` constant:

```javascript
// 字母数据 — 每个字母对应 3-4 个常见单词
const ALPHABET_DATA = [
  { letter: 'A', lower: 'a', words: [
    { word: 'apple', chinese: '苹果', imgQuery: 'red apple fruit', emoji: '🍎' },
    { word: 'ant', chinese: '蚂蚁', imgQuery: 'ant insect close', emoji: '🐜' },
    { word: 'airplane', chinese: '飞机', imgQuery: 'airplane blue sky', emoji: '✈️' },
  ]},
  { letter: 'B', lower: 'b', words: [
    { word: 'ball', chinese: '球', imgQuery: 'colorful ball toy', emoji: '⚽' },
    { word: 'banana', chinese: '香蕉', imgQuery: 'banana fruit yellow', emoji: '🍌' },
    { word: 'bear', chinese: '熊', imgQuery: 'cute bear animal', emoji: '🐻' },
    { word: 'butterfly', chinese: '蝴蝶', imgQuery: 'butterfly colorful wings', emoji: '🦋' },
  ]},
  { letter: 'C', lower: 'c', words: [
    { word: 'cat', chinese: '猫', imgQuery: 'cute cat kitten', emoji: '🐱' },
    { word: 'cake', chinese: '蛋糕', imgQuery: 'birthday cake colorful', emoji: '🎂' },
    { word: 'car', chinese: '汽车', imgQuery: 'toy car colorful', emoji: '🚗' },
  ]},
  { letter: 'D', lower: 'd', words: [
    { word: 'dog', chinese: '狗', imgQuery: 'cute puppy dog', emoji: '🐶' },
    { word: 'duck', chinese: '鸭子', imgQuery: 'yellow duck bird', emoji: '🦆' },
    { word: 'dolphin', chinese: '海豚', imgQuery: 'dolphin ocean jumping', emoji: '🐬' },
  ]},
  { letter: 'E', lower: 'e', words: [
    { word: 'elephant', chinese: '大象', imgQuery: 'elephant animal safari', emoji: '🐘' },
    { word: 'egg', chinese: '鸡蛋', imgQuery: 'egg breakfast food', emoji: '🥚' },
    { word: 'eagle', chinese: '鹰', imgQuery: 'eagle bird flying', emoji: '🦅' },
  ]},
  { letter: 'F', lower: 'f', words: [
    { word: 'fish', chinese: '鱼', imgQuery: 'colorful fish underwater', emoji: '🐟' },
    { word: 'flower', chinese: '花', imgQuery: 'beautiful flower garden', emoji: '🌸' },
    { word: 'frog', chinese: '青蛙', imgQuery: 'green frog cute', emoji: '🐸' },
  ]},
  { letter: 'G', lower: 'g', words: [
    { word: 'grape', chinese: '葡萄', imgQuery: 'purple grape fruit', emoji: '🍇' },
    { word: 'giraffe', chinese: '长颈鹿', imgQuery: 'giraffe tall animal', emoji: '🦒' },
    { word: 'guitar', chinese: '吉他', imgQuery: 'guitar musical instrument', emoji: '🎸' },
  ]},
  { letter: 'H', lower: 'h', words: [
    { word: 'house', chinese: '房子', imgQuery: 'cute house home', emoji: '🏠' },
    { word: 'horse', chinese: '马', imgQuery: 'horse running field', emoji: '🐴' },
    { word: 'hat', chinese: '帽子', imgQuery: 'colorful hat cap', emoji: '🎩' },
  ]},
  { letter: 'I', lower: 'i', words: [
    { word: 'ice cream', chinese: '冰淇淋', imgQuery: 'ice cream colorful cone', emoji: '🍦' },
    { word: 'island', chinese: '岛屿', imgQuery: 'tropical island beach', emoji: '🏝️' },
    { word: 'igloo', chinese: '冰屋', imgQuery: 'igloo snow winter', emoji: '🏔️' },
  ]},
  { letter: 'J', lower: 'j', words: [
    { word: 'juice', chinese: '果汁', imgQuery: 'orange juice glass', emoji: '🧃' },
    { word: 'jellyfish', chinese: '水母', imgQuery: 'jellyfish ocean glowing', emoji: '🪼' },
    { word: 'jungle', chinese: '丛林', imgQuery: 'jungle tropical forest', emoji: '🌴' },
  ]},
  { letter: 'K', lower: 'k', words: [
    { word: 'kite', chinese: '风筝', imgQuery: 'kite flying sky colorful', emoji: '🪁' },
    { word: 'koala', chinese: '考拉', imgQuery: 'koala cute animal tree', emoji: '🐨' },
    { word: 'key', chinese: '钥匙', imgQuery: 'golden key vintage', emoji: '🔑' },
  ]},
  { letter: 'L', lower: 'l', words: [
    { word: 'lion', chinese: '狮子', imgQuery: 'lion animal safari', emoji: '🦁' },
    { word: 'lemon', chinese: '柠檬', imgQuery: 'lemon yellow fruit', emoji: '🍋' },
    { word: 'ladybug', chinese: '瓢虫', imgQuery: 'ladybug insect red', emoji: '🐞' },
  ]},
  { letter: 'M', lower: 'm', words: [
    { word: 'moon', chinese: '月亮', imgQuery: 'full moon night sky', emoji: '🌙' },
    { word: 'monkey', chinese: '猴子', imgQuery: 'monkey cute animal', emoji: '🐵' },
    { word: 'mushroom', chinese: '蘑菇', imgQuery: 'mushroom forest colorful', emoji: '🍄' },
  ]},
  { letter: 'N', lower: 'n', words: [
    { word: 'nest', chinese: '鸟巢', imgQuery: 'bird nest eggs tree', emoji: '🪹' },
    { word: 'nose', chinese: '鼻子', imgQuery: 'cute nose face', emoji: '👃' },
    { word: 'nut', chinese: '坚果', imgQuery: 'nuts walnut almond', emoji: '🥜' },
  ]},
  { letter: 'O', lower: 'o', words: [
    { word: 'orange', chinese: '橙子', imgQuery: 'orange fruit citrus', emoji: '🍊' },
    { word: 'owl', chinese: '猫头鹰', imgQuery: 'owl bird night cute', emoji: '🦉' },
    { word: 'octopus', chinese: '章鱼', imgQuery: 'octopus ocean cute', emoji: '🐙' },
  ]},
  { letter: 'P', lower: 'p', words: [
    { word: 'panda', chinese: '熊猫', imgQuery: 'panda cute animal bamboo', emoji: '🐼' },
    { word: 'penguin', chinese: '企鹅', imgQuery: 'penguin cute ice', emoji: '🐧' },
    { word: 'pizza', chinese: '披萨', imgQuery: 'pizza cheese delicious', emoji: '🍕' },
  ]},
  { letter: 'Q', lower: 'q', words: [
    { word: 'queen', chinese: '女王', imgQuery: 'queen crown royal', emoji: '👸' },
    { word: 'quail', chinese: '鹌鹑', imgQuery: 'quail bird cute', emoji: '🐦' },
    { word: 'quilt', chinese: '被子', imgQuery: 'colorful quilt blanket', emoji: '🛏️' },
  ]},
  { letter: 'R', lower: 'r', words: [
    { word: 'rabbit', chinese: '兔子', imgQuery: 'rabbit bunny cute', emoji: '🐰' },
    { word: 'rainbow', chinese: '彩虹', imgQuery: 'rainbow sky colorful', emoji: '🌈' },
    { word: 'rocket', chinese: '火箭', imgQuery: 'rocket space launch', emoji: '🚀' },
  ]},
  { letter: 'S', lower: 's', words: [
    { word: 'star', chinese: '星星', imgQuery: 'star night sky shiny', emoji: '⭐' },
    { word: 'sun', chinese: '太阳', imgQuery: 'sun sunshine bright', emoji: '☀️' },
    { word: 'snake', chinese: '蛇', imgQuery: 'snake colorful reptile', emoji: '🐍' },
  ]},
  { letter: 'T', lower: 't', words: [
    { word: 'tree', chinese: '树', imgQuery: 'big green tree nature', emoji: '🌳' },
    { word: 'tiger', chinese: '老虎', imgQuery: 'tiger animal stripes', emoji: '🐯' },
    { word: 'turtle', chinese: '乌龟', imgQuery: 'turtle cute green', emoji: '🐢' },
  ]},
  { letter: 'U', lower: 'u', words: [
    { word: 'umbrella', chinese: '雨伞', imgQuery: 'colorful umbrella rain', emoji: '☂️' },
    { word: 'unicorn', chinese: '独角兽', imgQuery: 'unicorn magical fantasy', emoji: '🦄' },
    { word: 'ukulele', chinese: '尤克里里', imgQuery: 'ukulele instrument music', emoji: '🎵' },
  ]},
  { letter: 'V', lower: 'v', words: [
    { word: 'violin', chinese: '小提琴', imgQuery: 'violin musical instrument', emoji: '🎻' },
    { word: 'volcano', chinese: '火山', imgQuery: 'volcano eruption nature', emoji: '🌋' },
    { word: 'vase', chinese: '花瓶', imgQuery: 'vase flowers beautiful', emoji: '🏺' },
  ]},
  { letter: 'W', lower: 'w', words: [
    { word: 'whale', chinese: '鲸鱼', imgQuery: 'whale ocean jumping', emoji: '🐳' },
    { word: 'watermelon', chinese: '西瓜', imgQuery: 'watermelon slice fruit', emoji: '🍉' },
    { word: 'wolf', chinese: '狼', imgQuery: 'wolf animal wild', emoji: '🐺' },
  ]},
  { letter: 'X', lower: 'x', words: [
    { word: 'xylophone', chinese: '木琴', imgQuery: 'xylophone colorful instrument', emoji: '🎵' },
    { word: 'x-ray', chinese: 'X光', imgQuery: 'xray medical skeleton', emoji: '🩻' },
    { word: 'fox', chinese: '狐狸', imgQuery: 'fox cute animal red', emoji: '🦊' },
  ]},
  { letter: 'Y', lower: 'y', words: [
    { word: 'yak', chinese: '牦牛', imgQuery: 'yak animal mountain', emoji: '🐂' },
    { word: 'yacht', chinese: '游艇', imgQuery: 'yacht boat ocean', emoji: '🛥️' },
    { word: 'yogurt', chinese: '酸奶', imgQuery: 'yogurt food breakfast', emoji: '🥛' },
  ]},
  { letter: 'Z', lower: 'z', words: [
    { word: 'zebra', chinese: '斑马', imgQuery: 'zebra stripes animal', emoji: '🦓' },
    { word: 'zoo', chinese: '动物园', imgQuery: 'zoo animals children', emoji: '🦁' },
    { word: 'zipper', chinese: '拉链', imgQuery: 'zipper close colorful', emoji: '🧥' },
  ]},
];
```

- [ ] **Step 2: Verify the file still parses**

Run: `node -c app.js`
Expected: no syntax errors

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "refactor: replace old alphabet data with ALPHABET_DATA word cards"
```

---

### Task 2: Rewrite HTML — grid, detail (with word cards), trace screens

**Files:**
- Modify: `index.html:40-142` (replace grid-screen, detail-screen, trace-screen, book-screen)

- [ ] **Step 1: Replace the four alphabet screens (lines 40-142) with three new screens**

Replace from `<!-- 字母网格页面 -->` through the closing `</div>` of `#book-screen` (line 142) with:

```html
    <!-- 字母网格页面 -->
    <div id="grid-screen" class="screen">
        <header class="detail-header">
            <button id="grid-back-btn" class="back-btn">← 返回</button>
            <h1 class="page-title">🔤 萌学字母 🔤</h1>
        </header>
        <div id="alphabet-grid" class="alphabet-grid"></div>
    </div>

    <!-- 字母详情页面 -->
    <div id="detail-screen" class="screen">
        <header class="detail-header">
            <button id="detail-back-btn" class="back-btn">← 返回</button>
        </header>
        <div class="letter-display">
            <div id="big-letter" class="big-letter">A</div>
            <div id="big-letter-lower" class="big-letter-lower">a</div>
        </div>
        <div class="letter-detail-controls">
            <button id="letter-audio-btn" class="hanzi-audio-btn">
                <span class="audio-icon">🔊</span>
                <span class="audio-text">听发音</span>
            </button>
            <button id="letter-trace-btn" class="hanzi-trace-btn">
                <span class="trace-icon">✏️</span>
                <span class="trace-text">开始描红</span>
            </button>
        </div>
        <div class="hanzi-words-section">
            <div class="hanzi-words-title">📝 相关单词</div>
            <div id="letter-words-list" class="hanzi-words-list"></div>
            <div class="hanzi-words-hint">← 左右滑动查看更多 →</div>
        </div>
    </div>

    <!-- 字母描红页面 -->
    <div id="trace-screen" class="screen">
        <div class="hanzi-trace-header">
            <button id="trace-back-btn" class="trace-back-btn">← 退出</button>
            <div class="hanzi-trace-progress">
                <span id="trace-letter-label" class="stroke-indicator">A</span>
            </div>
            <div class="hanzi-trace-spacer"></div>
        </div>
        <div class="trace-canvas-container">
            <canvas id="trace-guide-canvas" class="trace-canvas guide"></canvas>
            <canvas id="trace-draw-canvas" class="trace-canvas draw"></canvas>
        </div>
        <div class="hanzi-trace-controls">
            <button id="trace-replay-btn" class="trace-control-btn">
                <span>🎬</span> 看演示
            </button>
            <button id="trace-clear-btn" class="trace-control-btn">
                <span>🗑️</span> 清除
            </button>
            <button id="trace-done-btn" class="trace-control-btn">
                <span>✅</span> 完成
            </button>
        </div>
    </div>
```

- [ ] **Step 2: Verify HTML is valid**

Open `index.html` in browser, check no rendering errors. All screens should still load (though alphabet JS is broken until Task 3).

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "refactor: rewrite alphabet HTML screens to match hanzi pattern"
```

---

### Task 3: Rewrite JS — remove old alphabet/book functions, add new ones

**Files:**
- Modify: `app.js` (lines 487-510 state vars, 1649-1684 DOM refs, 1759-1916 alphabet functions, 1917-2569 old trace+book functions, 3330-3502 event listeners, 3040-3051 hideAllScreens)

This is the largest task. It replaces all old alphabet/book JS with new code modeled after the hanzi feature.

- [ ] **Step 1: Replace state variables (lines 487-506)**

Remove old state variables from `let currentLetter = 'A'` through `let bookIsAnimating = false;` (lines 487-505). Replace with:

```javascript
let currentLetter = null; // current ALPHABET_DATA item
let letterTraceAnimating = false;
let letterTraceDrawing = false;
let letterTraceLastX = 0;
let letterTraceLastY = 0;
```

- [ ] **Step 2: Replace DOM refs (lines 1649-1684)**

Remove old DOM refs from `const gridScreen` through `const bookHint` (lines 1649-1684). Replace with:

```javascript
const gridScreen = document.getElementById('grid-screen');
const detailScreen = document.getElementById('detail-screen');
const traceScreen = document.getElementById('trace-screen');
const alphabetGrid = document.getElementById('alphabet-grid');
const gridBackBtn = document.getElementById('grid-back-btn');
const detailBackBtn = document.getElementById('detail-back-btn');
const bigLetter = document.getElementById('big-letter');
const bigLetterLower = document.getElementById('big-letter-lower');
const letterAudioBtn = document.getElementById('letter-audio-btn');
const letterTraceBtn = document.getElementById('letter-trace-btn');
const letterWordsList = document.getElementById('letter-words-list');
const traceBackBtn = document.getElementById('trace-back-btn');
const traceReplayBtn = document.getElementById('trace-replay-btn');
const traceClearBtn = document.getElementById('trace-clear-btn');
const traceDoneBtn = document.getElementById('trace-done-btn');
const traceLetterLabel = document.getElementById('trace-letter-label');
const traceGuideCanvas = document.getElementById('trace-guide-canvas');
const traceDrawCanvas = document.getElementById('trace-draw-canvas');
```

- [ ] **Step 3: Replace all alphabet/book functions (lines 1759-3019)**

Remove everything from `function init()` through the end of `function lightenColor(...)` (line 2569), plus the entire book section (lines 2571-3019). Replace with the new alphabet functions. Keep `lightenColor` as it's shared.

Replace with the following new functions:

```javascript
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
  ALPHABET_DATA.forEach(item => {
    const card = document.createElement('div');
    card.className = 'letter-card';
    card.dataset.letter = item.letter;
    card.innerHTML = `
      <div class="letter-card-upper">${item.letter}</div>
      <div class="letter-card-lower">${item.lower}</div>
    `;
    card.addEventListener('click', () => openLetterDetail(item));
    alphabetGrid.appendChild(card);
  });
}

function openAlphabetScreen() {
  hideAllScreens();
  gridScreen.classList.add('active');
}

function goBackFromGrid() {
  goToHome();
}

// === 字母详情 ===

function openLetterDetail(item) {
  currentLetter = item;

  hideAllScreens();
  detailScreen.classList.add('active');

  bigLetter.textContent = item.letter;
  bigLetterLower.textContent = item.lower;

  // Render word cards (same pattern as hanzi)
  letterWordsList.innerHTML = '';
  const gradients = [
    'linear-gradient(135deg, #74b9ff, #0984e3)',
    'linear-gradient(135deg, #a29bfe, #6c5ce7)',
    'linear-gradient(135deg, #55efc4, #00b894)',
    'linear-gradient(135deg, #fd79a8, #e84393)',
    'linear-gradient(135deg, #fdcb6e, #f39c12)'
  ];

  item.words.forEach((w, i) => {
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
      <div class="hanzi-word-pinyin">${w.chinese}</div>
    `;

    card.appendChild(imgDiv);
    card.appendChild(info);
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => speakEnglish(w.word));
    letterWordsList.appendChild(card);
  });

  // Auto-play letter pronunciation
  setTimeout(() => speakEnglish(item.letter), 300);
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

function openLetterTraceScreen() {
  if (!currentLetter) return;

  hideAllScreens();
  traceScreen.classList.add('active');
  traceLetterLabel.textContent = currentLetter.letter;

  resizeLetterTraceCanvas();
  drawLetterTraceGuide();

  setTimeout(() => animateLetterWriting(), 400);
}

function exitLetterTraceScreen() {
  letterTraceAnimating = false;
  hideAllScreens();
  detailScreen.classList.add('active');
}

function resizeLetterTraceCanvas() {
  const container = traceGuideCanvas.parentElement;
  const headerEl = document.querySelector('.hanzi-trace-header');
  const controlsEl = document.querySelector('.hanzi-trace-controls');
  const headerH = headerEl ? headerEl.offsetHeight : 80;
  const controlsH = controlsEl ? controlsEl.offsetHeight : 80;
  const availableH = window.innerHeight - headerH - controlsH - 40;
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
}

function animateLetterWriting() {
  if (letterTraceAnimating) return;
  letterTraceAnimating = true;

  const ctx = traceDrawCanvas.getContext('2d');
  const w = traceDrawCanvas.width;
  const h = traceDrawCanvas.height;
  ctx.clearRect(0, 0, w, h);

  // Use a clipping approach: draw the letter by revealing it from top to bottom
  const fontSize = h * 0.78;
  const totalFrames = 60;
  let frame = 0;

  function drawFrame() {
    if (!letterTraceAnimating) return;

    ctx.clearRect(0, 0, w, h);
    ctx.save();

    // Clip to reveal portion of the letter
    const revealHeight = (frame / totalFrames) * h;
    ctx.beginPath();
    ctx.rect(0, 0, w, revealHeight);
    ctx.clip();

    // Draw the solid letter
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

    frame++;
    if (frame <= totalFrames) {
      requestAnimationFrame(drawFrame);
    } else {
      // Animation done — clear for user drawing
      letterTraceAnimating = false;
      setTimeout(() => {
        ctx.clearRect(0, 0, w, h);
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
  showFlowerCelebration();
  setTimeout(() => {
    exitLetterTraceScreen();
  }, 2500);
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
```

- [ ] **Step 4: Update `hideAllScreens` to remove `bookScreen` reference**

In `hideAllScreens()`, remove the line `bookScreen.classList.remove('active');`. The remaining screen refs (`gridScreen`, `detailScreen`, `traceScreen`) stay the same.

- [ ] **Step 5: Update `setupEventListeners` — remove old, add new**

Replace the alphabet/book event listener section in `setupEventListeners()`. Remove all old alphabet/book listeners (lines 3334-3372, and lines 3484-3495 resize handlers). Replace with:

```javascript
  // 萌学字母事件
  gridBackBtn.addEventListener('click', goBackFromGrid);
  detailBackBtn.addEventListener('click', () => {
    hideAllScreens();
    gridScreen.classList.add('active');
  });
  letterAudioBtn.addEventListener('click', () => {
    if (currentLetter) speakEnglish(currentLetter.letter);
  });
  letterTraceBtn.addEventListener('click', openLetterTraceScreen);
  traceBackBtn.addEventListener('click', exitLetterTraceScreen);
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
```

Update the resize handler:

```javascript
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
```

- [ ] **Step 6: Update `init()` — remove resizeBookCanvas and resizeTraceCanvas calls**

The new `init()` function (written in Step 3) no longer calls `resizeTraceCanvas()` or `resizeBookCanvas()`.

- [ ] **Step 7: Verify the app loads without errors**

Run: `node server.js &` then open `http://localhost:8000` in browser.
Expected: home screen loads, clicking 萌学字母 shows grid, clicking a letter shows detail with word cards, clicking 描红 shows trace canvas.

- [ ] **Step 8: Commit**

```bash
git add app.js
git commit -m "feat: rewrite alphabet JS with detail word cards and free-form tracing"
```

---

### Task 4: Update CSS — remove old styles, add letter detail styles

**Files:**
- Modify: `styles.css`

- [ ] **Step 1: Add the `big-letter-lower` style**

Add after existing `.big-letter` styles:

```css
.big-letter-lower {
  font-size: 4rem;
  font-weight: bold;
  color: #a18cd1;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
}
```

- [ ] **Step 2: Add `.letter-detail-controls` style**

```css
.letter-detail-controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}
```

- [ ] **Step 3: Add `.letter-card-upper` and `.letter-card-lower` styles**

```css
.letter-card-upper {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
}

.letter-card-lower {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.2rem;
}
```

- [ ] **Step 4: Remove old book-screen styles**

Search for and remove all CSS rules that contain `book-` prefixed selectors (`.book-header`, `.book-content`, `.book-canvas-container`, `.book-canvas`, `.book-controls`, `.book-control-btn`, `.book-hint`, `.book-letter`, `.book-title`, `.word-card`, `.word-display`, `.word-text`, `.word-chinese`, `.word-audio-btn`, etc.). These are no longer referenced.

- [ ] **Step 5: Remove old trace-specific styles that are no longer used**

Remove styles for: `.trace-hint`, `.trace-try-again`, `.trace-start-hint`, `.stroke-indicator` (if only used by old trace — check first; the hanzi trace uses `.stroke-indicator` so keep it).

- [ ] **Step 6: Verify styles render correctly**

Open browser, navigate through all alphabet screens. Word cards should scroll horizontally. Trace canvas should be centered.

- [ ] **Step 7: Commit**

```bash
git add styles.css
git commit -m "style: update CSS for new alphabet detail and trace screens"
```

---

### Task 5: End-to-end verification and cleanup

**Files:**
- Possibly modify: `app.js`, `index.html`, `styles.css` (minor fixes)

- [ ] **Step 1: Test grid screen**

Open http://localhost:8000, click 萌学字母. Verify:
- 26 letter cards display with uppercase + lowercase
- Cards are clickable

- [ ] **Step 2: Test detail screen**

Click a letter (e.g., "A"). Verify:
- Shows "A" and "a" prominently
- 发音 button plays letter sound via TTS
- 3 word cards (apple, ant, airplane) show with Unsplash images
- Clicking a word card plays TTS for that word
- Back button returns to grid

- [ ] **Step 3: Test trace screen**

Click 描红 button. Verify:
- Letter outline shows faintly as guide
- Writing animation plays (top-to-bottom reveal)
- After animation, user can draw freely on canvas
- 看演示 replays animation
- 清除 clears user drawing
- 完成 triggers celebration and returns to detail

- [ ] **Step 4: Test other features still work**

Verify 萌学汉字, 萌学视力表, and 萌学儿歌 still function correctly — they should be unaffected.

- [ ] **Step 5: Fix any issues found**

Apply fixes to relevant files.

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "fix: polish alphabet redesign, verify all features work"
```
