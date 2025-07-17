import express from "express";
import { getcars, getCarById, updateCar,deleteCar, createCar} from '../controllers/carController.js'

// routes
const router = express.Router();

router.get('/', getcars);
router.get('/:id', getCarById);
router.post('./' ,createCar)
router.post ('./id', updateCar);
router.delete('./:id', deleteCar)

export default router;