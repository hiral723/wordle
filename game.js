const ROWS = 6;
const COLS = 5;
const WORDS = ["ABOUT", "FRESH", "SCALP", "APPLE", "BRAIN", "LIGHT"];

let state = {
  answer: WORDS[Math.floor(Math.random() * WORDS.length)],
  grid: Array.from({ length: ROWS }, () => Array(COLS).fill("")),
  row: 0,
  col: 0,
  over: false
};

function init() {
  const board = document.getElementById("board");
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      let t = document.createElement("div");
      t.className = "tile";
      t.id = `tile-${r}-${c}`;
      board.appendChild(t);
    }
  }
  setupKeyboard();
  document.addEventListener("keydown", (e) => handle(e.key));
}

function handle(key) {
  if (state.over) return;
  if (key === "Enter") submit();
  else if (key === "Backspace") del();
  else if (/^[a-zA-Z]$/.test(key)) add(key.toUpperCase());
}

function add(letter) {
  if (state.col < COLS) {
    state.grid[state.row][state.col] = letter;
    let t = document.getElementById(`tile-${state.row}-${state.col}`);
    t.textContent = letter;
    t.classList.add("filled");
    state.col++;
  }
}

function del() {
  if (state.col > 0) {
    state.col--;
    state.grid[state.row][state.col] = "";
    let t = document.getElementById(`tile-${state.row}-${state.col}`);
    t.textContent = "";
    t.classList.remove("filled");
  }
}

function submit() {
  if (state.col < COLS) return;
  let guess = state.grid[state.row].join("");
  let ans = state.answer;
  
  // Scoring logic
  let remaining = ans.split("");
  let results = Array(COLS).fill("absent");

  for (let i = 0; i < COLS; i++) {
    if (guess[i] === ans[i]) {
      results[i] = "correct";
      remaining[i] = null;
    }
  }
  for (let i = 0; i < COLS; i++) {
    if (results[i] === "correct") continue;
    let idx = remaining.indexOf(guess[i]);
    if (idx !== -1) {
      results[i] = "present";
      remaining[idx] = null;
    }
  }

  // Update UI
  for (let i = 0; i < COLS; i++) {
    document.getElementById(`tile-${state.row}-${i}`).classList.add(results[i]);
  }

  if (guess === ans) {
    state.over = true;
    setTimeout(() => alert("Splendid!"), 200);
  } else if (state.row === ROWS - 1) {
    state.over = true;
    setTimeout(() => alert(ans), 200);
  } else {
    state.row++;
    state.col = 0;
  }
}

function setupKeyboard() {
  const kb = document.getElementById("keyboard");
  const keys = [["Q","W","E","R","T","Y","U","I","O","P"], ["A","S","D","F","G","H","J","K","L"], ["ENTER","Z","X","C","V","B","N","M","⌫"]];
  keys.forEach(row => {
    let r = document.createElement("div");
    r.className = "key-row";
    row.forEach(k => {
      let b = document.createElement("button");
      b.className = "key" + (k.length > 1 ? " wide" : "");
      b.textContent = k;
      b.onclick = () => handle(k === "⌫" ? "Backspace" : k);
      r.appendChild(b);
    });
    kb.appendChild(r);
  });
}

init();