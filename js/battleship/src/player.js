const Gameboard = require("./gameboard");
module.exports = class Player {
  constructor(
    playerGameboard = new Gameboard(),
    enemyGameboard = new Gameboard(),
    isComputer = false,
  ) {
    this.isComputer = isComputer;
    this.playerGameboard = playerGameboard;
    this.enemyGameboard = enemyGameboard;
  }
  computerMove() {
    // FIXME: refactor and add "understanding" when hit
    if (this.isComputer) {
      const possibleCoords = [];
      for (let x = 1; x <= 10; x++) {
        for (let y = 1; y <= 10; y++) {
          const coords = `${x}, ${y}`;
          const cell = this.enemyGameboard.board.get(coords);
          if (!cell || !cell.hit) {
            possibleCoords.push(coords);
          }
        }
      }

      const randomIndex = Math.floor(Math.random() * possibleCoords.length);
      const [x, y] = possibleCoords[randomIndex].split(", ").map(Number);

      return this.enemyGameboard.receiveAttack(x, y);
    }
  }
};
