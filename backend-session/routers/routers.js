import {Router} from "express";
import { closeSession, loginSession, session } from "../controllers/controllers";
import session from "express-session";

const router = Router(); 
router.post('/logout', closeSession );
router.get('/session', session );
router.post('/login', loginSession );

export default router