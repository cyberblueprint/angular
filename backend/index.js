'use strict';

var express = require('express');
var data = require('../mock/data');
var Todos = require('./schema');
var parser = require('body-parser');

var app = express();

require('./dbconnection');
app.use('/', express.static('front'));

app.use(parser.json());
app.post('/post', function(req, res){
	var data = req.body;
	Todos.create(data, function(err, data){
		if (err) {
			return res.status(500).json({message: err.message});
		}
		res.send({'todos':data, message: "Todo created"});	
	});
});

app.put('/update/:id', function(req, res){
	var id = req.params.id;
	var data = req.body;
	if( data && data._id !== id){
		return res.status(500).json({err: "Id's doesn't match"});
	}
	Todos.findByIdAndUpdate(id, data, {new: true}, function(err, todo){
		if (err) {
			return res.status(500).json({message: err.message});
		}
		res.send({'todos':data, message: "Todo updated"});	
	});
});

app.delete('/delete/:id', function(req, res){
	var id = req.params.id;
  	Todos.findByIdAndRemove(id, function(err, result) {
    	if (err) {
      		return res.status(500).json({ err: err.message });
    	}
    	res.json({ message: 'Todo Deleted' });
  	});
});

app.use('/', function(req, res){
    Todos.find({}, function(err, data){
		if (err) {
			return res.status(500).json({message: err.message});
		}
		res.json({person:data});	
	});
});

app.listen(3000, function() {
	console.log('The serving is running on port 3000.');
});