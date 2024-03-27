import express from "express";
import dotenv from 'dotenv'
import colors from 'colors'
import data from './data/data.js'
import { connectDB } from "./config/connection.js";
// const connectDB = require("./config/db");
const app = express();
dotenv.config()
connectDB()
app.get("/", (req, res) => {
  res.send("Api is runung ");
});

app.get('/api/user',(req,res)=>{
  res.send(data)
})

const PORT=process.env.PORT||5000

app.listen(PORT, console.log(`server start on  ${PORT}`.yellow.bold));
