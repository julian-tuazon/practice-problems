function matrix_add (arr1, arr2) {
  var answer = [];
  for (var i = 0; i < arr1.length; i++) {
    var current = [];
    for (var k = 0; k < arr1[i].length; k++) {
      current.push(arr1[i][k] + arr2[i][k]);
    }
    answer.push(current);
  }
  return answer;
}

var array1 =
  [
    [1, 2, 3],
    [3, 4, 5],
    [6, 7, 8]
  ];
var array2 =
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ];

console.log(matrix_add(array1, array2));
