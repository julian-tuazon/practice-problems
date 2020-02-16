// Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total(i.e.the total is greater than the sum of prices), otherwise return false.

//   Examples
// hasHiddenFee(["$2", "$4", "$1", "$8"], "$15") ➞ false

// hasHiddenFee(["$1", "$2", "$3"], "$6") ➞ false

// hasHiddenFee(["$1"], "$4") ➞ true
// Notes
// Remember that each price is given as a string.

function hasHiddenFee(prices, t) {
  let sum = 0;
  prices.forEach(elem => sum += Number(elem.slice(1)));
  return sum !== Number(t.slice(1));
}
