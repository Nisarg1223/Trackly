import performanceModel from "../models/performance.model.js";
import ProjectModel from "../models/project.model.js";

// Record website load time
export const recordPerformance = async (req, res) => {
  try {
    const { projectId, loadTime } = req.body;
    if (!projectId || loadTime === undefined) {
      return res.status(400).json({
        success: false,
        message: "projectId and loadTime are required",
      });
    }
     if (
      typeof loadTime !== "number" ||
      !Number.isFinite(loadTime) ||
      loadTime < 0
    ) {
      return res.status(400).json({
        success: false,
        message: "loadTime must be a valid non-negative number",
      });
    }
    const project  = await ProjectModel.findById(projectId);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    let performance  = await performanceModel.findOne({projectId});

    if (!performance) {
      performance = await performanceModel.create({
        projectId,
        totalSamples: 1,
        minLoadTime: loadTime,
        maxLoadTime: loadTime,
        averageLoadTime: loadTime,
      });
    } 
    else {
      const oldTotal = performance.totalSamples;
      const newTotal = oldTotal + 1;

      performance.minLoadTime = Math.min(
        performance.minLoadTime,
        loadTime
      );

      performance.maxLoadTime = Math.max(
        performance.maxLoadTime,
        loadTime
      );

      performance.averageLoadTime =
        (performance.averageLoadTime * oldTotal + loadTime) /
        newTotal;

      performance.totalSamples = newTotal;

      await performance.save();
    }
     return res.status(200).json({
      success: true,
      message: "Performance recorded successfully",
      data: performance,
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({
        success:false,
        message:"Failed to record performance"
    })
  }
};

// Get website performance statistics
export const getPerformance = async (req, res) => {
  try {
    const { projectId } = req.params;

    const performance = await performanceModel.findOne({ projectId });

    if (!performance) {
      return res.status(200).json({
        success: true,
        data: {
          projectId,
          totalSamples: 0,
          minLoadTime: 0,
          maxLoadTime: 0,
          averageLoadTime: 0,
        },
      });
    }

    return res.status(200).json({
      success: true,
      data: performance,
    });
  } catch (error) {
    console.error("Get performance error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch performance",
    });
  }
};

