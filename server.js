import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import db from "./src/config/mongose.js";
import authRoute from "./src/routes/Auth.js";
import taskRouter from "./src/routes/Task.js";

const app = express();
configDotenv("./.env");

const PORT = process.env.PORT;
await db();

app.use(express.json());
app.use(cors());

app.use("/user", authRoute);
app.use("/task", taskRouter);

app.listen(PORT, () => {
  console.log(`Server connected to PORT ${PORT}`);
});
