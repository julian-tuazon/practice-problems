function skippy_numbers(num) {
  var toggle = true;
  var current = num;
  var answer = [];
  for (var i = 0; i < num * 4; i++) {
    answer.push(current);
    if (toggle) {
      current++;
      toggle = false;
    } else {
      current += num;
      toggle = true;
    }
  }
  return answer;
}

console.log(skippy_numbers(2));
