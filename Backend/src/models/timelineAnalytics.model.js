import mongoose from "mongoose";

const timelineAnalyticsSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
      unique: true,
    },

    // Total visits grouped by year
    years: {
      type: Map,
      of: Number,
      default: {},
    },

    // Month keys include the year, e.g. 2026_oct
    months: {
      type: Map,
      of: Number,
      default: {},
    },

    // Visits grouped by weekday
    days: {
      type: Map,
      of: Number,
      default: {},
    },

    // Visits grouped by time of day
    timeSlots: {
      type: Map,
      of: Number,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const TimelineAnalyticsModel = mongoose.model(
  "TimelineAnalytics",
  timelineAnalyticsSchema
);

export default TimelineAnalyticsModel;