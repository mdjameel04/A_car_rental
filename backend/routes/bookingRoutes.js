import express from "express";
import { createBooking, cancelBooking, getUserBooking } from "../controllers/bookingController.js";
  import { protect } from "../middlewares/protect.js";
const router = express.Router()
router.post('/',protect , createBooking);
router.get ('/', protect ,getUserBooking);
router.put("/cancel/:id", cancelBooking)
 
export default router
