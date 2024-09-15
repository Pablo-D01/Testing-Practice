// A reverseString function that takes a string and returns it reversed.

function reverseString(string) {
  newString = "";
  length = string.length;
  for (let i = length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

module.exports = reverseString;
