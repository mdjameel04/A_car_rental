import express from "express";
import { createBooking, cancelBooking, getUserBooking } from "../controllers/bookingController.js";
  
const router = express.Router()
router.post('/', createBooking);
router.get ('/' ,getUserBooking);
router.put("/cancel/:id", cancelBooking)
 
export default router
