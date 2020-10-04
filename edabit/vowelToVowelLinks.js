// Vowel to Vowel Links
// Given a sentence as str, return true if any two adjacent words have this property: One word ends with a vowel, while the word immediately after begins with a vowel(a e i o u).

//   Examples
// vowelLinks("a very large appliance") ➞ true

// vowelLinks("go to edabit") ➞ true

// vowelLinks("an open fire") ➞ false

// vowelLinks("a sudden applause") ➞ false
// Notes
// You can expect sentences in lowercase / uppercase.

function vowelLinks(str) {
  const wordsArr = str.split(' ');
  for (let i = 0; i < wordsArr.length - 1; i++) {
    const lastLetterOfCurrentWord = wordsArr[i][wordsArr[i].length - 1];
    const firstLetterOfNextWord = wordsArr[i + 1][0];
    const isVowel = char => /[aeiouAEIOU]/.test(char);
    if (isVowel(lastLetterOfCurrentWord) && isVowel(firstLetterOfNextWord)) return true;
  }
  return false;
}
