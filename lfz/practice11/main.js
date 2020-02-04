function evenodd(arr) {
  var even = [];
  var odd = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (arr[i] % 2 === 0) {
        if (!even.includes(arr[i])) {
          even.push(arr[i]);
        }

      } else {
          if (!odd.includes(arr[i])) {
            odd.push(arr[i]);
          }
      }
    }
  }
  return {
    odd: odd,
    even: even,
  };
}

console.log("Even or odd: ", evenodd([2, 5, 1, 6, 8, 2, 20, 'cat', 13, 3]))
