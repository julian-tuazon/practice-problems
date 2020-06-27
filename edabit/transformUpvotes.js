// Transform Upvotes
// Create a function that transforms a string of upvote counts into an array of numbers.Each k represents a thousand.

//   Examples
// transformUpvotes("6.8k 13.5k") ➞[6800, 13500]

// transformUpvotes("5.5k 8.9k 32") ➞[5500, 8900, 32]

// transformUpvotes("20.3k 3.8k 7.7k 992") ➞[20300, 3800, 7700, 992]
// Notes
// Return the upvotes as an array.

function transformUpvotes(str) {
  return str.split(' ').map(upvotes => {
    if (upvotes.indexOf('k') !== -1) return Number(upvotes.slice(0, upvotes.length - 1)) * 1000;
    return Number(upvotes);
  });
}

exports.transformUpvotes = transformUpvotes;
