

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import  dotenv  from 'dotenv'


import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'


const app = express();
dotenv.config();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/',(req, res) => {
    res.send("This is a stack overflow clone API")
})

app.use( '/user',userRoutes)
app.use( '/questions',questionRoutes)
app.use('/answer', answerRoutes)
const PORT = process.env.PORT || 5000
const DATABASE_URL = process.env.CONNECTION_URL



mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true}, ()=>
{
    console.log("mongo db connected")
})
    // .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
app.listen(PORT, () => {console.log(`server running on port ${PORT}`)})
    // .catch((err) => console.log(err.message))
// 1. Create a server that receives string data from a POST request 
// 2. Append the data in a file on the server
// 3. Return the entire content of file to the client
// const express  = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const {readFileSync, appendFile, readFile }  = require('fs');
//adilwala
// import User from './Models/auth.js'


// const app = express();

// app.use(cors())
// app.use(express.json())


// app.post('/',async (req, res)=>{

//  const  { name }  = req.body;

//   const user = new User({name});
//   await user.save();
//   res.status(201).json(user);
//  });
//  mongoose.connect("mongodb+srv://bookvenue123:bookvenueone@cluster0.ew8p2.mongodb.net/myDb?retryWrites=true&w=majority",
//  {useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
//     console.log('mongo connected')
//  })

// app.listen(5000,()=>{
//     console.log('listening on 5000')
// })