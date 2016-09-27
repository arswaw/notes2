var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// share public folder
app.use(express.static(path.join(__dirname, 'public')));

//require('./lib/util.js');
require('./router.js')(app);

module.exports = app;