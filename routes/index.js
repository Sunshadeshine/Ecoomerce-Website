import express from "express";
import * as homeController from "../controllers/home-controller.js";
import authRoutes from "./auth.js";
import userRoutes from "./users.js";
const router = express.Router();
console.log("router loaded");

router.get("/", homeController.home);
router.get("/users", userRoutes);
router.use("/api/v1/auth", authRoutes);
export default router;
