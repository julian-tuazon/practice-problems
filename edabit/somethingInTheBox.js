// Something in the Box ?
//   Create a function that returns true if an asterisk * is inside a box.

//     Examples
// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) ➞ true

// inBox([
//   "*####",
//   "# #",
//   "#  #*",
//   "####"
// ]) ➞ false

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) ➞ false
// Notes
// The asterisk may be in the array, however, it must be inside the box, if it exists.

function inBox(arr) {
  if (arr.length < 3) return false;
  for (let i = 1; i < arr.length - 1; i++) {
    const index = arr[i].indexOf('*');
    if (
      index !== -1 &&
      index !== 0 &&
      index !== arr[i].length - 1
    ) return true;
  }
  return false;
}

exports.inBox = inBox;
