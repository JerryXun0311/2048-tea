# 2048 Game in Node.js

This project is a Node.js implementation of the popular game 2048. It includes the core game logic for initializing the game board, adding new tiles, sliding and merging tiles based on player input, and checking for game over conditions.

## Features

- Initialize a 4x4 game board.
- Randomly add new tiles (2 or 4) to the board.
- Slide and merge tiles when the player inputs a direction (up, down, left, right).
- Check for game over condition.
- Console-based UI to play the game in a terminal.

## Installation

To run this project, you will need Node.js installed on your system. If you don't have Node.js installed, you can download it from [Node.js website](https://nodejs.org/).

Once Node.js is installed, clone the repository to your local machine:

npm install

```bash
git clone https://github.com/JerryXun0311/2048-tea.git
cd 2048-nodejs
```

## How to Play
node src/game.js


Use the following keys to move the tiles:

W or w for UP
S or s for DOWN
A or a for LEFT
D or d for RIGHT
After each move, a new tile (2 or 4) will appear randomly on the board. The goal is to combine tiles with the same numbers to increase their value and try to reach the 2048 tile.