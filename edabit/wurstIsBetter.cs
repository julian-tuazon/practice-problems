using System;

public class Program
{
    public static string WurstIsBetter(string str)
    {
			string[] convertToWurst = new string[]
			{
				"kielbasa",
				"chorizo",
				"moronga",
				"salami",
				"sausage",
				"andouille",
				"naem",
				"merguez",
				"gurka",
				"snorkers",
				"pepperoni",
			};

			for (int i = 0; i < convertToWurst.Length; i++)
			{
				str = str.Replace(convertToWurst[i], "Wurst");
				str = str.Replace(Char.ToUpper(convertToWurst[i][0]) + convertToWurst[i].Substring(1), "Wurst");
			}
			return str;
    }
}
