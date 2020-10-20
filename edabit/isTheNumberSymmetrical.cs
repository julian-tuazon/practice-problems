// Is the Number Symmetrical?
// Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

// Examples
// IsSymmetrical(7227) ➞ true

// IsSymmetrical(12567) ➞ false

// IsSymmetrical(44444444) ➞ true

// IsSymmetrical(9939) ➞ false

// IsSymmetrical(1112111) ➞ true

public class Program
{
    public static bool IsSymmetrical(int num)
    {
			string numStr = num.ToString();
			for (int i = 0; i < numStr.Length / 2; i++)
			{
				if (numStr[i] != numStr[numStr.Length - 1 - i])
				{
					return false;
				}
			}
			return true;
    }
}
