module.exports.errorHandler = (err,req,res,next)=>{
    console.log(err)
    if (err.name === "ValidationError")
    return res.status(400).json({ error: err.message })

    if(err.name ==="CastError"){
        return res.status(500).json({error: "Invalid id. Must be of 24 characters"})
    }
    if (err.code === 11000){
        return res.status(400).json({ error: "name already exists" })
        }
        return res.status(500).json({msg:"Something went wrong"})
}