// Get Student Names
// Create a function that takes an array of students and returns an array of student names.

//   Examples
// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞["Becky", "John", "Steve"]

function getStudentNames(students) {
  return students.map(student => student.name);
}
