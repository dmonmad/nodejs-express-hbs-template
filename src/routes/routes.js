import { Router } from 'express';
import * as mainCtrl from "../controllers/main.controller";
 

const router = Router();

router.get('/', mainCtrl.index)

//AUTH ROUTES


export default router;