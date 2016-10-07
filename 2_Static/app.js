var express = require('express'),
    app = express(),
    port = process.argv[2],
    index = process.argv[3];
    
    app.use(express.static(index || path.join(__dirname + 'public')));
    
    app.listen(port);
    
//Serves static index.html file (path ot this provided via 2nd arg)

/*
Official solution

var path = require('path')
var express = require('express')
var app = express()

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])
*/