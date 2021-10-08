const input = require("./input");

// create an array of passes in individual letters
const passArr = input.arr.map((pass) => {
  return pass.split("");
});

// convert the passes into IDs
const getId = () => {
  const idArr = [];

  for (let passes of passArr) {
    // create an index array of F and B [0, 1,2 ... , 127]
    const FB = [];
    for (let i = 0; i <= 127; i++) {
      FB.push(i);
    }
    // create an index array of L and R [0, 1, 2, ... , 7]
    const LR = [];
    for (let i = 0; i <= 7; i++) {
      LR.push(i);
    }
    // ↑ you have to create these index arrays IN the loop
    // as the indexs would be "used up" when they are global
    for (let pass of passes) {
      if (pass === "F") {
        FB.splice(FB.length / 2);
      } else if (pass === "B") {
        FB.splice(0, FB.length / 2);
      } else if (pass === "L") {
        LR.splice(LR.length / 2);
      } else if (pass === "R") {
        LR.splice(0, LR.length / 2);
      }
    }
    idArr.push(FB[0] * 8 + LR[0]);
  }
  // sort numbers ascending
  idArr.sort((a, b) => {
    return a - b;
  });

  // find the id that is not next to each other aka the difference is not 1
  return idArr.filter((id, index) => {
    if (idArr[index + 1] - idArr[index] !== 1) {
      return idArr[index + 1]; // your id is one next to this returned id
    }
  });
};

console.log(getId());
