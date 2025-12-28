import {
  getSchoolInfo,
  updateSchoolInfo,
} from "../services/schoolInfo.services.js";

export const getSchoolInfoController = async (req, res) => {
  try {
    const result = await getSchoolInfo();
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateSchoolInfoController = async (req, res) => {
  try {
    const result = await updateSchoolInfo(req.body);
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
