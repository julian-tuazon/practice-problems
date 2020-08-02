// Square Every Digit
// Create a function that squares every digit of a number.

//   Examples
// squareDigits(9119) ➞ 811181

// squareDigits(2483) ➞ 416649

// squareDigits(3212) ➞ 9414
// Notes
// The function receives an integer and must return an integer.

function squareDigits(n) {
  const strNum = n.toString();
  let strAnswer = '';
  for (let i = 0; i < strNum.length; i++) {
    strAnswer += Math.pow(Number(strNum[i]), 2).toString();
  }
  return Number(strAnswer);
}
