const caesarCipher = require("./caesarCipher");

test("shifts letters correctly with a positive shift", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("shifts letters correctly with wrapping from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves letter case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("ignores non-alphabet characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("handles negative shift values", () => {
  expect(caesarCipher("def", -3)).toBe("abc");
});

test("handles large shift values", () => {
  expect(caesarCipher("abc", 52)).toBe("abc"); // 52 = 2 full turns of the alphabet
});

test("preserves punctuation and spaces", () => {
  expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
});
