function rns(count) {
  var answer = [0, 1];
  var num1 = 0;
  var num2 = 1;
  var counter = count;
  if (counter === 1) {
    answer = [0];
  } else if (counter <= 0) {
    answer = 'blank';
  }
  return {
    fib: function main_rns() {
      if (counter > 2) {
        var current_num = num1 + num2;
        answer.push(current_num);
        num1 = num2;
        num2 = current_num;
        counter--;
        return main_rns(counter);
      } else {
        return answer;
      }
    }
  };
}

// var practice = rns(7);

console.log(rns(-1).fib());

var first_num = 0;
var second_num = 1;
var answer = [0, 1];
var initial = true;

function fibo(count) {
  if (initial && count === 1) {
    return [0];
  } else if (initial && count <= 0) {
    return 'blank';
  }
  initial = false;
  if (count > 2) {
    var current_num = first_num + second_num;
    answer.push(current_num);
    first_num = second_num;
    second_num = current_num;
    return fibo(count - 1);
  } else {
    return answer;
  }
}

console.log(fibo(1));
