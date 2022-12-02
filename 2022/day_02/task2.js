const fs = require('fs');

let inputData = [];

fs.readFile('./guide.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  inputData = data.split('\n');

  let result = [];

  let x = 1; // rock
  let y = 2; // paper
  let z = 3; // scissors

  let loss = 0;
  let draw = 3;
  let win = 6;

  /*
  X = lose
  Y = draw
  Z = win
  */

  for (let i = 0; i < inputData.length; i++) {
    let score = 0;
    let game = inputData[i].split(' ');

    // A - rock
    if (game[0] === "A") {
      if (game[1] === "Y") {
        score = x + draw;
      }
      if (game[1] === "X") {
        score = z + loss;
      }
      if (game[1] === "Z") {
        score = y + win;
      }
    }

    // B - paper
    if (game[0] === "B") {
      if (game[1] === "Y") {
        score = y + draw;
      }
      if (game[1] === "X") {
        score = x + loss;
      }
      if (game[1] === "Z") {
        score = z + win;
      }
    }

    // C - scissors
    if (game[0] === "C") {
      if (game[1] === "Y") {
        score = z + draw;      
      }
      if (game[1] === "X") {
        score = y + loss;
      }
      if (game[1] === "Z") {
        score = x + win;
      }
    }

    result.push(score);
  }

console.log(result.reduce((a, b) => a + b, 0));
});