// Create a function that takes a variable number of groups of items, and returns the number of ways the items can be arranged, with one item from each group.Order does not matter.

//   Examples
// combinations(2, 3) ➞ 6

// combinations(3, 7, 4) ➞ 84

// combinations(2, 3, 4, 5) ➞ 120

function combinations(items) {
  return [...arguments].filter(num => num !== 0).reduce((acc, cur) => acc * cur, 1);
}
