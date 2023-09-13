const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name:{type:String, required:[true,"name is required"], unique:[true,"user already exists"]}
})


const details =  mongoose.model("details",taskSchema)



module.exports = {details}



