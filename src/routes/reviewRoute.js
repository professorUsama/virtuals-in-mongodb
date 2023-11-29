import { Router } from "express";
import { postReview, getReviews } from "../controllers/index.controller.js";


const router = Router();
router.post("/post-review", postReview);
router.get("/get-reviews", getReviews);

export default router;
