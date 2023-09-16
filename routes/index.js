import express from "express";
import * as homeController from "../controllers/home-controller.js";
import authRoutes from "./auth.js";
import categoryRoute from "./category.js";
import productRoute from "./product.js";
import path from "path";
const router = express.Router();
console.log("router loaded");

router.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

router.use("/api/v1/auth", authRoutes);
router.use("/api/v1/category", categoryRoute);
router.use("/api/v1/product", productRoute);
export default router;
