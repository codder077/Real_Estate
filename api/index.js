import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


const app=express();

dotenv.config();

const port=3000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port,()=>{
    console.log(`server started at ${port}`);
});