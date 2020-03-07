// Create a function that accepts a string(of a persons first and last name) and returns a string with the first and last name swapped.

//   Examples
// nameShuffle("Donald Trump") ➞ "Trump Donald"

// nameShuffle("Rosie O'Donnell") ➞ "O'Donnell Rosie"

// nameShuffle("Seymour Butts") ➞ "Butts Seymour"

function nameShuffle(str) {
  return str.split(' ').reverse().join(' ');
}
