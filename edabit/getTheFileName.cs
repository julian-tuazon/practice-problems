// Get the File Name
// Create a function that returns the selected filename from a path. Include the extension in your answer.

// Examples
// GetFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"

// GetFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"

// GetFilename("ffprobe.exe") ➞ "ffprobe.exe"
// Notes
// Tests will include both absolute and relative paths.
// For simplicity, all paths will include forward slashes.

using System.Collections.Generic;

public class Program
{
	public static string GetFilename(string path)
	{
		var filename = new List<char>();
		for (int i = path.Length - 1; i >= 0; i--)
		{
			if (path[i] == '/') break;
			filename.Add(path[i]);
		}
		string answer = "";
		for (int i = filename.Count - 1; i >= 0; i--)
		{
			answer += filename[i];
		}
		return answer;
	}
}
