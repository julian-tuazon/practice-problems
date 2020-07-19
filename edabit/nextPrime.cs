// Next Prime
// Given an integer, create a function that returns the next prime. If the number is prime, return the number itself.

// Examples
// NextPrime(12) ➞ 13

// NextPrime(24) ➞ 29

// NextPrime(11) ➞ 11
// // 11 is a prime, so we return the number itself.

public class Program
{
    public static int NextPrime(int num)
    {
			if (num < 2)
			{
				return 2;
			}
			while (true) {
				bool isPrime = true;
				for (int i = 2; i < num; i++) {
					if (num % i == 0)
					{
						isPrime = false;
						break;
					}
				}
				if (isPrime) {
					return num;
				}
				num++;
			}
    }
}
