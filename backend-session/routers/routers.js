import {Router} from "express";
import { closeSession, loginSession, account, register } from "../controllers/controllers.js";
import session from "express-session";

const router = Router(); 
router.post('/logout', closeSession );
router.get('/session', account );
router.post('/login', loginSession );
router.post('/register', register);

export default router