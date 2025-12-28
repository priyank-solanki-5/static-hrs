import express from "express";
import {
  getSchoolInfoController,
  updateSchoolInfoController,
} from "../controllers/schoolInfo.controller.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getSchoolInfoController);
router.put("/", requireAdmin, updateSchoolInfoController);

export default router;
