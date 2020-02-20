function countOccurences(words, key){
  var counter = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i] === key) {
      counter++;
    }
  }
  return counter;
}

function wordLengths(words, length){
  var answer = [];
  for (var i = 0; i < words.length; i++) {
    answer.push(words[i].length);
  }
  return answer;
}

function getMinMaxMean(numbers){
  if (numbers) {
    var max = numbers[0];
    var min = numbers[0];
    var mean = 0;
  }
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    } else if (numbers[i] > max) {
      max = numbers[i];
    }
    mean += numbers[i];
  }
  return {
    min: min,
    max: max,
    mean: mean/numbers.length,
  };
}

function findMode(numbers){
  var present = {};
  for (var i = 0; i < numbers.length; i++) {
    if (!present.hasOwnProperty(numbers[i])) {
      present[numbers[i]] = 1;
      console.log("Initialized: ", numbers[i])
    } else {
      present[numbers[i]] += 1;
      console.log("Value of: ", numbers[i], " increased to ", present[numbers[i]]);
    }
  }
  console.log("Present obj: ", present);

  var newObj = {
    car: "ferrari",
    boat: 'banana',
    alpha: 'beta',
    3: 'berlin',
    5: 'frankfurt',
    2: 'moscow',
  }
  console.log("Are object properties ordered?: ", newObj);


  var answer = [];
  var max = 0;
  for (k in present) {
    if (present[k] > max) {
      max = present[k];
      console.log("Value of present[k]", present[k]);
      console.log("Value of k", k);
    }
  }
  for (m in present) {
    if (present[m] === max) {
      answer.push(m);
      console.log("Value of present[m]", present[m]);
      console.log("Value of m", m);
    }
  }
  console.log("The final array: ", answer);

  for (var p = numbers.length-1; p >= 0; p--) {
    for (var r = 0; r < answer.length; r++) {
      console.log("Processing latest numbers: ", numbers[p]);
      if (numbers[p] == answer[r]) {
        console.log("What is the last highest num?: ", numbers[p]);
        return parseInt(numbers[p]);
      }
    }
  }
}
