// Leader in an Array
// Create a function that finds all elements in the given array, such that each element is greater than all elements to the right of it.

//   Examples
// leader([2, 3, 20, 15, 8, 3]) ➞[20, 15, 8, 3]
// // Note that, 20 is greater than all the elements to it's
// // right side, similarly 15 and so on.

// leader([2, 3, 20, 15, 8, 25, 3]) ➞[25, 3]
// // Note that, 20 cannot be added because 25 is present,
// // which is greater than 20.

// leader([1, 2, 3, 4, 5]) ➞[5]
// Notes
// Add elements in the new array in the same way they occur in the input array.

function leader(arr) {
  if (arr.length < 2) return arr;
  let leader = arr[0];
  let leaderArr = [leader];
  for (const item of arr) {
    if (item < leader) {
      if (item > leaderArr[leaderArr.length - 1]) {
        leaderArr.pop();
      }
      leaderArr.push(item);
    } else {
      leader = item;
      leaderArr = [leader];
    }
  }
  return leaderArr;
}
