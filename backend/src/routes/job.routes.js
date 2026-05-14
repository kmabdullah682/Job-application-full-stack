import express from "express";
import { createJobPost, getJobs } from "../controllers/job.controller.js";
import { isEmployer, isUser } from "../middlewares/auth.middleware.js";


const router = express.Router();

router.post("/post-job", isEmployer, createJobPost);
router.get("/jobs", isUser , getJobs);


export default router;