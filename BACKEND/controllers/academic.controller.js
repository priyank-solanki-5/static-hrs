import {
  getAcademics,
  createAcademic,
  updateAcademic,
  deleteAcademic,
} from "../services/academic.services.js";

export const getAcademicsController = async (req, res) => {
  try {
    const result = await getAcademics();
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const createAcademicController = async (req, res) => {
  try {
    const result = await createAcademic(req.body);
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateAcademicController = async (req, res) => {
  try {
    const result = await updateAcademic(req.params.id, req.body);
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteAcademicController = async (req, res) => {
  try {
    const result = await deleteAcademic(req.params.id);
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
