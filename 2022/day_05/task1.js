const fs = require('fs');

let inputData = [];

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  inputData = data.split('\n');

  let store = [];
  let instructions = [];
  let storeRegex = /.*\[([A-Z])\].*/;
  let instructionsRegex = /move ([0-9]+) from ([0-9]+) to ([0-9]+)/;

  for (let i = 0; i < inputData.length; i++) {
    if (inputData[i].match(storeRegex)) {
      store.push(inputData[i]);
    }
    if (inputData[i].match(instructionsRegex)) {
      instructions.push(inputData[i]);
    }
  }
  const stacks = [];

  // parse stacks input into arrays
  for (let i = 0; i < store.length; i++) {
    let index = 0;
    for (let j = 0; j < store[i].length; j+=4) {
      if (stacks.length <= index) {
        stacks.push([]);
      }
      let box = store[i][j] + store[i][j + 1] + store[i][j + 2] + store[i][j + 3];
      let m = box.match(storeRegex);
      //console.log(box, m);
      if (m) {
        stacks[index].push(m[1]);
      }
      index++;
    }
  }
  for (let i = 0; i < stacks.length; i++) {
    stacks[i] = stacks[i].reverse();
  }
  //console.log(stacks);
  // END: parse stacks input into arrays

  // Parse and execute instructions
  for (let i = 0; i < instructions.length; i++) {
    let m = instructions[i].match(instructionsRegex);

    if (m) {
      let move = Number(m[1]);
      let fr = Number(m[2]);
      let to = Number(m[3]);

      let pick = [];

      for (let j = 0; j < move; j++) {
        let pop = stacks[fr - 1].pop();
        pick.push(pop);
      }

      for (let j = move - 1; j >= 0; j--) {
        stacks[to - 1].push(pick[j]);
      }
    }
  }
  // END: Parse and execute instructions

  // Read last letters
  let letters = [];
  for (let i = 0; i < stacks.length; i++) {
    letters.push(stacks[i][stacks[i].length - 1]); // last letter
  }
  let result = letters.join("");
  console.log(result);
})