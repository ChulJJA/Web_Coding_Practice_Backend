const jwt = require('jsonwebtoken');
const secret = 'akqwacsadakK@!@#$@$123';
const token = jwt.sign(
  {
    id: 'Chul',
    isAdmin: true,
  },
  'secret',
  { expiresIn: 2 }
);
console.log(token);

setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded);
  });
}, 3000);
