// Max Adjacent Product
// Given an array of integers, find the pair of adjacent elements that have the largest product and return that product.

//   Examples
// adjacentProduct([3, 6, -2, -5, 7, 3]) ➞ 21

// adjacentProduct([5, 6, -4, 2, 3, 2, -23]) ➞ 30

// adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10]) ➞ 80
// Notes
// Each array has at least two elements.

function adjacentProduct(arr) {
  let maxProduct = arr[0] * arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    const currentProduct = arr[i] * arr[i + 1];
    if (currentProduct > maxProduct) maxProduct = currentProduct;
  }
  return maxProduct;
}
