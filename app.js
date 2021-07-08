/*jshint esversion: 6 */
var express = require ('express');
//dependencies
var path = require ('path');


//init app
var app = express();

//connect database
var mongoose = require('mongoose');
var config = require('./config/database');

mongoose.connect(config.database, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;

// CONNECTION EVENTS
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log('connected db');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

//view engine setup
app.set ('views',path.join(__dirname, 'views'));
app.set('view engine','ejs')

//set public folder
app.use(express.static(path.join(__dirname , 'public')));

// Set global errors variable
app.locals.errors = null;

// index page
app.get('/', function(req, res) {
    res.render('main');
  });