// The Reverser!
// The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

// Examples
// reverse("Hello World") ➞ "DLROw OLLEh"

// reverse("ReVeRsE") ➞ "eSrEvEr"

// reverse("Radar") ➞ "RADAr"
// Notes
// There will be no punctuation in any of the test cases.

function reverse(str) {
  if (!str) return str;
  const isUpperCase = letter => letter.toUpperCase() === letter;
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    const letter = str[i];
    if (isUpperCase(letter)) reversedStr += letter.toLowerCase();
    else reversedStr += letter.toUpperCase();
  }
  return reversedStr;
}
