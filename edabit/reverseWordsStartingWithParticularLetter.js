// Reverse Words Starting With a Particular Letter
// Write a function that reverses all the words in a sentence that start with a particular letter.

//   Examples
// specialReverse("word searches are super fun", "s")
// ➞ "word sehcraes are repus fun"

// specialReverse("first man to walk on the moon", "m")
// ➞ "first nam to walk on the noom"

// specialReverse("peter piper picked pickled peppers", "p")
// ➞ "retep repip dekcip delkcip sreppep"
// Notes
// Reverse the words themselves, not the entire sentence.
// All characters in the sentence will be in lower case.

function specialReverse(s, c) {
  return s.split(' ').map(word => {
    if (word[0] === c) return word.split('').reverse().join('');
    return word;
  }).join(' ');
}
