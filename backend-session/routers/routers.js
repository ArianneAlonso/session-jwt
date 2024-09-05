import {Router} from "express";
import { closeSession, loginSession, session, register } from "../controllers/controllers";
import session from "express-session";

const router = Router(); 
router.post('/logout', closeSession );
router.get('/session', session );
router.post('/login', loginSession );
router.post('/register', register);

export default router