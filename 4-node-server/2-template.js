const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const name = 'CJ';
const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'Node' },
];

const server = http.createServer((req, res) => {
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);

  const url = req.url;
  if (url === '/') {
    ejs
      .renderFile('./template/index.ejs', { name })
      .then((data) => res.end(data));
  } else if (url === '/course') {
    ejs
      .renderFile('./template/courses.ejs', { courses })
      .then((data) => res.end(data));
  } else {
    ejs
      .renderFile('./template/not-found.ejs', { name })
      .then((data) => res.end(data));
  }
});
server.listen(8080);
