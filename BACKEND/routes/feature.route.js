import express from "express";
import {
  getFeaturesController,
  createFeatureController,
  updateFeatureController,
  deleteFeatureController,
} from "../controllers/feature.controller.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getFeaturesController);
router.post("/", requireAdmin, createFeatureController);
router.put("/:id", requireAdmin, updateFeatureController);
router.delete("/:id", requireAdmin, deleteFeatureController);

export default router;
