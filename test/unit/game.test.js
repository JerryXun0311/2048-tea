const { Game2048 } = require('../../src/game');

describe('initializeGame', () => {
  test('should create a 4x4 game board', () => {
    const gameBoard = Game2048();
    expect(gameBoard.length).toBe(4);
    gameBoard.forEach(row => {
      expect(row.length).toBe(4);
    });
  });
});
