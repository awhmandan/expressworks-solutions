var express = require('express'),
    app = express(),
    port = process.argv[2],
    indexPath = process.argv[3];
    
    app.set('view engine', 'jade');
    app.set('views', indexPath || path.join(__dirname, 'templates'));
    
    app.get('/home', (req, res) => {
      res.render('index', {date: new Date().toDateString()});
    });
    
    app.listen(port);
    
//App with homepage rendered via Jade (although Jade now deprecated)
//Responds to '/home' - shows current date
//Path to index.jade provided via 2nd arg, port to listen on provided 1st arg
 
/*
index.jade -

h1 Hello World
p Today is #{date}.
*/

/*
Official solution

var express = require('express')
var app = express()
app.set('view engine', 'jade')
app.set('views', process.argv[3])
app.get('/home', function(req, res) {
 res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])
*/