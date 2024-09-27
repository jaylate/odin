const Gameboard = require("gameboard");
const Ship = require("ship");

const gameboard = new Gameboard();

describe("placeShip", () => {
  let ship = new Ship(1);

  test("check if there is no board in empty board", () => {
    expect(gameboard.board.get([2, 3].join(","))).toBeUndefined();
  });

  describe("should be successful placing", () => {
    test("check if return value is correct", () => {
      expect(gameboard.placeShip(2, 3, 1)).toMatchObject(ship);
    });
    test("check if ship is placed on board", () => {
      expect(gameboard.board.get([2, 3].join(","))).toMatchObject({
        ship,
        hit: false,
      });
    });
  });

  describe("on collision should return null", () => {
    beforeAll(() => {
      gameboard.placeShip(5, 4, 3);
    });
    afterAll(() => {
      gameboard.clear();
    });
    test("placing on the same coordinates", () => {
      expect(gameboard.placeShip(5, 4, 1)).toBeNull();
    });
    test("placing with collision horizontally", () => {
      expect(gameboard.placeShip(6, 4, 4)).toBeNull();
    });
    test("placing with collision vertically", () => {
      expect(gameboard.placeShip(7, 3, 3, true)).toBeNull();
    });
  });

  test("check if bounds of the board are handled correctly", () => {
    expect(() => gameboard.placeShip(-1, 3, 2)).toThrow();
    expect(() => gameboard.placeShip(3, 0, 2)).toThrow();

    expect(() => gameboard.placeShip(11, 1, 2)).toThrow();
    expect(() => gameboard.placeShip(1, 33, 3)).toThrow();

    expect(() => gameboard.placeShip(2, 3, 0)).toThrow();
    expect(() => gameboard.placeShip(2, 3, 6)).toThrow();

    expect(() => gameboard.placeShip(9, 2, 3)).toThrow();
    expect(() => gameboard.placeShip(3, 7, 5, true)).toThrow();
  });
});

describe("receiveAttack", () => {
  beforeAll(() => {
    gameboard.placeShip(2, 3, 1);
  });

  describe("should be succesful attack", () => {
    test("attack received", () => {
      expect(gameboard.receiveAttack(2, 3)).toBe(true);
    });
    test("attack is demonstrated on board", () => {
      expect(gameboard.board.get([2, 3].join(",")).hit).toBe(true);
    });
  });

  describe("should be missed attack", () => {
    test("missed attack received", () => {
      expect(gameboard.receiveAttack(9, 9)).toBe(false);
    });
    test("missed attack is demonstrated on board", () => {
      expect(gameboard.board.get([9, 9].join(",")).hit).toBe(true);
    });
  });

  test("do not allow attack out of board", () => {
    expect(() => gameboard.receiveAttack(-1, 1)).toThrow();
    expect(() => gameboard.receiveAttack(5, -1)).toThrow();

    expect(() => gameboard.receiveAttack(11, 3)).toThrow();
    expect(() => gameboard.receiveAttack(5, 23)).toThrow();
  });
});

describe("allShipsAreSunk", () => {
  beforeAll(() => {
    gameboard.placeShip(2, 3, 1);
    gameboard.placeShip(2, 4, 1);
    gameboard.placeShip(3, 5, 2, true);
  });
  test("more than 1 ships are present, so board is not all sunk", () => {
    gameboard.receiveAttack(2, 3);
    expect(gameboard.allShipsAreSunk()).toBe(false);
  });
  test("there is at least one ship present, so board is not all sunk", () => {
    gameboard.receiveAttack(2, 4);
    expect(gameboard.allShipsAreSunk()).toBe(false);
  });
  test("all ships are sunk", () => {
    gameboard.receiveAttack(3, 5);
    gameboard.receiveAttack(3, 6);
    expect(gameboard.allShipsAreSunk()).toBe(true);
  });
});
