import Feature from "../models/Feature.model.js";

export const getFeatures = async () => {
  try {
    const features = await Feature.find({ isActive: true }).sort({ order: 1 });
    return {
      success: true,
      data: features,
      message: "Features retrieved successfully",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.message || "Failed to retrieve features",
    };
  }
};

export const createFeature = async ({ title, desc, iconType, order }) => {
  try {
    const feature = await Feature.create({
      title,
      desc,
      iconType,
      order,
      isActive: true,
    });
    return {
      success: true,
      data: feature,
      message: "Feature created successfully",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.message || "Failed to create feature",
    };
  }
};

export const updateFeature = async (
  id,
  { title, desc, iconType, order, isActive }
) => {
  try {
    const feature = await Feature.findByIdAndUpdate(
      id,
      { title, desc, iconType, order, isActive },
      { new: true }
    );
    if (!feature) throw new Error("Feature not found");
    return {
      success: true,
      data: feature,
      message: "Feature updated successfully",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.message || "Failed to update feature",
    };
  }
};

export const deleteFeature = async (id) => {
  try {
    const feature = await Feature.findByIdAndDelete(id);
    if (!feature) throw new Error("Feature not found");
    return {
      success: true,
      data: feature,
      message: "Feature deleted successfully",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.message || "Failed to delete feature",
    };
  }
};
