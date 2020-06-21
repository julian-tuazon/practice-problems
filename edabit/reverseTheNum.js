// Reverse the Number
// Create a function that takes an integer n and reverses it.

//   Examples
// rev(5121) ➞ "1215"

// rev(69) ➞ "96"

// rev(-122157) ➞ "751221"
// Notes
// If the number is negative, treat it like it's positive.

function rev(n) {
  let numStr = n.toString();
  if (numStr[0] === '-') numStr = numStr.slice(1);
  return numStr.split('').reverse().join('');
}

exports.rev = rev;
