import express from 'express';
import { body, param, validationResult } from 'express-validator';

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  res.status(400).json({ message: errors.array()[0].msg });
};

app.post(
  '/users',
  [
    body('name')
      .trim()
      .isLength({ min: 2 })
      .withMessage('Should be more than two letters'),
    body('age').notEmpty().isInt().withMessage('Only numbers available.'),
    body('email').isEmail().withMessage('Not a proper email.').normalizeEmail(),
    body('job.name').notEmpty(),
    validate,
  ],
  (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  '/:email',
  param('email').isEmail().withMessage('Please type proper email.'),
  validate,
  (req, res, next) => {
    res.send('wassup');
  }
);

app.listen(8080);
