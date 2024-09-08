import cors from 'cors';
import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import router from './routers/routers.js';
import path from 'path';

const app = express();

//puerto
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

// middlewares
app.use(morgan('dev'));
app.use(cors({ // Permitir solicitudes desde el front-end
    origin: [
        'http://localhost:5500',
        'http://localhost:3000',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Habilitar envío de cookies
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
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