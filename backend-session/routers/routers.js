import { Router } from "express";
import session from "express-session";
import { closeSession, loginSession, account, register } from "../controllers/controllers.js";

const router = Router();

// middleware de session
router.use(session({
    secret: 'mi_secreto',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false, // true solo si usas HTTPS
        httpOnly: true, // evita acceso a cookie desde JavaScript del cliente
        // sameSite: 'lax' // permite envío de cookies en navegadores modernos
    }
}));

router.post('/logout', closeSession);
router.get('/session', account);
router.post('/login', loginSession);
router.post('/register', register);

export default router;