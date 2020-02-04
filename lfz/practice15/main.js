function numeric_toggles(num) {
  var answer = [];
  var toggle = true;
  var incrementor = num;
  var currentNum = num;
  for (var i = 0; i < num * 2; i++) {
    for (var k = 0; k < num; k++) {
      if (toggle) {
        answer.push(currentNum += incrementor);
      } else {
        answer.push((currentNum += incrementor) * -1);
      }
    }
    incrementor++;
    if (toggle) {
      toggle = false;
    } else {
      toggle = true;
    }
  }
  console.log(answer);
}

numeric_toggles(2);
