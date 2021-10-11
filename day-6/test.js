const arr = [
  ["abc"],
  ["a", "b", "c"],
  ["ab", "ac"],
  ["a", "a", "a", "a"],
  ["b"],
];

const splitArr = arr.map((elements) => {
  return elements.map((element) => {
    return element.split("");
  });
});

const overlapLetters = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      let lettersArr = [];
      for (let k = 0; k < input[i][j].length; k++) {
        if (!lettersArr.includes(input[i][j][k])) {
          letterArr.push(input[i][j][k]);
        }
      }
    }
  }
};
