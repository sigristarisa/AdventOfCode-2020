input = require("./input");
const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let count = 0;

// create a for loop that iterates all ids
for (const id of input.arr) {
  // if each id contains all fields, count +1
  if (fields.every((field) => id.includes(field))) {
    count++;
  }
}

console.log(count);
