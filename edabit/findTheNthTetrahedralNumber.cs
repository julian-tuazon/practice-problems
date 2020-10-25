// Find the nth Tetrahedral Number
// Create a function that takes an integer n and returns the nth tetrahedral number.

// Alternative Text

// Examples
// Tetra(2) ➞ 4

// Tetra(5) ➞ 35

// Tetra(6) ➞ 56

public class Program {
	public static int Tetra(int n) {
		return (n * (n + 1) * (n + 2)) / 6;
	}
}
