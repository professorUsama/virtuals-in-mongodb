import { Router } from "express";
import { addProducts, getProducts } from "../controllers/index.controller.js";

const router = Router();

router.post("/addproduct", addProducts);
router.get("/get-products", getProducts);

export default router;
