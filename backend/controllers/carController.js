import Car from '../models/Car.js';

// get all cars 

export const getcars = async (req,res)=>{
    try {
        const cars = await Car.find()
        res.status(200).json(cars)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export const getCarById = async (req,res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
           return res.status(400).json({message : "car not found"})
        }
            res.status(200).json(car)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const createCar = async (req,res) => {
    try {
        const newCar = new Car(req.body);
        await newCar.save()
        res.status(200).json(newCar);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

export const updateCar = async (req,res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body,{
            new: true
        });
        res.status(200).json(updatedCar)
    } catch (error) {
                res.status(400).json({message: error.message})

    }
};

export  const deleteCar = async (req,res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.status(200).json({message:  "this car was deleted succesfully"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
} ;