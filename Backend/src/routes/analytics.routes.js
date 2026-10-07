import {Router} from 'express';
import { recordVisit } from '../controller/analytics.controller.js';

const analyticsRouter = Router();
analyticsRouter.post("/visit",recordVisit);
export default analyticsRouter;