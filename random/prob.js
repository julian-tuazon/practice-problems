// find if theres any duplicates in Array
// given an array of integers

// input: [1, 1, 2, 3]
// output: true

function findDuplicate(arr) {
  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    if (!cache[arr[i]])  {
      cache[arr[i]] = true;
    } else {
      return true;
    }
  }
  return false;
}

console.log(findDuplicate([1, 1, 2, 3]))
