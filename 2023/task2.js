const fs = require('fs');

let inputData = [];

fs.readFile('./input_01.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    inputData = data.split('\n');

    let result = [];
    let valuesToCheck = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let first;
    let last;
    let sum = 0;

    for(let i = 0; i < inputData.length; i++) {

        let array = [];

        for (let j = 0; j < inputData[i].length; j++) {
            for (let k = 0; k < valuesToCheck.length; k++) {
                if(inputData[i].substring(j, inputData[i].length).startsWith(valuesToCheck[k])) {
                    array.push(k + 1);
                }
            }
            if (!Number.isNaN(parseInt(inputData[i][j]))) {
                array.push(parseInt(inputData[i][j]))
            }
        }
        first = array[0];
        last = array[array.length - 1];

        result.push(parseInt('' + first + '' + last))
    };

    for (let l = 0; l < result.length; l++) {
        sum += result[l];
    }
    console.log(sum);
});