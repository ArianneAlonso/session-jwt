import mysql from 'mysql2/promise';
import dbconfig from '../config/config';

export const conectar = async () => {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "db_system",
    });

    return connection;
};