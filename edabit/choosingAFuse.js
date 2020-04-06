// Choosing a Fuse
// A fuse melts when a current in an electrical device exceeds the fuse's rating, breaking the circuit and preventing the heat from building up too much (which can cause a fire). The ideal fuse to choose is higher than the device's current output, yet as close as possible to it as well.

// Given an array of fuse ratings, and the device's current output, return which of the fuses is the best for the device.

// Examples
// chooseFuse(["3V", "5V", "12V"], "4.5V") ➞ "5V"

// chooseFuse(["5V", "14V", "2V"], "5.5V") ➞ "14V"

// chooseFuse(["17V", "15V", "12V"], "9V") ➞ "12V"
// Notes
// You will be given three possible ratings in voltage.
// Fuses may not be in a sorted order.
// Assume that there is a valid fuse in every test case

function chooseFuse(fuses, current) {
  const fusesArr = fuses.map(fuse => Number(fuse.slice(0, fuse.length - 1))).sort((a, b) => a - b);
  const currentNum = Number(current.slice(0, current.length - 1));
  for (let i = 0; i < fusesArr.length; i++) if (fusesArr[i] >= currentNum) return fusesArr[i].toString() + 'V';
}
