function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}

// A function to move a single character
function shiftChar(char, shift) {
  // Checking if the character is an uppercase letter
  if (char >= "A" && char <= "Z") {
    return shiftWithinAlphabet(
      char,
      shift,
      "A".charCodeAt(0),
      "Z".charCodeAt(0)
    );
  }
  // Checking if the character is a lowercase letter

  if (char >= "a" && char <= "z") {
    return shiftWithinAlphabet(
      char,
      shift,
      "a".charCodeAt(0),
      "z".charCodeAt(0)
    );
  }
  // If the character is not a letter, return it unchanged

  return char;
}

// Function that moves a character inside the alphabet

function shiftWithinAlphabet(char, shift, startCode, endCode) {
  const charCode = char.charCodeAt(0);
  const alphabetSize = endCode - startCode + 1;
  const newCharCode =
    ((((charCode - startCode + shift) % alphabetSize) + alphabetSize) %
      alphabetSize) +
    startCode;
  return String.fromCharCode(newCharCode);
}

module.exports = caesarCipher;
