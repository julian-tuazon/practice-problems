// Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.

//   Examples
// findEvenNums(8) ➞[2, 4, 6, 8]

// findEvenNums(4) ➞[2, 4]

// findEvenNums(2) ➞[2]
// Notes
// If there are no even numbers, return an empty array.

function findEvenNums(num) {
  const evenArr = [];
  if (num <= 1) return evenArr;
  for (let i = 2; i <= num; i += 2) evenArr.push(i);
  return evenArr;
}
