// The Missing Link
// Your function will get an array with a number sequence.However, one item will be missing.It's your job to find out which one is not in the array.

// To illustrate, given the array[1, 3, 4, 5], 2 is missing so the output must be 2.

// Examples
// missing([1, 3, 4, 5]) ➞ 2

// missing([2, 4, 6, 8, 10, 14, 16]) ➞ 12

// missing([1.5, 2, 3]) ➞ 2.5
// Notes
// The missing item will never be the smallest or largest number in the array.
// In every array, exactly one item is missing.

function missing(arr) {
  let diff = arr[1] - arr[0];
  if (arr[2] - arr[1] < diff) diff = arr[2] - arr[1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > diff) return arr[i] + diff;
  }
}
