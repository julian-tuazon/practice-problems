// Position in the Alphabet
// Given a number between 1 - 26, return what letter is at that position in the alphabet.Return "invalid" if the number given is not within that range, or isn't an integer.

// Examples
// letterAtPosition(1) ➞ "a"

// letterAtPosition(26.0) ➞ "z"

// letterAtPosition(0) ➞ "invalid"

// letterAtPosition(4.5) ➞ "invalid"
// Notes
// Return a lowercase letter.
// Numbers that end with ".0" are valid.

function letterAtPosition(n) {
  if (Number.isInteger(n) && n > 0 && n < 27) return String.fromCharCode(96 + n);
  return 'invalid';
}

exports.letterAtPosition = letterAtPosition;
