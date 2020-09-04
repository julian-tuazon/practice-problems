// Travelling Salesman Problem
// Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city and returns to the origin city ?

//   Return the total number of possible paths a salesman can travel, given n paths.

//     Examples
// paths(4) ➞ 24

// paths(1) ➞ 1

// paths(9) ➞ 362880

function paths(n) {
  if (n === 1) return n;
  return n * paths(--n);
}
