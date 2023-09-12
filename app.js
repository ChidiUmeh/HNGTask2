require("dotenv").config()
require("express-async-errors")
const mongoose = require("mongoose")
const express = require("express")
const cors = require('cors')
const app = express()
const route = require('./router/route')
const {errorHandler} = require('./errorMiddleware/errorHandler')
const {connectDB} = require('./model/schema')
port = process.env.PORT || 5000

app.use(cors())
app.use(route)
app.use(errorHandler)

connectDB()


mongoose.connection.once('open',()=>{
    console.log(`Connected to mongodb`)
    app.listen(port,()=>console.log(`Server listening on port ${port}`))
}

) 




