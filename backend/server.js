import connectDb from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
connectDb()

const app = express()

// middlewares
app.use((cors))
app.use(express.json());

//routes
app.get('/' , (req,res)=>{
    res.send("api is running succesfully")
} );

//starting server

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`server is running succefully on ${port}`))
