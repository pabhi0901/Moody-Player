import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import  axios  from "axios";
import { BorderBeam } from './components/magicui/border-beam';
const MoodDetection = (props) => {

    const setSongs = props.setSongs
    const webcamRef = useRef(null);
  const [loading, setLoading] = useState(true);
    const [moodDisplay, setmood] = useState();
  // Load face-api models
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      await faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL);
      setLoading(false);
    };
    loadModels();
  }, []);

   const detectMood = async () => {
      if (
        webcamRef.current &&
        webcamRef.current.video.readyState === 4
      ) {
        const video = webcamRef.current.video;

        const detections = await faceapi
          .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();

        
        if(!detections || detections.length === 0){
          console.log("No face detected, try again");
          return
        }
        

       let moodScore = 0
       let resultantMood = ""
        for (let [key, value] of Object.entries(detections.expressions)) {
          if(value>moodScore) {
            moodScore = value
            resultantMood = key
          }
      }
        console.log(resultantMood);
        setmood(resultantMood)
        const songs = await axios.get(`http://localhost:3000/songs?mood=${resultantMood}`)
        setSongs(songs.data.songs)
        
      }
    };

      const scrollToSection = () => {
    const element = document.getElementById('scrolltillhere');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full h-[95vh] flex flex-col items-center justify-center gap-4'>
      <h2 className='font-bold text-3xl text-white '>How are you feeling today ??</h2>
      <h2 className='font-light text-lg text-white '> Let us detect your mood and find the perfect soundtrack for you</h2>

    <div className='w-2/5 h-[67vh] flex flex-col items-center justify-center m-4 bg-[#2A2A2A] rounded-2xl relative'>
      {loading ? <p className='text-white'>Loading models...</p> : <Webcam
        ref={webcamRef}
        audio={false}
        mirrored={true}
        screenshotFormat="image/jpeg"
        width={200}
        height={200}
        videoConstraints={{ facingMode: "user" }}
           className=" border-1 rounded-2xl w-[70%] border-dashed border-sky-100"
      />}
      
      <button className=' relative p-1 h-fit m-4  text-white active:scale-80 rounded-xl w-3/5
      bg-gradient-to-r from-[#8B5CF6] via-[#9333EA] to-[#3B82F6] 
                   shadow-lg shadow-[#8B5CF6]/40 
                   transition-transform duration-200 ease-out'
      onClick={()=>{detectMood()
                    scrollToSection()
      }}>Detect Mood
      </button>  

      {moodDisplay ? <p className='uppercase text-white text-xs font-light'>{moodDisplay}</p> : ""}
    
    <BorderBeam size={400} duration={20} borderWidth={2}  colorFrom="#00FFF0"
  colorTo="#02CFCB" />
    </div>
    </div>
  )
}

export default MoodDetection
