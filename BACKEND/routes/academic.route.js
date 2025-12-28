import express from "express";
import {
  getAcademicsController,
  createAcademicController,
  updateAcademicController,
  deleteAcademicController,
} from "../controllers/academic.controller.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAcademicsController);
router.post("/", requireAdmin, createAcademicController);
router.put("/:id", requireAdmin, updateAcademicController);
router.delete("/:id", requireAdmin, deleteAcademicController);

export default router;
