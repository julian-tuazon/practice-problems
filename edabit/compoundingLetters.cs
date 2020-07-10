// Compounding Letters
// Create a function that takes a string and returns a new string with each new character accumulating by +1. Separate each set with a dash.

// Examples
// Accum("abcd") ➞ "A-Bb-Ccc-Dddd"

// Accum("RqaEzty") ➞ "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

// Accum("cwAt") ➞ "C-Ww-Aaa-Tttt"
// Notes
// Capitalize the first letter of each set.
// All tests contain valid strings with alphabetic characters (a-z, A-Z).

using System;

public class Program
{
    public static string Accum(string str)
    {
			string compoundingLetters = "";
			for (int i = 0; i < str.Length; i++)
			{
				compoundingLetters += ("-" + Char.ToUpper(str[i]) + new string (Char.ToLower(str[i]), i));
			}
			return compoundingLetters.Substring(1);
    }
}
