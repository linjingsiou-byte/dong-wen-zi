// 「動文字」桌遊互動學習網頁 - 應用程式邏輯

// 全域狀態變數
let currentView = "lobby";
let isDarkMode = false;

// 競賽共同設定
let gameMode = ""; // "speed" 或 "relay"
let teamAName = "石虎隊";
let teamBName = "黑熊隊";
let teamAScore = 0;
let teamBScore = 0;
let currentRound = 1;
let totalRounds = 5; // 搶答賽預設5題
let gameTimer = null;
let timeLeft = 0;
let activePlayer = null; // "A" 或 "B"
let buzzed = false;

// 自學挑戰專屬變數
let learnSelectedRadical = null;
let learnSelectedComponent = null;
let learnQuestion = null;

// 搶答賽專屬變數
let currentQuestion = null; // 目前題目 { component, radical, char, words, bopomofo }
let aFrozen = false;
let bFrozen = false;

// 接力賽專屬變數
let relayRound = 1; // 共3輪
let activeRelayPlayer = "A"; // 目前操作玩家
let selectedRadicalCard = null;
let selectedComponentCard = null;
let currentRelayPairs = []; // 當前配對歷史

// 播放音效輔助函式 (使用 Web Audio API)
let audioCtx = null;
function playSound(type) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    const now = audioCtx.currentTime;
    
    if (type === 'correct') {
      // 答對音效：清脆悅耳的上升音 (琶音)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.05);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.25);
      gain.gain.linearRampToValueAtTime(0, now + 0.35);
      
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'wrong') {
      // 答錯音效：低沉沉悶的警報音 (Buzz)
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(100, now + 0.3);
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.15, now + 0.05);
      gain.gain.linearRampToValueAtTime(0.15, now + 0.25);
      gain.gain.linearRampToValueAtTime(0, now + 0.3);
      
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'buzz') {
      // 搶答音效：短促的嗶聲
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now); // A4
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.02);
      gain.gain.linearRampToValueAtTime(0, now + 0.15);
      
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'turn') {
      // 換人/換隊提示音：雙聲中高音 (嗶嗶)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.setValueAtTime(587.33, now + 0.15); // D5
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.02);
      gain.gain.linearRampToValueAtTime(0, now + 0.10);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.15);
      gain.gain.linearRampToValueAtTime(0, now + 0.25);
      
      osc.start(now);
      osc.stop(now + 0.28);
    }
  } catch (e) {
    console.warn("Audio Context error:", e);
  }
}

// 初始化頁面
document.addEventListener("DOMContentLoaded", () => {
  createBackgroundBubbles();
  switchView("lobby");
  renderGridTable();
  renderDictCards();
  setupEventListeners();
  
  // 監聽鍵盤快捷搶答 (Player A: Space 或 A / Player B: Enter 或 L)
  document.addEventListener("keydown", (e) => {
    if (currentView === "game-speed" && !buzzed) {
      if (e.key.toLowerCase() === "a" || e.code === "Space") {
        triggerBuzzer("A");
      } else if (e.key.toLowerCase() === "l" || e.code === "Enter") {
        triggerBuzzer("B");
      }
    }
  });
});

// 建立背景裝飾泡泡
function createBackgroundBubbles() {
  const container = document.getElementById("bg-bubbles");
  container.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    const size = Math.random() * 80 + 40;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.top = `${Math.random() * 100}%`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
    container.appendChild(bubble);
  }
}

// 切換頁面視圖
function switchView(viewId) {
  // 停止所有定時器
  clearInterval(gameTimer);
  
  // 隱藏所有區塊，顯示目標區塊
  const sections = document.querySelectorAll(".view-section");
  sections.forEach(sec => sec.classList.remove("active"));
  
  const target = document.getElementById(`view-${viewId}`);
  if (target) {
    target.classList.add("active");
    currentView = viewId;
  }
  
  // 滾動回頂部
  window.scrollTo(0, 0);
}

// 建立互動部首部件百格表 (Grid Table)
function renderGridTable() {
  const table = document.getElementById("grid-table");
  if (!table) return;
  
  // 我們挑選百格表中的20個部件 (Image 2 & 5)
  const gridComponents = ["良", "佳", "肖", "者", "果", "僉", "音", "青", "軍", "里", "會", "每", "甬", "見", "重", "唐", "宗", "或", "侖", "易"];
  
  let html = `<thead><tr><th>部件 \\ 部首</th>`;
  RADICALS.forEach(r => {
    html += `<th class="col-header" onclick="highlightCol('${r.char}')">${r.char}<br><span style="font-size: 0.7rem; font-weight:normal;">${r.bopomofo}</span></th>`;
  });
  html += `</tr></thead><tbody>`;
  
  gridComponents.forEach(comp => {
    html += `<tr><td class="row-header" onclick="highlightRow('${comp}')">${comp}</td>`;
    RADICALS.forEach(rad => {
      const match = COMBINATIONS[comp] && COMBINATIONS[comp][rad.char];
      if (match) {
        html += `<td class="grid-cell has-char" onclick="showCharDetail('${comp}', '${rad.char}', '${match.char}')">${match.char}</td>`;
      } else {
        html += `<td class="grid-cell empty-cell">-</td>`;
      }
    });
    html += `</tr>`;
  });
  
  html += `</tbody>`;
  table.innerHTML = html;
}

// 百格表搜尋過濾器
function filterGrid() {
  const searchVal = document.getElementById("grid-search").value.trim();
  const table = document.getElementById("grid-table");
  const cells = table.querySelectorAll(".grid-cell.has-char");
  
  cells.forEach(cell => {
    cell.style.background = "";
    cell.style.color = "";
    if (searchVal && cell.innerText.includes(searchVal)) {
      cell.style.background = "var(--color-accent)";
      cell.style.color = "black";
    }
  });
}

// 渲染部件字典庫
function renderDictCards(filterStroke = "全部", query = "") {
  const grid = document.getElementById("dict-grid");
  if (!grid) return;
  
  grid.innerHTML = "";
  
  // 過濾部件
  const filtered = COMPONENTS.filter(item => {
    const matchStroke = filterStroke === "全部" || item.strokes === filterStroke;
    const matchQuery = query === "" || item.component.includes(query) || item.common_chars.some(c => c.includes(query));
    return matchStroke && matchQuery;
  });
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">沒有符合搜尋條件的部件喔！</div>`;
    return;
  }
  
  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "dict-card";
    
    let wordsHtml = "";
    item.common_chars.forEach(char => {
      // 點擊常見字可直接查詢是否有部首組合
      wordsHtml += `<span class="dict-word-tag" onclick="quickSearchChar('${char}')">${char}</span>`;
    });
    
    card.innerHTML = `
      <div class="dict-card-header">
        <div class="dict-comp">${item.component}</div>
        <div class="dict-badge">編號 ${item.id} · ${item.strokes}畫</div>
      </div>
      <div class="dict-card-body">
        <h5>常見字：</h5>
        <div class="dict-words">
          ${wordsHtml}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// 快速查詢特定漢字
function quickSearchChar(char) {
  // 在 COMBINATIONS 中搜尋該漢字
  let foundComp = null;
  let foundRad = null;
  
  for (const comp in COMBINATIONS) {
    for (const rad in COMBINATIONS[comp]) {
      if (COMBINATIONS[comp][rad].char === char) {
        foundComp = comp;
        foundRad = rad;
        break;
      }
    }
    if (foundComp) break;
  }
  
  // 不再顯示警告，而是直接展示詳細資料
  showCharDetail(foundComp, foundRad, char);
}

// 顯示字元詳細資料 (Modal)
function showCharDetail(comp, rad, char) {
  const modal = document.getElementById("char-modal");
  
  // 若未傳入組字部件，則嘗試在 COMBINATIONS 中反查
  if (!comp || !rad) {
    for (const c in COMBINATIONS) {
      for (const r in COMBINATIONS[c]) {
        if (COMBINATIONS[c][r].char === char) {
          comp = c;
          rad = r;
          break;
        }
      }
      if (comp) break;
    }
  }
  
  modal.querySelector(".modal-char").innerText = char;
  
  // 從 CHAR_DICT 中獲取詳細資料 (含語詞及注音)
  const dictEntry = typeof CHAR_DICT !== "undefined" ? CHAR_DICT[char] : null;
  
  // 顯示字注音
  let bopomofoText = "";
  if (dictEntry && dictEntry.bopomofo) {
    bopomofoText = dictEntry.bopomofo;
  } else if (comp && rad && COMBINATIONS[comp] && COMBINATIONS[comp][rad]) {
    bopomofoText = COMBINATIONS[comp][rad].bopomofo;
  }
  modal.querySelector(".modal-bopomofo").innerText = bopomofoText;
  
  // 顯示組字公式或部件歸屬
  const formulaEl = modal.querySelector(".modal-formula");
  if (comp && rad) {
    formulaEl.innerText = `${rad} (部首) + ${comp} (部件) = ${char}`;
  } else {
    // 尋找此字歸屬於 COMPONENTS 列表中的哪個部件卡片
    const parentComp = COMPONENTS.find(c => c.common_chars && c.common_chars.includes(char));
    if (parentComp) {
      formulaEl.innerText = `常見字 (屬於部件「${parentComp.component}」，編號 ${parentComp.id})`;
    } else {
      formulaEl.innerText = `常用常見字`;
    }
  }
  
  // 渲染詞彙與注音清單
  const wordsList = modal.querySelector(".modal-words-list");
  wordsList.innerHTML = "";
  
  let wordsArray = [];
  if (dictEntry && dictEntry.words && dictEntry.words.length > 0) {
    wordsArray = dictEntry.words;
  } else if (comp && rad && COMBINATIONS[comp] && COMBINATIONS[comp][rad] && COMBINATIONS[comp][rad].words) {
    // 備用方案：使用 COMBINATIONS 中的字串陣列
    wordsArray = COMBINATIONS[comp][rad].words;
  }
  
  if (wordsArray.length === 0) {
    wordsList.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 1rem;">暫無相關詞彙</div>`;
  } else {
    wordsArray.forEach(w => {
      const item = document.createElement("div");
      item.className = "modal-word-item";
      
      const wordText = typeof w === "string" ? w : w.word;
      const wordBopomofo = typeof w === "object" && w.bopomofo ? w.bopomofo : "";
      
      let html = `<span class="modal-word-text">${wordText}</span>`;
      if (wordBopomofo) {
        html += `<span class="modal-word-bopomofo">${wordBopomofo}</span>`;
      }
      
      item.innerHTML = html;
      wordsList.appendChild(item);
    });
  }
  
  modal.classList.add("active");
}

// 關閉 Modal
function closeModal() {
  document.getElementById("char-modal").classList.remove("active");
}

// 設定事件監聽器
function setupEventListeners() {
  // 首頁大廳切換
  document.querySelectorAll(".mode-card").forEach(card => {
    card.addEventListener("click", () => {
      const mode = card.dataset.mode;
      if (mode === "grid") {
        switchView("grid");
      } else if (mode === "dict") {
        switchView("dict");
        renderDictCards("全部");
      } else if (mode === "speed") {
        showSetupScreen("speed");
      } else if (mode === "relay") {
        showSetupScreen("relay");
      }
    });
  });
  
  // 字典篩選按鈕
  document.querySelectorAll(".stroke-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".stroke-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const stroke = tab.dataset.stroke;
      const query = document.getElementById("dict-search").value.trim();
      renderDictCards(stroke, query);
    });
  });
  
  // 字典搜尋框
  const dictSearch = document.getElementById("dict-search");
  if (dictSearch) {
    dictSearch.addEventListener("input", (e) => {
      const activeTab = document.querySelector(".stroke-tab.active");
      const stroke = activeTab ? activeTab.dataset.stroke : "全部";
      renderDictCards(stroke, e.target.value.trim());
    });
  }
}

// 切換深色/淺色模式
function toggleTheme() {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    document.getElementById("theme-btn").innerText = "☀️ 亮色模式";
  } else {
    document.body.classList.remove("dark-mode");
    document.getElementById("theme-btn").innerText = "🌙 太空暗黑";
  }
}

// --- 遊戲設定與引擎邏輯 ---

// 顯示設定畫面
function showSetupScreen(mode) {
  gameMode = mode;
  switchView("setup");
  
  const title = document.getElementById("setup-title");
  const roundsLabel = document.getElementById("rounds-label");
  const roundsInput = document.getElementById("rounds-input");
  
  // 重設表單
  document.getElementById("team-a-input").value = "石虎隊";
  document.getElementById("team-b-input").value = "黑熊隊";
  
  const doubleFields = document.getElementById("double-setup-fields");
  const singleFields = document.getElementById("single-setup-fields");
  
  roundsInput.innerHTML = "";
  if (mode === "learn") {
    if (doubleFields) doubleFields.style.display = "none";
    if (singleFields) singleFields.style.display = "block";
    title.innerText = "自學組字挑戰設定";
    roundsLabel.innerText = "🎯 練習題數：";
    const options = [
      { val: "5", text: "5 題" },
      { val: "10", text: "10 題 (建議)" },
      { val: "20", text: "20 題" },
      { val: "30", text: "30 題" },
      { val: "50", text: "50 題 (極限自學！)" }
    ];
    options.forEach(opt => {
      const el = document.createElement("option");
      el.value = opt.val;
      el.text = opt.text;
      if (opt.val === "10") el.selected = true;
      roundsInput.appendChild(el);
    });
  } else {
    if (doubleFields) doubleFields.style.display = "block";
    if (singleFields) singleFields.style.display = "none";
    
    if (mode === "speed") {
      title.innerText = "雙人搶答對戰設定";
      roundsLabel.innerText = "🎯 挑戰題數/局數：";
      const options = [
        { val: "5", text: "5 題" },
        { val: "10", text: "10 題 (建議)" },
        { val: "20", text: "20 題" },
        { val: "30", text: "30 題" },
        { val: "50", text: "50 題 (極限大挑戰！)" }
      ];
      options.forEach(opt => {
        const el = document.createElement("option");
        el.value = opt.val;
        el.text = opt.text;
        if (opt.val === "10") el.selected = true;
        roundsInput.appendChild(el);
      });
    } else {
      title.innerText = "雙人回合接力設定";
      roundsLabel.innerText = "🎯 對戰局數/回合數：";
      const options = [
        { val: "1", text: "1 回合 (快速體驗)" },
        { val: "3", text: "3 回合 (建議)" },
        { val: "5", text: "5 回合" }
      ];
      options.forEach(opt => {
        const el = document.createElement("option");
        el.value = opt.val;
        el.text = opt.text;
        if (opt.val === "3") el.selected = true;
        roundsInput.appendChild(el);
      });
    }
  }
}

// 開始遊戲
function startGame() {
  teamAName = document.getElementById("team-a-input").value.trim() || "石虎隊";
  teamBName = document.getElementById("team-b-input").value.trim() || "黑熊隊";
  
  teamAScore = 0;
  teamBScore = 0;
  
  const roundsVal = parseInt(document.getElementById("rounds-input").value) || 5;
  
  if (gameMode === "speed") {
    currentRound = 1;
    totalRounds = roundsVal;
    switchView("game-speed");
    initSpeedRound();
  } else if (gameMode === "relay") {
    relayRound = 1;
    totalRounds = roundsVal;
    activeRelayPlayer = "A";
    currentRelayPairs = [];
    switchView("game-relay");
    initRelayRound();
  } else if (gameMode === "learn") {
    const studentName = document.getElementById("student-input").value.trim() || "學生";
    teamAName = studentName;
    teamAScore = 0;
    currentRound = 1;
    totalRounds = roundsVal;
    switchView("game-learn");
    initLearnRound();
  }
}

// --- 模式 1：雙人搶答對戰 (Speed Match) 引擎 ---

// 初始化搶答回合
function initSpeedRound() {
  buzzed = false;
  activePlayer = null;
  aFrozen = false;
  bFrozen = false;
  
  // 更新介面
  document.getElementById("speed-round-title").innerText = `第 ${currentRound} 題 (共 ${totalRounds} 題)`;
  document.getElementById("speed-team-a-name").innerText = `🐯 ${teamAName}`;
  document.getElementById("speed-team-b-name").innerText = `🐻 ${teamBName}`;
  document.getElementById("speed-score-a").innerText = teamAScore;
  document.getElementById("speed-score-b").innerText = teamBScore;
  
  // 移除高亮與凍結
  document.getElementById("panel-team-a").className = "player-panel team-a";
  document.getElementById("panel-team-b").className = "player-panel team-b";
  document.getElementById("buzz-a").disabled = false;
  document.getElementById("buzz-b").disabled = false;
  
  // 隱藏選字覆蓋面板
  document.getElementById("overlay-a").style.display = "none";
  document.getElementById("overlay-b").style.display = "none";
  document.getElementById("hand-a").innerHTML = "";
  document.getElementById("hand-b").innerHTML = "";
  
  // 隨機選出一個題目字與對應的部件
  generateQuestion();
  
  // 開始回合倒數 (30秒搶答)
  startSpeedTimer(30, () => {
    // 搶答超時
    playSound('wrong');
    showFloatingText("time-out", "時間到！沒有人搶答", "center");
    nextSpeedRound();
  });
}

// 產生題目卡
function generateQuestion() {
  // 從 COMBINATIONS 資料庫中隨機選取一個有組合的部件和部首
  const comps = Object.keys(COMBINATIONS);
  const randomComp = comps[Math.floor(Math.random() * comps.length)];
  const rads = Object.keys(COMBINATIONS[randomComp]);
  const randomRad = rads[Math.floor(Math.random() * rads.length)];
  
  const match = COMBINATIONS[randomComp][randomRad];
  
  currentQuestion = {
    component: randomComp,
    radical: randomRad,
    char: match.char,
    words: match.words,
    bopomofo: match.bopomofo
  };
  
  // 顯示題目部件於中央
  document.getElementById("question-display").innerHTML = `
    <div class="question-card">
      <span class="char">${randomComp}</span>
      <span class="bopomofo">部件</span>
    </div>
  `;
}

// 搶答定時器
function startSpeedTimer(seconds, onTimeout) {
  clearInterval(gameTimer);
  timeLeft = seconds;
  updateTimerDisplay();
  
  gameTimer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(gameTimer);
      if (onTimeout) onTimeout();
    }
  }, 1000);
}

function updateTimerDisplay() {
  document.getElementById("speed-timer-val").innerText = `${timeLeft} 秒`;
}

// 觸發搶答 (滑鼠點擊或按鍵)
function triggerBuzzer(player) {
  if (buzzed) return;
  if (player === "A" && aFrozen) return;
  if (player === "B" && bFrozen) return;
  
  playSound('buzz');
  
  buzzed = true;
  activePlayer = player;
  clearInterval(gameTimer);
  
  // 高亮搶答成功的玩家面板
  const panelId = player === "A" ? "panel-team-a" : "panel-team-b";
  document.getElementById(panelId).classList.add("active-buzzed");
  
  // 停用所有搶答鍵
  document.getElementById("buzz-a").disabled = true;
  document.getElementById("buzz-b").disabled = true;
  
  // 搶答玩家發送手牌部首卡 (隨機6張，包含1張正確部首與5張干擾項)
  distributeHandCards(player);
  
  // 給予玩家8秒進行組字配對
  startSpeedTimer(8, () => {
    // 答題超時，扣分並凍結
    applySpeedPenalty(player, "超時未答");
  });
}

// 發放手牌
function distributeHandCards(player) {
  const handContainer = document.getElementById(player === "A" ? "hand-a" : "hand-b");
  handContainer.innerHTML = "";
  
  // 正確部首 (保證發牌中至少包含一個正確部首)
  const correctRad = currentQuestion.radical;
  
  // 找出該題目部件的所有可配對部首，避免干擾牌中出現其他能配對的部首
  const validRads = Object.keys(COMBINATIONS[currentQuestion.component]);
  
  // 挑選5個絕對無法配對的干擾部首
  const distractors = RADICALS.filter(r => !validRads.includes(r.char))
                              .sort(() => 0.5 - Math.random())
                              .slice(0, 5)
                              .map(r => r.char);
  
  // 合併並打亂
  const cards = [correctRad, ...distractors].sort(() => 0.5 - Math.random());
  
  cards.forEach(radChar => {
    const cardObj = RADICALS.find(r => r.char === radChar);
    const cardEl = document.createElement("div");
    cardEl.className = "game-card radical-card";
    cardEl.innerHTML = `
      <span class="char">${radChar}</span>
      <span class="bopomofo">${cardObj.bopomofo}</span>
    `;
    
    // 點擊部首卡進行組合配對
    cardEl.addEventListener("click", () => {
      const match = COMBINATIONS[currentQuestion.component][radChar];
      if (match) {
        playSound('correct');
        // 配對成功！動態更新當前題目的正確資訊為玩家拼出的字，便於造詞驗證
        currentQuestion.radical = radChar;
        currentQuestion.char = match.char;
        currentQuestion.words = match.words;
        currentQuestion.bopomofo = match.bopomofo;
        
        // 進入造詞步驟
        showVocabularyStep(player);
      } else {
        playSound('wrong');
        // 配對失敗，扣分並凍結
        applySpeedPenalty(player, "組錯字了");
      }
    });
    
    handContainer.appendChild(cardEl);
  });
}

// 進入造詞步驟
function showVocabularyStep(player) {
  clearInterval(gameTimer); // 停止配對計時
  
  const overlay = document.getElementById(player === "A" ? "overlay-a" : "overlay-b");
  overlay.style.display = "flex";
  
  // 產生造詞選項 (1個正確選項，2個干擾選項)
  const correctWord = currentQuestion.words[0];
  
  // 尋找干擾詞 (使用 Set 去除重複選項)
  const allOtherWords = new Set();
  for (const c in COMBINATIONS) {
    for (const r in COMBINATIONS[c]) {
      const w = COMBINATIONS[c][r].words;
      if (w && w[0] && w[0] !== correctWord) {
        allOtherWords.add(w[0]);
      }
    }
  }
  const distractors = Array.from(allOtherWords).sort(() => 0.5 - Math.random()).slice(0, 2);
  const choices = [correctWord, ...distractors].sort(() => 0.5 - Math.random());
  
  const choicesGrid = overlay.querySelector(".choice-grid");
  choicesGrid.innerHTML = "";
  
  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerText = choice;
    
    btn.addEventListener("click", () => {
      if (choice === correctWord) {
        playSound('correct');
        // 造詞正確！獲得10分！
        applySpeedReward(player);
      } else {
        playSound('wrong');
        // 造詞錯誤，扣分
        applySpeedPenalty(player, "造詞錯誤");
      }
    });
    
    choicesGrid.appendChild(btn);
  });
  
  // 給予6秒時間造詞
  startSpeedTimer(6, () => {
    playSound('wrong');
    applySpeedPenalty(player, "造詞超時");
  });
}

// 獲得分數
function applySpeedReward(player) {
  clearInterval(gameTimer);
  const points = 10;
  if (player === "A") {
    teamAScore += points;
    showFloatingText("+10", "🐯 得分！", "left");
  } else {
    teamBScore += points;
    showFloatingText("+10", "🐻 得分！", "right");
  }
  
  // 播放成功特效 (Modal/Overlay 閃爍綠色)
  nextSpeedRound();
}

// 搶答失敗處罰
function applySpeedPenalty(player, reason) {
  clearInterval(gameTimer);
  const penalty = 5;
  
  if (player === "A") {
    teamAScore = Math.max(0, teamAScore - penalty);
    aFrozen = true;
    document.getElementById("panel-team-a").classList.add("frozen");
    document.getElementById("panel-team-a").classList.remove("active-buzzed");
    document.getElementById("overlay-a").style.display = "none";
    document.getElementById("hand-a").innerHTML = "";
    showFloatingText("-5", `🐯 答錯了 (${reason})`, "left");
  } else {
    teamBScore = Math.max(0, teamBScore - penalty);
    bFrozen = true;
    document.getElementById("panel-team-b").classList.add("frozen");
    document.getElementById("panel-team-b").classList.remove("active-buzzed");
    document.getElementById("overlay-b").style.display = "none";
    document.getElementById("hand-b").innerHTML = "";
    showFloatingText("-5", `🐻 答錯了 (${reason})`, "right");
  }
  
  // 檢驗是否還有玩家可以搶答
  if (aFrozen && bFrozen) {
    // 兩邊都答錯/凍結，直接公佈答案並進入下一題
    showFloatingText("both-failed", `無人答對！答案是：${currentQuestion.radical} + ${currentQuestion.component} = ${currentQuestion.char}`, "center");
    setTimeout(nextSpeedRound, 1500);
  } else {
    // 開啟剩餘未凍結玩家的搶答機制
    buzzed = false;
    document.getElementById("buzz-a").disabled = aFrozen;
    document.getElementById("buzz-b").disabled = bFrozen;
    // 繼續剩下時間的倒數
    startSpeedTimer(8, () => {
      nextSpeedRound();
    });
  }
}

// 飄浮字體提示
function showFloatingText(type, text, position) {
  const container = document.body;
  const el = document.createElement("div");
  el.className = "floating-score";
  el.innerText = text;
  
  if (position === "left") {
    el.style.left = "25%";
    el.style.top = "50%";
  } else if (position === "right") {
    el.style.left = "75%";
    el.style.top = "50%";
  } else {
    el.style.left = "50%";
    el.style.top = "40%";
    el.style.transform = "translateX(-50%)";
  }
  
  container.appendChild(el);
  setTimeout(() => el.remove(), 4200);
}

// 進入下一題搶答
function nextSpeedRound() {
  currentRound++;
  if (currentRound > totalRounds) {
    endGame();
  } else {
    setTimeout(initSpeedRound, 1000);
  }
}

// --- 模式 2：雙人回合接力 (Turn Relay) 引擎 ---

// 初始化接力回合
function initRelayRound() {
  selectedRadicalCard = null;
  selectedComponentCard = null;
  
  // 更新介面
  document.getElementById("relay-round-title").innerText = `第 ${relayRound} 回合 (共 3 回合)`;
  document.getElementById("relay-team-a-name").innerText = `🐯 ${teamAName}`;
  document.getElementById("relay-team-b-name").innerText = `🐻 ${teamBName}`;
  document.getElementById("relay-score-a").innerText = teamAScore;
  document.getElementById("relay-score-b").innerText = teamBScore;
  
  // 設定當前操作者高亮
  updateRelayActiveRow();
  
  // 清空中央顯示槽
  document.getElementById("slot-radical").innerHTML = `<span style="color:var(--text-muted);">部首</span>`;
  document.getElementById("slot-component").innerHTML = `<span style="color:var(--text-muted);">部件</span>`;
  document.getElementById("slot-result").innerText = "?";
  
  // 產生卡牌堆（5張部首卡 + 5張部件卡，且裡面至少有 2-3 組可配對）
  generateRelayDecks();
  
  // 倒數 30 秒限時配對
  startRelayTimer(30, () => {
    // 時間到，切換玩家
    switchRelayPlayer();
  });
}

function updateRelayActiveRow() {
  const rowA = document.getElementById("relay-row-a");
  const rowB = document.getElementById("relay-row-b");
  
  rowA.classList.remove("active");
  rowB.classList.remove("active");
  
  if (activeRelayPlayer === "A") {
    rowA.classList.add("active");
    document.getElementById("relay-turn-indicator").innerText = `現在是【${teamAName}】的回合！請點選配對字卡。`;
  } else {
    rowB.classList.add("active");
    document.getElementById("relay-turn-indicator").innerText = `現在是【${teamBName}】的回合！請點選配對字卡。`;
  }
}

// 產生接力賽卡牌
function generateRelayDecks() {
  const radContainer = document.getElementById("relay-radical-deck");
  const compContainer = document.getElementById("relay-component-deck");
  
  radContainer.innerHTML = "";
  compContainer.innerHTML = "";
  
  // 我們隨機選取 4 組可以成功配對的部首部件
  let validPairs = [];
  const comps = Object.keys(COMBINATIONS);
  
  while (validPairs.length < 4) {
    const comp = comps[Math.floor(Math.random() * comps.length)];
    const rads = Object.keys(COMBINATIONS[comp]);
    if (rads.length > 0) {
      const rad = rads[Math.floor(Math.random() * rads.length)];
      if (!validPairs.some(p => p.comp === comp || p.rad === rad)) {
        validPairs.push({ comp, rad });
      }
    }
  }
  
  // 加上第5個干擾項
  const availableRads = RADICALS.map(r => r.char).filter(r => !validPairs.some(p => p.rad === r));
  const extraRad = availableRads[Math.floor(Math.random() * availableRads.length)];
  
  const availableComps = COMPONENTS.map(c => c.component).filter(c => !validPairs.some(p => p.comp === c));
  const extraComp = availableComps[Math.floor(Math.random() * availableComps.length)];
  
  // 建立部首卡組
  const finalRads = [...validPairs.map(p => p.rad), extraRad].sort(() => 0.5 - Math.random());
  // 建立部件卡組
  const finalComps = [...validPairs.map(p => p.comp), extraComp].sort(() => 0.5 - Math.random());
  
  // 繪製部首卡
  finalRads.forEach(rad => {
    const radObj = RADICALS.find(r => r.char === rad) || { bopomofo: "" };
    const el = document.createElement("div");
    el.className = "game-card radical-card";
    el.innerHTML = `
      <span class="char">${rad}</span>
      <span class="bopomofo">${radObj.bopomofo}</span>
    `;
    el.addEventListener("click", () => selectRelayCard("radical", rad, el));
    radContainer.appendChild(el);
  });
  
  // 繪製部件卡
  finalComps.forEach(comp => {
    const el = document.createElement("div");
    el.className = "game-card component-card";
    el.innerHTML = `
      <span class="char">${comp}</span>
      <span class="bopomofo">部件</span>
    `;
    el.addEventListener("click", () => selectRelayCard("component", comp, el));
    compContainer.appendChild(el);
  });
}

// 選擇接力賽字卡
function selectRelayCard(type, value, element) {
  if (type === "radical") {
    // 取消之前選的部首卡高亮
    const active = document.querySelector("#relay-radical-deck .game-card.selected");
    if (active) active.classList.remove("selected");
    
    selectedRadicalCard = { value, element };
    element.classList.add("selected");
    document.getElementById("slot-radical").innerHTML = `<span class="char">${value}</span>`;
  } else {
    // 取消之前選的部件卡高亮
    const active = document.querySelector("#relay-component-deck .game-card.selected");
    if (active) active.classList.remove("selected");
    
    selectedComponentCard = { value, element };
    element.classList.add("selected");
    document.getElementById("slot-component").innerHTML = `<span class="char">${value}</span>`;
  }
  
  // 判斷是否兩邊都選了，若選了則進行配對
  if (selectedRadicalCard && selectedComponentCard) {
    checkRelayPair();
  }
}

// 檢查配對
function checkRelayPair() {
  const comp = selectedComponentCard.value;
  const rad = selectedRadicalCard.value;
  
  const match = COMBINATIONS[comp] && COMBINATIONS[comp][rad];
  
  if (match) {
    playSound('correct');
    // 配對成功！顯示組字結果，並帶出造詞選項
    document.getElementById("slot-result").innerText = match.char;
    
    // 進入造詞小視窗驗證
    setTimeout(() => {
      showRelayVocabularyVerify(comp, rad, match);
    }, 400);
  } else {
    playSound('wrong');
    // 配對失敗，卡片紅晃動提示
    selectedRadicalCard.element.classList.add("shake");
    selectedComponentCard.element.classList.add("shake");
    
    // 移除選中狀態
    setTimeout(() => {
      selectedRadicalCard.element.classList.remove("shake", "selected");
      selectedComponentCard.element.classList.remove("shake", "selected");
      selectedRadicalCard = null;
      selectedComponentCard = null;
      document.getElementById("slot-radical").innerHTML = `<span style="color:var(--text-muted);">部首</span>`;
      document.getElementById("slot-component").innerHTML = `<span style="color:var(--text-muted);">部件</span>`;
    }, 500);
  }
}

// 接力賽造詞驗證
function showRelayVocabularyVerify(comp, rad, match) {
  // 隨機造詞選項
  const correctWord = match.words[0];
  
  // 尋找干擾詞 (使用 Set 去除重複選項)
  const allOtherWords = new Set();
  for (const c in COMBINATIONS) {
    for (const r in COMBINATIONS[c]) {
      const w = COMBINATIONS[c][r].words;
      if (w && w[0] && w[0] !== correctWord) {
        allOtherWords.add(w[0]);
      }
    }
  }
  const distractors = Array.from(allOtherWords).sort(() => 0.5 - Math.random()).slice(0, 2);
  const choices = [correctWord, ...distractors].sort(() => 0.5 - Math.random());
  
  // 用簡單的選擇覆蓋面板在右側
  const overlay = document.createElement("div");
  overlay.className = "match-overlay";
  overlay.innerHTML = `
    <h4>請選擇正確的造詞配合【${match.char}】：</h4>
    <div class="choice-grid"></div>
  `;
  
  const grid = overlay.querySelector(".choice-grid");
  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerText = choice;
    btn.addEventListener("click", () => {
      if (choice === correctWord) {
        playSound('correct');
        // 成功答對！
        overlay.remove();
        applyRelayPairSuccess(comp, rad, match);
      } else {
        playSound('wrong');
        // 造詞答錯
        overlay.remove();
        applyRelayPairFailure();
      }
    });
    grid.appendChild(btn);
  });
  
  document.querySelector(".relay-game-board").appendChild(overlay);
}

// 接力配對成功
function applyRelayPairSuccess(comp, rad, match) {
  // 給分
  const points = 10;
  if (activeRelayPlayer === "A") {
    teamAScore += points;
    document.getElementById("relay-score-a").innerText = teamAScore;
  } else {
    teamBScore += points;
    document.getElementById("relay-score-b").innerText = teamBScore;
  }
  
  // 移除卡片
  selectedRadicalCard.element.remove();
  selectedComponentCard.element.remove();
  
  // 記錄歷史配對
  currentRelayPairs.push({ player: activeRelayPlayer, char: match.char, word: match.words[0] });
  renderRelayHistory();
  
  // 重置選擇
  selectedRadicalCard = null;
  selectedComponentCard = null;
  document.getElementById("slot-radical").innerHTML = `<span style="color:var(--text-muted);">部首</span>`;
  document.getElementById("slot-component").innerHTML = `<span style="color:var(--text-muted);">部件</span>`;
  document.getElementById("slot-result").innerText = "?";
  
  // 檢查是否所有卡牌都配對完畢
  const remainingRads = document.querySelectorAll("#relay-radical-deck .game-card");
  const remainingComps = document.querySelectorAll("#relay-component-deck .game-card");
  
  if (remainingRads.length <= 1 || remainingComps.length <= 1) {
    // 重新洗牌
    generateRelayDecks();
  }
}

// 接力配對失敗 (造詞答錯)
function applyRelayPairFailure() {
  selectedRadicalCard.element.classList.remove("selected");
  selectedComponentCard.element.classList.remove("selected");
  selectedRadicalCard = null;
  selectedComponentCard = null;
  document.getElementById("slot-radical").innerHTML = `<span style="color:var(--text-muted);">部首</span>`;
  document.getElementById("slot-component").innerHTML = `<span style="color:var(--text-muted);">部件</span>`;
  document.getElementById("slot-result").innerText = "?";
}

// 繪製配對歷史紀錄
function renderRelayHistory() {
  const container = document.getElementById("relay-history");
  container.innerHTML = "";
  currentRelayPairs.forEach(item => {
    const el = document.createElement("span");
    el.className = `history-item ${item.player === "A" ? "team-a-hist" : "team-b-hist"}`;
    el.innerHTML = `
      <strong>${item.player === "A" ? "🐯" : "🐻"} ${item.char}</strong> (${item.word})
    `;
    container.appendChild(el);
  });
}

// 接力計時器
function startRelayTimer(seconds, onTimeout) {
  clearInterval(gameTimer);
  timeLeft = seconds;
  updateRelayTimerDisplay();
  
  gameTimer = setInterval(() => {
    timeLeft--;
    updateRelayTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(gameTimer);
      if (onTimeout) onTimeout();
    }
  }, 1000);
}

function updateRelayTimerDisplay() {
  document.getElementById("relay-timer-val").innerText = `${timeLeft} 秒`;
}

// 切換接力玩家
function switchRelayPlayer() {
  if (activeRelayPlayer === "A") {
    activeRelayPlayer = "B";
    playSound('turn');
    // 初始化 Player B 的接力回合
    initRelayRound();
  } else {
    // Player B 也完了，回合結束
    relayRound++;
    activeRelayPlayer = "A";
    if (relayRound > 3) {
      endGame();
    } else {
      playSound('turn');
      initRelayRound();
    }
  }
}

// --- 結算與遊戲結束邏輯 ---

function endGame() {
  switchView("game-over");
  
  // 顯示分數
  document.getElementById("final-score-a").innerText = teamAScore;
  document.getElementById("final-score-b").innerText = teamBScore;
  document.getElementById("final-team-a-name").innerText = `🐯 ${teamAName}`;
  document.getElementById("final-team-b-name").innerText = `🐻 ${teamBName}`;
  
  const winnerAvatar = document.getElementById("winner-avatar");
  const winnerText = document.getElementById("winner-text");
  
  if (teamAScore > teamBScore) {
    winnerAvatar.innerText = "🏆 🐯";
    winnerText.innerText = `恭喜【${teamAName}】獲得勝利！`;
  } else if (teamBScore > teamAScore) {
    winnerAvatar.innerText = "🏆 🐻";
    winnerText.innerText = `恭喜【${teamBName}】獲得勝利！`;
  } else {
    winnerAvatar.innerText = "🤝";
    winnerText.innerText = "雙方平手！真是精彩的對決！";
  }
}

// 回到大廳
function backToLobby() {
  switchView("lobby");
}


// ==========================================================================
// 模式 3：自學組字挑戰 (Self-learning Game Mode) 引擎
// ==========================================================================

function initLearnRound() {
  learnSelectedRadical = null;
  learnSelectedComponent = null;
  
  // 清除配對插槽
  const radSlot = document.getElementById("learn-slot-radical");
  const compSlot = document.getElementById("learn-slot-component");
  radSlot.innerHTML = `<span style="color:var(--text-muted);">部首</span>`;
  compSlot.innerHTML = `<span style="color:var(--text-muted);">部件</span>`;
  radSlot.className = "game-card learn-slot-card";
  compSlot.className = "game-card learn-slot-card";
  
  // 更新狀態資訊
  document.getElementById("learn-round-title").innerText = `第 ${currentRound} / ${totalRounds} 題`;
  document.getElementById("learn-player-name").innerText = teamAName;
  document.getElementById("learn-score-val").innerText = teamAScore;
  
  // 產生隨機目標字
  generateLearnQuestion();
  
  // 渲染發牌
  renderLearnDecks();
}

function generateLearnQuestion() {
  const comps = Object.keys(COMBINATIONS);
  const randomComp = comps[Math.floor(Math.random() * comps.length)];
  const rads = Object.keys(COMBINATIONS[randomComp]);
  const randomRad = rads[Math.floor(Math.random() * rads.length)];
  const match = COMBINATIONS[randomComp][randomRad];
  
  learnQuestion = {
    component: randomComp,
    radical: randomRad,
    char: match.char,
    bopomofo: match.bopomofo,
    words: match.words
  };
  
  document.getElementById("learn-target-char").innerText = learnQuestion.char;
}

function renderLearnDecks() {
  const radContainer = document.getElementById("learn-radical-deck");
  const compContainer = document.getElementById("learn-component-deck");
  
  radContainer.innerHTML = "";
  compContainer.innerHTML = "";
  
  // 1. 部首卡生成 (包含正確部首與 5 張干擾卡)
  const validRads = Object.keys(COMBINATIONS[learnQuestion.component]);
  const radDistractors = RADICALS.filter(r => !validRads.includes(r.char))
                                 .sort(() => 0.5 - Math.random())
                                 .slice(0, 5)
                                 .map(r => r.char);
  const radCards = [learnQuestion.radical, ...radDistractors].sort(() => 0.5 - Math.random());
  
  radCards.forEach(radChar => {
    const cardObj = RADICALS.find(r => r.char === radChar);
    const cardEl = document.createElement("div");
    cardEl.className = "game-card radical-card";
    cardEl.innerHTML = `
      <span class="char">${radChar}</span>
      <span class="bopomofo">${cardObj.bopomofo}</span>
    `;
    cardEl.addEventListener("click", () => selectLearnCard("radical", radChar, cardEl));
    radContainer.appendChild(cardEl);
  });
  
  // 2. 部件卡生成 (包含正確部件與 5 張干擾卡)
  const validComps = [];
  for (const c in COMBINATIONS) {
    if (COMBINATIONS[c][learnQuestion.radical]) {
      validComps.push(c);
    }
  }
  const compDistractors = COMPONENTS.filter(c => !validComps.includes(c.component))
                                    .sort(() => 0.5 - Math.random())
                                    .slice(0, 5)
                                    .map(c => c.component);
  const compCards = [learnQuestion.component, ...compDistractors].sort(() => 0.5 - Math.random());
  
  compCards.forEach(compChar => {
    const cardObj = COMPONENTS.find(c => c.component === compChar);
    const cardEl = document.createElement("div");
    cardEl.className = "game-card component-card";
    cardEl.innerHTML = `
      <span class="char">${compChar}</span>
      <span class="bopomofo">部件</span>
    `;
    cardEl.addEventListener("click", () => selectLearnCard("component", compChar, cardEl));
    compContainer.appendChild(cardEl);
  });
}

function selectLearnCard(type, value, element) {
  if (type === "radical") {
    // 移除其他部首的選取樣式
    const siblings = document.querySelectorAll("#learn-radical-deck .game-card");
    siblings.forEach(el => el.classList.remove("selected"));
    
    // 選取當前
    element.classList.add("selected");
    learnSelectedRadical = value;
    
    // 更新插槽
    const cardObj = RADICALS.find(r => r.char === value);
    const slot = document.getElementById("learn-slot-radical");
    slot.innerHTML = `
      <span class="char">${value}</span>
      <span class="bopomofo">${cardObj.bopomofo}</span>
    `;
    slot.className = "game-card learn-slot-card active-selected";
  } else {
    // 移除其他部件的選取樣式
    const siblings = document.querySelectorAll("#learn-component-deck .game-card");
    siblings.forEach(el => el.classList.remove("selected"));
    
    // 選取當前
    element.classList.add("selected");
    learnSelectedComponent = value;
    
    // 更新插槽
    const slot = document.getElementById("learn-slot-component");
    slot.innerHTML = `
      <span class="char">${value}</span>
      <span class="bopomofo">部件</span>
    `;
    slot.className = "game-card learn-slot-card active-selected";
  }
}

function clearLearnSelection() {
  learnSelectedRadical = null;
  learnSelectedComponent = null;
  
  const radSlot = document.getElementById("learn-slot-radical");
  const compSlot = document.getElementById("learn-slot-component");
  radSlot.innerHTML = `<span style="color:var(--text-muted);">部首</span>`;
  compSlot.innerHTML = `<span style="color:var(--text-muted);">部件</span>`;
  radSlot.className = "game-card learn-slot-card";
  compSlot.className = "game-card learn-slot-card";
  
  document.querySelectorAll("#learn-radical-deck .game-card").forEach(el => el.classList.remove("selected"));
  document.querySelectorAll("#learn-component-deck .game-card").forEach(el => el.classList.remove("selected"));
}

function verifyLearnSelection() {
  if (!learnSelectedRadical || !learnSelectedComponent) {
    showFloatingText("warn-select", "請先選擇一個部首卡和一個部件卡！", "center");
    return;
  }
  
  const modal = document.getElementById("learn-feedback-modal");
  const icon = document.getElementById("learn-feedback-icon");
  const title = document.getElementById("learn-feedback-title");
  const formula = document.getElementById("learn-feedback-formula");
  const encouragement = document.getElementById("learn-feedback-encouragement");
  const wordsSection = document.getElementById("learn-feedback-words-section");
  const wordsList = document.getElementById("learn-feedback-words-list");
  
  wordsList.innerHTML = "";
  
  const isCorrect = (learnSelectedRadical === learnQuestion.radical) && (learnSelectedComponent === learnQuestion.component);
  
  if (isCorrect) {
    playSound('correct');
    teamAScore += 10;
    
    icon.innerText = "🎉";
    title.innerText = "答對了！";
    title.style.color = "#2ec4b6";
    
    formula.innerText = `${learnQuestion.radical} (部首) + ${learnQuestion.component} (部件) = ${learnQuestion.char}`;
    formula.style.borderLeftColor = "#2ec4b6";
    
    encouragement.style.display = "none";
    wordsSection.style.display = "block";
    
    // 載入造詞
    const dictChar = CHAR_DICT[learnQuestion.char];
    const words = dictChar ? dictChar.words : (learnQuestion.words ? learnQuestion.words.map(w => ({ word: w, bopomofo: "" })) : []);
    
    words.forEach(w => {
      const el = document.createElement("div");
      el.className = "modal-word-item";
      el.innerHTML = `
        <span class="modal-word-text">${w.word}</span>
        <span class="modal-word-bopomofo">${w.bopomofo || ""}</span>
      `;
      wordsList.appendChild(el);
    });
    
    // 語音朗讀讀音及第一個造詞
    let speakText = `${learnQuestion.char}，注音為 ${learnQuestion.bopomofo || ""}`;
    if (words && words[0]) {
      speakText += `，造詞如：${words[0].word}`;
    }
    speakChinese(speakText);
    
  } else {
    playSound('wrong');
    
    icon.innerText = "💪";
    title.innerText = "答錯了喔！";
    title.style.color = "#ff6b6b";
    
    formula.innerText = `正確組合是：${learnQuestion.radical} (部首) + ${learnQuestion.component} (部件) = ${learnQuestion.char}`;
    formula.style.borderLeftColor = "#ff6b6b";
    
    wordsSection.style.display = "none";
    encouragement.style.display = "block";
    
    // 隨機選取加油打氣的字句
    const supportPhrases = [
      "加油！你一定可以的！",
      "別灰心，下一次會更好！",
      "多練習幾次，你一定會變得很棒！",
      "這題稍微難了一點，我們再試一次！",
      "失敗是成功之母，加油喔！",
      "相信自己，下一題一定能答對！"
    ];
    const phrase = supportPhrases[Math.floor(Math.random() * supportPhrases.length)];
    encouragement.innerText = phrase;
  }
  
  modal.style.display = "flex";
  modal.classList.add("active");
}

function speakChinese(text) {
  if (!('speechSynthesis' in window)) return;
  
  // 取消當前的發音
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-TW';
  utterance.rate = 0.85; // 稍慢的速度，更適合學童認讀
  
  // 嘗試獲取繁體中文語音
  const voices = window.speechSynthesis.getVoices();
  const zhVoice = voices.find(v => v.lang.includes('zh-TW')) || 
                  voices.find(v => v.lang.includes('zh-HK')) || 
                  voices.find(v => v.lang.includes('zh-CN')) || 
                  voices.find(v => v.lang.includes('zh'));
  
  if (zhVoice) {
    utterance.voice = zhVoice;
  }
  
  window.speechSynthesis.speak(utterance);
}

function nextLearnRound() {
  const modal = document.getElementById("learn-feedback-modal");
  modal.style.display = "none";
  modal.classList.remove("active");
  
  // 停止朗讀
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  
  currentRound++;
  if (currentRound > totalRounds) {
    endLearnGame();
  } else {
    initLearnRound();
  }
}

function endLearnGame() {
  switchView("game-over");
  
  // 隱藏雙人對戰專屬結算區
  document.getElementById("score-summary-double").style.display = "none";
  document.getElementById("winner-avatar").parentElement.style.display = "none";
  
  // 顯示單人挑戰結算區
  const learnSummary = document.getElementById("learn-final-summary");
  learnSummary.style.display = "block";
  
  document.getElementById("learn-final-name").innerText = `🎉 ${teamAName} 同學自學挑戰完成！`;
  
  const totalScorePossible = totalRounds * 10;
  document.getElementById("learn-final-score").innerText = `${teamAScore} / ${totalScorePossible} 分`;
  
  // 給予評價與鼓舞字句
  const ratio = teamAScore / totalScorePossible;
  let evalMsg = "";
  if (ratio >= 0.9) {
    evalMsg = "太厲害了！你的組字與識字能力無懈可擊，簡直是文字小達人！🌟";
  } else if (ratio >= 0.7) {
    evalMsg = "做得好！你的字彙量非常豐富，繼續保持喔！👍";
  } else if (ratio >= 0.5) {
    evalMsg = "不賴喔！你已經掌握了大部分的字根組合，再加把勁就能更上一層樓！✨";
  } else {
    evalMsg = "多加練習一定會更進步！相信你多挑戰幾次，成績會越來越好，加油喔！💪";
  }
  document.getElementById("learn-final-evaluation").innerText = evalMsg;
}
