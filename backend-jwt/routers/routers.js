import {Router} from "express";
import { login, validarSession, logout} from "../controllers/controllers.js";
import validarJwt from '../middlewares/validar-jwt.js';

const router = Router(); 


router.post('/login', login); //endpoint de inicio de sesión
router.get('/session', validarJwt, validarSession);//endpoint para validar ña sesión
router.post('/logout', logout) //endpoint de cierre de sesión

export {router}