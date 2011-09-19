var http = require('http');
var server = http.createServer(function (req, resp) {
  resp.writeHead(301, {'Location':'http://google.com/', 'Expires': (new Date).toGMTString()});
  resp.end();
});
server.listen(process.argv[2]);
