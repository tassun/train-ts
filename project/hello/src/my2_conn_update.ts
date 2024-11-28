import { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } from "./utils/EnvironmentVariable";
import { Connection, QueryError } from 'mysql2';
import mysql from 'mysql2';

const conn: Connection = mysql.createConnection({
    host: DB_HOST, user: DB_USER, password: DB_PASSWORD, database: DB_DATABASE,
});

conn.connect((cerr: QueryError | null) => {
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
        console.log("rows",rows);
    });
    conn.end();
});
