var http = require('http');
var port = process.env.PORT || 9000;

var server = http.createServer(function(req, res) {
	res.write('Hello World');
	res.end();
});

server.listen(port, function() {
    console.log("Listening on %d", port);
});