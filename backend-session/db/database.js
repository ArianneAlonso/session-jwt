import mysql from 'mysql2/promise';

export const conectar = async () => {
    const connection = await mysql({
        host: "localhost",
        user: "root",
        database: "db_system",
    });

    return connection;
};