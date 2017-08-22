var express = require('express');
var app = express();
var path = require('path');
var port = 3000;
//var bodyParser = require('body-parser');

app.use(express.static('public'));

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use('', );
//app.use(bodyParser.json());

app.listen(port, function() {
    console.log('server up on port: ', port);
});