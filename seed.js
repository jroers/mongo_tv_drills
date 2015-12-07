var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my-tv-db');

var Character = require("models/character.js");