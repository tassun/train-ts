import { Connection } from 'mysql';
import { JSONReply } from "../model/JSONReply";

export interface ResultSet {
    rows: any;
    fields: any;
}

export function createDbError(model: String, method: String, err: any) : JSONReply {
    let response: JSONReply = new JSONReply();
	response.head.modeling(model,method);
    response.head.composeError(err.errno?""+err.errno:"-1111",err.sqlMessage?err.sqlMessage:err.message);
    return response;
}

export function executeQuery(conn: Connection, sql: string, params: (string | number | undefined | null | object)[]) : Promise<ResultSet> {
    return new Promise<ResultSet>((resolve, reject) => {
        conn.query(sql,params,(qerr, rows, fields) => {
            //console.log("sql",sql);
            if(qerr) {
                reject(qerr);
            } else {
                resolve({ rows: rows, fields: fields });
            }
        });
    });
}

export function beginWork(conn: Connection) : Promise<void> {
    return new Promise<void>((resolve, reject) => {
        conn.beginTransaction( (err) => {
            if(err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

export function commitWork(conn: Connection) : Promise<void> {
    return new Promise<void>((resolve, reject) => {
        conn.commit( (err) => {
            if(err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

export function rollbackWork(conn: Connection) : Promise<void> {
    return new Promise<void>((resolve, reject) => {
        conn.rollback( (err) => {
            if(err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}
