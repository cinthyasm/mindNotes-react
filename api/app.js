const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

require('./models/Note');
require('./models/Notebook');
const routes = require('./routes/index.js');

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(enableCORS);

app.use('/api', routes);

function enableCORS(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}

module.exports = app;