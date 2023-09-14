require("dotenv").config()
require("express-async-errors")
const mongoose = require("mongoose")
const express = require("express")
const cors = require('cors')
const app = express()
const route = require('./router/route')
const {errorHandler} = require('./errorMiddleware/errorHandler')
const connectDB= require('./db/dbconnect')
port = process.env.PORT || 5000

app.use(cors())
app.use(route)
app.use(errorHandler)



const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>console.log(`Server listening on port ${port}`))
    }catch (error){
        console.log(error)
    }
}

start()
