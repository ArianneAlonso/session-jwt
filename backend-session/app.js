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

// rutas
app.use('/', router);

// escucha del server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`));
