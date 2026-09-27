import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

async function sendToken(user, message, res) {
  const Token = jwt.sign(
    {
      id: user._id,
    },
    config.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  res.cookie("token", Token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  return res.status(200).json({
    message,
    sucess: true,
    Token,
    user: {
      id: user._id,
      username: user.Username,
      email: user.email,
    },
  });
}
export async function RegisterController(req, res) {
  const { email, password, Username } = req.body;
  try {
    const isUserexists = await userModel.findOne({
      $or: [{ email }, { Username }],
    });
    if (isUserexists) {
      return res.status(400).json({
        message: "user already exists",
      });
    }

    const user = await userModel.create({
      email,
      password,
      Username,
    });
    sendToken(user, "user registered successfuly", res);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server Error",
    });
  }
}

export async function LoginController(req,res){
  const {email,password} = req.body;

  try{
    const existUser = await userModel.findOne({
    email
  })
  if(!existUser){
  return  res.status(404).json({
      message:"user not found",
      success:false
    });
  

  }
   const isMatch = await existUser.comparePassword(password);
   if(!isMatch){
   return res.status(400).json({
         message:"invalid username or password",
         success:false
    })
   }
   await sendToken(existUser,"user is loggedin successfuly",res);
  }
  catch(err){
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
}