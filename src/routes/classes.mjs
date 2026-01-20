import express from "express";
import {
  createClass,
  listClasses,
  getClass,
  updateClass,
  deleteClass,
} from "../controllers/classController.mjs";
import { authorize } from "../middleware/auth.mjs";

const router = express.Router();

// All routes require authentication
router.use(authorize);

// GET /api/classes - List all classes
router.get("/", listClasses);

// GET /api/classes/:id - Get a specific class
router.get("/:id", getClass);

// POST /api/classes - Create a new class
router.post("/", createClass);

// PUT /api/classes/:id - Update a class
router.put("/:id", updateClass);

// DELETE /api/classes/:id - Delete a class
router.delete("/:id", deleteClass);

export default router;
