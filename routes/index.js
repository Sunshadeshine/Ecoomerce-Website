import express from "express";
import * as homeController from "../controllers/home-controller.js";
import authRoutes from "./auth.js";
import categoryRoute from "./category.js";
import productRoute from "./product.js";
import path from "path";
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url); 
const __dirname=path.dirname(__filename);
console.log("router loaded");


const router = express.Router();
router.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

router.use("/api/v1/auth", authRoutes);
router.use("/api/v1/category", categoryRoute);
router.use("/api/v1/product", productRoute);
export default router;
