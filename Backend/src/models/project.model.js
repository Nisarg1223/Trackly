import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    projectName:{
        type:String,
        required:true,
        trim:true
    },
    websiteUrl:{
        type:String,
        required:true,
        trim:true
    },

},{timestamps:true});


const ProjectModel = mongoose.model("Project", projectSchema);
export default ProjectModel;