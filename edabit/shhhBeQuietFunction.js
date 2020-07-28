// Shhh Be Quiet Function
// Write a function that removes all capitals letters from a sentence except the first letter, put quotation marks around the sentence and add ", whispered Edabit." to the end.

//   Examples
// shhh("HI THERE!") ➞ '"Hi there!", whispered Edabit.'

// shhh("tHaT'S Pretty awesOme") ➞ '"That's pretty awesome", whispered Edabit.'

// shhh("") ➞ '"", whispered Edabit.'
// Notes
// Don't forget to surround the original string with quotation marks "".

function shhh(sentence) {
	if (!sentence) return '"", whispered Edabit.';
	return `"${sentence[0].toUpperCase()}${sentence.slice(1).toLowerCase()}", whispered Edabit.`;
}
