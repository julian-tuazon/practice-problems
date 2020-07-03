// Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

// Examples
// ArrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// ArrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// ArrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

using System;

public class Program {
	public static int[] ArrayOfMultiples(int num, int length) {
		int[] multiplesArray = new int[length];
		int currentNum = num;
		for (int i = 0; i < length; i++)
		{
			multiplesArray[i] = currentNum;
			currentNum += num;
		}
		return multiplesArray;
	}
}
