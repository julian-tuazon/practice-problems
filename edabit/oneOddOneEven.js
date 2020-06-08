// One Odd and One Even
// Given a two digit number, return true if that number contains one even and one odd digit.

//   Examples
// oneOddOneEven(12) ➞ true

// oneOddOneEven(55) ➞ false

// oneOddOneEven(22) ➞ false

function oneOddOneEven(n) {
  const test = { odd: false, even: false };
  const nums = n.toString();
  for (const num of nums) {
    if (Number(num) % 2 === 0) test.even = true;
    else test.odd = true;
  }
  return test.odd && test.even;
}

exports.oneOddOneEven = oneOddOneEven;
