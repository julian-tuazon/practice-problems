// Is the Input Factorial of an Integer?
// Create a function that checks if a given integer is exactly the factorial of an integer or not. true if it is, false otherwise.

// Examples
// isFactorial(2) ➞ true
// // 2 = 2 * 1 = 2!

// isFactorial(27) ➞ false

// isFactorial(24) ➞ true
// // 24 = 4 * 3 * 2 * 1 = 4!

public class Program
{
    public static bool isFactorial(int n)
		{
			if (n < 3) return true;
			int currentNum = 1;
			for (int i = 2; i <= n; i++)
			{
				currentNum *= i;
				if (currentNum == n) return true;
				if (currentNum > n) return false;
			}
			return false;
		}
}
