var express = require('express'),
    app = express(),
    parser = require('body-parser'),
    port = process.argv[2];
    
    app.use(parser.urlencoded({extended: false}));
    
    app.post('/form', (req, res) => {
      var reversed = req.body.str.split('').reverse().join('');
      
      res.end(reversed);
    });
    
    app.listen(port);
    
//Write a route ('/form') that processes HTML form input
//(<form><input name="str"/></form>) and prints the value of str backwards.
//Uses body-parser middleware

/*
Official solution

var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])
*/