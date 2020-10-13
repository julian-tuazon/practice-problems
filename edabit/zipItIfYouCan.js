// Zip It, If You Can?
// Given an array of women and an array of men, either:

// Return "sizes don't match" if the two arrays have different sizes.
// If the sizes match, return a array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
// Examples
// zipIt(["Elise", "Mary"], ["John", "Rick"])
//  ➞ [["Elise", "John"], ["Mary", "Rick"]]

// zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])
//  ➞ "sizes don't match"

// zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
//  ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]

function zipIt(women, men) {
  if (women.length !== men.length) return "sizes don't match";
  const pairArr = [];
  for (let i = 0; i < women.length; i++) {
    pairArr.push([women[i], men[i]]);
  }
  return pairArr;
}
