var http = require('http');
var fileSystem = require('fs');

http.createServer(function(req,res)
{
    //File Read
    
    console.log('1');
    fileSystem.readFile('./sample html.html',function(fileReq,fileRes)
    {
        res.writeHead("200",{"content-type":"text/html"});
        res.write(fileRes);
        res.end;
    });

    //Append File - appends the data to the file, if file not available, will create a new
    console.log('2');
    fileSystem.appendFile('samplefile.txt','\nAppended Content',function(err){
        if(err)
            throw err;
        console.log('File Appended');
    });

    //Open a File - if file not available, will create a new

    // fileSystem.open("sample2.txt",'w',function(err)
    // {
    //     if(err)
    //         throw err;
    //     console.log("File Opened")
    // });

    //write content to file, if exists will overwrite
    console.log('3');
    fileSystem.writeFile('sample2.txt','Hello World!!!!\nEpdi Irukeenga!!!',function(err)
    {
        if(err)
            throw err;
        console.log('File Write');
    });

    //Delete file
    console.log('4');
    fileSystem.exists('sample5.txt',function(exist)
    {
        if(exist)
        {
            fileSystem.unlink('sample5.txt',function(err)
            {
                if(err)
                    throw err;
                console.log('File Deleted');
            });
        }
        else
            console.log('File Not Found');

    });

    fileSystem.exists('sample2.txt',function(exist)
    {
        if(exist)
        {
            fileSystem.rename('sample2.txt','sample3.txt',function(err)
            {
                if(err)
                    throw err;
                console.log('File Renamed');
            });
        }
        else
            console.log('File Not Found');
    });

}).listen(8088);