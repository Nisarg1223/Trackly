import dotenv from 'dotenv';
dotenv.config();

if(!process.env.MONGO_URI){
    throw new Error("the MONGO URI is not defined in environment variable");
}

export const config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
}
