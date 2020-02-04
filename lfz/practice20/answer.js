function randomize_list(input_array) {
  for (var i = 0; i < input_array.length; i++) {
    var num = Math.floor(Math.random() * input_array.length);
    var num2 = Math.floor(Math.random() * input_array.length);
    var temp = input_array.splice(num, 1);
    input_array.splice(num2, 0, temp[0]);
  }
  return input_array;
}

console.log(randomize_list([3,1,5,5,2]));
