// REQUIREMENTS
var express = require('express');
var app = express();
var morgan = require('morgan');
var port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.static('public'));
app.use(morgan('dev'));

//CONTROLLERS
var controller = require('./controllers/controller.js');
app.use('/controller', controller);

// LISTEN
app.listen(port);
console.log('=============================');
console.log('Server running off PORT: ' + port);
console.log('=============================');

