import mongoose from "mongoose";

const performanceSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
    unique: true,
  },
  totalSamples: {
    type: Number,
    default: 0,
  },
  minLoadTime: {
    type: Number,
    default: 0,
  },
  maxLoadTime:{
    type:Number,
    default:0
  },
  averageLoadTime:{
    type:Number,
    default:0
  }
},{timestamps:true});


const performanceModel = mongoose.model("Performance",performanceSchema);

export default performanceModel;