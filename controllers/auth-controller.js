import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/auth_helper .js";
import  JWT  from "jsonwebtoken";
export const signUp = async (req,res) =>{
  try {
            const {name,email,password,phone,address} = req.body;
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
                const requiredFields = ["name", "email","password", "phone",  "address"];
                const missingFields = [];

                requiredFields.forEach((field) => {
                if (!req.body[field]) {
                    missingFields.push(field);
                }
                });

                if (missingFields.length > 0) {
                  res.status(500).send({
                    error: `${missingFields.join(", ")} ${missingFields.length > 1 ? "are" : "is"} required`
                });
                }
            //   checking existing user
                const existingUser = await userModel.findOne({email});
                if(existingUser){
                    res.status(200).send({
                        success:true,
                        message:"Already Registered ! Please LOGIN"
                    })
                }
            //register user
            const hashedPassword = await hashPassword(password);
            const user =await new userModel({
                name,
                email,
                password:hashedPassword,
                phone,
                address,
                
            }).save ()
            res.status(200).send({
                success:true,
                message:"Signed Up successfully",
                user    
            })

    
  } catch (error) {
    console.log("Error in Signing Up" ,error);
    res.status(500).send({
        success:false,
        message:"Error in Signing Up",
        
    })
  }
}

export const signIn = async (req,res) =>{
  try {
            const {email,password} = req.body;
           
           if(!email || !password)
           {
                res.status(404).send({
                success:false,
                message:"Invalid Email/Password",
                
                   })
           }
           const user = await userModel.findOne({email});
           if(!user){
                return  res.status(404).send({
                success:false,
                message:"User not found! Sign Up first",
                
                   })
           }
           //comparing passwords
           const match = await comparePassword(password,user.password);
           if(!match)
           {
                return  res.status(404).send({
                success:false,
                message:"Password does'nt Match",
                
                   })
           }
           //token
           const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:"7d"});
           res.status(200).send({
            success:true,
            message:"Signed Up successfully!",
            token
           })
           
  }
  catch(err){
      console.log("Error in Signing In" ,err);
       res.status(500).send({
        success:false,
        message:"Error in Signing In",
        
        
    })
  }}
  
//test controller
export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
   
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
