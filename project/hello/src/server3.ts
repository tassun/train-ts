import { HTTP_PORT } from "./utils/EnvironmentVariable";
import { Application } from 'express';
import { Server } from 'http';
import { AddressInfo } from 'net';
import bodyparser from 'body-parser';
import express from 'express';
import cors from 'cors';

const app : Application = express();

app.set('view engine','ejs'); 
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({
	credentials: true,
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
}));

var response = {
    type: "result",
    status: "ok",
    message: "",
    body: ""
};

app.get('/hello', function (req, res) {
    res.contentType('application/json');
    //using query direct access string parameter
    //ex. curl http://localhost:8080/hello?name=test
    var pname = req.query.name;
    console.log("do get : " + req.originalUrl + ", path=" + req.path + ", name = " + pname);
    response.status = "ok";
    response.message = "hello " + (pname == null ? "world" : pname);
    console.log(response);
    res.send(JSON.stringify(response));
});

const urlencodedparser = bodyparser.urlencoded({ extended: false });
app.post('/hello', urlencodedparser, function (req, res) {
    res.contentType('application/json');
    //using body parser www-url-encoded as parameters
    //ex. curl -X POST http://localhost:8080/hello -d name=test
    //curl -X POST -H "Content-Type: application/json" http://localhost:8080/hello -d "{\"name\":\"test\"}"
    //this depend on app.use(express.json());
    var pname = req.body.name;
    console.log("do post : " + req.originalUrl + ", name = " + pname);
    response.status = "ok";
    response.message = "hello " + (pname == null ? "world" : pname);
    console.log(response);
    res.end(JSON.stringify(response));
});

app.get('/hi/:name', function (req, res) {
    res.contentType('application/json');
    //using params direct access path parameter
    //ex. curl http://localhost:8080/hi/test
    var pname = req.params.name;
    console.log("do get : " + req.originalUrl + ", name = " + pname);
    response.status = "ok";
    response.message = "hi " + (pname == null ? "world" : pname);
    console.log(response);
    res.json(response);
});

app.get('/error', function (req, res) {
    res.contentType('application/json');
    //using status code to defined error
    //ex. curl http://localhost:8080/error
    console.log("do get : " + req.originalUrl);
    response.status = "error";
    response.message = "test error";
    console.log(response);
    res.status(400).json(response);
});

app.post('/greet', function (req, res) {
    res.contentType('application/json');
    //using body parser www-url-encoded as parameters
    //ex. curl -X POST http://localhost:8080/greet -d name=test
    //curl -X POST -H "Content-Type: application/json" http://localhost:8080/greet -d "{\"name\":\"test\"}"
    console.log("request",req);
    var pname = req.body.name;
    console.log("do post : " + req.originalUrl + ", name = " + pname);
    response.status = "ok";
    response.message = "hello " + (pname == null ? "world" : pname);
    console.log(response);
    res.end(JSON.stringify(response));
});

const server : Server = app.listen(HTTP_PORT, function () {
	let addr = server.address() as AddressInfo;
	let host = addr.address;
	let port = addr.port;
   	console.log("working directory : "+__dirname);
	console.log("Server running at http://%s:%s", host, port);
});
