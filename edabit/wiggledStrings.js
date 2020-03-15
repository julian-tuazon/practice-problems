// Wiggled Strings
// Create a function that returns an array of the given string but offset by spaces.Here are some more precise instructions:

// Keep adding spaces on the left until you have the same number of spaces as the word length.
// Then keep removing spaces until you reach the original word.
// Below are some helpful examples!

// Examples
// wiggleString("hello") ➞[
//   "hello",
//   " hello",
//   "  hello",
//   "   hello",
//   "    hello",
//   "     hello"
//   "    hello",
//   "   hello",
//   "  hello",
//   " hello",
//   "hello"
// ]

// wiggleString("EDABIT") ➞[
//   "EDABIT",
//   " EDABIT",
//   "  EDABIT",
//   "   EDABIT",
//   "    EDABIT",
//   "     EDABIT",
//   "      EDABIT",
//   "     EDABIT",
//   "    EDABIT",
//   "   EDABIT",
//   "  EDABIT",
//   " EDABIT",
//   "EDABIT"
// ]

// wiggleString("Wiggle Time") ➞[
//   "Wiggle Time",
//   " Wiggle Time",
//   "  Wiggle Time",
//   "   Wiggle Time",
//   "    Wiggle Time",
//   "     Wiggle Time",
//   "      Wiggle Time",
//   "       Wiggle Time",
//   "        Wiggle Time",
//   "         Wiggle Time",
//   "          Wiggle Time",
//   "           Wiggle Time",
//   "          Wiggle Time",
//   "         Wiggle Time",
//   "        Wiggle Time",
//   "       Wiggle Time",
//   "      Wiggle Time",
//   "     Wiggle Time",
//   "    Wiggle Time",
//   "   Wiggle Time",
//   "  Wiggle Time",
//   " Wiggle Time",
//   "Wiggle Time"
// ]

function wiggleString(s) {
  const strArr = [];
  for (let i = 0; i < s.length; i++) strArr.push(' '.repeat(i) + s);
  return [...strArr, ' '.repeat(s.length) + s, ...strArr.reverse()];
}
