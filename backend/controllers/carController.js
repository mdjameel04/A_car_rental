import Car from '../models/Car.js';

// get all cars 

export const getcars = async (req,res)=>{
    try {
        const cars = await Car.find()
        res.status(200).json(cars)
    } catch (error) {
        
    }
}