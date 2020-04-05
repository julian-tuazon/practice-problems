// Preventing the Collapse of the Universe
// Dividing by 0 is a huge mistake and should be avoided at all costs.

// Create a function that when given a math expression as a string, return True if at any point, the expression involves dividing by 0.

// Examples
// catchZeroDivision("2 / 0") ➞ true

// catchZeroDivision("4 / (2 + 3 - 5)") ➞ true

// catchZeroDivision("2 * 5 - 10") ➞ false
// Notes
// Multiplication signs will be given as an asterisk *.

function catchZeroDivision(expr) {
  return eval(expr) === Infinity || Number.isNaN(eval(expr));
}
