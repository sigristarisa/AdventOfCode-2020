const arr = [
  ["a", "b", "a", "c"],
  ["d", "e"],
  ["f", "f", "a", "g"],
];

const arrNumber = arr.reduce((value, nextValue) => {
  return value.length + nextValue.length;
});

console.log(arrNumber);
