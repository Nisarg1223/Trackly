import ErrorLogModel from "../models/errorLog.model.js";
import ProjectModel from "../models/project.model.js";

export async function recordErrorLog(req,res){
    try{
        const {projectId,type,message} = req.body;

         // 1. Validate required fields
         if(!projectId || !type || !message){
            return res.status(400).json({
                success:false,
                message:"Project ID, type, and message are required",
            });
         }
          // 2. Validate message type
    const allowedTypes = ["error", "warning", "log"];

    if(!allowedTypes.includes(type)){
        return res.status(400).json({
            success:false,
            message:"Invalid message type"
        });
    }

     // 3. Check whether the project exists
    const project = await ProjectModel.findById(projectId);

    if(!project){
        return res.status(404).json({
            success:false,
            message:"Project not found"
        });
    }

    // 4. Create a new record or update the existing record
    const now = new Date();
      const errorLog = await ErrorLogModel.findOneAndUpdate(
      {
        projectId,
        type,
        message,
      },
      {
        $inc: {
          count: 1,
        },
        $set: {
          lastSeen: now,
        },
        $setOnInsert: {
          firstSeen: now,
        },
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Message recorded successfully",
      data: errorLog,
    });
    }
    catch(err){
        console.log("Trackly error occured:",err);
        return res.status(500).json({
      success: false,
      message: "Trackly Server error",
    });
    }
}