import mongoose from "mongoose";

const carSchema = new mongoose.Schema({

  title:{
    type:String,
    required: [true, "car title is required"],
  }  ,
 description:{
    type:String
  },
   
  priceperday:{
    type : Number,
    required: true
  },
  available:{
    type: Boolean,
    default: true
  }
},
{ timestamps: true}

)

const Car = mongoose.model("Car",carSchema  )
export default Car