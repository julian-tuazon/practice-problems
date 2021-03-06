// Vowel Replacer
// Create a function that replaces all the vowels in a string with a specified character.

//   Examples
// replaceVowels("the aardvark", "#") ➞ "th# ##rdv#rk"

// replaceVowels("minnie mouse", "?") ➞ "m?nn?? m??s?"

// replaceVowels("shakespeare", "*") ➞ "sh*k*sp**r*"
// Notes
// All characters will be in lower case.

function replaceVowels(str, ch) {
  return str.split('').map(x => x.replace(/[aeiou]/gi, ch)).join('');
}
