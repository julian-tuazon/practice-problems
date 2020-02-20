function getPath(str){
  var currentWord = "";
  var words = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== "/") {
      currentWord += str[i];
    } else {
      words.push(currentWord);
      currentWord = "";
    }
  }
  words.push(currentWord);
  return words;
}

function getPathParts(str){
  var protocol = str.indexOf("://");
  var host = str.indexOf(".com") + 4;
  var path = str.indexOf("/", host);
  var file = str.lastIndexOf("/");
  var answer = {
    protocol: str.slice(0, protocol),
    host: str.slice(protocol + 3, host),
    port: parseInt(str.slice(host + 1, path)),
    path: str.slice(path + 1, file),
    file: str.slice(file + 1, str.length),
  };
  return answer;
}

function getCapitalCount(words){
  var counter = 0;
  for (var i = 0; i < words.length; i++) {
    var currentChar = words[i].charAt(0);
    if (currentChar == currentChar.toUpperCase()) {
      counter++;
    }
  }
  return counter;
}

function correctCalcChecker(objArr){
  var answer = [];
  for (var i = 0; i < objArr.length; i++) {
    var item = objArr[i];
    switch (item.op) {
      case "+":
        if (item.num1 + item.num2 === item.result) {
          answer.push(item);
        }
        break;
      case "-":
        if (item.num1 - item.num2 === item.result) {
          answer.push(item);
        }
        break;
      case "/":
        if (item.num1 / item.num2 === item.result) {
          answer.push(item);
        }
        break;
      case "*":
        if (item.num1 * item.num2 === item.result) {
          answer.push(item);
        }
        break;
    }
  }
  return answer;
}
