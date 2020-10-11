// Reverse Titling
// Your stereotypical titleCase() function in JavaScript might capitalises the first letter of every word in a given sentence, leaving all the other letters as lowercase.

// The goal of this challenge, however, is to create a reverseTitle() function, which achieves the complete opposite! Make the first letter of every word lowercase, and the rest uppercase!

// Examples
// reverseTitle("this is a title") ➞ "tHIS iS a tITLE"

// reverseTitle("BOLD AND BRASH!") ➞ "bOLD aND bRASH!"

// reverseTitle("Elephants dance about bravely in Thailand") ➞ "eLEPHANTS dANCE aBOUT bRAVELY iN tHAILAND"

function reverseTitle(s) {
  return s.split(' ').map(word => {
    return word[0].toLowerCase() + word.slice(1).toUpperCase();
  }).join(' ');
}
