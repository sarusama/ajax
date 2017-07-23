var http = require('http');

http.createServer(
    function (req, res)
	{
		res.writeHead(200, {'Context-Type': 'text/plain'});
		res.end("hello");
	}
).listen(1014, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1014/');