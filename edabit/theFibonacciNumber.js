// The Fibonacci Number
// Create a function that, given a number, returns the corresponding Fibonacci number.

//   Examples
// fibonacci(3) ➞ 3

// fibonacci(7) ➞ 21

// fibonacci(12) ➞ 233
// Notes
// The first number in the sequence starts at 1(not 0).

function fibonacci(num) {
  if (num < 2) return 1;
  let prevNum = 1;
  let currentNum = 1;
  const fiboSequence = counter => {
    if (!counter) return currentNum;
    const currentSum = prevNum + currentNum;
    prevNum = currentNum;
    currentNum = currentSum;
    return fiboSequence(--counter);
  };
  return fiboSequence(num - 1);
}
