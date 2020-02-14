// Write a function that checks if two numbers are:

// Smaller than 0
// Greater than 0
// Exactly 0
// Examples
// both(6, 2) ➞ true

// both(0, 0) ➞ true

// both(-1, 2) ➞ false

// both(0, 2) ➞ false
// Notes
// Inputs will always be two numbers.

function both(n1, n2) {
  return Math.sign(n1) === Math.sign(n2);
}
