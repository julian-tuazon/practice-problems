// A Pirate's Tale
// Captain Hook and his crew are currently resting at Origin Shore. They are about to embark on their next adventure to an undisclosed location (x, y) to find treasure.

// Captain Hook's ship can only move exactly north, south, east or west. It takes exactly 1 day for the ship to travel 1 unit in one of the four cardinal directions.

// After every 5 days, the crew will take one day of rest.

// Given the location of the treasure, find out how long it takes for Captain Hook and his crew to find the treasure. The ship is currently at coordinate (0, 0).

// NumberOfDays([3, 5]) => 9 days
// // Since: 3 days east + 2 days north (5 days passed) + 1 day of rest + 3 days north

// NumberOfDays([-4, -1]) => 5 days
// // Since 4 days west + 1 day south
// Examples
// NumberOfDays([10, 10]) ➞ 23

// NumberOfDays([3, 3]) ➞ 7

// NumberOfDays([-10, -9]) ➞ 22

// NumberOfDays([-1, -2]) ➞ 3

using System;

public class Program
{
    public static int NumberOfDays(int[] coordinates)
    {
			int sum = Math.Abs(coordinates[0]) + Math.Abs(coordinates[1]);
			return sum + (sum - 1) / 5;
    }
}
