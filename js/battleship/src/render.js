module.exports = class Render {
  constructor(boardDivs, players) {
    this.boardDivs = boardDivs;
    this.players = players;
  }
  render(turn) {
    const playerIndex = turn % 2; // Get current player and output their boards
    const player = this.players[playerIndex];

    if (player.isComputer) {
      // If computer's turn, output gameboard only after all moves are made
      while (player.computerMove()) {}
      return this.render(++turn);
    }

    const playerGameboard = player.playerGameboard;
    const enemyGameboard = player.enemyGameboard;

    if (playerGameboard.allShipsAreSunk()) {
      alert(`WIN PLAYER ${1 - playerIndex + 1}`);
    }

    if (enemyGameboard.allShipsAreSunk()) {
      alert(`WIN PLAYER ${playerIndex + 1}`);
    }

    for (let boardIndex = 0; boardIndex < this.boardDivs.length; boardIndex++) {
      // Displaying two boards - one with player's ships, another with just hit cells
      const currentPlayer = this.players[boardIndex];
      const currentGameboard = currentPlayer.playerGameboard;
      const currentGameboardDiv = this.boardDivs[boardIndex];
      const isPlayerTurn = boardIndex === playerIndex;

      this.renderGameboard(
        currentGameboard,
        currentGameboardDiv,
        isPlayerTurn,
        currentPlayer,
        turn,
      );
    }
  }
  renderGameboard(gameboard, gameboardDiv, isPlayerTurn, player, turn) {
    gameboardDiv.innerHTML = "";
    gameboardDiv.classList.add("board");

    for (let y = 0; y < 10; y++) {
      const row = document.createElement("div");
      row.className = "row";
      for (let x = 0; x < 10; x++) {
        const coords = [x + 1, y + 1].join(",");
        const cell = document.createElement("div");
        cell.classList.add("cell");

        if (gameboard.board.has(coords)) {
          // If gameboard has any information about the coordinate, it gets displayed
          // If the board is player's, ships and hits are displayed
          // If the board is enemy's, hits and sunk ships are displayed
          const gameboardCell = gameboard.board.get(coords);

          if (gameboardCell.ship) {
            if (gameboardCell.ship.isSunk()) cell.textContent = "X";
            else if (gameboardCell.hit) cell.textContent = "*";
            else if (isPlayerTurn) cell.textContent = "<";
          }

          if (gameboardCell.hit) {
            cell.classList.add("hit");
          }
        }

        if (!isPlayerTurn) {
          // If the board is enemy's, it is avaliable for hitting
          // If player hits the enemy's ship, they can continue hitting
          // Else the game goes to the enemy
          cell.addEventListener("click", () => {
            const enemy = this.players[1 - (turn % 2)];
            if (!enemy.playerGameboard.receiveAttack(x + 1, y + 1)) turn++;

            this.render(turn);
          });
        }
        row.appendChild(cell);
      }
      gameboardDiv.appendChild(row);
    }
  }
};
