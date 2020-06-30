// Solving Exponential Equations With Logarithms
// Create a function that takes a number a and finds the missing exponent x so that a when raised to the power of x is equal to b.

//   Examples
// solveForExp(4, 1024) ➞ 5

// solveForExp(2, 1024) ➞ 10

// solveForExp(9, 3486784401) ➞ 10

function solveForExp(a, b) {
  let exponent = 0;
  if (b === 1) return 0;
  while (b > 1) {
    exponent++;
    b /= a;
  }
  if (b === 1) return exponent;
  return 'invalid';
}

exports.solveForExp = solveForExp;
