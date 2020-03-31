// Word Endings
// Create a function that adds a string ending to each member in an array.

//   Examples
// addEnding(["clever", "meek", "hurried", "nice"], "ly")
// ➞["cleverly", "meekly", "hurriedly", "nicely"]

// addEnding(["new", "pander", "scoop"], "er")
// ➞["newer", "panderer", "scooper"]

// addEnding(["bend", "sharpen", "mean"], "ing")
// ➞["bending", "sharpening", "meaning"]

function addEnding(arr, ending) {
  return arr.map(word => word + ending);
}
