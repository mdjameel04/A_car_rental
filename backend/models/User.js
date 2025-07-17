import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required: [true, "name is required"],
    },

    email:{
         type:String,
        required: true,
        unique: true,
    },
    password:{
         type:String,
        required: [true, " emailId is requires"],
        unique: true,
    },
     role:{
        type:String,
        enum: ["customer", "admin"],
        default: "customer",
     }
},
{  timestamps: true }
);



const User = mongoose.model("User", userSchema)

export default User;