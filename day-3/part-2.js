input = require("./input");

class Map {
  constructor(map) {
    this.map = map;
  }

  getPosition(x, y) {
    // check the actual position where you are
    // [y]: which row you are at
    // [x]: which position you are at + as the slope continues, %this.map[0].length
    return this.map[y][x % this.map[0].length];
  }
  getHeight() {
    // check how many index it has as the number of indexs is equivilant to how many rows the slope has
    return this.map.length;
  }
}

const map = new Map(input.arr.map((index) => index.split("")));
// ↑ or I can do input.arr.map(index => [... index]) as a cleaner code

const multipliedTrees = (multiX, multiY) => {
  let x = 0;
  let y = 0;

  let trees = 0;

  while (y < map.getHeight()) {
    if (map.getPosition(x, y) === "#") trees++;
    x += multiX;
    y += multiY;
  }
  return trees;
};

const multi = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

let answer = 1;

for (index of multi) {
  answer *= multipliedTrees(index[0], index[1]);
}
console.log(answer);

// console.log(
//   multipliedTrees(1, 1) *
//     multipliedTrees(3, 1) *
//     multipliedTrees(5, 1) *
//     multipliedTrees(7, 1) *
//     multipliedTrees(1, 2)
// );

// right 1, down 1 : 58
// right 3, down 1 : 223
// right 5, down 1 : 105
// right 7, down 1 : 74
// right 1, down 2 : 35
// total: 495
// mutiplied: 3517401300
