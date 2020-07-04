// Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

// Examples
// FindLargest([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

// FindLargest([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]

// FindLargest([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]

using System;
using System.Linq;
public class Program
{
    public static double[] FindLargest(double[][] values)
    {
			double[] largestNumArray = new double[values.Length];
			for (int i = 0; i < values.Length; i++)
			{
				double currentLargestNum = values[i][0];
				for (int k = 1; k < values[i].Length; k++)
				{
					if (values[i][k] > currentLargestNum)
					{
						currentLargestNum = values[i][k];
					}
				}
				largestNumArray[i] = currentLargestNum;
			}
			return largestNumArray;
    }
}
