import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { createTask, getAllTasks } from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.post("/create", auth, createTask);
taskRouter.get("/", auth, getAllTasks);
export default taskRouter;
