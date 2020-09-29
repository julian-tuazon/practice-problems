// Recomposing Strings
// In this challenge, the goal is recomposing scrambled strings made of two or more words.

// Every string has to be reversed not in its totality, but by vowels or consonants clusters in the order they are found; after splitting the string in groups, and reversing every group with more than a letter, you'll obtain the correct sequence:

// String = "KiKdaola"

// Separation vowels / consonants = K  i  Kd  ao  l  a

// Reversing the groups = K  i  dK  oa  l  a

// New string = KidKoala
// Now, you have to insert a space between the words.A word starts with a capital letter:

// String = "KidKoala"

// Result = "Kid Koala"
// Given a string, implement a function that returns, in turn, a new correct string, following the above instructions.

//   Examples
// recompose("KiKdaola") ➞ "Kid Koala"

// recompose("BaosdrOCfanada") ➞ "Boards Of Canada"
// // B  ao  sdr  O  Cf  a  n  a  d  a
// // B  oa  rds  O  fC  a  n  a  d  a

// recompose("hCemicarBlohtesr") ➞ "Chemical Brothers"
// // hC  e  m  i  c  a  rBl  o  ht  e  sr
// // Ch  e  m  i  c  a  lBr  o  th  e  rs
// Notes
// Every given string will be valid, containing only letters and at least two words(identified by the capital letters).
// Remember to reverse the clusters of letters and not the entire string.

function recompose(string) {
  const vowels = /[aeiouAEIOU]/;
  let currentStr = '';
  const strFragmentList = [];
  for (const char of string) {
    const isVowel = vowels.test(char);
    const lastCharIsVowel = vowels.test(currentStr[currentStr.length - 1]);
    const isSameCharType = isVowel === lastCharIsVowel;
    if (!currentStr || isSameCharType) {
      currentStr += char;
    } else if (!isSameCharType) {
      strFragmentList.push(currentStr);
      currentStr = char;
    }
  }
  if (currentStr) strFragmentList.push(currentStr);
  const reversedStrFragmentList = strFragmentList.map(str => {
    let reversedStr = '';
    const capitalLetters = /[A-Z]/;
    for (let i = str.length - 1; i >= 0; i--) {
      const char = str[i];
      const isUpper = capitalLetters.test(char);
      if (isUpper) reversedStr += ' ';
      reversedStr += char;
    }
    return reversedStr;
  });
  return reversedStrFragmentList.join('').trim();
}
