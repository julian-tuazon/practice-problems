function random_range(start_num, end_num) {
  if (Array.isArray(start_num)) {
    var index = Math.floor(Math.random() * (start_num.length));
    return start_num[index];
  } else {
    return Math.floor(Math.random() * (end_num - start_num + 1) + start_num);
  }
}

console.log(random_range(2,15));
console.log(random_range(2, 15));
console.log(random_range(['a', 'b', 'c', 'd', 'e',]));
