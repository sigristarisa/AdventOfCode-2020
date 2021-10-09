const input = require("./input");

// split every question into letters
const questionArr = input.arr.map((question) => {
  return question.split("");
});

const countYes = (questions) => {
  let answerArr = []; // array that will hold letters with no overlaps of every question
  for (i = 0; i < questions.length; i++) {
    let answer = []; // array that will hold letters with no overlaps

    for (j = 0; j < questions[i].length; j++) {
      // if the answer array does not have the same letter + is not a "\n"
      if (!answer.includes(questions[i][j]) && questions[i][j] !== "\n") {
        answer.push(questions[i][j]);
      }
    }
    answerArr.push(answer);
  }
  // find how many letters are there in each answer and add them all together
  return answerArr
    .map((letter) => {
      return letter.length;
    })
    .reduce((value, nextValue) => {
      return value + nextValue;
    });
};

console.log(countYes(questionArr));
