// Missing Letters
// Given a string containing unique letters, return a sorted string with the letters that don't appear in the string.

// Examples
// getMissingLetters("abcdefgpqrstuvwxyz") ➞ "hijklmno"

// getMissingLetters("zyxwvutsrq") ➞ "abcdefghijklmnop"

// getMissingLetters("abc") ➞ "defghijklmnopqrstuvwxyz"

// getMissingLetters("abcdefghijklmnopqrstuvwxyz") ➞ ""
// Notes
// The combination of both strings should be 26 elements long, including all the letters in the alphabet.
// Letters will all be in lowercase.

function getMissingLetters(s) {
  const presentLettersObj = {};
  for (const letter of s) {
    presentLettersObj[letter] = true;
  }
  let missingLettersStr = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (const letter of alphabet) {
    if (!presentLettersObj[letter]) missingLettersStr += letter;
  }
  return missingLettersStr;
}
