function romanNumerals(num) {
  if (num === 0 || num >= 4000) {
    return 'Cannot compute!';
  }
  var answer = '';
  var str = num.toString();
  var place = str.length - 1;
  for (var i = 0; i < str.length; i++) {
    console.log("Let's loop!: ", i);
    var current = parseInt(str.charAt(i));
    console.log("Current value: ", current)
    switch (place) {
      case 3:
        for (var k = 0; k < current; k++) {
          answer += 'M';
        }
        console.log("Adding thousandths place", answer);
        break;
      case 2:
        if (current !== 0) {
          if (current <= 3) {
            for (var k = 0; k < current; k++) {
              answer += 'C';
            }
          }
          if (current === 4) {
            answer += 'CD';
          }
          if (current >= 5 && current < 9) {
            answer += 'D';
            for (var k = 0; k < current - 5; k++) {
              answer += 'C';
            }
          }
          if (current === 9) {
            answer += 'CM';
          }
        }
        console.log("Adding hundredths place", answer);
        break;
      case 1:
        if (current !== 0) {
          if (current <= 3) {
            for (var k = 0; k < current; k++) {
              answer += 'X';
              console.log('activated me')
            }
          }
          if (current === 4) {
            answer += 'XL';
          }
          if (current >= 5 && current < 9) {
            answer += 'L';
            for (var k = 0; k < current - 5; k++) {
              answer += 'X';
            }
          }
          if (current === 9) {
            answer += 'XC';
          }
        }
        console.log("Adding tens place", answer);
        break;
      case 0:
        if (current !== 0) {
          if (current <= 3) {
            for (var k = 0; k < current; k++) {
              answer += 'I';
            }
          }
          if (current === 4) {
            answer += 'IV';
          }
          if (current >= 5 && current < 9) {
            answer += 'V';
            for (var k = 0; i < current - 5; k++) {
              answer += 'I';
            }
          }
          if (current === 9) {
            answer += 'IX';
          }
        }
        console.log("Adding ones place", answer);
        break;
    }
    place--;
    console.log("decrement place: ", place);
  }
  return answer;
}

console.log(romanNumerals(3945));
console.log(romanNumerals(0));
console.log(romanNumerals(40000));
