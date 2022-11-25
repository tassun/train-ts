import http from 'http';
import url from 'url';

http.createServer(function handler(req, res) {
    if(req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World');    
    } else if(req.url == '/hello') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        let response = {"message" : "Hello World"};
        res.end(JSON.stringify(response));    
    } else if(req.url) {
        console.log("request",req.url);
        let q = url.parse(req.url, true).query;
        res.writeHead(200, {'Content-Type': 'application/json'});
        let response = {"message" : "Hello, "+q.name};
        res.end(JSON.stringify(response));    
    }
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
