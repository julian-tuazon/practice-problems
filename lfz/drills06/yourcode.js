

function removeClassFromElement(element, targetClass){
$(element).removeClass(targetClass);
}

function toggleClassOnElement(element, targetClass){
  $(element).toggleClass(targetClass);
}

function hideElements(element, method){
 var target = $(element);
 switch (method) {
   case "hide":
     target.toggle();
     break;
   case "removeSelf":
     target.remove();
     break;
   case "removeChildren":
     target.empty();
     break;
 }
}

function addAttributeToElement(element, attribute, value){
  // $(element).attr(attribute, value); *****jQuery hax
  var target;
  switch (element.charAt(0)) {
    case ".":
      target = document.getElementsByClassName(element.slice(1));
      for (var i = 0; i < target.length; i++) {
        target[i].setAttribute(attribute, value);
      }
      break;
    case "#":
      target = document.getElementById(element.slice(1));
      target.setAttribute(attribute, value);
      break;
  }
}

function putPosInElement(element){
//HTML method ***

  // var target = document.getElementById(element.slice(1));
  // var x = window.getComputedStyle(target).getPropertyValue("left");
  // var y = window.getComputedStyle(target).getPropertyValue("top");

  // target.innerText = "x: " + x + "\ny: " + y;
  // return {
  //   x: parseInt(x.slice(0, x.length - 2)),
  //   y: parseInt(y.slice(0, y.length - 2)),
  // };

//rect method ***
  // var rect = target.getBoundingClientRect();
  // console.log("x", rect.left, "y", rect.top);

//jQuery ***

  var target = $(element);
  var x = target.css("left");
  var y = target.css("top");
  target.html("x: " + x + "<br />y: " + y);
  console.log(target.text());
  return {
    x: parseInt(x.slice(0, x.length - 2)),
    y: parseInt(y.slice(0, y.length - 2)),
  };
}
