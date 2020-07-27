// Maskify the String
// Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.

// Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

// Examples
// Maskify("4556364607935616") ➞ "############5616"

// Maskify("64607935616") ➞ "#######5616"

// Maskify("1") ➞ "1"

// Maskify("") ➞ ""
// Notes
// The maskify function must accept a string of any length.
// An empty string should return an empty string (fourth example above).

using System;

public class Program
{
    public static string Maskify(string str)
    {
      if (str.Length < 5)
			{
				return str;
			}
			return new String('#', str.Length - 4) + str.Substring(str.Length - 4);
    }
}
