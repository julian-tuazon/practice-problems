function math_sequences(num1, num2) {
  var answer = [];
  answer.push(num1 + "+" + num2 + "=" + (num1 + num2));
  answer.push(num1 + "-" + num2 + "=" + (num1 - num2));
  answer.push(num1 + "*" + num2 + "=" + (num1 * num2));
  answer.push(num1 + "/" + num2 + "=" + (num1 / num2));
  return answer;
}

console.log("math: ", math_sequences(2,5));
