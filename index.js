var http = require('http');
var fs = require('fs');

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
/*
http.createServer(function(req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length});
    res.write(data);
    res.end();
  });
}).listen(process.env.PORT || 8000);
*/
// PART 2
var port = process.env.PORT || 8080;
var requestListener = function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.stat('index.html', function(error, stats) {
    if (err) {
    	return console.log(err);
    }
    fs.open('index.html', 'r', function(error, fd) {
      if (err) {
    		return console.log(err);
      }
      var buffersize = stats.size;
      var buffer = new Buffer(buffersize);
      var bufferreader = 0;
      var csize = 512;
      while ( bufferreader < buffersize ) {
        if ((bufferreader + csize) > buffersize) {
          csize = (buffersize - bufferreader);
        }
      fs.read(fd, buffer, bufferreader, csize, bufferreader);
      bufferreader = bufferreader + csize;
      }
      res.write(buffer.toString('utf8', 0, buffersize)); 
      res.end();
      fs.close(fd);
    });
  });

};

var server = http.createServer(requestListener);
server.listen(port);
