// Fraction Greater Than One
// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

// Examples
// GreaterThanOne("1/2") ➞ false

// GreaterThanOne("7/4") ➞ true

// GreaterThanOne("10/10") ➞ false
// Notes
// Fractions must be strictly greater than 1 (see example #3).

using System;

public class Program
{
	public static bool GreaterThanOne(string str)
	{
		string[] fractionStrArr = str.Split('/');
		return Int32.Parse(fractionStrArr[0]) > Int32.Parse(fractionStrArr[1]);
	}
}
