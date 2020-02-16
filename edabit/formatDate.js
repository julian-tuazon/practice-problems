// Create a function that converts a date formatted as MM / DD / YYYY to YYYYDDMM.

// formatDate("11/12/2019") ➞ "20191211"

// formatDate("12/31/2019") ➞ "20193112"

// formatDate("01/15/2019") ➞ "20191501"

function formatDate(date) {
  return date.slice(6, 10) + date.slice(3, 5) + date.slice(0, 2);
}
