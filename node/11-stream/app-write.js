const fs = require('fs');

const writeStream = fs.createWriteStream('./file3.txt');
writeStream.on('finish', () => {
  console.log('finished');
});

writeStream.write('hhello');
writeStream.write('world');
writeStream.end();
