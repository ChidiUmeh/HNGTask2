const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name:{type:String, required:[true,"name is required"], unique:[true,"user already exists"]}
})


const details =  mongoose.model("details",taskSchema)



module.exports = {details}


module.exports.connectDB = async() =>{
    try{
    await mongoose.connect(process.env.MONGO_URI,{
        useUnifiedTopology: true,
        useNewUrlParser:true
    })
} catch (err){
    console.log(err)
}
}
