import express from "express";
import { bookMarkJob, createJobPost, deleteJob, editJob, getJobs } from "../controllers/job.controller.js";
import { isEmployer, isUser } from "../middlewares/auth.middleware.js";
import { searchJobs } from "../controllers/search.controller.js";


const router = express.Router();

router.post("/post-job", isEmployer, createJobPost);
router.get("/jobs", isUser, getJobs);
router.get("/search", searchJobs);
router.patch("/edit-job/:jobId", isEmployer, editJob)
router.delete("/delete-job/:jobId", isEmployer, deleteJob);
router.post("/bookmark/:jobId", isUser, bookMarkJob);


export default router;