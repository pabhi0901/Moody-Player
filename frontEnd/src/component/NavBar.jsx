import React from 'react'

const NavBar = () => {


  return (
<div className='nav w-full h-[7vh] bg-[#0A0A0A] flex flex-row px-20 gap-5 items-center justify-between'>

<div className="icon relative w-[2.5vw] h-[70%] flex items-center justify-center  rounded-xl active:scale-95"
style={{
  backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #3B82F6 100%)"
}}>
        <svg className='w-1/2'
         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3V17C20 19.2091 18.2091 21 16 21C13.7909 21 12 19.2091 12 17C12 14.7909 13.7909 13 16 13C16.7286 13 17.4117 13.1948 18 13.5351V5H9V17C9 19.2091 7.20914 21 5 21C2.79086 21 1 19.2091 1 17C1 14.7909 2.79086 13 5 13C5.72857 13 6.41165 13.1948 7 13.5351V3H20ZM5 19C6.10457 19 7 18.1046 7 17C7 15.8954 6.10457 15 5 15C3.89543 15 3 15.8954 3 17C3 18.1046 3.89543 19 5 19ZM16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19Z"></path></svg>
</div>

<h3 className='text-amber-50 text-xs font-bold'>Moody Player</h3>

<div className="icon relative w-[2.5vw] h-[70%] flex items-center justify-center rounded-xl active:scale-95"
style={{
  backgroundColor:"white"
}}>
       <svg className='w-1/2' 
       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 17C15.6623 17 18.8649 18.5751 20.607 20.9247L18.765 21.796C17.3473 20.1157 14.8473 19 11.9999 19C9.15248 19 6.65252 20.1157 5.23479 21.796L3.39355 20.9238C5.13576 18.5747 8.33796 17 11.9999 17ZM11.9999 2C14.7613 2 16.9999 4.23858 16.9999 7V10C16.9999 12.7614 14.7613 15 11.9999 15C9.23847 15 6.9999 12.7614 6.9999 10V7C6.9999 4.23858 9.23847 2 11.9999 2Z"></path></svg>
</div>

    </div>
  )
}

export default NavBar
