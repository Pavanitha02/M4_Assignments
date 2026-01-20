const multer=require('multer');

const storage=multer.diskStorage({
    filename:(reg,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    }
});
const fileFilter=(req,file,cb)=>{
    if(file.mimetype.startswith("image")){
        cb(null,true)
    }
    else{
        cb(new Error("only images are allowed"))
    }
};
const upload=multer({
    storage,
    fileFilter
});
module.exports=upload;
