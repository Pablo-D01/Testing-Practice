const analyzeArray = require("./analyzeArray");
const calculator = require("./calculator");

test("analyze array1 correctly", () => {
  const result = {
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  };
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual(result);
});
