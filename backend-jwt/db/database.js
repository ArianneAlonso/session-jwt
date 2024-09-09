import mysql from 'mysql2/promise';
import { dbconfig } from '../config/config.js';

export const conectar = async ()=>{
    return await mysql.createConnection({
        port:dbconfig.PORT,
        host:dbconfig.DB_HOST,
        user:dbconfig.DB_USER,
        password:dbconfig.DB_PASSWORD,
        database:dbconfig.DB_NAME
    })
}

export default conectar;