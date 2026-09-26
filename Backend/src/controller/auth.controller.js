import userModel from "../models/user.model";
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

async function sendToken(user, message, res){
  const Token = jwt.sign({
    id: user._id
  }, config.JWT_SECRET, {
    expiresIn: "7d"
  });

  res.cookie("token", Token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
}
export async function RegisterController(req,res){
    const{email,password,Username} = req.body();
    try{
   const isUserexists = await userModel.findOne({
    $or:[
        {email},
        {Username}
    ]
   })
   if(isUserexists){
    return res.status(400).json({
        message:"user already exists",
       
    });
   }

   const user = await userModel.create({
    email,
    password,
    Username
   })
    }
    catch(err){

    }
    
}