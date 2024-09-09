import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import { PORT } from './config/config.js';
import morgan from 'morgan';
import router from './routers/routers.js';

const app = express();

//middlewares
app.use(cors({
    origin: ['http://localhost:5500', 'http://localhost:4000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'] 
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'session_secret_key', // Cambia esto por una clave secreta en producción
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Usar 'true' si usas HTTPS
}));

// rutas
app.use(router);

// servidor escuchando
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
