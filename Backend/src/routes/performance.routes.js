import {Router} from 'express';
import {
  recordPerformance,
  getPerformance,
} from "../controller/performance.controller.js";

const performanceRouter = Router();

// Record website load time
performanceRouter.post("/", recordPerformance);

// Get performance statistics for a project
performanceRouter.get("/:projectId", getPerformance);

export default performanceRouter;