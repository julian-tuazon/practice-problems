// 118. Pascal's Triangle
// Easy

// Given a non - negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 3, 1],
//   [1, 4, 6, 4, 1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  const triangle = [[1], [1, 1]];
  let prevRow = [1, 1];
  for (let i = 0; i < numRows - 2; i++) {
    const currentRow = [1];
    for (let i = 1; i < prevRow.length; i++) {
      currentRow.push(prevRow[i] + prevRow[i - 1]);
    }
    currentRow.push(1);
    prevRow = currentRow;
    triangle.push(currentRow);
  }
  return triangle;
};
