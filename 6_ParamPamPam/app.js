var express = require('express'),
    app = express(),
    crypto = require('crypto'),
    port = process.argv[2];
    
    app.put('/message/:id', (req, res) => {
      var sha1 = crypto
                .createHash('sha1')
                .update(new Date().toDateString() + req.params.id)
                .digest('hex');
      
      res.send(sha1);
    });
    
    app.listen(port);
    
    
/*
Create an Express.js server that processes PUT /message/:id requests
and produces a SHA-1 hash of the current date combined with the ID from the URL.

For instance, if the server receives

    PUT /message/526aa677a8ceb64569c9d4fb

it will respond with a hash of the current date (as a string) and the ID.
*/
    
/*
Offical solution

var express = require('express')
var app = express()

app.put('/message/:id', function(req, res){
  var id = req.params.id
  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(str)
})

app.listen(process.argv[2])
*/