import mongoose from "mongoose";

const carSchema = new mongoose.Schema({

  title:{
    type:String,
    required: [true, "car title is required"],
  }  ,
  discription:{
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

const Car = mongoose.nodel("Car",carSchema  )
export default Car