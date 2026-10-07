import ProjectModel from "../models/project.model.js";

export async function createProject(req, res) {
  try {
    const { projectName, websiteUrl } = req.body;

    if (!projectName || !websiteUrl) {
      return res.status(400).json({
        success: false,
        message: "Project name and website URL are required",
      });
    }

    const project = await ProjectModel.create({
      userId: req.user.id,
      projectName,
      websiteUrl,
    });

    return res.status(201).json({
      success: true,
      message: "Project created successfully",
      project,
    });
  } catch (err) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}
