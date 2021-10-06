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

let x = 0;
let y = 0;
let trees = 0;

while (y < map.getHeight()) {
  if (map.getPosition(x, y) === "#") trees++;
  x += 3;
  y += 1;
}

console.log(trees);
