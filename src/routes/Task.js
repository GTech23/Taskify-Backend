import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.post("/create", auth, createTask);
taskRouter.get("/", auth, getAllTasks);
taskRouter.get("/:id", auth, getTaskById);
taskRouter.put("/:id", auth, updateTask);
export default taskRouter;
