import React from 'react'
import {MdOutlineExplore,MdOutlineLocalMovies} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {Link} from 'react-router-dom'
const SideIcon = () => {
  return (
    <div className=" sticky top-0  w-28 h-screen "style={{borderRight:".2px solid #6363637b"}}>
      <Link to="/">
         <MdOutlineLocalMovies className="w-full text-4xl mt-14 hover:text-gray-100"/>
      </Link>
        <div className="  flex w-full h-full flex-col mt-48 items-center gap-12 text-5xl">
        <Link to="/">
        <AiOutlineHome className="hover:text-secondary border-2 rounded-full p-2 hover:border-secondary"/>

      </Link>
      <Link to="/explore">
      <MdOutlineExplore className="hover:text-secondary border-2 rounded-full p-2 hover:border-secondary"/>
      </Link>

      <Link to="/search">
      <BsSearch className="hover:text-secondary border-2 rounded-full p-2 hover:border-secondary"/>
      </Link>

      
        </div>
        
    </div>
  )
}

export default SideIcon