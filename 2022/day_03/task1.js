const fs = require('fs');

let inputData = [];

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  inputData = data.split('\n');

  let scoreList = [];

  for (let i = 0; i < inputData.length; i++) {
     let middle = inputData[i].length / 2;

    let lineLeft = [];
    let lineRight = [];

    for (let j = 0; j < middle; j++) {
      lineLeft.push(inputData[i][j]);
    }

    for (let k = middle; k < inputData[i].length; k++) {
      lineRight.push(inputData[i][k]);
    }

    const duplicates = lineLeft.filter(element => lineRight.includes(element));
    let score = duplicates[0].charCodeAt(0);

    if (score > 96) {
      score = score - 96;
    } else {
      score = (score - 64) + 26;
    }
    scoreList.push(score);
  } 
  console.log(scoreList.reduce((a, b) => a + b, 0));  
});