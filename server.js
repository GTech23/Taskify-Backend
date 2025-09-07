import express from "express";
import cors from "cors";
import helmet from "helmet";
import { configDotenv } from "dotenv";
import db from "./src/config/mongose.js";
import authRoute from "./src/routes/Auth.js";
import taskRouter from "./src/routes/Task.js";

const app = express();
configDotenv("./.env");

const PORT = process.env.PORT;
await db();

app.use(express.json({ limit: "10kb" }));
app.use(helmet());
app.use(cors());
app.disable("x-powered-by");

app.use("/user", authRoute);
app.use("/task", taskRouter);

app.listen(PORT, () => {
  console.log(`Server connected to PORT ${PORT}`);
});
