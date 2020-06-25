// Capitalize the Names
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

//   Examples
// capMe(["mavis", "senaida", "letty"]) ➞["Mavis", "Senaida", "Letty"]

// capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞["Samuel", "Mabelle", "Letitia", "Meridith"]

// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞["Slyvia", "Kristal", "Sharilyn", "Calista"]
// Notes
// Don't change the order of the original array.
// Notice in the second example above, "MABELLE" is returned as "Mabelle".

function capMe(arr) {
  return arr.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());
}

exports.capMe = capMe;
