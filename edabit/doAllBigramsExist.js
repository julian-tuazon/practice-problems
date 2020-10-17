// Do All Bigrams Exist ?
//   You are given an input array of bigrams, and an array of words.

// Write a function that returns true if every single bigram from this array can be found at least once in an array of words.

//   Examples
// canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true

// canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
// # "cu" does not exist in any of the words.

//   canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true

// canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false
// Notes
// A bigram is string of two consecutive characters in the same word.

function canFind(bigrams, words) {
  words = words.join(' ');
  for (const bigram of bigrams) {
    if (words.indexOf(bigram) === -1) return false;
  }
  return true;
}
