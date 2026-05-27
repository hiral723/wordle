# Wordle ∞

A browser-based Wordle clone built with JavaScript, HTML, and CSS — no frameworks, no dependencies.

---

## Features

- 1000+ word randomised answer pool
- Colour-coded keyboard feedback (green = correct, yellow = wrong place, grey = not in word)
- Automatic board reset after each round for endless play
- Lose screen with the answer revealed and a Play Again button
- Animated win banner
- Physical keyboard and on-screen keyboard both fully supported

---

## Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)

---

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/hiral723/wordle.git
   ```

2. Open the project folder in VS Code

3. Install the **Live Server** extension (by Ritwick Dey)

4. Right-click `index.html` and select **Open with Live Server**

5. The game will open in your browser automatically

---

## How to Play

- Type a 5-letter word and press **Enter** to submit your guess
- You have **6 attempts** to guess the word
- After each guess, the tiles and keyboard keys change colour:
  - 🟩 **Green** — correct letter, correct position
  - 🟨 **Yellow** — correct letter, wrong position
  - ⬛ **Grey** — letter not in the word
- If you run out of guesses, the answer is revealed and you can play again instantly

---

## Project Structure

```
wordle/
├── index.html      # Main HTML file
├── style.css       # Styling
├── game.js         # Game logic
└── words.js        # Word list
```
