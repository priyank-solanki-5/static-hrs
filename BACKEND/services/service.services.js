import Service from "../models/Service.model.js";

export const getServices = async () => {
  try {
    const services = await Service.find({ isActive: true }).sort({ order: 1 });
    return {
      success: true,
      data: services,
      message: "Services retrieved successfully",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.message || "Failed to retrieve services",
    };
  }
};

export const createService = async ({ title, desc, image, order }) => {
  try {
    const service = await Service.create({
      title,
      desc,
      image,
      order,
      isActive: true,
    });
    return {
      success: true,
      data: service,
      message: "Service created successfully",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.message || "Failed to create service",
    };
  }
};

export const updateService = async (
  id,
  { title, desc, image, order, isActive }
) => {
  try {
    const service = await Service.findByIdAndUpdate(
      id,
      { title, desc, image, order, isActive },
      { new: true }
    );
    if (!service) throw new Error("Service not found");
    return {
      success: true,
      data: service,
      message: "Service updated successfully",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.message || "Failed to update service",
    };
  }
};

export const deleteService = async (id) => {
  try {
    const service = await Service.findByIdAndDelete(id);
    if (!service) throw new Error("Service not found");
    return {
      success: true,
      data: service,
      message: "Service deleted successfully",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.message || "Failed to delete service",
    };
  }
};
