var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');
var qs = require('querystring');

var root = __dirname;
var items = [];

var server = http.createServer(function (req, res) {
    

    if(req.url == '/') {
        switch(req.method) {
            case 'GET':
                req.url = '/index.html';
                console.log('on get')
                break;
            case 'POST':
                var item = '';
                req.setEncoding('utf8');
                req.on('data', function(chunk){
                    item += chunk;
                });
                req.on('end', function(){
                    console.log('on post')
                    var obj = qs.parse(item);
                    items.push(obj);
                    res.end('The item: "' + obj.item + '" was added successfully');
                });
                break;
        }
    }

    var url = parse(req.url);
    var path = join(root, url.pathname);
    fs.stat(path, function (err, stat) {
        if (err) {
            if (err.code == 'ENOENT') {
                res.statusCode = 404;
                res.end('File Not Found');
            } else {
                res.statusCode = 500;
                res.end('Internal Server Error');
            }
        } else {
            var stream = fs.createReadStream(path, {message: 'test'});
            //res.setHeader('Content-Length', stat.size);
            console.log('on stream')
            stream.pipe(res);
            stream.on('error', function (err) {
                res.statusCode = 500;
                res.end('Internal Server Error');
            })
        }
    })
}).listen(9000, function(){
  console.log("Listening on port 9000") 
})