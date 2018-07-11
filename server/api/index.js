const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
//logging middelware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/foods', require('./foodAPI')); // include our routes!

app.use(express.static('./public'));

app.get('*', (req, res) => {
  res.sendFile(path(__dirname, '/public/index.html'));
}); // Send index.html for any other requests


//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
