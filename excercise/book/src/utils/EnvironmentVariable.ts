import os from "os";
export const DB_URL = process.env.DB_URL || "mysql://user:password@localhost:3306/testdb?charset=utf8&connectionLimit=10";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "user";
export const DB_PASSWORD = process.env.DB_PASSWORD || "password";
export const DB_DATABASE = process.env.DB_DATABASE || "testdb";
export const DB_PORT = parseInt(process.env.DB_PORT || "3306") || 3306;
export const HTTP_PORT = parseInt(process.env.HTTP_PORT || "8080") || 8080;
export const RESOURCES_PATH = process.env.RESOURCES_PATH || os.tmpdir();
