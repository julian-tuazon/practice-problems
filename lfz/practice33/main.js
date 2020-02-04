function inv(num) {
  if (typeof num === "number") {
    return num * -1;
  }
  return false;
}

console.log(inv(-5));
console.log(inv(4000));
console.log(inv('puppies'));
