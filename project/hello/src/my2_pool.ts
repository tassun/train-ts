import { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } from "./utils/EnvironmentVariable";
import { Connection, Pool, PoolConnection } from 'mysql2';
import mysql from 'mysql2';

const pool: Pool = mysql.createPool({
    host: DB_HOST, user: DB_USER, password: DB_PASSWORD, database: DB_DATABASE,
});

pool.getConnection((cerr: Error | null, conn: Connection) => {
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
        if(rows) {
            console.log("rows",rows);
        }
    });
    let pconn : PoolConnection = conn as PoolConnection;
    pconn.release(); 
    pool.end();
});