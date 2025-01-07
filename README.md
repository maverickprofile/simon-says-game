# Simon Says Game

A fun and interactive memory game built using **HTML**, **CSS**, and **JavaScript**. The game challenges players to replicate a sequence of colors that grows longer with each level. Test your memory and see how far you can go!

---

## Features

- Generates a random sequence of colors that the user must replicate.
- Tracks the current level and updates the display dynamically.
- Handles incorrect inputs with a **Game Over** screen.
- Keeps track of the highest score in the session.
- Interactive visual feedback for button presses.

---

## Demo

You can play the Simon Says Game live here: https://simon-says-game-rose-xi.vercel.app/

---

## How to Play

1. Open the game in your browser.
2. Press any key to start.
3. Watch the sequence of flashing colors carefully.
4. Click the buttons in the same sequence.
5. Progress to higher levels as you correctly replicate the sequences.
6. The game ends when you click an incorrect button. Try again to beat your highest score!

---

## Project Structure

```
Simon Says Game
├── index.html       # Main HTML file for the game
├── style.css       # CSS file for styling the game
└── app.js          # JavaScript file containing game logic
```

---

## Code Overview

### Key Functions:

- **gameFlash(btn):** Flashes the game-generated button sequence.
- **userFlash(btn):** Provides visual feedback for user button clicks.
- **levelUp():** Moves the game to the next level by adding a new color to the sequence.
- **checkSeq(idx):** Validates the user's input against the generated sequence.
- **resetGame():** Resets the game state while preserving the highest score.

---

## Technologies Used

- **HTML**: Structure of the game interface.
- **CSS**: Styling for buttons, layout, and visual effects.
- **JavaScript**: Core game logic and interactivity.

---

## Future Enhancements

- Add sound effects for button presses and level progression.
- Introduce a leaderboard to track top scores across sessions.
- Add mobile responsiveness for better gameplay on smaller screens.

---



Enjoy the game and challenge your memory!

