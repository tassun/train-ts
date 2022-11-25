import { DB_URL } from "./utils/EnvironmentVariable";
import { Connection, MysqlError } from 'mysql';
import mysql from 'mysql';

const conn: Connection = mysql.createConnection(DB_URL);

conn.connect((cerr: MysqlError) => {
    if(cerr) {
        console.error(cerr);
    }
    let bookid = "100";
    let title = "Docter Sleep";
    let sql = "update book set title = ? where bookid = ? ";
    conn.query(sql,[title,bookid],(qerr, rows, fields) => {
        if(qerr) {
            console.error(qerr);
            return;
        }
        console.log("affected "+rows.affectedRows+" rows.");
    });
    conn.end();
});
