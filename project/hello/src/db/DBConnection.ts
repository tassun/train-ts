import { DB_URL } from "../utils/EnvironmentVariable";
import { Connection, Pool, PoolConnection, MysqlError } from 'mysql';
import mysql from 'mysql';

const pool: Pool = mysql.createPool(DB_URL);

export class DBConnection {
    
    public static getConnection() : Promise<Connection> {
        return new Promise<Connection>((resolve, reject) => {
            pool.getConnection((cerr: MysqlError, conn: Connection) => {
                if(cerr) {
                    if(conn) DBConnection.releaseConnection(conn);
                    reject(cerr);
                } else {
                    resolve(conn);
                }
            });
        });
    }
    
    public static getConnectionAsync(callback: Function) {
        pool.getConnection((cerr: MysqlError, conn: Connection) => {
            if(cerr) {
                if(conn) DBConnection.releaseConnection(conn);
                callback(cerr, null);
            } else {
                callback(null, conn);
            }
        });
    }
    
    public static releaseConnection(conn: Connection) {
        try {
            let pconn : PoolConnection = conn as PoolConnection;
            pconn.release(); 
        } catch(ex) { 
            console.error(ex);
        }
    }
}
