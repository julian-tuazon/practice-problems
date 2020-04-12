// Algebra Sequence — Boxes
// Create a function that takes a number(step) as an argument and returns the amount of boxes in that step of the sequence.

// Box Sequence Image

// Step 0: Start with 0
// Step 1: Add 3
// Step 2: Subtract 1
// Repeat Step 1 & 2 ...
// Examples
// boxSeq(0) ➞ 0

// boxSeq(1) ➞ 3

// boxSeq(2) ➞ 2
// Notes
// Step(the input) is always a positive integer(or zero).

function boxSeq(step) {
  if (step === 0) return 0;
  if (step % 2 !== 0) return 3 + boxSeq(--step);
  return -1 + boxSeq(--step);
}
