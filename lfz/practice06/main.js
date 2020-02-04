function fibonacci(num) {
  var first = 0;
  var second = 1;
  var answer = ["0", "1"];
  switch (num) {
    case 0:
      console.log("Nothing");
      break;
    case 1:
      console.log("0");
      break;
    case 2:
      console.log("0 1");
      break;
    default:
      for (var i = 0; i < num - 2; i++) {
        var sum = first + second;
        answer.push(sum.toString());
        first = second;
        second = sum;
      }
      console.log(answer.join(" "));
  }
}

fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(5);
fibonacci(10);
fibonacci(20);
