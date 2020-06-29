// Double Letters
// Create a function that takes a word and returns true if the word has two consecutive identical letters.

//   Examples
// doubleLetters("loop") ➞ true

// doubleLetters("yummy") ➞ true

// doubleLetters("orange") ➞ false

// doubleLetters("munchkin") ➞ false

function doubleLetters(word) {
  if (word.length < 2) return false;
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) return true;
  }
  return false;
}

exports.doubleLetters = doubleLetters;
