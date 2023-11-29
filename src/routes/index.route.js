import { Router } from "express";
import productRoutes from "./products.route.js";
import reviewRoutes from "./reviewRoute.js";


const router = Router();

router.use("/product", productRoutes);
router.use("/review", reviewRoutes);

export default router;