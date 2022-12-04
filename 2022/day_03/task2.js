const fs = require('fs');

let inputData = [];

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  inputData = data.split('\n');

  let groupList = [];

  for (let i = 0; i < inputData.length; i+=3) {
    let group = [
      inputData[i].split(''),
      inputData[i + 1].split(''),
      inputData[i + 2].split('')
    ];
    groupList.push(group);
  };

  let badgeScore = [];

  for (let j = 0; j < groupList.length; j++) {
    let arr1 = groupList[j][0];
    let arr2 = groupList[j][1];
    let arr3 = groupList[j][2];
    const duplicates = arr1.filter((element) => arr2.includes(element) && arr3.includes(element));
    let badge = duplicates[0].charCodeAt(0);

    if (badge > 96) {
      badge = badge - 96;
    } else {
      badge = (badge - 64) + 26;
    }
    badgeScore.push(badge);
  };
  console.log(badgeScore.reduce((a, b) => a + b, 0));
});