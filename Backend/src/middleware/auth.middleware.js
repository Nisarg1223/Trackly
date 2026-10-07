import jwt from 'jsonwebtoken';
import {config} from '../config/config.js';

export function isAuthenticated(req,res,next){
    try{
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({
                success:false,
                 message: "Authentication required",
            });
        }

        const decoded = jwt.verify(token,config.JWT_SECRET);
        req.user = {

            id:decoded.id
        }
        next();
    }
    catch(e){
        return res.status(401).json({
            success:false,
            message:"invalid or expired token"
        })
    }
}
