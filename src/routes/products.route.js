import { Router } from "express";
import { addProducts } from "../controllers/index.controller.js";

const router = Router();

router.post("/addproduct", addProducts);

export default router;
