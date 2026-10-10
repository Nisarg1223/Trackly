
import PageAnalyticsModel from "../models/pageAnalytics.model.js";

// 1. Count a page view when the page opens
export const trackPageView = async (req, res) => {
  try {
    const { projectId, path, pageTitle } = req.body;

    if (!projectId || !path) {
      return res.status(400).json({
        success: false,
        message: "projectId and path are required",
      });
    }

    const page = await PageAnalyticsModel.findOneAndUpdate(
      { projectId, path },
      {
        $set: { pageTitle: pageTitle || "" },
        $inc: { totalViews: 1 },
        $setOnInsert: { projectId, path },
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Page view tracked successfully",
      data: page,
    });
  } catch (error) {
    console.error("Track page view error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to track page view",
    });
  }
};

// 2. Record duration when a page visit ends
export const trackPageDuration = async (req, res) => {
  try {
    const { projectId, path, pageTitle, duration } = req.body;

    if (
      !projectId ||
      !path ||
      typeof duration !== "number" ||
      !Number.isFinite(duration) ||
      duration < 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Valid projectId, path, and duration are required",
      });
    }

    const seconds = Math.round(duration);

    const page = await PageAnalyticsModel.findOneAndUpdate(
      { projectId, path },
      [
        {
          $set: {
            projectId: { $ifNull: ["$projectId", projectId] },
            path: { $ifNull: ["$path", path] },
            pageTitle: {
              $cond: [
                { $eq: [pageTitle || "", ""] },
                { $ifNull: ["$pageTitle", ""] },
                { $literal: pageTitle || "" },
              ],
            },

            totalTimeSpent: {
              $add: [{ $ifNull: ["$totalTimeSpent", 0] }, seconds],
            },

            completedVisits: {
              $add: [{ $ifNull: ["$completedVisits", 0] }, 1],
            },

            minTime: {
              $cond: [
                { $eq: [{ $ifNull: ["$minTime", null] }, null] },
                seconds,
                { $min: ["$minTime", seconds] },
              ],
            },

            maxTime: {
              $cond: [
                { $eq: [{ $ifNull: ["$maxTime", null] }, null] },
                seconds,
                { $max: ["$maxTime", seconds] },
              ],
            },
          },
        },
      ],
      {
        new: true,
        upsert: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Page duration recorded successfully",
      data: {
        path: page.path,
        totalTimeSpent: page.totalTimeSpent,
        minTime: page.minTime,
        maxTime: page.maxTime,
        completedVisits: page.completedVisits,
        averageTime:
          page.completedVisits > 0
            ? Number(
                (page.totalTimeSpent / page.completedVisits).toFixed(2)
              )
            : 0,
      },
    });
  } catch (error) {
    console.error("Track page duration error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to record page duration",
    });
  }
};
