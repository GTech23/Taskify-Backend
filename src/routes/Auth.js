import { Router } from "express";

import { register, login } from "../controllers/auth.controller.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { loginSchema, registerSchema } from "../validations/user.validation.js";
const authRoute = Router();

authRoute.post("/register", validateRequest(registerSchema), register);
authRoute.post("/login", validateRequest(loginSchema), login);

export default authRoute;
