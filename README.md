# Rock Paper Scissors

A simple Rock Paper Scissors game built with JavaScript for [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.

## Features

- Play 5 rounds against the computer.
- Scores are tracked and displayed after each round.
- Winner is announced at the end.
- Can be run in the browser (with `window.prompt`) or in Node.js (with `prompt-sync`).

## How to Play

### In the Browser

1. Open `index.html` in your browser.
2. When prompted, enter your choice: `rock`, `paper`, or `scissors`.
3. The game will play 5 rounds and display the results in the browser console.

### In Node.js

1. Install [Node.js](https://nodejs.org/).
2. Install the `prompt-sync` package:
   ```sh
   npm install prompt-sync
   ```
3. Uncomment the following line at the top of `rock-paper-scissors.js`:
   ```js
   const prompt = require("prompt-sync")({sigint: true});
   ```
4. Run the game:
   ```sh
   node rock-paper-scissors.js
   ```

## File Overview

- `rock-paper-scissors.js` — Main game logic.
- `index.html` — Loads the game in the browser.

## Notes

- By default, the code uses `prompt`, which works in browsers.  
  For Node.js, use `prompt-sync` as described above.
- All game output is shown in the browser's console or the terminal.

## License

MIT