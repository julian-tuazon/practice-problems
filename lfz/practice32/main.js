function fml(str) {
  if (str) {
    if (str.length === 1) {
      return str;
    } else if (str.length % 2 !== 0) {
      return str[Math.floor(str.length / 2)];
    } else {
      return str.slice(str.length / 2 - 1, str.length / 2 + 1);
    }
  }
}

console.log(fml('seven'));
console.log(fml('great'));
console.log(fml('dish'));
console.log(fml(''));
console.log(fml());
console.log(fml('s'));
