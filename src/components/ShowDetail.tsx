import React from 'react'
import { IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE} from './common/Api/data'
import { Movie } from './common/Api/fetch'
type Props={
  detail?: Movie |undefined

} 

const ShowDetail:React.FC<Props> = ({detail}) => {
  return (
 
    
   <div className=" w-full flex flex-col h-screen items-center px-4 mt-8">
      <div className=" flex flex-col gap-20  ">
        <div className=" rounded-lg shadow-lg relative">
          <img src={`${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${detail?.backdrop_path} ` } alt="" className="w-full rounded-lg shadow-lg opacity-50"/>
          <img src={`${IMAGE_BASE_URL}/${POSTER_SIZE}/${detail?.poster_path}`} alt="" className="w-1/5 absolute -bottom-10 left-5 rounded-lg shadow-xl"/>

        </div>
        <div className="flex justify-between gap-2 ">
         <h2 className="text-primary text-xl font-bold border-2 p-2 border-dark-lighten rounded-md"><span className="text-secondary">Title:</span> {detail?.title || detail?.name} </h2>
         <p className="text-primary text-xl font-bold border-2 p-2 border-dark-lighten rounded-md"><span className="text-secondary">Rating:</span> {detail?.vote_average}</p>
        </div>
        <div className="">
          <p className="text-justify font-bold text-xl">{detail?.overview}</p>
          <div className=" flex justify-between mt-4 gap-2">
            <p className="text-primary border-2 border-dark-lighten p-2 rounded-md"><span className="text-secondary">Popularity: </span>{detail?.popularity ||"N.A"}</p>
            <p className="text-primary border-2 border-dark-lighten p-2 rounded-md"><span className="text-secondary">Budget: </span>{detail?.budget || "N.A"}</p>
            <p className="text-primary border-2 border-dark-lighten p-2 rounded-md"><span className="text-secondary">Revenue: </span>{detail?.revenue ||  "N.A" }</p>
          </div>
        </div>
        

      </div>

      
    </div>
  

    
  )
}

export default ShowDetail