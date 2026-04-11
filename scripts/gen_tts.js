/*
 * TTS generation script for 萌学 (numbers + hanzi + alphabet).
 *
 * Uses Microsoft Edge Neural TTS (free, no API key — via msedge-tts package
 * which connects to Edge browser's Read Aloud backend).
 *
 * Voices:
 *   Chinese phrases → zh-CN-XiaoyiNeural (晓伊, soft young female)
 *   English phrases → en-US-AnaNeural   (Ana, child voice)
 *
 * Outputs:
 *   assets/audio/zh/<sha1>.mp3    — one file per phrase (shared dir for both langs)
 *   assets/audio/zh/manifest.json — { phrase -> filename, voice: ..., generated_at }
 *
 * Re-runnable: already-present files are skipped unless FORCE=1 is set.
 *
 * Usage:
 *   node scripts/gen_tts.js                   # generate all
 *   node scripts/gen_tts.js numbers           # only numbers
 *   node scripts/gen_tts.js hanzi             # only hanzi
 *   node scripts/gen_tts.js alphabet          # only English alphabet phrases
 *   FORCE=1 node scripts/gen_tts.js           # overwrite existing
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');

const VOICE_ZH = 'zh-CN-XiaoyiNeural';
const VOICE_EN = 'en-US-AnaNeural';
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'assets', 'audio', 'zh');
const MANIFEST = path.join(OUT_DIR, 'manifest.json');
const FORCE = !!process.env.FORCE;
const MODE = (process.argv[2] || 'all').toLowerCase();

// ---- Number phrases ----
const NUMBER_NAMES = ['零','一','二','三','四','五','六','七','八','九','十'];

function buildNumberPhrases() {
  const s = new Set();
  for (const n of NUMBER_NAMES) s.add(n);
  ['数一数有几个', '再数一数', '哪边更多', '答对啦', '够啦', '谢谢你！'].forEach(p => s.add(p));
  for (let i = 0; i <= 9; i++) s.add('找出 ' + NUMBER_NAMES[i]);
  for (let i = 1; i <= 9; i++) s.add('答对啦，' + NUMBER_NAMES[i] + '个');
  for (let a = 1; a <= 5; a++)
    for (let b = 1; b <= 5; b++)
      s.add(NUMBER_NAMES[a] + ' 加 ' + NUMBER_NAMES[b] + ' 等于几');
  for (let x = 2; x <= 10; x++) s.add('答对啦，等于 ' + NUMBER_NAMES[x]);
  for (let x = 1; x <= 5; x++) s.add('我要吃 ' + NUMBER_NAMES[x] + ' 个');
  return Array.from(s);
}

// ---- Hanzi phrases ----
function parseHanziList() {
  const app = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
  const m = app.match(/const HANZI_LIST = \[([\s\S]*?)\n\];/);
  if (!m) throw new Error('could not find HANZI_LIST in app.js');
  return [...m[1].matchAll(/char:\s*'([^']+)'/g)].map(x => x[1]);
}

function buildHanziPhrases() {
  const s = new Set();
  for (const c of parseHanziList()) s.add(c);
  ['太棒了', '太棒了！', '好棒好棒', '你真棒', '再试一次', '找对了', '很棒哦'].forEach(p => s.add(p));
  const findPool = ['日','月','山','水','火','木','人','口','目','手','田','雨','鸟','鱼','马',
                    '大','小','上','下','左','右','中','天','地','子','女','父','母','牛','羊',
                    '一','二','三','四','五','六','七','八','九','十'];
  for (const c of findPool) s.add('点一下 ' + c);
  ['听一听，点一下', '看看哪个对', '找到啦！', '再找找看', '哪个是左边影子里的字？'].forEach(p => s.add(p));
  [
    '太阳圆圆的，中间一点是它发出的光。',
    '弯弯的月亮挂在天上。',
    '三座山峰连在一起，就是山。',
    '一条小河流呀流，两边溅起小水花。',
    '火苗向上窜，两边冒着小火星。',
    '一棵大树，有树干、有树枝、有树根。',
    '两条腿的小人在走路。',
    '张开的嘴巴，方方正正的。',
    '眼睛里有瞳孔，横过来就是目。',
    '五个手指的手掌，摊开像朵花。',
    '田字格里种满了庄稼。',
    '天上的云里掉下小水滴，就是雨。',
    '有翅膀、有小嘴、会唱歌的是鸟。',
    '鱼的头、身子和小尾巴，游来游去。',
    '四条腿、有鬃毛的是马。',
  ].forEach(p => s.add(p));
  return Array.from(s);
}

// ---- Alphabet phrases (English) ----
// Data mirrored from LETTER_ANIMALS and other uses in app.js.
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const LETTER_ANIMALS_DATA = {
  A: 'Alligator', B: 'Bear', C: 'Cat', D: 'Dog', E: 'Elephant',
  F: 'Fox', G: 'Goat', H: 'Horse', I: 'Iguana', J: 'Jellyfish',
  K: 'Kangaroo', L: 'Lion', M: 'Monkey', N: 'Narwhal', O: 'Octopus',
  P: 'Panda', Q: 'Quail', R: 'Rabbit', S: 'Snake', T: 'Tiger',
  U: 'Unicorn', V: 'Vulture', W: 'Whale', X: 'X-ray fish', Y: 'Yak', Z: 'Zebra',
};
// Phonics sound per letter (approximated English sounds — child-friendly pronunciation)
const PHONICS_SOUNDS = {
  A: 'ah',   B: 'buh',  C: 'kuh', D: 'duh', E: 'eh',
  F: 'fuh',  G: 'guh',  H: 'huh', I: 'ih',  J: 'juh',
  K: 'kuh',  L: 'luh',  M: 'muh', N: 'nuh', O: 'ah',
  P: 'puh',  Q: 'kwuh', R: 'ruh', S: 'sss', T: 'tuh',
  U: 'uh',   V: 'vuh',  W: 'wuh', X: 'ks',  Y: 'yuh', Z: 'zzz',
};

function parseAlphabetAllWords() {
  // Extract every `word: '...'` from ALPHABET_DATA so every word card has TTS.
  const app = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
  const m = app.match(/const ALPHABET_DATA = \[([\s\S]*?)\n\];/);
  if (!m) return [];
  return [...m[1].matchAll(/word:\s*'([^']+)'/g)].map(x => x[1]);
}

// Word bank for the spelling game — must match WORD_BANK in app.js
const WORD_BANK_DATA = ['CAT','DOG','SUN','PIG','BUS','FOX','HAT','BED','CUP','BAG','MAP','NET','OWL','PEN','ZOO'];

function buildAlphabetPhrases() {
  const s = new Set();
  for (const l of LETTERS) s.add(l);                                       // A-Z names
  for (const l of LETTERS) s.add(LETTER_ANIMALS_DATA[l]);                  // Alligator, Bear, ...
  for (const l of LETTERS) s.add(PHONICS_SOUNDS[l]);                       // ah, buh, ...
  for (const l of LETTERS) s.add(`${l} for ${LETTER_ANIMALS_DATA[l]}`);    // "B for Bear"
  for (const l of LETTERS) s.add(`Find the letter ${l}`);                  // listen game
  for (const l of LETTERS) s.add(`Catch the letter ${l}`);                 // fishing game
  // Word-bank target words (spoken as the final reward on correct spelling)
  for (const w of WORD_BANK_DATA) s.add(w);
  // Every word in ALPHABET_DATA (~156 words total) so all word cards play nicely
  parseAlphabetAllWords().forEach(w => s.add(w));
  ['Listen and tap', 'Great job!', 'Try again', 'Amazing!', 'You got it!', 'Which one matches?',
   "Let's spell it!", 'Well done!'].forEach(p => s.add(p));
  return Array.from(s);
}

function phraseKey(phrase, voice) {
  // Stable hash based on voice+phrase so re-running doesn't orphan files.
  return crypto.createHash('sha1').update(voice + '|' + phrase).digest('hex').slice(0, 12);
}

function resolveFilename(phrase, voice, manifest) {
  // Prefer existing manifest entry (keeps legacy hashes stable, avoids orphaning).
  if (manifest.phrases[phrase]) return manifest.phrases[phrase];
  return `${phraseKey(phrase, voice)}.mp3`;
}

function synthesize(tts, phrase) {
  return new Promise((resolve, reject) => {
    const { audioStream } = tts.toStream(phrase, { pitch: '+3%', rate: '-8%' });
    const chunks = [];
    audioStream.on('data', c => chunks.push(c));
    audioStream.on('end', () => resolve(Buffer.concat(chunks)));
    audioStream.on('error', reject);
  });
}

async function generateBatch(phrases, voice, manifest) {
  if (phrases.length === 0) return { generated: 0, skipped: 0, failed: 0 };
  const tts = new MsEdgeTTS();
  await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

  let generated = 0, skipped = 0, failed = 0;
  for (const phrase of phrases) {
    const filename = resolveFilename(phrase, voice, manifest);
    const outPath = path.join(OUT_DIR, filename);
    manifest.phrases[phrase] = filename;

    if (!FORCE && fs.existsSync(outPath)) { skipped++; continue; }

    try {
      const buf = await synthesize(tts, phrase);
      fs.writeFileSync(outPath, buf);
      generated++;
      if (generated % 20 === 0) process.stdout.write(`  … [${voice}] generated ${generated} so far\n`);
    } catch (e) {
      failed++;
      console.error(`  ✗ [${voice}] ${phrase} → ${e.message}`);
    }
  }
  return { generated, skipped, failed };
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  let manifest = { voice: VOICE_ZH, generated_at: new Date().toISOString(), phrases: {} };
  if (fs.existsSync(MANIFEST)) {
    try {
      const prev = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
      manifest.phrases = prev.phrases || {};
    } catch (_) {}
  }

  const zhPhrases = new Set();
  const enPhrases = new Set();
  if (MODE === 'numbers' || MODE === 'all') buildNumberPhrases().forEach(p => zhPhrases.add(p));
  if (MODE === 'hanzi' || MODE === 'all')   buildHanziPhrases().forEach(p => zhPhrases.add(p));
  if (MODE === 'alphabet' || MODE === 'all') buildAlphabetPhrases().forEach(p => enPhrases.add(p));

  const zhArr = Array.from(zhPhrases);
  const enArr = Array.from(enPhrases);
  console.log(`Mode: ${MODE} | zh: ${zhArr.length} phrases | en: ${enArr.length} phrases`);

  const zhRes = await generateBatch(zhArr, VOICE_ZH, manifest);
  const enRes = await generateBatch(enArr, VOICE_EN, manifest);

  manifest.generated_at = new Date().toISOString();
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));

  console.log('\n── Results ──');
  console.log(`  zh: generated=${zhRes.generated} skipped=${zhRes.skipped} failed=${zhRes.failed}`);
  console.log(`  en: generated=${enRes.generated} skipped=${enRes.skipped} failed=${enRes.failed}`);
  console.log(`  Manifest total: ${Object.keys(manifest.phrases).length}`);
  process.exit(0);
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
