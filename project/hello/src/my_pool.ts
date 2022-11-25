import { DB_URL } from "./utils/EnvironmentVariable";
import { Connection, Pool, PoolConnection, MysqlError } from 'mysql';
import mysql from 'mysql';

const pool: Pool = mysql.createPool(DB_URL);

pool.getConnection((cerr: MysqlError, conn: Connection) => {
    if(cerr) {
        console.error(cerr);
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
    });
    let pconn : PoolConnection = conn as PoolConnection;
    pconn.release(); 
    pool.end();
});
