
import mongoose from "mongoose";

const pageAnalyticsSchema = new mongoose.Schema(
  {
    // Website/project being tracked
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },

    // Page information
    path: {
      type: String,
      required: true,
    },

    pageTitle: {
      type: String,
      default: "",
    },

    // Page visit statistics
    totalViews: {
      type: Number,
      default: 0,
    },

    totalVisitors: {
      type: Number,
      default: 0,
    },

    // Time statistics (stored in seconds)
    totalTimeSpent: {
      type: Number,
      default: 0,
    },

    minTime: {
      type: Number,
      default: null,
    },

    maxTime: {
      type: Number,
      default: null,
    },

    // Internal counter for calculating the average
    completedVisits: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Each project gets one analytics record per page
pageAnalyticsSchema.index(
  { projectId: 1, path: 1 },
  { unique: true }
);

const PageAnalyticsModel = mongoose.model(
  "PageAnalytics",
  pageAnalyticsSchema
);

export default PageAnalyticsModel;
