import Booking from '../models/Booking.js';
import Car from '../models/Car.js';


// create booking 
 export const createBooking = async (req,res) => {
    try {
        const {car, startDate, endDate, totalCost}  = req.body;
     const newBooking = new Booking ({
        user: req.user.id,
        car,
        startDate,
        endDate,
        totalCost
     });
     await newBooking.save();
    /// optionally avalabilty 
    await Car.findByIdAndUpdate(car, {availablr: false});
    res.status(200).json(newBooking)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
 };

 // get user booking 

 export const getUserBooking = async (req,res) => {
    try {
        const bookings = await Booking.find({User: req.user.id}).populate("car")
        res.status(200).json(bookings)
    } catch (error) {
             res.status(500).json({message: error.message})   
    }
 };

 // cancel booking 

 export const cancelBooking = async (req,res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            {status: "cancelled"},
            {new: true}
        );
        res.status(200).json(booking)
    } catch (error) {
         res.status(500).json({message: error.message})  
    }
 };

 