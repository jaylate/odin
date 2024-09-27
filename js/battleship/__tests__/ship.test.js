const Ship = require("ship");

let ship;

beforeEach(() => {
  ship = new Ship(1);
});

test("hit", () => {
  let hits = ship.hits;
  ship.hit();
  expect(ship.hits).toBe(hits + 1);
});

describe("isSunk", () => {
  test("should not be sunk if hits are less than length", () => {
    expect(ship.hits < ship.length).toBeTruthy();
    expect(ship.isSunk()).toBeFalsy();
    expect(ship.sunk).toBeFalsy();
  });
  test("should be sunk if hits are equal to length", () => {
    ship.hit();
    expect(ship.hits === ship.length).toBeTruthy();
    expect(ship.isSunk()).toBeTruthy();
    expect(ship.sunk).toBeTruthy();
  });
});
