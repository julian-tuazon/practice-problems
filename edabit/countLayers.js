// Write a function that counts how many concentric layers a rug.

//   Examples
// countLayers([
//   "AAAA",
//   "ABBA",
//   "AAAA"
// ]) ➞ 2

// countLayers([
//   "AAAAAAAAA",
//   "ABBBBBBBA",
//   "ABBAAABBA",
//   "ABBBBBBBA",
//   "AAAAAAAAA"
// ]) ➞ 3

// countLayers([
//   "AAAAAAAAAAA",
//   "AABBBBBBBAA",
//   "AABCCCCCBAA",
//   "AABCAAACBAA",
//   "AABCADACBAA",
//   "AABCAAACBAA",
//   "AABCCCCCBAA",
//   "AABBBBBBBAA",
//   "AAAAAAAAAAA"
// ]) ➞ 5

// Notes
// Multiple layers can share the same component so count them separately(example #2).
// Layers will be horizontally and vertically symmetric.
// There will be at least one layer for each rug.

function countLayers(rug) {
  let index = 0;
  let counter = 1;
  const halfwayY = Math.floor(rug.length / 2);
  let current = rug[halfwayY][0];
  let halfwayX = Math.floor(rug[0].length / 2);
  if (rug[0].length % 2 === 0) {
    halfwayX--;
  }
  for (let i = 0; i <= halfwayX; i++) {
    if (rug[halfwayY][i] !== current) {
      counter++;
      current = rug[halfwayY][i];
    }
  }
  return counter;
}
