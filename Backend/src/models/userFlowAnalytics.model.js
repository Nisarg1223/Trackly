
import mongoose from "mongoose";

const userFlowAnalyticsSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },

    flows: [
      {
        pages: {
          type: [String],
          required: true,
        },

        count: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// One analytics document per project
userFlowAnalyticsSchema.index(
  { projectId: 1 },
  { unique: true }
);

const userFlowAnalyticsModel = mongoose.model(
  "UserFlowAnalytics",
  userFlowAnalyticsSchema
);

export default userFlowAnalyticsModel;
