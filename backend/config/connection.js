import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

export async function connectDB(){
    try{
        const Connection=await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        console.log(`MongoDb is Connected DB HOST ${Connection.connection.host}`);
    }
    catch(error){
         console.log("ERROR:",error);   
    }
}