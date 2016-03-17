/*readFileSync */

var http = require('http');
var fs = require('fs');
var port = process.env.port || 8080
http.createServer(function (request, response) {
  	response.end(fs.readFileSync('index.html'),'utf8');
  }).listen(port);
console.log('Server running on port: ', port);
