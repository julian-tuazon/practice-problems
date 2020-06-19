// Match the Last Item
// Create a function that takes an array of items and checks if the last item matches the rest of the array.

//   Examples
// matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// // The last item is the rest joined.

// matchLastItem([1, 1, 1, "11"]) ➞ false
// // The last item should be "111".

// matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true
// Notes
// The array is always filled with items.

function matchLastItem(arr) {
  const lastItem = arr.pop();
  let prevItems = '';
  for (const item of arr) {
    prevItems += item;
  }
  return prevItems === lastItem;
}

exports.matchLastItem = matchLastItem;
