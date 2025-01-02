const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf8')
  .then((data) => console.log(data))
  .catch(console.error);

// write a file
fs.writeFile('./file.txt', 'hi s CJ').catch(console.error);
fs.appendFile('./file.txt', 'DAAAAAAANG hi s CJ')
  .then(() => {
    // copy
    fs.copyFile('./file.txt', './file2.txt');
  })
  .catch(console.error);

// folder
fs.mkdir('sub-folder').catch(console.error);
fs.readdir('./').then(console.log).catch(console.error);
