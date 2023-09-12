require("dotenv").config()
require("express-async-errors")
const mongoose = require("mongoose")
const express = require("express")
const cors = require('cors')
const app = express()
const route = require('./router/route')
const {errorHandler} = require('./errorMiddleware/errorHandler')


app.use(cors())
app.use(route)
app.use(errorHandler)





port = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("mongodb connected"))

app.listen(port,()=>console.log(`Server listening on port ${port}`))