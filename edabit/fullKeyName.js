// Given a string containing a key signature written in shorthand, create a function which replaces the shorthand with its full written name.

// A lowercase letter denotes a minor key.
// An uppercase letter denotes a major key.
// See the examples below for a more helpful guide!

// Examples
// fullKeyName("Prelude in C") ➞ "Prelude in C major"

// fullKeyName("Fugue in c") ➞ "Fugue in C minor"

// fullKeyName("Toccata and Fugue in d") ➞ "Toccata and Fugue in D minor"

// fullKeyName("Sonata in eb") ➞ "Sonata in Eb minor"
// Notes
// Write the letter name in uppercase(ignore b and #).
//   Write "major" or "minor" in all lowercase(rather than "Major" or "Minor").

function fullKeyName(piece) {
  const index = piece.indexOf("in ") + 3;
  const newStr = piece.split("");
  newStr[index] = newStr[index].toUpperCase();

  if (/[A-Z]/.test(piece[index])) {
    return `${newStr.join("")} major`;
  }
  return `${newStr.join("")} minor`;
}
