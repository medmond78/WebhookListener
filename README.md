# Twilio Mlab Connector

## Background

I have an MLab database to store quotes and other short text snippets that I have found helpful, wise, or inspirational. I have written an RESTful API (hosted on Heroku) to access the database, with the usual GET and POST routes in Express. I most often use Postman to access the quotes via the API. I haven't progressed in my learning to build a front-end to the API, and I'm not sure I'll outgrow Postman any time soon.

Recently, I wanted to expand my experience with Twilio by creating a another Heroku app that listens for incoming SMS messages to my Twilio number and posts them to the database. Hence if I read a quote, or hear one during a talk, that I want to capture, I can simply text the quote to my Twilio number and it will be added to the database.

## Code
The code is incredibly straightforward. Standard Node.js + Twilio preamble first...
```
"use strict";
 
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const app = express();
var request = require("request");

var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false } ));
```

Now we set up our single Express route which listens for incoming SMS messages at `/respondToSMS`. We then assign the important bits of the SMS message to variables.

``` 
// Create a route to respond to a call
app.post('/respondToSMS', function(req, res) {
    //Let's see how much we can print to the console from the incoming SMS
    console.log('Hey we got an SMS');
	var to = req.body.To;
    var fromNumber = req.body.From;
    var callBody = req.body.Body;
    console.log(to, fromNumber, callBody);
```

After parsing the response, we use the request module to POST the quote to our API.
```  
  res.send('Event received');
		var options = { method: 'POST',
		  url: 'http://jessie-8675309.herokuapp.com/api/quotes',
		  form: 
		   { name: req.body.Body,
			 '': '' } };

		request(options, function (error, response, body) {
		  if (error) throw new Error(error);

			console.log(body);
			});

});
```
Once you deploy this app on Heroku, AWS, your own server, wherever, you'll need to point Twilio to it. This is pretty straightforward too. Once you've purchased a number (or if you already have one), navigate to the SMS messaging webhook settings and direct it to the /respondToSMS address of the server. 
I've obscured the domain of my server, but it might be something like `https://guarded-sunshine-12345.herokuapp.com/respondToSMS`

![Twilio Webhook Setting](http://imgur.com/ifS1kQP.png)
