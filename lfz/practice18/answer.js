function average_array(arr, size) {
  var total = 0;
  var area = size * size;
  var x = 0;
  var y = 0;
  if (!(arr.length % size === 0 && arr[0].length % size === 0)) {
    return "can't do it, chief";
  }
  while (y < arr.length) {
    while (x < arr[0].length) {
      for (var i = 0; i < size; i++) {
        for (var k = 0; k < size; k++) {
          total += arr[i + y][k + x];
        }
      }
      for (var m = 0; m < size; m++) {
        for (var p = 0; p < size; p++) {
          arr[m + y][p + x] = Math.floor(total/area * 10) / 10;
        }
      }
      total = 0;
      x += size;
    }
    y += size;
    x = 0;
  }
  return arr;
}

var input2 = [
  [0, 1, 3],
  [0, 2, 3]
];

var input_array =
[
	[1, 1, 4, 7, 8, 3, 6, 9, 5, 8],
	[0, 4, 3, 3, 2, 3, 1, 5, 8, 1],
	[5, 8, 5, 1, 1, 8, 0, 7, 4, 1],
	[6, 3, 9, 1, 3, 8, 1, 6, 1, 6]
];

console.log(average_array(input_array, 2));
console.log(average_array(input2, 2));
