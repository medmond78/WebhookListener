/* var express = require('express');
var app = express();
var request = require("request");

var port = process.env.PORT || 3000;

// Create a route to respond to a webhook POST request
app.post('/listen', function(req, res) {
    console.log('Hey we got a POST request');
	console.log(req.body);
	

});




 */
var express = require('express'),
    app     = express(),
   	request = require('request');
	
app.configure(function(){
  app.use(express.bodyParser());
  app.use(app.router);
});

app.listen(port);

app.post("/listen", function(req, res) {
  console.log(req.body);
  res.send({ status: 'SUCCESS' });
});


app.listen(process.env.PORT || 3000);
