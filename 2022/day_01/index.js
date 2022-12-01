const fs = require('fs');

let inputData = [];

fs.readFile('./input01.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  inputData = data.split('\n');

  let sumCalories = 0;
  let array = [];

  for (let i = 0; i < inputData.length; i++) {
    if (inputData[i] === '') {
      array.push(sumCalories);
      sumCalories = 0;
      continue
    }
    sumCalories += Number(inputData[i]);
  }

  let arr3 = [];

  for (k = 0; k < 3; k++) {
    let largest = 0;
    for (j = 0; j < array.length; j++) {
      if (array[j] > largest) {
          largest = array[j];
      }
    }
    arr3.push(largest);
    array = array.filter((a) => a !== largest);
  }
  console.log(arr3.reduce((a, b) => a + b, 0))
});