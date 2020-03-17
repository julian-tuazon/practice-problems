// Filter out Strings from an Array
// Create a function which filters out strings from an array and returns a new array containing only integers.

//   Examples
// filterList([1, 2, 3, "x", "y", 10]) ➞[1, 2, 3, 10]

// filterList([1, "a", 2, "b", 3, "c"]) ➞[1, 2, 3]

// filterList([0, -32, "&@A", 64, "99", -128]) ➞[0, -32, 64, -128]

function filterList(l) {
  return l.filter(elem => typeof elem !== 'string');
}
