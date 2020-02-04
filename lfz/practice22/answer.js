function sort_object_list_by_field(input_array, sort_field) {
  for (var i = 0; i < input_array.length - 1; i++) {
    for (var k = 0; k < input_array.length - i - 1; k++) {
      if (input_array[k][sort_field] > input_array[k+1][sort_field]) {
        var temp = input_array[k];
        input_array[k] = input_array[k + 1];
        input_array[k + 1] = temp;
      }
    }
  }
  return input_array;
}

var array = [
  { name: 'John', age: 42, gender: 'M' },
  { name: 'Jack', age: 34, gender: 'M' },
  { name: 'Michael', age: 40, gender: 'M' },
  { name: 'Kendra', age: 48, gender: 'F' }
];
console.log(sort_object_list_by_field(array, 'age'));
