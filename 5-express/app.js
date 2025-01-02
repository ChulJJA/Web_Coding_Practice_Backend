import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();
const corsOption = {
  origin: ['http://127.0.0.1:5500'],
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(cors(corsOption));
app.use(helmet());

app.get('/', (req, res) => {
  console.log(req.body);
  console.log(req.cookies);

  res.send('Welcome!');
});

app.listen(8080);
