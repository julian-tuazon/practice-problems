function permutations(str) {
  var answer = [];

  for (var i = 0; i < str.length; i++) {
    var strArr = str.split("");
    var currentStr = strArr.splice(i, 1);
    strArr.splice(0, 0, currentStr[0]);

    answer.push(strArr.join(""));

    var temp = strArr[strArr.length - 1];
    strArr[strArr.length - 1] = strArr[strArr.length - 2];
    strArr[strArr.length - 2] = temp;

    answer.push(strArr.join(""));

    console.log("strArr: ", strArr);
    console.log("answer: ", answer);
  }
}

permutations('abc');
