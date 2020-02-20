function changeElements(myClass){
  var numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  var elements = document.getElementsByClassName(myClass.slice(1));
  console.log("The myClass: ", myClass);
  for (var i = 0; i < elements.length; i++) {
    if (numbers.hasOwnProperty(elements[i].innerText)) {
      elements[i].innerText = numbers[elements[i].innerText];
    }
  }
  for (var k = 0; k < elements.length; k++) {
    console.log(elements[k].innerText);
  }
}

function appendTextToElement(myClass, text){
  var elements = document.getElementsByClassName(myClass.slice(1));
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerText += text;
  }
  for (var k = 0; k < elements.length; k++) {
    console.log(elements[k].innerText);
  }
}

function addClass(str1, str2){
  switch (str1.charAt(0)) {
    case "#":
      var elements = [document.getElementById(str1.slice(1))];
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(str2);
        console.log("ClassList: ", elements[i].classList);
      }
      break;
    case ".":
      var elements = document.getElementsByClassName(str1.slice(1));
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(str2);
        console.log("ClassList: ", elements[i].classList);
      }
      break;
  }
  return elements.length;
}

function removeElements(selector){
  var elements = document.getElementsByClassName(selector.slice(1));
  console.log(elements);
  while (elements.length > 0) {
    elements[0].remove();
  }
  console.log(elements);
  // $(selector).remove(); jQuery method
}
