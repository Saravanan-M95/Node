var http = require('http')
var dateTime = require('./dateTime')

http.createServer(
function(req,res)
{
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('Hello World - '+dateTime.dateTime());
res.end('Hello World');
}
).listen(8080);