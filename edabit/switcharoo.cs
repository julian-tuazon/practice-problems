// Switcharoo
// Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".
// Examples
// FlipEndChars("Cat, dog, and mouse.") ➞ ".at, dog, and mouseC"

// FlipEndChars("ada") ➞ "Two's a pair."

// FlipEndChars("Ada") ➞ "adA"

// FlipEndChars("z") ➞ "Incompatible."

// FlipEndChars([1, 2, 3]) ➞ "Incompatible."
// Notes
// Tests are case sensitive (e.g. "A" and "a" are not the same character).

using System;

public class Program
{
    public static string FlipEndChars(object str)
    {
      if (str.GetType() != typeof(String))
			{
				return "Incompatible.";
			}
			String x = str.ToString();
			if (x.Length < 2)
			{
				return "Incompatible.";
			}
			if (x[0] == x[x.Length - 1])
			{
				return "Two's a pair.";
			}
			return x[x.Length - 1] + x.Substring(1, x.Length - 2) + x[0];
    }
}
