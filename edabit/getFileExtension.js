// Get the File Extension
// Write a function that maps files to their extension names.

//   Examples
// getExtension(["code.html", "code.css"])
// ➞["html", "css"]

// getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])
// ➞["jpg", "pdf", "mp3"]

// getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])
// ➞["rb", "cpp", "py", "js"]

function getExtension(arr) {
  return arr.map(file => file.slice(file.indexOf('.') + 1, file.length));
}
