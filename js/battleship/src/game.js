const Render = require("./render");
const Player = require("./player");
const Gameboard = require("./gameboard");

module.exports = class Game {
  constructor(gameContainer, playWithComputer = false) {
    const playerOneGameboard = new Gameboard(); // FIXME: implement correct gameboards init in Player
    const playerTwoGameboard = new Gameboard();
    this.playerOne = new Player(playerOneGameboard, playerTwoGameboard);
    this.playerTwo = new Player(playerTwoGameboard, playerOneGameboard);
    this.playersList = [this.playerOne, this.playerTwo];

    this.playerOneDiv = document.createElement("div"); // Initializing HTML elements
    this.playerTwoDiv = document.createElement("div");
    gameContainer.appendChild(this.playerOneDiv);
    gameContainer.appendChild(this.playerTwoDiv);

    this.renderGame = new Render( // Initializing render
      [this.playerOneDiv, this.playerTwoDiv],
      [this.playerOne, this.playerTwo],
    );
  }
  start(playWithComputer = false) {
    this.playerTwo.isComputer = playWithComputer;
    this.renderGame.render(0);
  }
  randomlyPlaceShips(numberOfShips = 5) {
    for (
      let playerIndex = 0;
      playerIndex < this.playersList.length;
      playerIndex++
    ) {
      const currentPlayer = this.playersList[playerIndex];
      for (let i = 0; i < numberOfShips; i++) {
        let validPlacement = false;
        while (!validPlacement) {
          const random = (max) => {
            return Math.floor(Math.random() * max + 1);
          };

          const length = random(5);
          const isVertical = Math.random() >= 0.5;
          const x = random(11 - length);
          const y = random(11 - length);

          validPlacement = true;
          const checkedPositions = new Set();
          for (let l = 0; l < length; l++) {
            const shipX = isVertical ? x : x + l;
            const shipY = isVertical ? y + l : y;
            for (let dx = -1; dx <= 1; dx++) {
              for (let dy = -1; dy <= 1; dy++) {
                const adjX = shipX + dx;
                const adjY = shipY + dy;
                const position = [adjX, adjY].join(",");
                if (adjX >= 1 && adjX <= 10 && adjY >= 1 && adjY <= 10) {
                  if (checkedPositions.has(position)) continue;
                  checkedPositions.add(position);
                  if (currentPlayer.playerGameboard.board.has(position)) {
                    validPlacement = false;
                    break;
                  }
                }
              }
              if (!validPlacement) break;
            }
          }
          if (validPlacement) {
            if (
              currentPlayer.playerGameboard.placeShip(
                x,
                y,
                length,
                isVertical,
              ) === null
            )
              validPlacement = false;
          }
        }
      }
    }
  }
};
