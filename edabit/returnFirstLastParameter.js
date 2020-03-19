// Return First and Last Parameter
// Write two functions:

// firstArg() should return the first parameter passed in.
//   lastArg() should return the last parameter passed in.
// Return undefined if the function takes no parameters.

//   Examples
// firstArg(1, 2, 3) ➞ 1

// lastArg(1, 2, 3) ➞ 3

// firstArg(8) ➞ 8

// lastArg(8) ➞ 8
// Notes
// Return undefined if the function takes no parameters.
// If the function only takes in one parameter, the firstArg and lastArg functions should return the same value.

function firstArg() {
  if (Object.keys(arguments).length === 0) return undefined;
  return arguments[0];
}

function lastArg() {
  if (Object.keys(arguments).length === 0) return undefined;
  return arguments[arguments.length - 1];
}
