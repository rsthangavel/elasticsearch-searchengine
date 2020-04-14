const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();
const routes = require('../routes/index.route');
const path = require('path');
require('./database');
app.use(express.static(path.join(process.cwd(), 'client')));
app.use('assets', express.static(path.join(process.cwd(), 'client/assets')));
app.use(compression());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);
app.use('/', function(req, res) {
    res.sendFile(path.join(process.cwd(), 'client/index.html'));
})

//Global error Handler
// app.use(errorHandler);

module.exports = app;