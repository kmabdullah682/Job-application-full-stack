import express from "express";
import { isUser } from "../middlewares/auth.middleware.js";
import { apply } from "../controllers/application.controller.js";

const router = express.Router();


router.post("/apply/:jobId", isUser, apply);


export default router;