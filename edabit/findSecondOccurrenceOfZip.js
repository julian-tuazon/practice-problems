// Find the Second Occurrence of "zip" in a String
// Write a function that returns the position of the second occurrence of "zip" in a string, or - 1 if it does not occur at least twice.Your code should be general enough to pass every possible case where "zip" can occur in a string.

//   Examples
// findZip("all zip files are zipped") ➞ 18

// findZip("all zip files are compressed") ➞ -1
// Notes
// Uppercase "Zip" is not the same as lowercase "zip".

function findZip(str) {
  const firstIndex = str.indexOf('zip');
  if (firstIndex === -1) return -1;
  const secondIndex = str.indexOf('zip', firstIndex + 3);
  return secondIndex;
}

exports.findZip = findZip;
