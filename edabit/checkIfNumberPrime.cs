// Check if a Number is Prime
// Create a function that outputs true if a number is prime, and false otherwise.

// Examples
// isPrime(31) ➞ true

// isPrime(18) ➞ false

// isPrime(11) ➞ true
// Notes
// A prime number has no other factors except 1 and itself.
// 1 is not considered a prime number.

public class Program
{
	public static bool isPrime(int x)
	{
		if (x < 2)
		{
			return false;
		}
		for (int i = 2; i < x; i++)
		{
			if (x % i == 0)
			{
				return false;
			}
		}
		return true;
	}
}
