import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// register or sigin user

export const register = async (req,res) => {
    try {
        const{ name, password, email}= req.body;
        
        //check existing user
        const existingUser = await User.findOne({email})
        if(existingUser) {
            return res.status(400).json({message: "user already exist"})
        }

     /// hash password

     const salt = await bcrypt.genSalt(10)
     const hashpassword = await bcrypt.hash(password,salt)

  const newUser = new User({
    name, 
    email,
     password: hashpassword
  });
  await newUser.save()
  res.status(200).json({message : " user was registed succesfully"})

    } catch (error) {
        res.status(400).json({message : error.message})
    }
};


// login user 
 
export const login = async (req,res) => {
    try {
        const {email, password} = req.body

        // checking user whether he was sign uped or not 
    const user = await User.findOne({email})
     if(!user){
        return res.status(400).json({message: "invalid credential , user has no account"})
     }
     // check password
     const token = jwt.sign(
        {id:user._id, role: user.role},
        process.env.JWT_SCERET,
        {expiresIn: "7d"}
     );

     res.status(200).json({
        token,
        id: User._id,
        name: User.name,
        email: User.email,
        role: User.role
     });

    } catch (error) {
        res.status(500).json({message: error.message})
    }
};