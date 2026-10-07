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
export async function getMyProjects(req, res) {
  try {
    const projects = await ProjectModel.find({
      userId: req.user.id,
    });

    return res.status(200).json({
      success: true,
      projects,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}
export async function getProjectById(req, res) {
  try {
    const { id } = req.params;

    const project = await ProjectModel.findOne({
      _id: id,
      userId: req.user.id,
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}
export async function deleteProject(req, res) {
  try {
    const { id } = req.params;

    const project = await ProjectModel.findOneAndDelete({
      _id: id,
      userId: req.user.id,
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}