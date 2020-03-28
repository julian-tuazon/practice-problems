// Digits Sum Root
// Create a function that takes a number and returns one digit that is the result of summing all the digits of the input number.When the sum of the digits consists of more than one digit, repeat summing unil you get one digit.

//   Examples
// rootDigit(123) ➞ 6
// // 1 +2 + 3 = 6

// rootDigit(999888777) ➞ 9

// rootDigit(1238763636555555555555) ➞ 6
// Notes
// Recursion is allowed.

function rootDigit(n) {
  if (n < 10) return n;
  const sum = n.toString().split('').reduce((acc, cur) => acc + Number(cur), 0);
  return rootDigit(Number(sum));
}
