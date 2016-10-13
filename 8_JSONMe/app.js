var express = require('express'),
    app = express(),
    fs = require('fs'),
    path = require('path'),
    port = process.argv[2],
    fileArg = process.argv[3];
    
    app.get('/books', (req, res) => {      
      
      fs.readFile(fileArg, 'utf8', (err, data) => {
        if (err) throw err;
        var jsonResponse = JSON.parse(data);
        res.json(jsonResponse);
      });
      
    });
    
    app.listen(port);
    
/*
Write a server that, when it receives a GET, reads a file, parses it to JSON,
and responds with that content to the user.

The server should respond to any GET that matches the /books resource path.
As always, the port is passed in process.argv[2]. The file to read is passed
in process.argv[3].
*/

/*
Official solution

var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req, res){
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    if (e) return res.sendStatus(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])
*/