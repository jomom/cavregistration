/*jshint esversion: 6 */
var express = require ('express');

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

