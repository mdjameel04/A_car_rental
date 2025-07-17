import express from "express";
import { getcars, getCarById, updateCar,deleteCar, createCar} from '../controllers/carController.js'
import { protect } from "../middlewares/protect.js";
import { isAdmin } from "../middlewares/admin.js";
// routes
const router = express.Router();

router.get('/', getcars);
router.get('/:id', getCarById);
router.post('./',isAdmin, protect ,createCar)
router.put ('./id',isAdmin, protect , updateCar);
router.delete('./:id',isAdmin, protect , deleteCar)

export default router;