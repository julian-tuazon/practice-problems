function factor_of_sequence(num) {
  var current = num + 1;
  var answer = [0, current];
  for (var i = 0; i < num; i++) {
    for (var k = 0; k < num; k++) {
      answer.push(0);
    }
    current *= num;
    answer.push(current);
  }
  return answer;
}

console.log("2: ",factor_of_sequence(2));
console.log("3: ", factor_of_sequence(3));
