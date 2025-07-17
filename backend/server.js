import connectDb from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import carRoutes from './routes/carRoutes.js';

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send("API is running successfully 🚗");
});

// routes
app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/bookings', bookingRoutes);

// start server
const port = process.env.PORT || 8000;

connectDb().then(() => {
  app.listen(port, () =>
    console.log(`✅ Server is running successfully on port ${port}`)
  );
});


