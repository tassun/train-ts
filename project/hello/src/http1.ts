import http from 'http';

http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello New World');
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
