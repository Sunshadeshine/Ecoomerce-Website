import express from "express";
import {
  signIn,
  signUp,
  // testController,
  forgotPsswrd,
} from "../controllers/auth-controller.js";
import { requireSignIn, isAdmin } from "../middlewares/auth_Middleware.js";
const router = express.Router();

router.post("/register", signUp);
router.post("/login", signIn);
//protected user route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected admin route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
//forgot password ||post
router.post("/forgot-password", forgotPsswrd);

export default router;
