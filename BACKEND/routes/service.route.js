import express from "express";
import {
  getServicesController,
  createServiceController,
  updateServiceController,
  deleteServiceController,
} from "../controllers/service.controller.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getServicesController);
router.post("/", requireAdmin, createServiceController);
router.put("/:id", requireAdmin, updateServiceController);
router.delete("/:id", requireAdmin, deleteServiceController);

export default router;
