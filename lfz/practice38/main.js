function reverse_t9(keys) {
  var answer = "";
  for (var i = 0; i < keys.length; i++) {
    var str = "";
    var k = i;
    while (keys.charAt(i) === keys.charAt(k) && k < keys.length) {
      str += keys.charAt(k);
      k++;
    }
    i = k - 1;
    var arr = false;
    switch (str.charAt(0)) {
      case '2':
        arr = ['a', 'b', 'c'];
        break;
      case '3':
        arr = ['d', 'e', 'f'];
        break;
      case '4':
        arr = ['g', 'h', 'i'];
        break;
      case '5':
        arr = ['j', 'k', 'l'];
        break;
      case '6':
        arr = ['m', 'n', 'o'];
        break;
      case '7':
        arr = ['p', 'q', 'r', 's'];
        break;
      case '8':
        arr = ['t', 'u', 'v'];
        break;
      case '9':
        arr = ['w', 'x', 'y', 'z'];
        break;
    }
    if (arr && str) {
      answer += arr[str.length - 1];
    }
  }
  return answer;
}

console.log(reverse_t9('44 444 44666 9 277733 99966688'));
console.log(reverse_t9('4449999  666 66 33'));
