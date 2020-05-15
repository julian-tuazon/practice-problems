// Triple + Double = So Much Trouble
// Create a function that takes two integers and returns true if a number repeats three times in a row at any place in num1 AND that same number repeats two times in a row in num2.

//   Examples
// trouble(451999277, 41177722899) ➞ true

// trouble(1222345, 12345) ➞ false

// trouble(666789, 12345667) ➞ true

// trouble(33789, 12345337) ➞ false
// Notes
// You can expect every test case to contain exactly two integers.

function trouble(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  let result = false;
  str1.split('').forEach(num => {
    const regex1 = new RegExp(`${num}{3}`);
    const regex2 = new RegExp(`${num}{2}`);
    if (regex1.test(str1) && regex2.test(str2)) result = true;
  });
  return result;
}
