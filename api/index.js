import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter  from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();
const app=express();
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const port=3000;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.log(err));




  
  app.use("/api/user",userRouter);
  app.use("/api/auth",authRouter);
  
  
  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
  app.listen(port,()=>{
      console.log(`server started at ${port}`);
  });