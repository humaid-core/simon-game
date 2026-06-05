# Simon Game

A classic Simon memory game built from scratch using HTML, CSS, JavaScript, and jQuery.

## 🎮 About the Project

This project recreates the popular Simon electronic memory game. The game generates a
growing sequence of colored button flashes, and the player must repeat the sequence
correctly by clicking the buttons in the same order. Every successful round adds one
more color to the sequence, making it progressively harder. The game tracks your
highest score across attempts within the session.

## ✨ Features

- Random color sequence generation on every game
- Flash animation on both game-generated and user-clicked buttons
- Sound effects for each color (red, blue, green, yellow)
- Wrong answer sound on failure
- Level progression with increasing sequence length
- Correct answer validation after every single click
- Game over screen flash with restart prompt
- Highest score tracking within the session
- Keyboard press to start and restart the game

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- jQuery

## 🚀 How to Play

1. Open `index.html` in any browser.
2. Press any keyboard key to start the game.
3. Watch the sequence of colored button flashes carefully.
4. Repeat the sequence by clicking the buttons in the same order.
5. Each successful round adds one new color to the sequence.
6. If you click the wrong color, the screen flashes red — game over.
7. Press any key to restart and try to beat your highest score.

## 📚 What I Learned

While building this project, I practiced and improved my understanding of:

- **DOM Manipulation** — dynamically updating level title, score display, and button states
- **Event Handling** — keyboard press events to start/restart, click events on game buttons
- **Arrays and Array Operations** — storing and comparing game sequence vs user input with index-based validation
- **Timers and Async Flow** — using `setTimeout` for flash effects, sequence delays, and game-over animations
- **Functions and Program Flow** — breaking game logic into focused functions (`nextSequence`, `flashEffect`, `checkAnswer`, `startOver`)
- **Audio in JavaScript** — dynamically creating and playing `Audio` objects based on button color
- **State Management** — tracking game pattern, user pattern, current level, and highest score across the game lifecycle
- **Conditional Logic** — validating each click in real time and deciding whether to advance, continue, or end the game
- **CSS Classes as State** — using `.pressed` and `.game-over` classes to trigger visual feedback
- **jQuery Fundamentals** — `.addClass()`, `.removeClass()`, `.text()`, `.attr()`, `.click()`, `$(document).keypress()`

## 🎯 Future Improvements

- Mobile touch support and responsive layout
- Difficulty modes (slow, normal, fast sequence speed)
- Persistent high score using Local Storage
- Animated sequence replay before user input
- Visual countdown before game starts
- Sound toggle option for silent environments

## 📷 Screenshots

<img width="1918" height="903" alt="image" src="https://github.com/user-attachments/assets/127273ab-aed8-417f-ac8f-dd4318332594" />

## 📄 License

This project is created for learning and educational purposes.
