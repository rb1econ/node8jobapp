var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
// connect mongoose to thedb::::
mongoose.connect('mongodb://localhost/jobapp');

var indexController = require('./controllers/index.js');
var applicantController = require('./controllers/applicants.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

// Handle posts to our movieSubmit handler
app.post('/appSubmit', indexController.appSubmit);

var server = app.listen(6823, function() {
	console.log('Express server listening on port ' + server.address().port);
});
