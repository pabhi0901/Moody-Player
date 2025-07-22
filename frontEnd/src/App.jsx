// src/WebcamMoodDetector.jsx
import React from 'react';
import MoodDetection from './MoodDetection';
import { useState } from 'react';
import NavBar from './component/NavBar';
import SongSection from './SongSection';


function WebcamMoodDetector() {
      let [songs, setsongs] = useState()
      console.log(songs);
      
      
  return (
    <div className='h-full w-screen relative bg-black flex flex-col gap-1 box-border overflow-x-hidden'>
      <NavBar />
      <MoodDetection  setSongs = {setsongs}/>
      <SongSection songs = {songs} setSongs = {setsongs} />
    </div>
  );
}

export default WebcamMoodDetector;


