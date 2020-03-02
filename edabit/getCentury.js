// Create a function that takes in a year and returns the correct century.

//   Examples
// century(1756) ➞ "18th century"

// century(1555) ➞ "16th century"

// century(1000) ➞ "10th century"

// century(1001) ➞ "11th century"

// century(2005) ➞ "21st century"
// Notes
// All years will be between 1000 and 2010.
// The 11th century is between 1001 and 1100.
// The 18th century is between 1701 - 1800.

function century(year) {
  const strYear = year.toString();
  let century = Number(strYear.slice(0, 2));
  if (strYear.slice(2, strYear.length) !== '00') century++;
  let suffix;
  if (strYear[0] === '1') suffix = 'th';
  else switch (century.toString()[1]) {
    case '1':
      suffix = 'st';
      break;
    case '2':
      suffix = 'nd';
      break;
    case '3':
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
      break;
  }
  return `${century}${suffix} century`;
}
