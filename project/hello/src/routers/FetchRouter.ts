import { JSONReply } from "../model/JSONReply";
import { Request, Response } from 'express';
import express from 'express';
import moment from 'moment';

const router = express.Router();

//using params direct access path parameter
//ex. curl -X POST http://localhost:8080/fetch/time/current
router.post('/time/:name', function(req: Request, res: Response) {	
	doFetch(req,res);
});

//using params direct access path parameter
//ex. curl http://localhost:8080/fetch/time/current
router.get('/time/:name', function(req: Request, res: Response) {	
	doFetch(req,res);
});

function doFetch(req: Request, res: Response) : void {
	res.contentType('application/json');
	let pname = req.params.name;
	console.log("do fetch : "+req.originalUrl+", name = "+pname);
    let response: JSONReply = new JSONReply();
	response.head.modeling("hello","fetch");
	response.head.composeNoError();
	let body : Map<String,String> = new Map();
	let d = new Date();
	let m = moment(d);
	body.set("datetime", m.format('DD-MMM-YYYY HH:mm:ss'));
	if(pname && pname=="current") {
		body.set("result", m.format('HH:mm:ss'));
	} else if(pname && pname=="date") {
		body.set("result", m.format('DD/MM/YYYY'));
	} else if(pname && pname=="time") {
		body.set("result", m.format('HH:mm:ss'));		
	} else if(pname && pname=="datetime") {
		body.set("result", m.format('DD/MM/yyyy HH:mm:ss')); 
	}
	response.body = Object.fromEntries(body);
	console.log(response);
	res.json(response);	
}

export default router;
