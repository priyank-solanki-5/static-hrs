import mongoose from "mongoose";

const featureSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    iconType: { type: String, default: "Lightbulb" }, // Lightbulb, BarChart3, School, etc.
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Feature = mongoose.model("Feature", featureSchema);

export default Feature;
