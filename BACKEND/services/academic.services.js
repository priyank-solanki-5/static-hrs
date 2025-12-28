import Academic from "../models/Academic.model.js";

export const getAcademics = async () => {
  try {
    const academics = await Academic.find({ isActive: true }).sort({
      order: 1,
    });
    return {
      success: true,
      data: academics,
      message: "Academics retrieved successfully",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.message || "Failed to retrieve academics",
    };
  }
};

export const createAcademic = async ({
  title,
  subtitle,
  description,
  order,
}) => {
  try {
    const academic = await Academic.create({
      title,
      subtitle,
      description,
      order,
      isActive: true,
    });
    return {
      success: true,
      data: academic,
      message: "Academic created successfully",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.message || "Failed to create academic",
    };
  }
};

export const updateAcademic = async (
  id,
  { title, subtitle, description, order, isActive }
) => {
  try {
    const academic = await Academic.findByIdAndUpdate(
      id,
      { title, subtitle, description, order, isActive },
      { new: true }
    );
    if (!academic) throw new Error("Academic not found");
    return {
      success: true,
      data: academic,
      message: "Academic updated successfully",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.message || "Failed to update academic",
    };
  }
};

export const deleteAcademic = async (id) => {
  try {
    const academic = await Academic.findByIdAndDelete(id);
    if (!academic) throw new Error("Academic not found");
    return {
      success: true,
      data: academic,
      message: "Academic deleted successfully",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.message || "Failed to delete academic",
    };
  }
};
