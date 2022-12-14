import { Response } from 'express';
import { JSONReply } from "../model/JSONReply";
import { VerifyError } from "../model/VerifyError";
import { AuthenError } from "../model/AuthenError";

export function responseError(res: Response, err: any, model: string, method: string): void {
	console.error("failure",err);
	res.contentType('application/json');
	let response: JSONReply = new JSONReply();
	response.head.modeling(model,method);
	if(err instanceof VerifyError) {
		let e = err as VerifyError;
		response.head.composeError(""+(e.errno?e.errno:e.code),e.message);
		res.status(e.code).end(JSON.stringify(response));
		return;
	}
	if(err instanceof AuthenError) {
		let e = err as AuthenError;
		response.head.composeError(""+(e.errno?e.errno:e.code),e.message);
		res.status(e.code).end(JSON.stringify(response));
		return;
	}
	let msg = "";
	let errno = "500";
	if (typeof err === "string") {
		msg = err;
	} else {
		if(err.sqlMessage) {
			msg = err.sqlMessage;
		} else {
			msg = err.message;
		}
		errno = err.errno?""+err.errno:"500";
	}
	response.head.composeError(errno,msg);
	res.status(500).end(JSON.stringify(response));
}

export function createError(model: string, method: string, err: any) : JSONReply {
	let response: JSONReply = new JSONReply();
	response.head.modeling(model,method);
	if(err instanceof VerifyError) {
		let e = err as VerifyError;
		response.head.composeError(""+(e.errno?e.errno:e.code),e.message);
		return response;
	}
	if(err instanceof AuthenError) {
		let e = err as AuthenError;
		response.head.composeError(""+(e.errno?e.errno:e.code),e.message);
		return response;
	}
	let msg = "";
	let errno = "500";
	if (typeof err === "string") {
		msg = err;
	} else {
		if(err.sqlMessage) {
			msg = err.sqlMessage;
		} else {
			msg = err.message;
		}
		errno = err.errno?""+err.errno:"500";
	}
	response.head.composeError(errno,msg);
	return response;	
}
