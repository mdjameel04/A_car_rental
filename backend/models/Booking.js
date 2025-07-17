import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    car:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
        required: true
    },
    startDate:{
        type: String,
        required: true,
    },
    endDate:{
          type: String,
        required: true,
    },

    totalCost:{
        type: Number,
        required: true,
    },
    stauts :{
        type : String,
        enum :[ "booked", "pending", "cancelled"],
        default: "booked"
    }
},
{timestamps : true}
)

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking