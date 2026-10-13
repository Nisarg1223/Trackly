
import analyticsModel from "../models/analytics.model.js";
import projectModel from "../models/project.model.js";
import timelineAnalyticsModel from "../models/timelineAnalytics.model.js";

export async function recordVisit(req, res) {
  try {
    const {
      projectId,
      browser,
      operatingSystem,
      device,
    } = req.body;

    // 1. Validate Project ID
    if (!projectId) {
      return res.status(400).json({
        success: false,
        message: "Project ID is required",
      });
    }

    // 2. Check whether the project exists
    const project = await projectModel.findById(projectId);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // 3. Record existing analytics
    const update = {
      $inc: {
        totalVisits: 1,
        [`browsers.${browser}`]: 1,
        [`operatingSystems.${operatingSystem}`]: 1,
        [`devices.${device}`]: 1,
      },
    };

    const analytics = await analyticsModel.findOneAndUpdate(
      { projectId },
      update,
      {
        new: true,
        upsert: true,
      }
    );

    // 4. Get current date and time in India (IST)
    const now = new Date();

    const istDate = new Date(
      now.toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      })
    );

    const year = istDate.getFullYear();
    const month = istDate.getMonth();
    const day = istDate.getDay();
    const hour = istDate.getHours();

    // 5. Prepare timeline keys
    const monthNames = [
      "jan", "feb", "mar", "apr", "may", "jun",
      "jul", "aug", "sep", "oct", "nov", "dec",
    ];

    const dayNames = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    const monthKey = `${year}_${monthNames[month]}`;
    const dayKey = dayNames[day];
    const yearKey = String(year);

    // 6. Determine the time slot
    let timeSlot;

    if (hour >= 0 && hour < 6) {
      timeSlot = "midnight";
    } else if (hour >= 6 && hour < 12) {
      timeSlot = "morning";
    } else if (hour >= 12 && hour < 17) {
      timeSlot = "afternoon";
    } else if (hour >= 17 && hour < 21) {
      timeSlot = "evening";
    } else {
      timeSlot = "night";
    }

    // 7. Update timeline analytics
    const timelineUpdate = {
      $inc: {
        [`years.${yearKey}`]: 1,
        [`months.${monthKey}`]: 1,
        [`days.${dayKey}`]: 1,
        [`timeSlots.${timeSlot}`]: 1,
      },
    };

    await timelineAnalyticsModel.findOneAndUpdate(
      { projectId },
      timelineUpdate,
      {
        new: true,
        upsert: true,
      }
    );

    // 8. Send response
    return res.status(200).json({
      success: true,
      message: "Visit and timeline analytics recorded",
      totalVisits: analytics.totalVisits,
      browsers: analytics.browsers,
      operatingSystems: analytics.operatingSystems,
      devices: analytics.devices,
    });
  } catch (error) {
    console.error("Analytics error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}
