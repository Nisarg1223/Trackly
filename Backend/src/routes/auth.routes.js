import {Router} from 'express';
import { validateRegisterUser,validateLoginUser } from '../validator/auth.validator.js';
import { RegisterController,LoginController } from '../controller/auth.controller.js';
const authRouter = Router();

authRouter.post('/register',validateRegisterUser,RegisterController);
authRouter.post('/login',validateLoginUser,LoginController);

export default authRouter;