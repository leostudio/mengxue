# UX Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Optimize the mengxue learning app's UX across five areas: tracing interaction, navigation, celebrations, progress tracking, and vision page layout.

**Architecture:** The app is a single-page vanilla HTML/CSS/JS app. All changes stay within `index.html`, `styles.css`, and `app.js`. No frameworks. We add a guide cat character rendered on the guide canvas, slide transitions via CSS, localStorage progress persistence, and upgraded celebration effects. The existing `detail-screen` is removed and its functionality merged into `trace-screen`.

**Tech Stack:** Vanilla HTML5, CSS3 (transitions/animations), Canvas 2D API, Web Speech API, Vibration API, localStorage

**Deferred:** Spec item 1.3 (笔画路径数据修复 — audit and fix all 26 letter stroke coordinate sets) is omitted from this plan. It requires manual visual inspection and coordinate adjustment for each letter and is best done as a separate data-quality task. Spec item 1.4 (无缝笔画衔接) does not apply to the current free-form tracing architecture — the current system allows free drawing rather than stroke-by-stroke guided writing.

---

### Task 1: Add Slide Transition System for Screen Navigation

**Files:**
- Modify: `styles.css:19-27` (screen display rules)
- Modify: `app.js:1699-1709` (hideAllScreens function)
- Modify: `app.js:1688-1697` (navigation functions)

This task replaces instant screen switching with CSS slide transitions. All subsequent tasks depend on this navigation system.

- [ ] **Step 1: Add slide transition CSS classes**

Add these styles after the existing `.screen.active` rule in `styles.css` (after line 27):

```css
/* Slide transition system */
.screen {
    display: none;
    padding: 20px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateX(100%);
    transition: transform 300ms ease-out, opacity 300ms ease-out;
    opacity: 0;
}

.screen.active {
    display: block;
    transform: translateX(0);
    opacity: 1;
}

.screen.slide-out-left {
    display: block;
    transform: translateX(-30%);
    opacity: 0;
}

.screen.slide-out-right {
    display: block;
    transform: translateX(100%);
    opacity: 0;
}
```

Also add `position: relative; overflow: hidden;` to the `body` rule.

- [ ] **Step 2: Replace hideAllScreens and add navigateTo function in app.js**

Replace the `hideAllScreens` function (line 1699) and add a new `navigateTo` helper:

```javascript
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
```

- [ ] **Step 3: Update all navigation calls to use navigateTo**

Replace all `hideAllScreens(); xxxScreen.classList.add('active');` patterns:

In `openAlphabetScreen` (line 1406):
```javascript
function openAlphabetScreen() {
  navigateTo(gridScreen, 'forward');
}
```

In `goBackFromGrid` (line 1411):
```javascript
function goBackFromGrid() {
  goBack();
}
```

In `openLetterDetail` (line 1417):
```javascript
function openLetterDetail(item) {
  currentLetter = item;
  navigateTo(detailScreen, 'forward');
  // ... rest of the function unchanged
```

In `openLetterTraceScreen` (line 1489):
```javascript
function openLetterTraceScreen() {
  if (!currentLetter) return;
  navigateTo(traceScreen, 'forward');
  // ... rest unchanged
```

In `exitLetterTraceScreen` (line 1502):
```javascript
function exitLetterTraceScreen() {
  letterTraceAnimating = false;
  goBack();
}
```

In `openVisionScreen` (line 1694):
```javascript
function openVisionScreen() {
  navigateTo(visionScreen, 'forward');
}
```

In `openVisionDetail` (line 1737):
```javascript
function openVisionDetail(directionName) {
  // ... setup code unchanged ...
  navigateTo(visionDetailScreen, 'forward');
  // ... rest unchanged (move hideAllScreens replacement)
```

In `exitVisionDetail` (line 1787):
```javascript
function exitVisionDetail() {
  goBack();
}
```

In `exitVisionScreen` (line 1792):
```javascript
function exitVisionScreen() {
  goToHome();
}
```

In `openHanziGridScreen` (line 2146):
```javascript
function openHanziGridScreen() {
  navigateTo(hanziGridScreen, 'forward');
  // ... rest unchanged
```

In `openHanziDetail` (line 2191):
```javascript
function openHanziDetail(hanziItem) {
  currentHanzi = hanziItem;
  navigateTo(hanziDetailScreen, 'forward');
  // ... rest unchanged
```

In `openHanziTraceScreen` (line 2261):
```javascript
function openHanziTraceScreen() {
  if (!currentHanzi) return;
  navigateTo(hanziTraceScreen, 'forward');
  // ... rest unchanged
```

In `exitHanziTraceScreen` (line 2358):
```javascript
function exitHanziTraceScreen() {
  // ... cleanup unchanged ...
  goBack();
}
```

In `openSongScreen` (line 2372):
```javascript
function openSongScreen() {
  navigateTo(songScreen, 'forward');
  // ... rest unchanged
```

Update `detailBackBtn` handler (line 2994):
```javascript
detailBackBtn.addEventListener('click', () => goBack());
```

Update `hanziDetailBackBtn` handler (line 2097):
```javascript
hanziDetailBackBtn.addEventListener('click', () => goBack());
```

Update `songBackBtn` handler (line 2041):
```javascript
songBackBtn.addEventListener('click', () => {
  destroySongPlayer();
  goToHome();
});
```

- [ ] **Step 4: Test slide transitions manually**

Run: `node server.js`

Test in browser:
1. Home → Alphabet grid: should slide in from right
2. Back from grid: should slide out to right
3. Home → Vision: should slide in from right
4. All screen transitions should animate smoothly with 300ms duration

- [ ] **Step 5: Commit**

```bash
git add styles.css app.js
git commit -m "feat: add slide transition system for all screen navigation"
```

---

### Task 2: Remove Detail Screen and Merge into Trace Screen

**Files:**
- Modify: `index.html:49-73` (remove detail-screen section)
- Modify: `index.html:76-99` (update trace-screen header to include audio/book buttons)
- Modify: `styles.css` (remove detail-related styles, add trace header buttons)
- Modify: `app.js:1391-1404` (grid click → go directly to trace)
- Modify: `app.js:1417-1472` (remove openLetterDetail function)
- Modify: `app.js:1489-1506` (update openLetterTraceScreen)
- Modify: `app.js:1626-1631` (update completeLetterTrace)

- [ ] **Step 1: Update trace-screen HTML to include audio and book buttons**

In `index.html`, replace the trace-screen section (lines 76-99) with:

```html
    <!-- 字母描红页面 -->
    <div id="trace-screen" class="screen">
        <div class="hanzi-trace-header">
            <button id="trace-back-btn" class="trace-back-btn">← 退出</button>
            <div class="hanzi-trace-progress">
                <span id="trace-letter-label" class="stroke-indicator">A</span>
            </div>
            <div class="trace-header-actions">
                <button id="trace-audio-btn" class="trace-action-btn" title="听发音">🔊</button>
                <button id="trace-book-btn" class="trace-action-btn" title="小绘本">📖</button>
            </div>
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

- [ ] **Step 2: Remove the detail-screen HTML**

Delete the entire detail-screen section from `index.html` (lines 49-73):

```html
    <!-- 字母详情页面 -->
    <div id="detail-screen" class="screen">
        ...
    </div>
```

- [ ] **Step 3: Add CSS for trace header action buttons**

Add to `styles.css`:

```css
.trace-header-actions {
    display: flex;
    gap: 8px;
}

.trace-action-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.9);
    font-size: 1.3rem;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.trace-action-btn:active {
    transform: scale(0.9);
}
```

- [ ] **Step 4: Update app.js — grid clicks go directly to trace**

Replace `openLetterDetail` call in `createAlphabetGrid` (line 1401):

```javascript
card.addEventListener('click', () => {
  currentLetter = item;
  openLetterTraceScreen();
});
```

Remove the entire `openLetterDetail` function (lines 1417-1472).

Remove all `detailScreen` references:
- Remove `const detailScreen = document.getElementById('detail-screen');` (line 1288)
- Remove `const detailBackBtn = document.getElementById('detail-back-btn');` (line 1292)
- Remove `const bigLetter = document.getElementById('big-letter');` (line 1293)
- Remove `const bigLetterLower = document.getElementById('big-letter-lower');` (line 1294)
- Remove `const letterAudioBtn = document.getElementById('letter-audio-btn');` (line 1295)
- Remove `const letterTraceBtn = document.getElementById('letter-trace-btn');` (line 1296)
- Remove `const letterWordsList = document.getElementById('letter-words-list');` (line 1297)
- Remove event listeners for `detailBackBtn`, `letterAudioBtn`, `letterTraceBtn` in `setupEventListeners`

Add new DOM references:

```javascript
const traceAudioBtn = document.getElementById('trace-audio-btn');
const traceBookBtn = document.getElementById('trace-book-btn');
```

Add new event listeners in `setupEventListeners`:

```javascript
traceAudioBtn.addEventListener('click', () => {
  if (currentLetter) speakEnglish(currentLetter.letter);
});
traceBookBtn.addEventListener('click', () => {
  // Placeholder — book screen not yet implemented in this plan
  if (currentLetter) speakEnglish(currentLetter.words[0].word);
});
```

- [ ] **Step 5: Update exitLetterTraceScreen to go back to grid**

```javascript
function exitLetterTraceScreen() {
  letterTraceAnimating = false;
  goBack();
}
```

- [ ] **Step 6: Test the simplified navigation**

Run: `node server.js`

Test in browser:
1. Home → Alphabet grid → Click letter 'A': should go directly to trace screen
2. Trace screen header shows 'A', audio (🔊) and book (📖) buttons
3. Audio button plays letter pronunciation
4. Back button returns to grid
5. No detail-screen appears anywhere

- [ ] **Step 7: Commit**

```bash
git add index.html styles.css app.js
git commit -m "feat: remove letter detail page, merge audio/book into trace header"
```

---

### Task 3: Add Guide Cat Character to Trace Screen

**Files:**
- Modify: `app.js` (add cat rendering functions, update drawLetterTraceGuide, animateLetterWriting)

The guide cat is rendered on the guide canvas as a simple drawn character (circle head + ears + eyes + mouth). It sits at the start point of the writing animation and moves along the path.

- [ ] **Step 1: Add cat drawing helper function**

Add after the existing `lightenColor` function (around line 1675):

```javascript
// === Guide Cat ===
const CAT_SIZE = 28; // radius of cat head

function drawCat(ctx, x, y, angle, expression) {
  // angle: direction the cat faces (radians)
  // expression: 'normal', 'lookback', 'happy'
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  // Body (small, behind head)
  ctx.beginPath();
  ctx.ellipse(-CAT_SIZE * 0.4, 0, CAT_SIZE * 0.5, CAT_SIZE * 0.35, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFD166';
  ctx.fill();

  // Head
  ctx.beginPath();
  ctx.arc(CAT_SIZE * 0.3, 0, CAT_SIZE * 0.55, 0, Math.PI * 2);
  ctx.fillStyle = '#FFD166';
  ctx.fill();

  // Left ear
  ctx.beginPath();
  ctx.moveTo(CAT_SIZE * 0.05, -CAT_SIZE * 0.45);
  ctx.lineTo(CAT_SIZE * -0.05, -CAT_SIZE * 0.85);
  ctx.lineTo(CAT_SIZE * 0.3, -CAT_SIZE * 0.55);
  ctx.fillStyle = '#FFD166';
  ctx.fill();
  // Inner ear
  ctx.beginPath();
  ctx.moveTo(CAT_SIZE * 0.05, -CAT_SIZE * 0.5);
  ctx.lineTo(CAT_SIZE * 0.02, -CAT_SIZE * 0.75);
  ctx.lineTo(CAT_SIZE * 0.25, -CAT_SIZE * 0.55);
  ctx.fillStyle = '#FFB088';
  ctx.fill();

  // Right ear
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
    // Happy squint eyes (arcs)
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(eyeX, eyeY, 4, Math.PI * 0.1, Math.PI * 0.9);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(eyeX, eyeY2, 4, Math.PI * 0.1, Math.PI * 0.9);
    ctx.stroke();
  } else {
    // Normal/lookback eyes (dots)
    ctx.beginPath();
    ctx.arc(eyeX, eyeY, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#333';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(eyeX, eyeY2, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#333';
    ctx.fill();
  }

  // Mouth
  if (expression === 'happy') {
    ctx.beginPath();
    ctx.arc(CAT_SIZE * 0.4, 0, 5, 0, Math.PI);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  } else {
    // Small nose triangle
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

// Cat state
let catX = 0, catY = 0, catAngle = 0, catExpression = 'normal';
let catTargetX = 0, catTargetY = 0;
let catAnimationId = null;
```

- [ ] **Step 2: Add cat to the trace guide drawing**

Update `drawLetterTraceGuide` to position the cat at the canvas center initially:

```javascript
function drawLetterTraceGuide() {
  const ctx = traceGuideCanvas.getContext('2d');
  const w = traceGuideCanvas.width;
  const h = traceGuideCanvas.height;
  ctx.clearRect(0, 0, w, h);

  // Draw faint letter outline as reference (existing code unchanged)
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

  // Draw guide lines (existing code unchanged)
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

  // Draw cat at center
  catX = w / 2;
  catY = h * 0.3;
  catAngle = 0;
  catExpression = 'normal';
  drawCat(ctx, catX, catY, catAngle, catExpression);
}
```

- [ ] **Step 3: Update animateLetterWriting to move cat along reveal**

Replace `animateLetterWriting`:

```javascript
function animateLetterWriting() {
  if (letterTraceAnimating) return;
  letterTraceAnimating = true;

  const drawCtx = traceDrawCanvas.getContext('2d');
  const guideCtx = traceGuideCanvas.getContext('2d');
  const w = traceDrawCanvas.width;
  const h = traceDrawCanvas.height;
  drawCtx.clearRect(0, 0, w, h);

  const fontSize = h * 0.78;
  const totalFrames = 60;
  let frame = 0;

  function drawFrame() {
    if (!letterTraceAnimating) return;

    drawCtx.clearRect(0, 0, w, h);
    drawCtx.save();

    const revealHeight = (frame / totalFrames) * h;
    drawCtx.beginPath();
    drawCtx.rect(0, 0, w, revealHeight);
    drawCtx.clip();

    drawCtx.font = `bold ${fontSize}px sans-serif`;
    drawCtx.textAlign = 'center';
    drawCtx.textBaseline = 'middle';
    const grad = drawCtx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#ff6b9d');
    grad.addColorStop(1, '#a18cd1');
    drawCtx.fillStyle = grad;
    drawCtx.globalAlpha = 0.6;
    drawCtx.fillText(currentLetter.letter, w / 2, h / 2);
    drawCtx.restore();

    // Move cat along top of reveal line
    catY = revealHeight;
    catAngle = Math.PI / 2; // facing down
    catExpression = 'normal';

    // Redraw guide with cat
    drawLetterTraceGuide();

    frame++;
    if (frame <= totalFrames) {
      requestAnimationFrame(drawFrame);
    } else {
      letterTraceAnimating = false;
      catExpression = 'happy';
      drawLetterTraceGuide();
      setTimeout(() => {
        drawCtx.clearRect(0, 0, w, h);
      }, 800);
    }
  }

  requestAnimationFrame(drawFrame);
}
```

- [ ] **Step 4: Test cat rendering**

Run: `node server.js`

Test in browser:
1. Go to any letter's trace screen
2. A yellow cat should appear on the guide canvas
3. During the animation, the cat should move downward
4. After animation completes, cat shows happy expression

- [ ] **Step 5: Commit**

```bash
git add app.js
git commit -m "feat: add guide cat character to letter trace screen"
```

---

### Task 4: Add Real-time Deviation Feedback

**Files:**
- Modify: `app.js` (update doLetterDraw to check deviation, add vibration/sound feedback)

- [ ] **Step 1: Add deviation detection helpers**

Add after the cat state variables:

```javascript
// Deviation feedback state
let lastDeviationFeedback = 0;
const DEVIATION_COOLDOWN = 500; // ms between feedback triggers
const DEVIATION_THRESHOLD = 40; // pixels — tune based on canvas size

function getDistanceToLetterCenter(x, y) {
  // Check if point is within the rendered letter using pixel data
  const ctx = traceGuideCanvas.getContext('2d');
  const pixel = ctx.getImageData(Math.round(x), Math.round(y), 1, 1).data;
  // If alpha > 0, point is on the letter guide
  return pixel[3] > 0 ? 0 : DEVIATION_THRESHOLD + 1;
}

function triggerDeviationFeedback() {
  const now = Date.now();
  if (now - lastDeviationFeedback < DEVIATION_COOLDOWN) return;
  lastDeviationFeedback = now;

  // Vibration
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }

  // Update cat expression to lookback
  catExpression = 'lookback';
  const ctx = traceGuideCanvas.getContext('2d');
  drawLetterTraceGuide();

  // Revert cat after cooldown
  setTimeout(() => {
    if (catExpression === 'lookback') {
      catExpression = 'normal';
      drawLetterTraceGuide();
    }
  }, DEVIATION_COOLDOWN);
}
```

- [ ] **Step 2: Update doLetterDraw to check deviation**

Modify `doLetterDraw` (line 1643):

```javascript
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

  // Check deviation from letter area
  const dist = getDistanceToLetterCenter(pos.x, pos.y);
  if (dist > DEVIATION_THRESHOLD) {
    triggerDeviationFeedback();
  }
}
```

- [ ] **Step 3: Reset deviation state on trace screen open**

In `openLetterTraceScreen`, add after existing setup:

```javascript
lastDeviationFeedback = 0;
catExpression = 'normal';
```

- [ ] **Step 4: Test deviation feedback**

Run: `node server.js`

Test in browser:
1. Open a letter trace screen
2. Draw within the letter area — no feedback
3. Draw well outside the letter — device vibrates (on mobile), cat expression changes
4. Wait 500ms and draw outside again — feedback triggers again
5. Draw back inside letter — cat returns to normal

- [ ] **Step 5: Commit**

```bash
git add app.js
git commit -m "feat: add real-time deviation feedback with vibration and cat expression"
```

---

### Task 5: Add Completion Flow with Next/Back Buttons

**Files:**
- Modify: `index.html` (add completion overlay inside trace-screen)
- Modify: `styles.css` (add completion overlay styles)
- Modify: `app.js` (update completeLetterTrace, add navigation handlers)

- [ ] **Step 1: Add completion overlay HTML**

Add inside the trace-screen div, after the controls div, in `index.html`:

```html
        <div id="trace-complete-overlay" class="trace-complete-overlay hidden">
            <div class="trace-complete-content">
                <div class="trace-complete-cat" id="trace-complete-cat"></div>
                <div class="trace-complete-text" id="trace-complete-text">太棒了！</div>
                <div class="trace-complete-buttons">
                    <button id="trace-next-btn" class="trace-complete-btn trace-next-btn">
                        下一个字母 ➡️
                    </button>
                    <button id="trace-back-to-grid-btn" class="trace-complete-btn trace-back-btn-small">
                        回到列表 📋
                    </button>
                </div>
            </div>
        </div>
```

- [ ] **Step 2: Add completion overlay CSS**

Add to `styles.css`:

```css
/* Trace completion overlay */
.trace-complete-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    animation: fadeIn 300ms ease-out;
}

.trace-complete-overlay.hidden {
    display: none;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.trace-complete-content {
    text-align: center;
}

.trace-complete-cat {
    width: 120px;
    height: 120px;
    margin: 0 auto 16px;
}

.trace-complete-text {
    font-size: 2.2rem;
    font-weight: bold;
    color: #ff6b9d;
    margin-bottom: 30px;
    animation: popIn 0.5s ease-out;
}

.trace-complete-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
}

.trace-complete-btn {
    border: none;
    border-radius: 25px;
    padding: 16px 40px;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s;
    animation: bounceIn 0.5s ease-out;
    animation-fill-mode: both;
}

.trace-complete-btn:nth-child(2) {
    animation-delay: 0.1s;
}

.trace-complete-btn:active {
    transform: scale(0.95);
}

.trace-next-btn {
    background: linear-gradient(135deg, #ff6b9d 0%, #ff8a80 100%);
    color: white;
    box-shadow: 0 8px 25px rgba(255, 107, 157, 0.4);
    font-size: 1.4rem;
    padding: 18px 50px;
}

.trace-back-btn-small {
    background: rgba(0,0,0,0.05);
    color: #888;
    font-size: 1.1rem;
    padding: 12px 30px;
}

@keyframes bounceIn {
    0% { transform: scale(0); opacity: 0; }
    60% { transform: scale(1.1); }
    100% { transform: scale(1); opacity: 1; }
}
```

- [ ] **Step 3: Add encouragement pool and update completeLetterTrace**

In `app.js`, add the encouragement pool and update the completion logic:

```javascript
const ENCOURAGEMENTS = [
  '太棒了！',
  '写得真漂亮！',
  '你真厉害！',
  '好棒好棒！',
  '越来越好了！',
  '真是小天才！',
  '完美！',
];

function getRandomEncouragement() {
  return ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
}
```

Replace `completeLetterTrace` (line 1626):

```javascript
function completeLetterTrace() {
  const msg = getRandomEncouragement();

  // Save progress
  saveLetterProgress(currentLetter.letter);

  // Show particle celebration
  showParticleCelebration();

  // TTS
  speakChinese(msg);

  // Show overlay with message
  const overlay = document.getElementById('trace-complete-overlay');
  const textEl = document.getElementById('trace-complete-text');
  textEl.textContent = msg;
  overlay.classList.remove('hidden');
}
```

Add `speakChinese` function (it was referenced but not defined):

```javascript
function speakChinese(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.8;
  utterance.pitch = 1.2;
  const voices = speechSynthesis.getVoices();
  const zhVoice = voices.find(v => v.lang.startsWith('zh'));
  if (zhVoice) utterance.voice = zhVoice;
  speechSynthesis.speak(utterance);
}
```

- [ ] **Step 4: Add DOM refs and event listeners for completion buttons**

Add DOM refs:

```javascript
const traceCompleteOverlay = document.getElementById('trace-complete-overlay');
const traceNextBtn = document.getElementById('trace-next-btn');
const traceBackToGridBtn = document.getElementById('trace-back-to-grid-btn');
```

Add event listeners in `setupEventListeners`:

```javascript
traceNextBtn.addEventListener('click', () => {
  traceCompleteOverlay.classList.add('hidden');
  const idx = ALPHABET_DATA.findIndex(a => a.letter === currentLetter.letter);
  const nextIdx = (idx + 1) % ALPHABET_DATA.length;
  currentLetter = ALPHABET_DATA[nextIdx];
  openLetterTraceScreen();
});

traceBackToGridBtn.addEventListener('click', () => {
  traceCompleteOverlay.classList.add('hidden');
  goBack();
});
```

- [ ] **Step 5: Hide overlay when entering trace screen**

Add to `openLetterTraceScreen` at the start:

```javascript
traceCompleteOverlay.classList.add('hidden');
```

- [ ] **Step 6: Test completion flow**

Run: `node server.js`

Test in browser:
1. Trace a letter, click "完成"
2. Overlay appears with random encouragement text
3. TTS speaks the encouragement
4. "下一个字母" button advances to next letter
5. "回到列表" returns to grid
6. Re-entering trace screen hides the overlay

- [ ] **Step 7: Commit**

```bash
git add index.html styles.css app.js
git commit -m "feat: add completion overlay with next/back buttons and random encouragements"
```

---

### Task 6: Add Particle Celebration Effect

**Files:**
- Modify: `index.html` (add celebration canvas)
- Modify: `styles.css` (celebration canvas positioning)
- Modify: `app.js` (particle system implementation)

- [ ] **Step 1: Add celebration canvas to index.html**

Add before the closing `</body>` tag (but after the existing celebration divs):

```html
    <!-- Particle celebration canvas -->
    <canvas id="celebration-canvas" class="celebration-canvas"></canvas>
```

- [ ] **Step 2: Add CSS for celebration canvas**

```css
.celebration-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999;
    display: none;
}
```

- [ ] **Step 3: Implement particle system in app.js**

Add the particle system:

```javascript
// === Particle Celebration ===
const celebrationCanvas = document.getElementById('celebration-canvas');

function showParticleCelebration() {
  const canvas = celebrationCanvas;
  canvas.style.display = 'block';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  const particles = [];
  const colors = ['#ff6b9d', '#ff8a80', '#a18cd1', '#ffd166', '#06d6a0', '#118ab2', '#ef476f', '#ffd166'];
  const shapes = ['circle', 'star', 'ribbon'];
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  // Create particles
  for (let i = 0; i < 80; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 6;
    particles.push({
      x: cx,
      y: cy,
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
        // ribbon
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

  // Auto cleanup after 3s
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
```

- [ ] **Step 4: Test particle celebration**

Run: `node server.js`

Test in browser:
1. Complete a letter trace (click "完成")
2. Colorful particles (circles, stars, ribbons) should burst from center
3. Particles spread outward with gravity, fade out over ~2s
4. Canvas hides after particles finish

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css app.js
git commit -m "feat: add particle celebration effects with stars and confetti"
```

---

### Task 7: Add Progress Tracking with localStorage

**Files:**
- Modify: `app.js` (add localStorage read/write, update grid to show progress)
- Modify: `styles.css` (add completed letter card badge)

- [ ] **Step 1: Add localStorage progress functions**

Add to `app.js`:

```javascript
// === Progress Tracking ===
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

function isLetterCompleted(letter) {
  return getCompletedLetters().includes(letter);
}
```

- [ ] **Step 2: Update createAlphabetGrid to show progress badges**

Update `createAlphabetGrid`:

```javascript
function createAlphabetGrid() {
  alphabetGrid.innerHTML = '';
  const completed = getCompletedLetters();

  ALPHABET_DATA.forEach(item => {
    const card = document.createElement('div');
    card.className = 'letter-card';
    card.dataset.letter = item.letter;

    if (completed.includes(item.letter)) {
      card.classList.add('letter-completed');
    }

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
```

- [ ] **Step 3: Add CSS for progress badge**

Add to `styles.css`:

```css
.letter-badge {
    position: absolute;
    top: 6px;
    right: 6px;
    font-size: 1.2rem;
    filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
    animation: none;
    line-height: 1;
}

.letter-completed {
    box-shadow: 0 8px 20px rgba(255, 215, 0, 0.4);
}
```

- [ ] **Step 4: Refresh grid when returning from trace**

Update the trace-back-to-grid handler to refresh the grid:

```javascript
traceBackToGridBtn.addEventListener('click', () => {
  traceCompleteOverlay.classList.add('hidden');
  createAlphabetGrid(); // refresh badges
  goBack();
});
```

Also refresh when navigating back from trace via back button:

```javascript
function exitLetterTraceScreen() {
  letterTraceAnimating = false;
  createAlphabetGrid(); // refresh badges
  goBack();
}
```

- [ ] **Step 5: Test progress tracking**

Run: `node server.js`

Test in browser:
1. Open alphabet grid — no stars initially
2. Complete letter A → return to grid
3. Letter A card now shows ⭐ badge in top-right
4. Refresh page — badge persists (localStorage)
5. Complete letter B → both A and B show badges

- [ ] **Step 6: Commit**

```bash
git add app.js styles.css
git commit -m "feat: add progress tracking with localStorage and star badges on grid"
```

---

### Task 8: Optimize Vision Chart Page Layout

**Files:**
- Modify: `styles.css` (vision screen layout adjustments)

- [ ] **Step 1: Update vision screen styles for better space usage**

Replace the vision screen CSS section. Update these rules in `styles.css`:

```css
/* Vision intro - more compact */
.vision-intro {
    text-align: center;
    padding: 12px 20px 0;
}

.vision-intro-text {
    font-size: 1.2rem;
    color: #888;
}

/* Vision grid - fill more space */
.vision-e-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 20px 30px;
    width: 100%;
    max-width: 550px;
    margin: 0 auto;
    flex: 1;
    align-content: center;
}
```

For the vision-e-card, increase its presence:

```css
.vision-e-card {
    aspect-ratio: 1;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    min-height: 140px;
}
```

Update the mobile responsive rules:

```css
@media (max-width: 768px) {
    .vision-e-grid {
        gap: 12px;
        padding: 15px;
        max-width: 100%;
    }
}
```

- [ ] **Step 2: Add a visual hint below the grid**

Add a tip section below the grid in `index.html` inside `vision-screen`, after the `vision-e-grid` div:

```html
        <div class="vision-tip">
            <p>👆 点击方向卡片开始练习</p>
        </div>
```

Add CSS:

```css
.vision-tip {
    text-align: center;
    padding: 10px 20px 20px;
    color: #aaa;
    font-size: 1rem;
}
```

- [ ] **Step 3: Test vision page layout**

Run: `node server.js`

Test in browser:
1. Open Vision screen — cards should be larger, less white space
2. Tip text visible below grid
3. Check mobile viewport (768px) — grid adapts without overflow

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "fix: optimize vision chart page layout, reduce whitespace"
```

---

### Task 9: Fix Missing Functions and Clean Up

**Files:**
- Modify: `app.js` (fix showCelebration reference, clean up dead code)

- [ ] **Step 1: Fix showCelebration call in vision trace**

In `stopVisionTrace` (line 1941), `showCelebration()` is called but not defined. Replace it with `showParticleCelebration()` (added in Task 6) and `speakChinese` (added in Task 5):

```javascript
if (checkVisionDirection()) {
  visionTraceCompleted = true;
  showParticleCelebration();
  speakChinese('太棒了');
} else {
```

- [ ] **Step 2: Remove dead detail-screen references from hideAllScreens**

If `hideAllScreens` still references `detailScreen`, remove that line:

```javascript
// Remove this line if present:
// detailScreen.classList.remove('active');
```

- [ ] **Step 3: Test end-to-end**

Run: `node server.js`

Full test flow:
1. Home → Alphabet grid (slide in) → Letter A (slide to trace)
2. Trace screen shows cat, audio button, book button
3. Draw on canvas — deviation triggers vibration + cat lookback
4. Complete trace → particle celebration + random encouragement + overlay
5. Click "下一个字母" → advances to B
6. Complete B → click "回到列表" → grid shows ⭐ on A and B
7. Home → Vision → complete direction trace → particle celebration (no crash)
8. All back navigation slides right

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "fix: replace undefined showCelebration with showParticleCelebration, clean up dead refs"
```
