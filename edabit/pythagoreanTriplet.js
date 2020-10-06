// Pythagorean Triplet
// Create a function that validates whether three given integers form a Pythagorean triplet.The sum of the squares of the two smallest integers must equal the square of the largest number to be validated.

//   Examples
// isTriplet(3, 4, 5) ➞ true
// // 3² + 4² = 25
// // 5² = 25

// isTriplet(13, 5, 12) ➞ true
// // 5² + 12² = 169
// // 13² = 169

// isTriplet(1, 2, 3) ➞ false
// // 1² + 2² = 5
// // 3² = 9
// Notes
// Numbers may not be given in a sorted order.

function isTriplet(n1, n2, n3) {
  const nums = [...arguments];
  nums.sort((a, b) => a - b);
  return Math.pow(nums[0], 2) + Math.pow(nums[1], 2) === Math.pow(nums[2], 2);
}
