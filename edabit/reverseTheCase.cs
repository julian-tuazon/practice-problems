// Reverse the Case
// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

// Examples
// ReverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

// ReverseCase("MANY THANKS") ➞ "many thanks"

// ReverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"

using System;

public class Program
{
    public static string ReverseCase(string str)
    {
			string reverseStr = "";
			for (int i = 0; i < str.Length; i++)
			{
				if (Char.IsUpper(str[i]))
				{
					reverseStr += Char.ToLower(str[i]);
				}
				else
				{
					reverseStr += Char.ToUpper(str[i]);
				}
			}
			return reverseStr;
    }
}
