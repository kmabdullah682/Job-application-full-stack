import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js"

const app = express();


app.use(cookieParser());
app.use(express.json());

//! Routes
app.use("/api/auth", authRouter);



export { app };