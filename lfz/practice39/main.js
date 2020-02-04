function easy(arr) {
 for (var i = 0; i < arr.length - 1; i++) {
   console.log("i: ", i, "arr[i]: ", arr[i], "i + 1: ", i + 1, "arr[i + 1]: ", arr[i + 1], "arr: ", arr);
   if (!(arr[i] <= arr[i + 1])) {
    return false;
   }
 }
 return true;
}

console.log(easy([1, 1, 3, 5, 7]));
console.log(easy([1, 3, 1, 5, 7]));

// 0 2 4 22 14  4 4

// 0, 1, 2, 4, 1, 1, 1


function hard(arr) {
  // if even:
  // half of arr length of them need to be surrounded by smaller
  // half of arr length need to be surrounded by bigger
  // two items only need one neighbor

  // if odd:
  // sort array in descending order
  for (var i = 0; i < arr.length - 1; i++) {
    for (var k = 0; k < arr.length - i - 1; k++) {
      if (arr[k] < arr[k + 1]) {
        var temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
      }
    }
  }
  var halfIndex = Math.floor(arr.length / 2);
  console.log("halfIndex: ", halfIndex);
  // split array into 2 with bigger nums and smaller nums
  var bigger = arr.slice(0, halfIndex);
  var smaller = arr.slice(halfIndex, arr.length);
  let newArr = [];
  for (let i = 0; i < smaller.length; i++) {
    if (smaller[i] !== null) {
      newArr.push(smaller[i]);
    }
    if (bigger[i] !== null) {
      newArr.push(bigger[i]);
    }
  }
  let checkToggle = true;
  for (let m = 0; m < newArr.length - 1; m++) {
    if (checkToggle) {
      if (newArr[m] >= newArr[m + 1]) {
        return false;
      }
      checkToggle = false;
    } else {
      if (newArr[m] <= newArr[m + 1]) {
        return false;
      }
      checkToggle = true;
    }
  }
  return true;
}

console.log("[8, 2, 4]", hard([8, 2, 4]));
console.log("[0, 1, 2, 4, 1, 1, 1]" ,hard([0, 1, 2, 4, 1, 1, 1]));
console.log("[0, 4, 22, 4, 14, 4, 2]", hard([0, 4, 22, 4, 14, 4, 2]));
console.log("[0, 1, 2, 4, 1, 4 ]", hard([0, 1, 2, 4, 1, 4 ]));
