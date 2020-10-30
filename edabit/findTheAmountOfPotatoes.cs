// Find the Amount of Potatoes
// Create a function to return the amount of potatoes there are in a string.

// Examples
// Potatoes("potato") ➞ 1

// Potatoes("potatopotato") ➞ 2

// Potatoes("potatoapple") ➞ 1

using System.Text.RegularExpressions;

public class Program
{
	public static int Potatoes(string potato)
	{
		Regex rgx = new Regex(@"potato");
		return rgx.Matches(potato).Count;
	}
}
