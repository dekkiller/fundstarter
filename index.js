var http = require('http');
var fs = require('fs');
var index = 'index.html';

// PART 1a
/*function FundStarter(req, res) {
  var content = fs.readFileSync('index.html');
  res.writeHeader(200, { 'Content-Type': 'text/html' });
  res.write(content);
  res.end();
}
http.createServer(FundStarter).listen(process.env.PORT || 8000);
*/


