// Is the Word an Isogram?
// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

// Examples
// IsIsogram("Algorism") ➞ true

// IsIsogram("PasSword") ➞ false
// // Not case sensitive.

// IsIsogram("Consecutive") ➞ false
// Notes
// Ignore letter case (should not be case sensitive).
// All test cases contain valid one word strings.

using System;
using System.Linq;
using System.Collections.Generic;
public class Program
{
    public static bool IsIsogram(string str)
    {
			Dictionary<char, bool> currentLetters = new Dictionary<char, bool>();
			for (int i = 0; i < str.Length; i++)
			{
				char currentLetter = Char.ToLower(str[i]);
				if (currentLetters.ContainsKey(currentLetter))
				{
					return false;
				}
				currentLetters.Add(currentLetter, true);
			}
			return true;
    }
}
