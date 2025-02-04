const fs = require('fs');


fs.appendFile('./sample1.txt', "the sample is printed", () => {
  console.log("File is written");



  fs.readFile('./sample1.txt', 'utf-8', (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });
});
