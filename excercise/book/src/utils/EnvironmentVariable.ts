import os from "os";
export const DB_URL = process.env.DB_URL || "mysql://root:root@localhost:3306/accessdb?charset=utf8&connectionLimit=10";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "root";
export const DB_DATABASE = process.env.DB_DATABASE || "accessdb";
export const DB_PORT = parseInt(process.env.DB_PORT || "3306") || 3306;
export const HTTP_PORT = parseInt(process.env.HTTP_PORT || "8080") || 8080;
export const RESOURCES_PATH = process.env.RESOURCES_PATH || os.tmpdir();
