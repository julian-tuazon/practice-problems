// Scottish Screaming
// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.

// Create a function that takes a string and returns a string.

// Examples
// ToScottishScreaming("hello world") ➞ "HELLE WERLD"

// ToScottishScreaming("Mr. Fox was very naughty") ➞ "MR. FEX WES VERY NEEGHTY"

// ToScottishScreaming("Butterflies are beautiful!") ➞ "BETTERFLEES ERE BEEETEFEL!"

using System;
using System.Text.RegularExpressions;

public class Program {
	public static string ToScottishScreaming(string str) {
		Regex vowels = new Regex("[aeiouAEIOU]");
		return vowels.Replace(str, "E").ToUpper();
	}
}
