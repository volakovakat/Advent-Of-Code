const fs = require('fs');

let inputData = [];

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  inputData = data.split('\n');

  let duplicationList = [];

  for (let i = 0; i < inputData.length; i++) {
    let splitPairs = inputData[i].split(",");
    let pair1 = splitPairs[0].split("-");
    let pair2 = splitPairs[1].split("-");

    let interval1 = [];
    let interval2 = [];

    for (let j = Number(pair1[0]); j <= Number(pair1[1]); j++) {
      interval1.push(j);
    }

    for (let j = Number(pair2[0]); j <= Number(pair2[1]); j++) {
      interval2.push(j);
    }
    const duplicates = interval1.filter(element => !interval2.includes(element));
    const duplicatesReverse = interval2.filter(element => !interval1.includes(element));
    console.log(duplicates, duplicatesReverse);

    if (duplicates.length === 0 || duplicatesReverse.length === 0) {
      const result = 1;
      duplicationList.push(result);
    }
  }
  console.log(duplicationList.reduce((a, b) => a + b, 0));
});