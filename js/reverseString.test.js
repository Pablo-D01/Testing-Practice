const reverseString = require("./reverseString");

test('"test" should become "tset"', () => {
  expect(reverseString("test")).toBe("tset");
});

// test('"tESt" should become "tSEt"', () => {
//   expect(reverseString("test")).toBe("tSEt");
// });
