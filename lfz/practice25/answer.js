function add_arrays(first_array, second_array) {
  var output_array = [];
  for (var i = 0; i < first_array.length; i++) {
    output_array.push(first_array[i] + second_array[i]);
  }
  return output_array;
}

var first = [3, -5, 15, 4];
var second = [3, 18, -5, -4];

console.log(add_arrays(first, second));
