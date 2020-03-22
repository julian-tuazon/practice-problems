// Positive Dominant
// An array is positive dominant if it contains strictly more unique positive values than unique negative values.

// Write a function that returns true if an array is positive dominant.

//   Examples
// [1, 1, 1, 1, -3, -4]➞ false
// // there is only 1 unique positive value (1)
// // there are 2 unique negative values (-3, -4)

// [5, 99, 832, -3, -4]➞ true

// [5, 0]➞ true

// [0, -4, -1]➞ false
// Notes
// 0 neither counts as a positive nor a negative value.

function isPositiveDominant(a) {
  const pos = a.filter(num => num > 0);
  const neg = a.filter(num => num < 0);
  const newPos = [];
  const newNeg = [];
  pos.forEach(num => !newPos.includes(num) ? newPos.push(num) : '');
  neg.forEach(num => !newNeg.includes(num) ? newNeg.push(num) : '');
  return newPos.length > newNeg.length;
}

function isPositiveDominant(a) {
  return a.filter((num, i) => a.indexOf(num) === i).filter(num => num > 0).length > a.filter((num, i) => a.indexOf(num) === i).filter(num => num < 0).length;
}
