import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { createTask } from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.post("/create", auth, createTask);
export default taskRouter;
