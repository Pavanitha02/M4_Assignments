const fs=require('fs');
const cloudinary=require('../config/cloudinary.config')
const signup=async(req,res)=>{
    try{
        const {name,email}=req.body;
        if(req.file){
            return res.status(400).json({
                message:'image is required.'
            })
        }
        const result=await cloudinary.uploader
        .upload(req.file)
    }catch(error){

    }
}