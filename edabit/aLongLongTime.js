// A Long Long Time
// Create a function that takes three values:

// h hours
// m minutes
// s seconds
// Return the value that's the longest duration.

// Examples
// longestTime(1, 59, 3598) ➞ 1

// longestTime(2, 300, 15000) ➞ 300

// longestTime(15, 955, 59400) ➞ 59400
// Notes
// No two durations will be the same.

function longestTime(h, m, s) {
  const max = Math.max(h * 3600, m * 60, s);
  if (max === s) return s;
  if (max / 60 === m) return m;
  if (max / 3600 === h) return h;
}
