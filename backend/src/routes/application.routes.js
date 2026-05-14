import express from "express";
import { isEmployer, isUser } from "../middlewares/auth.middleware.js";
import { apply, getAllApplications } from "../controllers/application.controller.js";

const router = express.Router();


router.post("/apply/:jobId", isUser, apply);
router.get("/getApplications", isEmployer, getAllApplications);


export default router;