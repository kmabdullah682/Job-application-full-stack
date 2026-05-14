import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js"
import jobRouter from "./routes/job.routes.js"
import applicationRouter from "./routes/application.routes.js"

const app = express();


app.use(cookieParser());
app.use(express.json());

//! Routes
app.use("/api/auth", authRouter);
app.use("/api/job", jobRouter);
app.use("/api/applications", applicationRouter);



export { app };