const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/user.route');

const app = express();

// CORS = Core origin resource share use
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// User Route
app.use('/user', userRouter);

// Not found route
app.use((req, res) => {
  res.status(200);
  res.json({
    status_code: 404,
    message: 'Not Found',
  });
  res.end();
});

module.exports = app;
