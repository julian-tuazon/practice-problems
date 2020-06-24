// Even or Odd Number of Factors
// Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors.

//   Examples
// factorGroup(33) ➞ "even"

// factorGroup(36) ➞ "odd"

// factorGroup(7) ➞ "even"

function factorGroup(num) {
  let factorCounter = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factorCounter++;
  }
  return factorCounter % 2 === 0 ? 'even' : 'odd';
}

exports.factorGroup = factorGroup;
