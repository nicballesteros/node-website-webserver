const express = require('express');
const fs = require('fs');

let server = express();

//68.39.77.31

server.get('/about', function(req, res){
    res.sendFile(__dirname + "/about/about.html");
}); 

server.get('/todo', function(req, res){
    res.sendFile(__dirname + "/todo/index.html");
}); 

server.use('/', express.static(__dirname));


server.listen(80);