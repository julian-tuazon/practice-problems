function sortThis(strArr) {
  for (var i = 0; i < strArr.length - 1; i++) {
    for (var k = 0; k < strArr.length - i - 1; k++) {
      if (strArr[k] > strArr[k + 1]) {
        var temp = strArr[k];
        strArr[k] = strArr[k + 1];
        strArr[k + 1] = temp;
      }
    }
  }
  return strArr;
}

function sortThisStr(strArr) {
  for (var i = 0; i < strArr.length - 1; i++) {
    for (var k = 0; k < strArr.length - i - 1; k++) {
      if (strArr[k] > strArr[k + 1]) {
        var temp = strArr[k];
        strArr[k] = strArr[k + 1];
        strArr[k + 1] = temp;
      }
    }
  }
  return strArr;
}

console.log("Bubble sort: ", sortThis([5, 1, 3, 2]));
console.log("Bubble sort strings: ", sortThisStr(["klein", "BIGGIE", "aradley", "John", "WIZ*ONE"]));
