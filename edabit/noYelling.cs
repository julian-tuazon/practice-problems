// No Yelling
// Create a function that transforms sentences ending with multiple question marks ? or exclamation marks ! into a sentence only ending with one without changing punctuation in the middle of the sentences.

// Examples
// NoYelling("What went wrong?????????") ➞ "What went wrong?"

// NoYelling("Oh my goodness!!!") ➞ "Oh my goodness!"

// NoYelling("I just!!! can!!! not!!! believe!!! it!!!") ➞ "I just!!! can!!! not!!! believe!!! it!"
// // Only change repeating punctuation at the end of the sentence.

// NoYelling("Oh my goodness!") ➞ "Oh my goodness!"
// // Do not change sentences where there exists only one or zero exclamation marks/question marks.

// NoYelling("I just cannot believe it.") ➞ "I just cannot believe it."
// Notes
// Only change ending punctuation - keep the exclamation marks or question marks in the middle of the sentence the same (see third example).
// Don't worry about mixed punctuation (no cases that end in something like ?!??!).
// Keep sentences that do not have question/exclamation marks the same.

public class Program
{
    public static string NoYelling(string phrase)
    {
			string strEnding = phrase.Substring(phrase.Length - 2, 2);
			if (strEnding == "!!" || strEnding == "??")
			{
				return phrase.TrimEnd('!', '?') + strEnding[0];
			}
			return phrase;
    }
}
