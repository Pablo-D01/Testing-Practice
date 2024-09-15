const calculator = require("./calculator");

test('"add" should return the sum of two numbers', () => {
  expect(calculator.add(1, 3)).toBe(4);
});

test("the sum of two numbers, one of which is negative", () => {
  expect(calculator.add(1, -13)).toBe(-12);
});

test("the subtract of two numbers", () => {
  expect(calculator.subtract(1, 6)).toBe(-5);
});

test("divide", () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test("divide by zero", () => {
  expect(calculator.divide(8, 0)).toBe("remember buddy never multiply by zero");
});

test("multiply(0.5, 0.2) is 0.1", () => {
  expect(calculator.multiply(0.5, 0.2)).toBe(0.1);
});
