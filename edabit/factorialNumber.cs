// Factorial Number
// Create a Fact method that receives a non-negative integer and returns the factorial of that number.

// Examples
// Fact(1) ➞ 1

// Fact(3) ➞ 6

// Fact(6) ➞ 720
// Notes
// Consider that 0! = 1.
// You should return a long data type number.

public class Program
{
    public static long Fact(int n)
    {
			long currentProduct = 1;
			if (n == 0)
			{
				return currentProduct;
			}
			for (int i = n; i > 0; i--)
			{
				currentProduct *= (long)i;
			}
			return currentProduct;
    }
}
