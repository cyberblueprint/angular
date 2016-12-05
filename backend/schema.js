'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    completed: Boolean
});

var model = mongoose.model('Todos', schema);

module.exports = model;