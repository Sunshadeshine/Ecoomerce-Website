import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/auth_helper .js";
import JWT from "jsonwebtoken";
export const signUp = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;
    //validations
    //   if(!name ){
    //     return res.send({
    //         error:"Name is required"
    //     })
    //   }
    //   if(!email){
    //     return res.send({
    //         error :"email is required"
    //     })
    //   }
    // if(!phone){
    //     return res.send({
    //         error :"phone no is required"
    //     })
    //   }
    // if(!password){
    //     return res.send({
    //         error :"password is required"
    //     })
    //   }
    //   if(!address){
    //     return res.send({
    //         error :"address is required"
    //     })
    //   }

    /***** other way to do so**************/
    const requiredFields = [
      "name",
      "email",
      "password",
      "phone",
      "address",
      "answer",
    ];
    const missingFields = [];

    requiredFields.forEach((field) => {
      if (!req.body[field]) {
        missingFields.push(field);
      }
    });

    if (missingFields.length > 0) {
      res.status(500).send({
        message: `${missingFields.join(", ")} ${
          missingFields.length > 1 ? "are" : "is"
        } required`,
      });
    }
    //   checking existing user
    const existingUser = await userModel.findOne({ email }).maxTimeMS(20000);
    if (existingUser) {
      res.status(200).send({
        success: false,
        message: "Already Registered ! Please LOGIN",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      answer,
    }).save();
    res.status(200).send({
      success: true,
      message: "Signed Up successfully",
      user,
    });
  } catch (error) {
    console.log("Error in Signing Up", error);
    res.status(500).send({
      success: false,
      message: "Error in Signing Up",
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(404).send({
        success: false,
        message: "Invalid Email/Password",
      });
    }
    const user = await userModel.findOne({ email }).maxTimeMS(20000);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found! Sign Up first",
      });
    }
    //comparing passwords
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(404).send({
        success: false,
        message: "Password does'nt Match",
      });
    }
    //token
    const token = await JWT.sign(
      { _id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );
    res.status(200).send({
      success: true,
      message: "Signed Up successfully!",
      user: {
        _id: user._id,
        name: user.name,
        address: user.address,
        email: user.email,
        phone: user.phone,
        password: user.password,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    console.log("Error in Signing In", err);
    res.status(500).send({
      success: false,
      message: "Error in Signing In",
    });
  }
};
// forgot password
export const forgotPsswrd = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      res.status(400).send({
        message: "Email is required",
      });
    }
    if (!newPassword) {
      res.status(400).send({
        message: "New Password set is required",
      });
    }
    if (!answer) {
      res.status(400).send({
        message: "New Password is required",
      });
    }
    //check email and answer for creating new password
    const user = await userModel.findOne({ email, answer }).maxTimeMS(20000);
    if (!user) {
      res.status(404).send({
        success: false,
        message: "Wrong Email or Answer",
      });
    }
    const hashed = await hashPassword(newPassword);
    console.log(user._id);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password changed successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
//test controller
export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
