// What's the Missing Letter?
// Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

// If there are no missing letters in the string, return "No Missing Letter".

//   Examples
// missingLetter("abdefg") ➞ "c"

// missingLetter("mnopqs") ➞ "r"

// missingLetter("tuvxyz") ➞ "w"

// missingLetter("ghijklmno") ➞ "No Missing Letter"
// Notes
// The given string will never have more than one missing letter.

function missingLetter(str) {
  if (!str) return 'No Missing Letter';
  let charValue = str.charCodeAt(0) - 1;
  for (const char of str) {
    if (char.charCodeAt(0) !== ++charValue) {
      return String.fromCharCode(charValue);
    }
  }
  return 'No Missing Letter';
}
