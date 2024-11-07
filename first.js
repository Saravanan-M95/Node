var http = require('http');
var dt = require('./dateTime');
var url = require('url');

var fileSystem = require('fs');

http.createServer(function(req,res)
{
    //response type
    res.writeHead(200,{"content-type" : "text/text"})
    //print url from request
    res.write("URL - "+req.url);
    res.write("\r\n")
    //calling external methods
    res.write("Date & Time - "+dt.dateTime());
    //fetch all parameters
    var param = url.parse(req.url, true).query;
    res.write("\r\n")
    //Get param value by key
    res.write(param.one);


    fileSystem.readFile('./sample html.html',function(request,response)
{
   // res.writeHead("200",{"content-type":"text/html"});
    res.write(response);
    res.end;
});

}).listen(8087);

