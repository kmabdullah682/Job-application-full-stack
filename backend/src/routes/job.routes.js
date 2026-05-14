import express from "express";
import { createJobPost } from "../controllers/job.controller.js";
import { isEmployer } from "../middlewares/auth.middleware.js";


const router = express.Router();

router.post("/post-job", isEmployer , createJobPost);


export default router;