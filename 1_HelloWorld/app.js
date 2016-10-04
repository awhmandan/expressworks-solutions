var express = require('express'),
    app = express(),
    port = process.argv[2];
    
app.get('/home', (req, res) => {
  res.end('Hello World!');
});

app.listen(port);

//Outputs Hello World when /home visited

/*
Official solution

var express = require('express')
var app = express()
app.get('/home', function(req, res) {
  res.end('Hello World!')
})
app.listen(process.argv[2])
*/