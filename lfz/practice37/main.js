function altcap(str) {
  var alt = "";
  var toggle = false;
  for (var i = 0; i < str.length; i++) {
    var current = str.charAt(i);
    if (toggle) {
      current = current.toUpperCase();
      toggle = false;
    } else {
      toggle = true;
    }
    alt += current;
  }
  return alt;
}

console.log(altcap("amazing"));
