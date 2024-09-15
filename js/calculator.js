// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  if (b === 0) {
    return "remember buddy never multiply by zero";
  } else {
    return a / b;
  }
}
function multiply(a, b) {
  return a * b;
}

module.exports = {
  add,
  subtract,
  divide,
  multiply,
};
