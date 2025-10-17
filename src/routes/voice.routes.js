import { Router } from "express";
import { createTodoFromVoice } from "../controllers/voice.controller.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.post("/voice", authenticate, createTodoFromVoice);

export default router;
