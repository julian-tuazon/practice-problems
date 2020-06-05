// Multiplying Numbers in a String
// Given a string of numbers separated by a comma and space, return the product of the numbers.

//   Examples
// multiplyNums("2, 3") ➞ 6

// multiplyNums("1, 2, 3, 4") ➞ 24

// multiplyNums("54, 75, 453, 0") ➞ 0

// multiplyNums("10, -2") ➞ -20

function multiplyNums(nums) {
  return eval(nums.replace(/, /gi, ' * '));
}

exports.multiplyNums = multiplyNums;
