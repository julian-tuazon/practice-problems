// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

//   Examples
// checkEnding("abc", "bc") ➞ true

// checkEnding("abc", "d") ➞ false

// checkEnding("samurai", "zi") ➞ false

// checkEnding("feminine", "nine") ➞ true

// checkEnding("convention", "tio") ➞ false
// Notes
// All test cases are valid one word strings.

function checkEnding(str1, str2) {
  return str1.slice(str1.length - str2.length) === str2;
}
