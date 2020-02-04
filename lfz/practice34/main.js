function lcs(str1, str2) {
  var longest = '';
  for (var i = 0; i < str1.length; i++) {
    for (var k = 0; k < str2.length; k++) {
      if (str1[i] === str2[k]) {
        var ind1 = i;
        var ind2 = k;
        while (str1[ind1] === str2[ind2] && ind1 < str1.length && ind2 < str2.length) {
          ind1++;
          ind2++;
        }
        var current = str1.slice(i, ind1);
        if (current.length > longest.length) {
          longest = current;
        }
      }
    }
  }
  return longest;
}

console.log(lcs('abcdefg', 'abc'));
console.log(lcs('abcdefghij', 'abefgh'));

function lcs2(str1, str2) {
  var longest = '';
  var i = 0;
  var k = 0;
  while (i < str1.length) {
    console.log("i: ", i);
    while (k < str2.length) {
      console.log("k: ", k);
      if (str1[i] === str2[k]) {
        var ind1 = i;
        var ind2 = k;
        console.log("we found a match boys");
        while (str1[ind1] === str2[ind2] && ind1 < str1.length && ind2 < str2.length) {
          ind1++;
          console.log("ind1: ", ind1);
          ind2++;
          console.log("ind2: ", ind2);
        }
        var current = str1.slice(i, ind1);
        if (current.length > longest.length) {
          longest = current;
        }
        i = ind1;
        console.log("i after getting new str: ", i);
        k = ind2;
        console.log("k after getting new str: ", k);
      }
      k++;
    }
    i++;
    k = 0;
  }
  return longest;
}

console.log(lcs2('abcdefg', 'abc'));
console.log(lcs2('abcdefghij', 'abefgh'));
