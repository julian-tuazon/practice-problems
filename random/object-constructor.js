function factoryFunction(radius) {
  return {
    radius,
    draw: function() {
      console.log('factory draw');
    }
  }
}

factoryObj = factoryFunction(3);

console.log("radius", factoryObj.radius);
factoryObj.draw();

function constructorFunction(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('constructor draw');
  }
  console.log('this', this);
}

const constructorObj = new constructorFunction(5);
console.log('constructor obj', constructorObj);
console.log('constructor radius', constructorObj.radius);
constructorObj.draw();
