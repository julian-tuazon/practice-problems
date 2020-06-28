// Negative Image
// Suppose an image can be represented as a 2D array of 0s and 1s.Write a function to reverse an image.Replace the 0s with 1s and vice versa.

//   Examples
// reverseImage([
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1]
// ]) ➞[
//   [0, 1, 1],
//   [1, 0, 1],
//   [1, 1, 0]
// ]

// reverseImage([
//   [1, 1, 1],
//   [0, 0, 0]
// ]) ➞[
//   [0, 0, 0],
//   [1, 1, 1]
// ]

// reverseImage([
//   [1, 0, 0],
//   [1, 0, 0]
// ]) ➞[
//   [0, 1, 1],
//   [0, 1, 1]
// ]

function reverseImage(image) {
  return image.map(arr => {
    return arr.map(num => {
      if (num === 0) return 1;
      return 0;
    });
  });
}

exports.reverseImage = reverseImage;
