import express from "express";
import { isEmployer, isUser } from "../middlewares/auth.middleware.js";
import { apply, getAllApplications, showApplicationToApplicant, updateStatus, withdrawApplication } from "../controllers/application.controller.js";

const router = express.Router();


router.post("/apply/:jobId", isUser, apply);
router.get("/getApplications", isEmployer, getAllApplications);
router.patch("/update-status/:applicationId", isEmployer, updateStatus);
router.get("/appliedApplications", isUser, showApplicationToApplicant);
router.delete("/delete-application/:jobId", isUser, withdrawApplication);


export default router;