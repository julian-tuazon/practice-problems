// Double Character Swap
// Write a function to replace all instances of character c1 with character c2 and vice versa.

//   Examples
// doubleSwap("aabbccc", "a", "b") ➞ "bbaaccc"

// doubleSwap("random w#rds writt&n h&r&", "#", "&")
// ➞ "random w&rds writt#n h#r#"

// doubleSwap("128 895 556 788 999", "8", "9")
// ➞ "129 985 556 799 888"
// Notes
// Both characters will show up at least once in the string.

function doubleSwap(str, c1, c2) {
  let swappedStr = '';
  for (const char of str) {
    if (char === c1) swappedStr += c2;
    else if (char === c2) swappedStr += c1;
    else swappedStr += char;
  }
  return swappedStr;
}
