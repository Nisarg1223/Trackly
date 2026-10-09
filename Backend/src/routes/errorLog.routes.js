import {Router} from 'express';

import { recordErrorLog } from '../controller/errorLog.controller.js';

const errorLogRouter = Router();

errorLogRouter.post("/", recordErrorLog);

export default errorLogRouter;