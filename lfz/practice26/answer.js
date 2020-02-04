function search_array(haystack, needle) {
  var answer = [];
  for (var i = 0; i < needle.length; i++) {
    for (var k = 0; k < haystack.length; k++) {
      if (haystack[k] === needle[i]) {
        answer.push(needle[i]);
      }
    }
  }
  return answer;
}

var h = ['cat', 'dog', 'bird', 'turtle', 'lizard', 'bear', 'balenciaga'];
var n = ['dog', 'lizard', 'flower', 'monkey', 'unicorn', 'balenciaga'];

console.log(search_array(h, n));
