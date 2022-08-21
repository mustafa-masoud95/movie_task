import React,{useState,useEffect, ReactNode} from 'react'
import Card from './Card'
import {Movie} from './common/Api/fetch'


type Props={
   
    movies?: [] | undefined
   
}
const SearchData:React.FC<Props> = ({movies}) => {
  
  return (

    <div className="flex flex-wrap justify-center items-center gap-4 cursor-pointer">
           {
                movies?.map((movie:Movie)=>(

                  <div key={movie.id} className=" flex">
                        <Card id={movie.id }title={movie.title} image={movie.poster_path} rate={movie.vote_average} />

                  </div>
                )
                )
            }
    </div>
  )
}

export default SearchData