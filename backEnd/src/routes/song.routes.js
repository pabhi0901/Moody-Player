const express = require("express")
const multer = require("multer") //it is used for reading the req.body data comming from the form-data format
const uploadFile = require("../service/storage.service")
const router = express.Router() //used for creating the routes(api's) 
const songModel = require("../models/song.model")
const upload = multer({storage:multer.memoryStorage()}) //so here multer will store the file in RAM for temporory time

// upload.single("audio"):- we can say that sending the audio file in RAM through multer
router.post("/songs",upload.single("audio"),async(req,res)=>{
    
    // console.log(req.body);  // we will get our textual data in req.body
    // console.log(req.file); //we will get our audio file in req.file

  try{
    const fileData = await uploadFile(req.file)
    const {title,artist,mood} = req.body
    console.log(req.body);

   await songModel.create({
        "title":title,
        "artist":artist,
        "mood":mood,
        "audio":fileData.url
    })

    res.status(201).json({
        "message":"File succesfully created",
    })
  }catch(error){
    res.json({
        "mesage":"There is an error, song cannot be sent to the database"
    })
  }

})

  router.get("/songs",async(req,res)=>{
        const mood = req.query.mood
        console.log(mood);
        const songList = await songModel.find({
                mood:mood
        })
        res.json({"songs":songList})
  })

module.exports = router