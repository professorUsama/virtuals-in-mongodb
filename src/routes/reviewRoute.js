import { Router } from "express";
import { postReview } from "../controllers/index.controller.js";


const router = Router();
router.post("/post-review", postReview);

export default router;
