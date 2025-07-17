 import jwt from 'jsonwebtoken';
 import User from '../models/User.js';

export const protect = async (req,res,next) => {
    try {
      const authHeader = req.headers.authorization;
      if(!authHeader || !authHeader.startsWith("bearer")){
        return res.status(401).json({message: "unauthorized -no token"})
      }
      
      const token = authHeader.split("")[1]
      const decoded= jwt.verify(token, process.env.JWT_SCERET);
      // attach user info 
      req.user = await User.findById(decoded.id).select("password")
     next();    
    } catch (error) {
       return res.status(500).json({message: error.message}) 
    }
}