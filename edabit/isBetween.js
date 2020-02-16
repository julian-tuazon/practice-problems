// Write a function that takes three string arguments(first, last, word) and returns true if (when alphabetically sorted) word is found between first and last.

//   Examples
// isBetween("apple", "banana", "azure") ➞ true

// isBetween("monk", "monument", "monkey") ➞ true

// isBetween("bookend", "boolean", "boost") ➞ false
// Notes
// All letters will be in lowercase.
// All three words will be different.

function isBetween(first, last, word) {
  return word > first && word < last;
}
