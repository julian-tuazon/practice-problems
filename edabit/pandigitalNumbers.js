// Pandigital Numbers
// A pandigital number contains all digits(0 - 9) at least once.Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

//   Examples
// isPandigital(98140723568910) ➞ true

// isPandigital(90864523148909) ➞ false
// // 7 is missing.

// isPandigital(112233445566778899) ➞ false

function isPandigital(num) {
  const tests = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const nums = num.toString().split('');
  return !tests.some(x => !nums.includes(x));
}
