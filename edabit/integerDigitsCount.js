// Integer Digits Count
// Create a function that counts the integer's number of digits.

// Examples
// count(318) ➞ 3

// count(-92563) ➞ 5

// count(4666) ➞ 4

// count(-314890) ➞ 6

// count(654321) ➞ 6

// count(638476) ➞ 6

function count(n) {
  n = Math.abs(n);
  let counter = 0;
  function countNumsRec(num) {
    num /= 10;
    counter++;
    if (num < 1) return counter;
    return countNumsRec(num);
  }
  return countNumsRec(n);
}
