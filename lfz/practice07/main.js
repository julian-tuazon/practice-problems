function pigLatin(str) {
  if (str && typeof str === "string") {
    var words = str.split(" ");

    for (var i = 0; i < words.length; i++) {
      var firstLetter = words[i].charAt(0);
      var isCapital = firstLetter === firstLetter.toUpperCase();
      var allCaps = words[i] === words[i].toUpperCase();

      if (!/[0-9]/.test(words[i])) {
        if (isVowel(firstLetter)) {
          if (words[i].length === 1) {
            words[i] = words[i] + "way"
          } else {
            words[i] = words[i] + "ay";
          }
        } else if (words[i].length > 1) {
            if (!allCaps) {
              firstLetter = firstLetter.toLowerCase();
            }
            if (!isVowel(words[i].charAt(1))) {
              words[i] = words[i].slice(2) + firstLetter + words[i].slice(1, 2) + "ay";
            } else {
              words[i] = words[i].slice(1) + firstLetter + "ay";
            }
            if (allCaps) {
              words[i] = words[i].toUpperCase();
            }
          }
        if (isCapital) {
          words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
      }
    }
    return words;
  }
}
function isVowel(char) {
  switch (char.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
    default:
      return false;
  }
}

var mystr = "This is the worst ice cream";
var mystr2 = "I am a guy that LOVES Ice cream";
var mystr3 = "a g123 number is cool";
var mystr4 = "A toast to the GREATEST #1 player of the 123 particiPANTS"

console.log("Pig Latin Test mystr: ", pigLatin(mystr));
console.log("Pig Latin Test mystr2: ", pigLatin(mystr2));
console.log("Pig Latin Test mystr3: ", pigLatin(mystr3));
console.log("Pig Latin Test mystr4: ", pigLatin(mystr4));



// function pigLatin(str) {
//   var words = str.split(" ");
//   for (var i = 0; i < words.length; i++) {
//     var firstLetter = words[i].charAt(0);
//     var isCapital = firstLetter == firstLetter.toUpperCase();
//     var isVowel =
//       console.log("Is it capital?: ", isCapital);
//     switch (firstLetter.toLowerCase()) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//         words[i] = words[i] + "ay";
//         break;
//       default:
//         if (words[i + 1])
//           break;
//     }
//   }
