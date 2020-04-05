// Equality of 3 Values
// Create a function that takes three integer arguments(a, b, c) and returns the number of equal values.

//   Examples
// equal(3, 4, 3) ➞ 2

// equal(1, 1, 1) ➞ 3

// equal(3, 4, 1) ➞ 0
// Notes
// Your function must return 0, 2 or 3.

function equal(a, b, c) {
  if (a === b && a === c) return 3;
  if (a === b || a === c) return 2;
  return 0;
}
