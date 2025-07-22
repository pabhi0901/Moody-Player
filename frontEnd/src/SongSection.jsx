import React, { useEffect, useRef, useState } from 'react'
import SongCard from './component/SongCard';

const SongSection = (props) => {
    let songs = props.songs
let audioPlayer = useRef(null)
    let [index, setindex] = useState(0)
     let [isPlaying, setisPlaying] = useState(false)
        const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  useEffect(()=>{
    if(songs && songs.length>0){
    setindex(Math.floor(Math.random()*songs.length))
    console.log(songs[index]);
  }
},[songs])

useEffect(()=>{

  if (audioPlayer.current) {
    audioPlayer.current.play();
  }
},[index])

  useEffect(() => {
    const audio = audioPlayer.current;
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

    const onSeek = e => {
    const time = +e.target.value;
    audioPlayer.current.currentTime = time;
    setCurrentTime(time);
  };


const playPause = ()=>{
  
  if(isPlaying){
    audioPlayer.current.pause()
    setisPlaying(false)
  }else{
    audioPlayer.current.play()
    setisPlaying(true)
  }

  console.log(isPlaying);
  

}

const playNext = ()=>{
  setindex((prev) =>
    songs && prev === songs.length - 1 ? 0 : prev + 1
  );
}
const playBack = ()=>{
  setindex((prev) =>
    songs && prev ===   0 ? songs.length - 1 : prev - 1
  );
  audioPlayer.current.play()
    setisPlaying(true)
}
let songCard 
if(songs){
  songCard =  songs.map((val,i)=>{
    return <SongCard songs={songs?.[i]} index = {i} setIndex = {setindex}></SongCard>
  })
}

  return (
    <div className='w-full h-[100vh] flex flex-col px-15 gap-5'
    id='scrolltillhere'>
      
      <div 
      className="currentlyPlaying w-full h-[30vh] bg-[linear-gradient(120deg,#4a189a_0%,#2e1b4c_40%,#171f3f_100%)] rounded-2xl flex flex-row px-8 py-5 items-center justify-center gap-15">

        <div className="icon relative w-[8vw] h-[55%] flex items-center justify-center  rounded-xl active:scale-95 
        bg-[linear-gradient(120deg,#8B5CF6_0%,#3B82F6_100%)]">
            <svg className='w-1/2' 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path></svg>
        </div>

        <div className="playingFunctionality w-4/5 h-[90%]  flex flex-col gap-4">
          <h2 className='font-bold text-2xl text-white'>{songs?.[index]?.title}</h2>
          <h4 className='font-light text-lg  text-white'>{songs?.[index]?.artist}</h4>
          <audio src={songs?.[index].audio} controls 
          ref={audioPlayer}
          className='hidden'></audio>

          <div className="audioControlDisplay flex flex-row gap-5 w-full items-center">

             <div onClick={()=>{
              playBack()
             }} 
             className="back relative w-[3vw] aspect-square  flex items-center justify-center  rounded-full active:scale-95 
        bg-[#37314c]">
          <svg className='w-1/2' 
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M8 11.3333L18.2227 4.51823C18.4524 4.36506 18.7628 4.42714 18.916 4.65691C18.9708 4.73904 19 4.83555 19 4.93426V19.0657C19 19.3419 18.7761 19.5657 18.5 19.5657C18.4013 19.5657 18.3048 19.5365 18.2227 19.4818L8 12.6667V19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19V5C6 4.44772 6.44772 4 7 4C7.55228 4 8 4.44772 8 5V11.3333Z"></path></svg>
        </div>


         <div 
         className="icon relative w-[3vw] aspect-square  flex items-center justify-center  rounded-full active:scale-95 
        bg-[linear-gradient(120deg,#8B5CF6_0%,#3B82F6_100%)]"
        onClick={()=>{playPause()}}>

          {isPlaying ?
          <svg className='w-1/2'
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z"></path></svg>: <svg 
          className='w-1/2'
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M7.75194 5.43872L18.2596 11.5682C18.4981 11.7073 18.5787 12.0135 18.4396 12.252C18.3961 12.3265 18.3341 12.3885 18.2596 12.432L7.75194 18.5615C7.51341 18.7006 7.20725 18.62 7.06811 18.3815C7.0235 18.305 7 18.2181 7 18.1296V5.87061C7 5.59446 7.22386 5.37061 7.5 5.37061C7.58853 5.37061 7.67547 5.39411 7.75194 5.43872Z"></path></svg>}
        </div>



          <div onClick={()=>{
            playNext()
          }} 
          className="next relative w-[3vw] aspect-square  flex items-center justify-center  rounded-full active:scale-95 
        bg-[#37314c]">
          <svg xmlns="http://www.w3.org/2000/svg"  className='w-1/2'
          viewBox="0 0 24 24" fill="white"><path d="M12.0319 12L9 9.85984V14.1402L12.0319 12ZM7.5 17.535C7.22386 17.535 7 17.3112 7 17.035V6.96496C7 6.8617 7.03197 6.76098 7.09152 6.67662C7.25076 6.45102 7.56274 6.39723 7.78834 6.55648L14.9213 11.5915C14.9679 11.6244 15.0086 11.665 15.0415 11.7117C15.2007 11.9373 15.1469 12.2492 14.9213 12.4085L7.78834 17.4435C7.70398 17.5031 7.60326 17.535 7.5 17.535ZM16 7C16 6.44772 16.4477 6 17 6C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V7Z"></path></svg>
        </div>
 
      
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={onSeek}
          step="0.1"
          className='border-0 rounded-2xl h-[3vh] w-[20vw] cursor-pointer     
        accent-purple-500
          range-thumb:w-1
          range-thumb:h-1 
          range-thumb:bg-purple-500 
          range-thumb:rounded-full 
          range-thumb:-mt-0.5'
        />  

          </div>



        </div>

      </div>

       {songs?.length>0 ? <p className='text-2xl font-bold text-white'>Recommended for You</p> : <p></p>}

        <div className="songsCardContainer w-full flex-wrap flex flex-row gap-5 justify-around items-center" >
          {songs ? songCard:""}
        </div>
        
        

    </div>
  )
}
export default SongSection
