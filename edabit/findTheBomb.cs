// Find the Bomb
// Create a function that finds the word "bomb" in the given string. If found, return "Duck!!!", otherwise, return "There is no bomb, relax.".

// Examples
// Bomb("There is a bomb.") ➞ "Duck!!!"

// Bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"

// Bomb("This goes boom!!!") ➞ "There is no bomb, relax."
// Notes
// "bomb" may appear in different cases (i.e. uppercase, lowercase, mixed).

using System;

public class Program
{
	public static string Bomb(string txt)
	{
		if (txt.IndexOf("bomb", StringComparison.OrdinalIgnoreCase) >= 0)
		{
			return "Duck!!!";
		}
		return "There is no bomb, relax.";
	}
}
