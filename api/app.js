const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

require('./models/Note');
const routes = require('./routes/index.js');

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api', routes);

module.exports = app;