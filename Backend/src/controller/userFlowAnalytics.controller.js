
import userFlowAnalyticsModel from "../models/userFlowAnalytics.model.js";
import projectModel from "../models/project.model.js";

export async function recordUserFlow(req, res) {
  try {
    const { projectId, journeyId, pages } = req.body;

    // 1. Validate required fields
    if (
      !projectId ||
      !journeyId ||
      !Array.isArray(pages) ||
      pages.length < 2 ||
      pages.length > 100
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid projectId, journeyId, or pages",
      });
    }

    // 2. Validate route values
    const validPages = pages.every(
      (page) =>
        typeof page === "string" &&
        page.length > 0 &&
        page.length <= 300
    );

    if (!validPages) {
      return res.status(400).json({
        success: false,
        message: "Invalid page paths",
      });
    }

    // 3. Check that the project exists
    const project = await projectModel.findById(projectId);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // 4. Prevent the same journey from being counted twice
    const alreadyRecorded = await userFlowAnalyticsModel.findOne({
      projectId,
      "recordedJourneys.journeyId": journeyId,
    });

    if (alreadyRecorded) {
      return res.status(200).json({
        success: true,
        message: "Journey already recorded",
      });
    }

    // 5. Find the exact flow
    const existingFlow = await userFlowAnalyticsModel.findOne({
      projectId,
      flows: {
        $elemMatch: {
          pages: { $eq: pages },
        },
      },
    });

    if (existingFlow) {
      // Increase the count for the matching sequence
      await userFlowAnalyticsModel.updateOne(
        {
          _id: existingFlow._id,
          flows: {
            $elemMatch: {
              pages: { $eq: pages },
            },
          },
        },
        {
          $inc: { "flows.$.count": 1 },
          $push: {
            recordedJourneys: { journeyId },
          },
        }
      );
    } else {
      // Create a new flow or add it to the project's flows
      await userFlowAnalyticsModel.findOneAndUpdate(
        { projectId },
        {
          $setOnInsert: { projectId },
          $push: {
            flows: { pages, count: 1 },
            recordedJourneys: { journeyId },
          },
        },
        { upsert: true, new: true }
      );
    }

    return res.status(200).json({
      success: true,
      message: "User flow recorded",
    });
  } catch (error) {
    console.error("User flow analytics error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}
