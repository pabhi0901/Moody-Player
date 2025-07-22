import React, { useEffect, useState } from 'react'

const SongCard = (props) => {
    const song = props?.songs
    const index = props?.index
    const setIndex = props?.setIndex
    const bgArray  = ["bg-gradient-to-r from-orange-500 to-pink-500","bg-gradient-to-r from-blue-500 to-purple-500"," bg-gradient-to-r from-green-400 to-cyan-500"]
    const [randomIndex, setrandomIndex] = useState()
  useEffect(()=>{
      setrandomIndex(Math.floor(Math.random()*bgArray.length))
  },[])
    
    return (
    <div key={index} 
    className='w-[25vw] h-[55vh] bg-[#1a1a1a] rounded-2xl border-2 border-[#1e2735] flex flex-col justify-center items-start p-5 gap-1'>
        <div className={`colorFill w-[100%] h-[90%] rounded  ${bgArray[randomIndex]} flex justify-center items-center`}>
            <svg className='w-1/5' 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 13.5351V3H20V6H14V17C14 19.2091 12.2091 21 10 21C7.79086 21 6 19.2091 6 17C6 14.7909 7.79086 13 10 13C10.7286 13 11.4117 13.1948 12 13.5351Z"></path></svg>
        </div>

        <h1 className='text-xl text-white font-bold'>{song?.title}</h1>
        <h3 className='text-lg text-white  font-light'>{song?.artist}</h3>

        <div 
            onClick={()=>{
                setIndex(index)
                console.log("index changed");
                
            }}
         className="icon last:self-end relative w-[3vw] aspect-square  flex items-center justify-center  rounded-full active:scale-95 
        bg-[linear-gradient(120deg,#8B5CF6_0%,#3B82F6_100%)]">
        <svg 
          className='w-1/2'
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M7.75194 5.43872L18.2596 11.5682C18.4981 11.7073 18.5787 12.0135 18.4396 12.252C18.3961 12.3265 18.3341 12.3885 18.2596 12.432L7.75194 18.5615C7.51341 18.7006 7.20725 18.62 7.06811 18.3815C7.0235 18.305 7 18.2181 7 18.1296V5.87061C7 5.59446 7.22386 5.37061 7.5 5.37061C7.58853 5.37061 7.67547 5.39411 7.75194 5.43872Z"></path></svg>
        
        </div>

      
    </div>
  )
}

export default SongCard
