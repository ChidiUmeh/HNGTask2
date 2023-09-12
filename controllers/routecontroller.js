const {details}= require('../model/schema')

const signUp = async(req,res)=>{
    const detail = await details.create(req.body)
    console.log(detail)
    return res.status(200).json({msg:"Created successfully"})   
}

const getUser = async(req,res)=>{
    const {id} = req.params
    const detail = await details.findOne({_id:id})
    if (detail)
    return res.status(200).json({detail})
    return res.status(404).json({error:`No user with the id: ${id}`})    
}

const updateUser = async(req,res)=>{
    const {id} = req.params
    const detail = await details.findOneAndUpdate({_id:id},req.body)
    if (detail)
    return res.status(200).json({msg:"updated successfully"})
    return res.status(404).json({error:`No user with the id: ${id}`})    
}

const deleteUser = async(req,res)=>{
    const {id} = req.params
    const detail = await details.findOneAndDelete({_id:id})
    if (detail)
    return res.status(200).json({msg:"deleted successfully"})
    return res.status(404).json({error:`No user with the id: ${id}`})    
}

module.exports = {signUp, getUser, updateUser, deleteUser}