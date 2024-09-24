const index = require("./index");

test("capitalize", () => {
  expect(index.capitalize("hello")).toBe("Hello");
});

test("reverseString", () => {
  expect(index.reverseString("Hello")).toBe("olleH");
});

test("calculator", () => {
  expect(index.calculator.add(43, 12)).toBe(55);
  expect(index.calculator.subtract(43, 4)).toBe(39);
  expect(index.calculator.divide(66, 11)).toBe(6);
  expect(index.calculator.multiply(3, 15)).toBe(45);
});

test("caesarCipher", () => {
  expect(index.caesarCipher("apple", 3)).toBe("dssoh");
  expect(index.caesarCipher("xyz", 3)).toBe("abc");
  expect(index.caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(index.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray", () => {
  expect(index.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
