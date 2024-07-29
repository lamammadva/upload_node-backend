const uploadImage = (req,res)=>{
    console.log(req);
    if(req.file){
        res.json({
            message:"file uploaded successfully",file:req.file.fieldname
        })
    }else{
        res.status(400).json({message:"No file uploaded"})
    }

}

module.exports = {uploadImage}