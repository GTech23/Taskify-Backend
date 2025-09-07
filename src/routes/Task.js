import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "../controllers/task.controller.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { taskSchema } from "../validations/task.validation.js";

const taskRouter = Router();

taskRouter.post("/create", validateRequest(taskSchema.body), auth, createTask);
taskRouter.get("/", auth, getAllTasks);
taskRouter.get("/:id", auth, getTaskById);
taskRouter.put("/:id", auth, validateRequest(taskSchema.body), updateTask);
taskRouter.delete("/:id", auth, deleteTask);

export default taskRouter;
