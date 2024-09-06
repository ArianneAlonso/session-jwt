import cors from 'cors';
import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import { conectar } from './db/database.js';
import router from './routers/routers.js';

const app = express();

//puerto
const PORT = process.env.PORT || 3000;

//bd
conectar();

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'mi_secreto',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false, // true solo si usas HTTPS
        httpOnly: true, // evita acceso a cookie desde JavaScript del cliente
        // sameSite: 'lax' // permite envío de cookies en navegadores modernos
    }
}));

// rutas
app.use('/', router);

// escucha del server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`));