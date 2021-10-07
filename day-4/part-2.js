input = require("./input");
const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const validPassports = [];
let count = 0;

// create a for loop that iterates all ids
for (const id of input.arr) {
  // if each id contains all fields, push them into validPassports array
  if (fields.every((field) => id.includes(field))) {
    validPassports.push(id);
  }
}

const validation = (fieldName, data) => {
  if (fieldName == "byr") return data >= 1920 && data <= 2002;
  if (fieldName == "iyr") return data >= 2010 && data <= 2020;
  if (fieldName == "eyr") return data >= 2020 && data <= 2030;
  if (fieldName == "hgt") {
    u = data.match(/^(\d+)(cm|in)$/);
    if (u && u[2] && u[2] == "in") {
      return u[1] >= 59 && u[1] <= 76;
    }
    if (u && u[2] && u[2] == "cm") {
      return u[1] >= 150 && u[1] <= 193;
    }
    return false;
  }
  if (fieldName == "hcl") return /^#[0-9a-f]{6}$/.test(data);
  if (fieldName == "ecl") return /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(data);
  if (fieldName == "pid") return /^\d{9}$/.test(data);
};

for (const passport of validPassports) {
  if (
    fields.every((field) => {
      let re = new RegExp(field + ":(\\S+)");
      let m = passport.replace(/\n/g, " ").match(re);
      if (m) return validation(field, m[1]);
    })
  ) {
    ++count;
  }
}

console.log("Valid passports: ", count);
// answer: 145
