import express from 'express';
const app = express();

// app.get('/sky/:id', (req, res, next) => {
//   console.log(req.path);
//   console.log(req.headers);
//   console.log(req.params);
//   console.log(req.params.id);
//   console.log(req.query);
//   console.log(req.query.keyword);
//   res.send('hi!');

//     res.json({ name: 'cj' });
//     res.sendStatus(400);
//   res.setHeader('key', 'value');
//   res.status(201).send('created');
// });

app.all('/api', (req, res, next) => {
  console.log('all');
  next();
});
app.use('/sky', (req, res, next) => {
  console.log('use');
  next();
});

app.get(
  '/',
  (req, res, next) => {
    console.log('first');
    if (true) {
      return res.end('hello');
    }
    res.send('yikes');
    // next(new Error('error'));
  },
  (req, res, next) => {
    console.log('first2');
  }
);

app.get('/', (req, res, next) => {
  console.log('second');
});

app.use((req, res, next) => {
  res.status(404).send('Not Available');
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('My bad');
});

app.listen(8080);
