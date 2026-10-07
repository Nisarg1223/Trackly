import {Router} from 'express';
import { createProject } from '../controller/project.controller.js';
import { isAuthenticated } from '../middleware/auth.middleware.js';

const projectRouter = Router();

projectRouter.post("/",isAuthenticated,createProject);

export default projectRouter;