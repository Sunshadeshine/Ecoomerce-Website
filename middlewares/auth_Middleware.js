import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

//protected route token base

export const requireSignIn = async (req, res, next) => {
  console.log("IN private check");
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET_KEY
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};
//admin acceess
export const isAdmin = async (req, res, next) => {
  console.log("IN ADMIN role check");
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};
