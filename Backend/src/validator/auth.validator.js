import {body,validationResult} from 'express-validator';


function validateRequest(req,res,next){
      const errors = validationResult(req);

      if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        });
      }
      next();
}
export const validateRegisterUser =[
    body("email").isEmail().withMessage("invalid email formate"),
    body("password").isLength({min:6}).withMessage("password should be atleast 6 characters long"),
    body("Username").notEmpty().withMessage("the Username is requirede"),

    validateRequest
]

export const validateLoginUser = [
  body("email").isEmail().withMessage("invalid email"),
  body("password").notEmpty().withMessage("password is required"),
  
  validateRequest
]

