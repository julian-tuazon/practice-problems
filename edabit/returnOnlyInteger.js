// Write a function that takes an array of elements and returns only the integers.

//   Examples
// returnOnlyInteger([9, 2, "space", "car", "lion", 16]) ➞[9, 2, 16]

// returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]) ➞[81, 123]

// returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]) ➞[10, 56, 20, 3]

// returnOnlyInteger(["String", true, 3.3, 1]) ➞[1]

function returnOnlyInteger(arr) {
  return arr.filter(elem => typeof elem === "number" && elem % 1 === 0);
}
