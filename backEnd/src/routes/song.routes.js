const express = require("express")
const multer = require("multer") //it is used for reading the req.body data comming from the form-data format
const uploadFile = require("../service/storage.service")
const router = express.Router() //used for creating the routes(api's) 
 
const upload = multer({storage:multer.memoryStorage()})

router.post("/songs",upload.single("audio"),async(req,res)=>{
    // console.log(req.body);  // we will get our textual data in req.body
    // console.log(req.file); //we will get our audio file in req.file
    const fileData = await uploadFile(req.file)
    console.log(fileData);
    
    res.status(201).json({
        "message":"File succesfully created"
    })
    

})

module.exports = router