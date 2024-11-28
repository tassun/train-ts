import { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } from "./utils/EnvironmentVariable";
import { Connection, QueryError } from 'mysql2';
import mysql from 'mysql2';

const conn: Connection = mysql.createConnection({
    host: DB_HOST, user: DB_USER, password: DB_PASSWORD, database: DB_DATABASE,
});

conn.connect((cerr: QueryError | null) => {
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
        if(rows) {
            console.log("rows",rows);
        }
        conn.end();
    });
});
