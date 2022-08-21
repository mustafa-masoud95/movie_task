import React from 'react'
import {Link} from 'react-router-dom'
const MobileMenu =()=>{

    return(
        <div className="absolute top-24 right-0  w-1/2 h-48  bg-dark-lighten flex justify-center items-center ">
            <ul className="flex flex-col items-center justify-center text-2xl z-40 gap-8 py-8 hover:brightness-110 ">
               <Link to="/">
                <li>Home</li>
               </Link>
               <Link to="/explore">
                <li>Explore</li>
               </Link>
               <Link to="/search">
                <li>Search</li>
               </Link>
             


            </ul>
            
       
           
        </div>
    )

}

export default MobileMenu