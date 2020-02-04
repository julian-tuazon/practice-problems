function vowels(str) {
  var answer = "";
  var reg = new RegExp("[aeiou]");
  for (var i = 0; i < str.length; i++) {
    if (reg.test(str.charAt(i))) {
      answer += str.charAt(i);
    }
  }
  return answer;
}

console.log(vowels("four score and seven years ago"));
