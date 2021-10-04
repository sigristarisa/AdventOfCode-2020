const input = require("./input");

const answer = () => {
  for (let i = 0; i < input.arr.length; i++) {
    for (let j = 0; j < input.arr.length; j++) {
      for (let k = 0; k < input.arr.length; k++) {
        if (input.arr[i] + input.arr[j] + input.arr[k] === 2020) {
          return input.arr[i] * input.arr[j] * input.arr[k];
        }
      }
    }
  }
};

console.log(answer());
