function sort_object_list_by_name(input_array) {
  var output_array = [];
  for (var i = 0; i < input_array.length - 1; i++) {
    for (var k = 0; k < input_array.length - i - 1; k++) {
      if (input_array[k].name > input_array[k + 1].name) {
        var temp = input_array[k];
        input_array[k] = input_array[k+1];
        input_array[k + 1] = temp;
      }
    }
  }
  for (key in input_array) {
    output_array.push(input_array[key]);
  }
  return output_array;
}

console.log(sort_object_list_by_name(
  [
    { name: 'John', age: 42, gender: 'M' },
    { name: 'Jack', age: 34, gender: 'M' },
    { name: 'Michael', age: 40, gender: 'M' },
    { name: 'Kendra', age: 48, gender: 'F' }
  ]
));
