// Smooth Sentences
// Carlos is a huge fan of something he calls smooth sentences. A smooth sentence is one where the last letter of each word is identical to the first letter the following word.

// To illustrate, the following would be a smooth sentence: "Carlos swam masterfully."

// Since "Carlos" ends with an "s" and swam begins with an "s" and swam ends with an "m" and masterfully begins with an "m".

// Examples
// IsSmooth("Marta appreciated deep perpendicular right trapezoids") ➞ true

// IsSmooth("Someone is outside the doorway") ➞ false

// IsSmooth("She eats super righteously") ➞ true

using System;

public class Program
{
    public static bool IsSmooth(string sentence)
    {
			string[] sentenceArr = sentence.Split(' ');
			for (int i = 1; i < sentenceArr.Length; i++)
			{
				if (Char.ToLower(sentenceArr[i][0]) != Char.ToLower(sentenceArr[i - 1][sentenceArr[i - 1].Length - 1]))
				{
					return false;
				}
			}
			return true;
    }
}
