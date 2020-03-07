// Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

// Examples
// reverseCapitalize("abc") ➞ "CBA"

// reverseCapitalize("hellothere") ➞ "EREHTOLLEH"

// reverseCapitalize("input") ➞ "TUPNI"

function reverseCapitalize(str) {
  return str.split('').map(elem => elem.toUpperCase()).reverse().join('');
}
