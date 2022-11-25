import { HTTP_PORT } from "./utils/EnvironmentVariable";
import { Application } from 'express';
import { Server } from 'http';
import { AddressInfo } from 'net';
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import loginrouter from './routers/LoginRouter';

const app : Application = express();

app.set('view engine','ejs'); 
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({
	credentials: true,
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
}));

app.use(session({
	  secret: 'SomeSuperLongHardToGuessSecretString',
	  resave: true,
	  saveUninitialized: true,
	  cookie: {
		  maxAge: 10*60*1000, //10s expired
	  },
	})
  );

app.use("/",loginrouter);
  
const server : Server = app.listen(HTTP_PORT, function () {
	let addr = server.address() as AddressInfo;
	let host = addr.address;
	let port = addr.port;
   	console.log("working directory : "+__dirname);
	console.log("Server running at http://%s:%s", host, port);
});
