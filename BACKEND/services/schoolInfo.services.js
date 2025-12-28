import SchoolInfo from "../models/SchoolInfo.model.js";

export const getSchoolInfo = async () => {
  try {
    const info = await SchoolInfo.getInfo();
    return {
      success: true,
      data: info,
      message: "School info retrieved successfully",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.message || "Failed to retrieve school info",
    };
  }
};

export const updateSchoolInfo = async ({
  phone,
  email,
  facebookUrl,
  instagramUrl,
  linkedinUrl,
}) => {
  try {
    let info = await SchoolInfo.findOne();
    if (!info) {
      info = await SchoolInfo.create({
        phone,
        email,
        facebookUrl,
        instagramUrl,
        linkedinUrl,
      });
    } else {
      if (phone) info.phone = phone;
      if (email) info.email = email;
      if (facebookUrl) info.facebookUrl = facebookUrl;
      if (instagramUrl) info.instagramUrl = instagramUrl;
      if (linkedinUrl) info.linkedinUrl = linkedinUrl;
      await info.save();
    }
    return {
      success: true,
      data: info,
      message: "School info updated successfully",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.message || "Failed to update school info",
    };
  }
};
