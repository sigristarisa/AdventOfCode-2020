const input = require("./input");

// create a function to find the answer
const answer = () => {
  for (let i = 0; i < input.arr.length; i++) {
    for (let j = 0; j < input.arr.length; j++) {
      if (input.arr[i] + input.arr[j] === 2020) {
        return input.arr[i] * input.arr[j];
      }
    }
  }
};

console.log(answer());
