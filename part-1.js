const inputs = require("./input");

let validPassword = 0;

inputs.arr.forEach((input) => {
  // create an object that extracts the needed info
  const { groups } =
    /^(?<from>\d+)-(?<to>\d+) (?<char>.): (?<password>.*)$/.exec(input);

  const counter = {};

  // [...group.password] is doing the same thing as .split("") here
  [...groups.password].forEach((letter) => {
    // create a counter that counts the letters in the password
    //  if there is no letter in the counter object, set is as zero and create a property
    if (!counter[letter]) {
      counter[letter] = 0;
    }
    // count it up when that letter appears
    counter[letter]++;
  });

  //   console.log(counter)
  if (
    counter[groups.char] >= groups.from &&
    counter[groups.char] <= groups.to
  ) {
    validPassword++;
  }
});

console.log(validPassword);
