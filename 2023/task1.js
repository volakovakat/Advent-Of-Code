const fs = require('fs');

let inputData = [];

fs.readFile('./input_01.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  inputData = data.split('\n');
  let array = [];
  let first;
  let last;
  let sum = 0;

  for(let i = 0; i < inputData.length; i++) {

    let splitData = inputData[i].split('');
    let numData = splitData.filter(Number);

    first = numData[0];
    last = numData[numData.length - 1];

    array.push(parseInt(first + last));
  }

  for (let j = 0; j < array.length; j++) {
    sum += array[j];
  }
  console.log(sum);
});
