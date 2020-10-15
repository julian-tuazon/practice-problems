// East or West
// You will be given an array of string "east" formatted differently every time.Create a function that returns "west" wherever there is "east".Format the string according to the input.Check the examples below to better understand the question.

//   Examples
// direction(["east", "EAST", "eastEAST"]) ➞["west", "WEST", "westWEST"]

// direction(["eAsT EaSt", "EaSt eAsT"]) ➞["wEsT WeSt", "WeSt wEsT"]

// direction(["east EAST", "e a s t", "E A S T"]) ➞["west WEST", "w e s t", "W E S T"]
// Notes
// The input will only be "east" in different formats.

function direction(arr) {
  return arr.map(word => {
    let newWord = '';
    for (const char of word) {
      if (char === 'e') newWord += 'w';
      else if (char === 'E') newWord += 'W';
      else if (char === 'a') newWord += 'e';
      else if (char === 'A') newWord += 'E';
      else newWord += char;
    }
    return newWord;
  });
}
