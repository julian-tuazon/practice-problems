// Words to Sentence
// Create a function that turns an array of words into a comma separated list, where the last word is separated by the word "and".

//   Examples
// wordsToSentence(["edabit"]) ➞ "edabit"

// wordsToSentence(["Hello", "", "Bye"]) ➞ "Hello and Bye"

// wordsToSentence(["Hello", "Bye", "See you soon"]) ➞ "Hello, Bye and See you soon"
// Notes
// null values, empty arrays or arrays with only empty or null values should return an empty string(e.g. "").

function wordsToSentence(words) {
  if (words === null) return '';
  if (!words[0]) return '';
  if (words.length === 1) return words[0];
  const filteredWords = words.filter(word => !word === false);
  let sentence = '';
  for (let i = 0; i < filteredWords.length - 2; i++) {
    sentence += `${filteredWords[i]}, `;
  }
  sentence += `${filteredWords[filteredWords.length - 2]} and ${filteredWords[filteredWords.length - 1]}`;
  return sentence;
}
