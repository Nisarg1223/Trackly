
import { Router } from "express";
import {
  trackPageView,
  trackPageDuration,
} from "../controller/pageAnalytics.controller.js";

const pageAnalyticsRouter = Router();

// Track when a page is opened
pageAnalyticsRouter.post("/view", trackPageView);

// Track the duration when a page visit ends
pageAnalyticsRouter.post("/duration", trackPageDuration);

export default pageAnalyticsRouter;
