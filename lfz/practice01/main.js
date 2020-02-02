function biggerWords(str, strArr) {
  var answer = [];
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i].length > str.length) {
      answer.push(strArr[i]);
    }
  }
  return answer;
}

console.log(biggerWords("che", ["eat", "no", "tiger", "ohhhhyeahhhh"]));
