import {Router} from "express";
import { login, validarSession, logout, validarJwt } from "../controllers/controllers.js";

const router = Router(); 
router.post('/login', login); //endpoint de inicio de sesión
router.get('/session', validarJwt, validarSession);//endpoint para validar ña sesión
router.post('/logout', logout) //endpoint de cierre de sesión

export default router