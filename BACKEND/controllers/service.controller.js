import {
  getServices,
  createService,
  updateService,
  deleteService,
} from "../services/service.services.js";

export const getServicesController = async (req, res) => {
  try {
    const result = await getServices();
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const createServiceController = async (req, res) => {
  try {
    const result = await createService(req.body);
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateServiceController = async (req, res) => {
  try {
    const result = await updateService(req.params.id, req.body);
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteServiceController = async (req, res) => {
  try {
    const result = await deleteService(req.params.id);
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
