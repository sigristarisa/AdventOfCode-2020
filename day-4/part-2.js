input = require("./input");
const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const validPassports = [];
let count = 0;

// // create a for loop that iterates all ids
// for (const id of input.arr) {
//   // if each id contains all fields, push them into validPassports array
//   if (fields.every((field) => id.includes(field))) {
//     validPassports.push(id);
//   }
// }

const validation = (fieldName, data) => {
  if (fieldName === "byr") return 1920 <= data && data >= 2002;
  if (fieldName === "iyr") return 2010 <= data && data >= 2020;
  if (fieldName === "eyr") return 2020 <= data && data <= 2030;
  if (fieldName === "hgt") {
    height = data.match(/^(\d+)(cm|in)$/);
    if (height && height[2] && height[2] === "in") {
      return height[1] >= 59 && height[1] <= 76;
    }
    if (height && height[2] && height[2] === "cm") {
      return height[1] >= 150 && height[1] <= 193;
    }
    return false;
  }
  if (fieldName === "hcl") return /^#([0-9a-f]){6}$/.test(data);
  if (fieldName === "ecl")
    return /^(amb | blu | brn | gry | grn | hzl |oth)$/.test(data);
  if (fieldName === "pid") return /^\d{9}$/.test(v);
};

for (const id of input.arr) {
  if (
    fields.every((field) => {
      let re = new RegExp(field + ":(\\s+)");
      let m = id.replace(/\n/g, " ").match(re);
      if (m) return validation(field, m[1]);
    })
  ) {
    count++;
  }
}

console.log(count);
