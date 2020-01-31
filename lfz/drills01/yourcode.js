
function sumArray(numbers){
  var answer = 0;
	for (var i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  return answer;
}

function fitWithinVal(numbers, value) {
  var answer = [];
  var sum = 0;
  for (var i = 0; i < numbers.length && sum !== value; i++) {
    if ((numbers[i] + sum) < value) {
      sum += numbers[i];
      answer.push(numbers[i]);
    }
  }
  return answer;
}

function getAllNamesShorterThan(names, value) {
  var answer = [];
  for (var i = 0; i < names.length; i++) {
    if (names[i].length < value) {
      answer.push(names[i]);
    }
  }
  return answer;
}

function makeLabel(input){
  return "" + input.greeting + " " +
  input.givenName + " " +
  input.familyName + "\n" +
  input["home address"].streetNumber + " " +
  input["home address"].streetName + "\n" +
  input["home address"].city + ", " +
  input["home address"].state + " " +
  input["home address"].zip;
  console.log(makeLabel("yes"));
}
