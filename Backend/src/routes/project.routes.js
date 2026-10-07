import {Router} from 'express';
import { createProject, getMyProjects,getProjectById,deleteProject} from '../controller/project.controller.js';
import { isAuthenticated } from '../middleware/auth.middleware.js';

const projectRouter = Router();

projectRouter.post("/",isAuthenticated,createProject);
projectRouter.get("/",isAuthenticated, getMyProjects);
projectRouter.get("/:id",isAuthenticated,getProjectById);
projectRouter.delete("/:id",isAuthenticated,deleteProject);

export default projectRouter;