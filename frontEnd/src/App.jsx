// src/WebcamMoodDetector.jsx
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';

function WebcamMoodDetector() {
  const webcamRef = useRef(null);
  const [loading, setLoading] = useState(true);

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

       const ageResponse = await faceapi
      .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
      .withAgeAndGender();

      
      
        
        if(!detections || detections.length === 0){
          console.log("No face detected, try again");
          return
        }
        
        
      console.log(ageResponse.gender);
      console.log(Math.floor(ageResponse.age));

       let moodScore = 0
       let resultantMood = ""
        for (let [key, value] of Object.entries(detections.expressions)) {
          if(value>moodScore) {
            moodScore = value
            resultantMood = key
          }
      }
        console.log(resultantMood);
        
      }
    };

  return (
    <div className='flex items-center m-4 '>
      {loading ? <p>Loading models...</p> : null}
      <Webcam
        ref={webcamRef}
        audio={false}
        mirrored={true}
        screenshotFormat="image/jpeg"
        width={500}
        height={500}
        videoConstraints={{ facingMode: "user" }}
           className=" border-2 rounded-2xl"
      />

      <button className='p-2 h-fit m-4 border-2 border-black active:scale-98 rounded-xl'
      onClick={()=>{detectMood()}}>Detect Mood</button>
  
    </div>
  );
}

export default WebcamMoodDetector;


