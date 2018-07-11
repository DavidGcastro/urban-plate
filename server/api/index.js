const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
//logging middelware
app.use(morgan('tiny'));
app.use(bodyParser);
//handle forms
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/foods', require('./foodAPI')); // include our routes!

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); // Send index.html for any other requests

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
