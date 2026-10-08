import analyticsModel from "../models/analytics.model.js";
import projectModel from "../models/project.model.js";

export async function recordVisit(req, res) {
  try {
    const {
      projectId,
      browser,
      operatingSystem,
      device,
    } = req.body;

    // Check Project ID
    if (!projectId) {
      return res.status(400).json({
        success: false,
        message: "Project ID is required",
      });
    }

    // Check project exists
    const project = await projectModel.findById(projectId);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Create dynamic MongoDB update
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

    return res.status(200).json({
      success: true,
      message: "Visit recorded",
      totalVisits: analytics.totalVisits,
      browsers: analytics.browsers,
      operatingSystems: analytics.operatingSystems,
      devices: analytics.devices,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}