import express from "express";
import { register } from "../controllers/auth.controller.js";
import multer from "multer";

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/register", upload.single("image") ,register);


export default router;