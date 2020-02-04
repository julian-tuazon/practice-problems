function character_convert(str) {
  var answer = "";
  for (var i = 0; i < str.length; i++) {
    answer += str.charCodeAt(i);
  }
  return answer;
}

console.log(character_convert('the cat in the hat'));
