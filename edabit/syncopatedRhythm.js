// Syncopated Rhythm
// Syncopation means an emphasis on a weak beat of a bar of music; most commonly, beats 2 and 4(and all other even - numbered beats if applicable).

// s is a line of music, represented as a string, where hashtags # represent emphasized beats.Create a function that returns if the line of music contains any syncopation.

//   Examples
// hasSyncopation(".#.#.#.#") ➞ true

// hasSyncopation("#.#...#.") ➞ false

// hasSyncopation("#.#.###.") ➞ true
// Notes
// All other unemphasized beats will be represented as a dot.

function hasSyncopation(s) {
  for (let i = 0; i < s.length; i++) {
    if ((i + 1) % 2 === 0 && s[i] === '#') return true;
  }
  return false;
}
