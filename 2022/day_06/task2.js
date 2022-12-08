const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  for (let i = 0; i < data.length; i++) {
    if (i >= 3) {
      let unic = [];
      for (let j = 0; j < 14; j++) {
        if (!unic.includes(data[i - j])) {
          unic.push(data[i - j])
        }
      }
      console.log(unic)
      if (unic.length === 14) {
        console.log(i + 1)
        break;
      }
    }
  }
})