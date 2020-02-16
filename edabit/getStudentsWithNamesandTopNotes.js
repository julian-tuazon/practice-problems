// Create a function that takes an array of objects like { name: 'John', notes: [3, 5, 4] } and returns an array of objects like { name: "John", topNote: 5 }.

// If student has no notes(an empty array) then let's assume topNote: 0.

// Examples
// [
//   { name: "John", notes: [3, 5, 4] }
// ]➞[
//   { name: "John", topNote: 5 }
// ]
// Notes
// Try doing it with an arrow function.

function getStudentsWithNamesAndTopNotes(students) {
  let answer = [];
  students.forEach(elem => answer.push({ name: elem.name, topNote: (elem.notes.push(0) - elem.notes.length) + elem.notes.sort()[elem.notes.length - 1] }));
  return answer;
}
