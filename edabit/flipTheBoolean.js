// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.

//   Examples
// reverse(true) ➞ false

// reverse(false) ➞ true

// reverse(0) ➞ "boolean expected"

// reverse(null) ➞ "boolean expected"

function reverse(bool) {
  if (typeof bool !== 'boolean') {
    return 'boolean expected';
  }
  return !bool;
}
