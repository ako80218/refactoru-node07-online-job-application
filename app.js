
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var applicantController = require('./controllers/applicant.js');

var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//connect to the database
mongoose.connect('mongodb://localhost/omega03');


//renders the index page
app.get('/', function(req, res){
	res.render('index')
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.render('applicants')
           
});

// creates and applicant
app.post('/applicant', applicantController.index); 
app.get('/thank-you', function(req,res){
    res.send('Success!')
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
