// On the Nth Day of Christmas...
// Throughout the 12 days of Christmas, my true love gave me in total 364 items.

// Create a function where given n days as an argument, return the total amount of items received throughout those days as an integer.

//   Examples
// xmasItems(12) ➞ 364

// xmasItems(3) ➞ 10

// xmasItems(31) ➞ 5456
// Notes
// You will only be given valid inputs.
// Remember to return as an integer.
// 0 as input should return 0.

function xmasItems(n) {
  if (!n) return 0;
  let counter = n;
  let sum = 0;
  while (counter) sum += counter--;
  return sum + xmasItems(--n);
}
