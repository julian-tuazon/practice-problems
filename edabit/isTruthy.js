// A value is said to be "truthy" if it evaluates to true in a Boolean context.All values are truthy in JavaScript unless they're one of the following:

// false
// null
// undefined
// 0
// NaN
// ""
// In JavaScript, an empty object and an empty array are both considered "truthy," but an empty string is considered false when evaluated as a Boolean(this behavior is what we call "falsey").

// Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.

//   Examples
// isTruthy(0) ➞ 0

// isTruthy(false) ➞ 0

// isTruthy("") ➞ 0

// isTruthy("false") ➞ 1
// Notes
// You may have to take into account NaN's unique behavior in JavaScript. While other falsey values are equal to themselves, NaN != NaN

function isTruthy(input) {
  if (input) {
    return 1;
  }
  return 0;
}
