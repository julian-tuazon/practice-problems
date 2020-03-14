// A number added with its additive inverse equals zero.Create a function that returns an array of additive inverses.

//   Examples
// additiveInverse([5, -7, 8, 3]) ➞[-5, 7, -8, -3]

// additiveInverse([1, 1, 1, 1, 1]) ➞[-1, -1, -1, -1, -1]

// additiveInverse([-5, -25, 35]) ➞[5, 25, -35]

function additiveInverse(arr) {
  return arr.map(num => num * -1);
}
