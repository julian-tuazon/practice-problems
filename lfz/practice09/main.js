function fittingWords(str, strArr) {
  var chars = str.split("");
  var answer = [];

  console.log(chars);

  for (var i = 0; i < strArr.length; i++) {
    var inside = false;

    for (var m = 0; m < chars.length; m++) {
      var regex = new RegExp(chars[m]);
      inside = regex.test(strArr[i]);
      if (!inside) {
        break;
      }
    }
    if (inside) {
      answer.push(strArr[i]);
    }
  }
  return answer;
}

var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute', "cayman", "ontarioc"];
console.log(fittingWords("cat", myArray));
