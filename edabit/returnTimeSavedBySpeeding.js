// Return the Time Saved by Speeding
// One cause for speeding is the desire to shorten the time spent traveling.While in long distance trips speeding does save an appreciable amount of time, the same cannot be said about short distance trips.

// Create a function that calculates the amount of time saved(in minutes) were you traveling with an average speed that is above the speed - limit as compared to traveling with an average speed exactly at the speed - limit.

//   Examples
// // The paramater's format is as follows:
// // (speed limit, avg speed, distance traveled at avg speed)

// timeSaved(80, 90, 40) ➞ 3.3

// timeSaved(80, 90, 4000) ➞ 333.3

// timeSaved(80, 100, 40) ➞ 6.0

// timeSaved(80, 100, 10) ➞ 1.5
// Notes
// Speed = distance / time
// The time returned should be in minutes, not hours.
// The unit of speed is assumed to be miles per hour(mph).

function timeSaved(lim, avg, d) {
  return Number(((((1 / lim) - (1 / avg)) * d * 60).toFixed(1)));
}
