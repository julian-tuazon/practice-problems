// Find the Missing Number
// Create a function that takes an array of numbers between 1 and 10(excluding one number) and returns the missing number.

//   Examples
// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5

// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10

// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
// Notes
// The array of numbers will be unsorted(not in order).
// Only one number will be missing.

function missingNum(arr) {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  for (let i = 0; i < arr.length; i++) {
    nums.splice(nums.indexOf(arr[i]), 1);
  }
  return nums[0];
}
