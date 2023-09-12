import express from "express";
import {
  signIn,
  signUp,
  testController,
} from "../controllers/auth-controller.js";
import { isAdmin, requireSignIn } from "../middlewares/auth_Middleware.js";
const router = express.Router();

router.post("/register", signUp);
router.post("/login", signIn);

export default router;
