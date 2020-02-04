function arrayFactors(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = [];
    for (var k = 0; k < arr.length; k++) {
      if (arr[i] !== arr[k] && arr[i] % arr[k] === 0 && !obj[arr[i]].includes(arr[k])) {
        obj[arr[i]].push(arr[k]);
      }
    }
  }
  console.log(obj);
}

arrayFactors([4, 2, 8, 6, 3, 9, 9, 9, 2, 2, 2]);
