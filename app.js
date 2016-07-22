var express = require('express');
var app = express();
var request = require("request");

var port = process.env.PORT || 3000;

// Create a route to respond to a webhook POST request
app.post('/listen', function(req, res) {
    console.log('Hey we got a POST request');
	console.log(req);
	console.log(res);

});

app.listen(process.env.PORT || 3000);