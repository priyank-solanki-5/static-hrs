import {
  getFeatures,
  createFeature,
  updateFeature,
  deleteFeature,
} from "../services/feature.services.js";

export const getFeaturesController = async (req, res) => {
  try {
    const result = await getFeatures();
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const createFeatureController = async (req, res) => {
  try {
    const result = await createFeature(req.body);
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateFeatureController = async (req, res) => {
  try {
    const result = await updateFeature(req.params.id, req.body);
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteFeatureController = async (req, res) => {
  try {
    const result = await deleteFeature(req.params.id);
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
