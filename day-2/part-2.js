const inputs = require("./input");

let validPassword = 0;

inputs.arr.forEach((input) => {
  // create an object that extracts the needed info
  const { groups } =
    /^(?<from>\d+)-(?<to>\d+) (?<char>.): (?<password>.*)$/.exec(input);

  // if either index has the character but not both index
  if (
    (groups.password[groups.from - 1] === groups.char ||
      groups.password[groups.to - 1] === groups.char) &&
    !(
      groups.password[groups.from - 1] === groups.char &&
      groups.password[groups.to - 1] === groups.char
    )
  ) {
    validPassword++;
  }
});

console.log(validPassword);
