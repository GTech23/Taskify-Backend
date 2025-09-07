import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
  createTask,
  getAllTasks,
  getTaskById,
} from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.post("/create", auth, createTask);
taskRouter.get("/", auth, getAllTasks);
taskRouter.get("/:id", auth, getTaskById);
export default taskRouter;
