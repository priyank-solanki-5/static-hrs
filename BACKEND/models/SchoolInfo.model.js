import mongoose from "mongoose";

const schoolInfoSchema = new mongoose.Schema(
  {
    phone: { type: String, required: true, default: "+91 9081544225" },
    email: {
      type: String,
      required: true,
      default: "holyredeemereng@gmail.com",
    },
    facebookUrl: { type: String, default: "#" },
    instagramUrl: { type: String, default: "#" },
    linkedinUrl: { type: String, default: "#" },
  },
  { timestamps: true }
);

// Ensure only one document exists
schoolInfoSchema.statics.getInfo = async function () {
  let info = await this.findOne();
  if (!info) {
    info = await this.create({
      phone: "+91 9081544225",
      email: "holyredeemereng@gmail.com",
      facebookUrl: "#",
      instagramUrl: "#",
      linkedinUrl: "#",
    });
  }
  return info;
};

const SchoolInfo = mongoose.model("SchoolInfo", schoolInfoSchema);

export default SchoolInfo;
