import {Router} from 'express';
import { recordUserFlow } from '../controller/userFlowAnalytics.controller.js';

const userFlowAnalyticsRouter=Router();

userFlowAnalyticsRouter.post('/record',recordUserFlow);

export default userFlowAnalyticsRouter;