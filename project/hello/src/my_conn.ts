import { DB_URL } from "./utils/EnvironmentVariable";
import { Connection, MysqlError } from 'mysql';
import mysql from 'mysql';

const conn: Connection = mysql.createConnection(DB_URL);

conn.connect((cerr: MysqlError) => {
    if(cerr) {
        console.error(cerr);
        return;
    }
    let bookid = "100";
    let sql = "select * from book where bookid = ? ";
    conn.query(sql,[bookid],(qerr, rows, fields) => {
        if(qerr) {
            console.error(qerr);
            return;
        }
        if(rows && rows.length>0) {
            let row = rows[0];
            console.log("row",row);
        }
        conn.end();
    });
});
