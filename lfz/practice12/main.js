function math_sequence(num) {
  var answer = [];
  var currentNum = num * 2;
  answer.push(currentNum);
  var length;
  if (num % 2 === 0) {
    length = 18;
  } else {
    length = 17;
  }
  while (answer.length < length && currentNum < num * 10) {
    currentNum += 2;
    answer.push(currentNum);
  }
  if (currentNum >= num * 10) {
    currentNum = 5.5;
    answer.push(currentNum);
  }
  while (answer.length < length) {
    currentNum += 0.5;
    answer.push(currentNum);
  }
  return answer;
}

console.log(math_sequence(2));
console.log(math_sequence(5));
