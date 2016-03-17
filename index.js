var http = require('http');
var fs = require('fs');
var index = 'index.html';

// PART 1a
/*
function FundStarter(req, res) {
  var content = fs.readFileSync('index.html');
  res.writeHeader(200, { 'Content-Type': 'text/html' });
  res.write(content);
  res.end();
}
http.createServer(FundStarter).listen(process.env.PORT || 8000);
*/
// PART 1b

http.createServer(function(req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length});
    res.write(data);
    res.end();
  });
}).listen(process.env.PORT || 8000);

// PART 2


