// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

// arrayOfMultiples(7, 5) ➞[7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞[12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞[17, 34, 51, 68, 85, 102]

function arrayOfMultiples(num, length) {
  const output = [];
  for (let i = 0; i < length; i++) {
    output.push(num + num * i);
  }
  return output;
}
