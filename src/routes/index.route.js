import { Router } from "express";
import productRoutes from "./products.route.js";


const router = Router();

router.use("/product", productRoutes);

export default router;