import { Request, Response } from 'express';
import express from 'express';
import moment from 'moment';
import { DBConnection } from "../db/DBConnection";

const router = express.Router();

router.get('/:bookid', function(req: Request, res: Response) {	
	doGetBook(req,res);
});
async function doGetBook(req: Request, res: Response) {
	res.contentType('text/html');
    let bookid = req.params.bookid;
    let conn = null;
    try {
        conn = await DBConnection.getConnection();
        let sql = "select * from book where bookid = ? ";
        conn.query(sql,[bookid],(qerr, rows, fields) => {
            if(qerr) {
                console.error(qerr);
                res.render('errorPage',{ errormessage: qerr.sqlMessage?qerr.sqlMessage:qerr.message });
                return;
            }
            if(rows && rows.length>0) {
                let row = rows[0];
                console.log("row",row);
                let m = moment(row.publishdate);
                row.publishdate = m.format('DD/MM/YYYY');
                //row.price = row.price.toLocaleString("en-US");                
                row.price = row.price.toLocaleString("th-TH",{ minimumFractionDigits: 2 });
                console.log("row",row);
                res.render('bookPage',{ record: row });
                return;
            }
            res.render('errorPage',{ errormessage: "Record not found" });
        });
    } catch(cerr: any) {
        res.render('errorPage',{ errormessage: cerr.sqlMessage?cerr.sqlMessage:cerr.message });
    } finally {
        if(conn) DBConnection.releaseConnection(conn);
    }
    
}

export default router;