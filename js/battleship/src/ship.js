module.exports = class Ship {
  constructor(len) {
    this.length = len;
    this.hits = 0;
    this.sunk = false;
  }
  hit() {
    this.hits++;
    return this.hits;
  }
  isSunk() {
    this.sunk = this.hits >= this.length;
    return this.sunk;
  }
};
