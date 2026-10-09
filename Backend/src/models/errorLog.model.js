import mongoose from 'mongoose';


const errorLogSchema = new mongoose.Schema({
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required:true
    },
    type:{
        type:String,
        enum:["error","warning","log"],
        required:true
    },
    message:{
        type:String,
        required:true
    },
    count:{
        type:Number,
        default:1
    },
    firstSeen: {
      type: Date,
      default: Date.now,
    },

    lastSeen: {
      type: Date,
      default: Date.now,
    },
},{timestamps:true});

// Same message type + project = one record
errorLogSchema.index(
    {projectId: 1, type: 1, message: 1},
    { unique: true }
)

const ErrorLogModel = mongoose.model("ErrorLog",errorLogSchema);

export default ErrorLogModel;