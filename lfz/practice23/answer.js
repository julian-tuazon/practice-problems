function find_factors(num) {
  var answer = [];
  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}

console.log(find_factors(16));
