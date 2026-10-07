import analyticsModel from "../models/analytics.model.js";
import projectModel from "../models/project.model.js";

export async function recordVisit(req, res) {
  try {
    const { projectId } = req.body;

    if (!projectId) {
      return res.status(400).json({
        success: false,
        message: "Project ID is required",
      });
    }

    // Check whether the project actually exists
    const project = await projectModel.findById(projectId);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    const analytics = await analyticsModel.findOneAndUpdate(
      { projectId },
      {
        $inc: {
          totalVisits: 1,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Visit recorded",
      totalVisits: analytics.totalVisits,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}