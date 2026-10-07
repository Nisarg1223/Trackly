import analyticsModel from "../models/analytics.model.js";

export async function recordVisit(req,res){
    const {projectId} =  req.body;
    
   try{
    if(!projectId){
        return res.status(400).json({
            success:false,
            message:"Project id is Required"
        })
    }
    const analytics = await analyticsModel.findOneAndUpdate(
       { projectId },
       {
        $inc:{
            totalVisits:1,
        },

       },
       {
        new:true,
        upsert:true
       }

    );
    return res.status(200).json({
        success:true,
        message:"Visite Recorded",
        totalVisits: analytics.totalVisits,
    })
   }
   catch(err){
    console.log(err);
    return res.status(500).json({
        success:false,
        message:"server error"
    })
   }
}