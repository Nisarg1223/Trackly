import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
    projectId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    totalVisits:{
        type:Number,
        default:0
    },

},{timestamps:true});

const analyticsModel = mongoose.model("Analytics", analyticsSchema);

export default analyticsModel;