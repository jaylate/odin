const Ship = require("./ship");

module.exports = class Gameboard {
  constructor() {
    this.clear();
  }
  clear() {
    this.board = new Map();
    this.ships = 0;
  }
  placeShip(x, y, len = 1, isVertical = false) {
    const ship = new Ship(len);

    if (x < 1 || y < 1) throw new Error("Coordinates can't be less than 1");
    if (x > 10 || y > 10) throw new Error("Coordinates can't be more than 10");
    if (len < 1 || len > 5)
      throw new Error("Length should be more than 0 and less than 6");
    if ((isVertical && y + len - 1 > 10) || x + len - 1 > 10)
      throw new Error("Ship can't be placed out of the board");

    for (let i = 0; i < len; i++) {
      // If the ship was already placed on the coordinates, return null
      if (isVertical) {
        if (this.board.has([x, y + i].join(","))) return null;
      } else {
        if (this.board.has([x + i, y].join(","))) return null;
      }
    }

    if (!this.board.get([x, y].join(","))) {
      for (let i = 0; i < len; i++) {
        if (isVertical) {
          this.board.set([x, y + i].join(","), { ship, hit: false });
        } else {
          this.board.set([x + i, y].join(","), { ship, hit: false });
        }
      }
      this.ships++;
    }
    return ship;
  }
  receiveAttack(x, y) {
    if (x < 1 || x > 10 || y < 1 || y > 10)
      throw new Error("Can't attack out of the board");
    const coords = [x, y].join(",");
    const cell = this.board.get(coords);

    if (cell && cell.ship) {
      // If there is cell with ship and it wasn't hit yet,
      // hit it and mark the cell as hit
      if (!cell.hit) {
        cell.ship.hit();
        cell.hit = true;
        this.board.set(coords, cell);
        return true;
      }
    } else {
      // Else player missed the attack
      this.board.set(coords, { undefined, hit: true });
    }
    return false;
  }
  allShipsAreSunk() {
    for (const ship of this.board.values()) {
      if (ship.ship && !ship.ship.isSunk()) {
        return false;
      }
    }
    return true;
  }
};
