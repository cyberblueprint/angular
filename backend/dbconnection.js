'user strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/angular', function  (err) {
    if(err){
        console.log('No connection to Database');
    } else {
        console.log('Database connection success');
    }
})