import React from 'react'
import { IMAGE_BASE_URL,POSTER_SIZE } from './common/Api/data'
import {Link,useParams} from 'react-router-dom'
type Props={
  title:string|undefined, 
  image:string,
  rate:number
  id:number
}


const Card:React.FC<Props> = ({title,image,rate,id}) => {


  return (
    <Link to={`${id}`}>

    <div  className="flex  h-full relative w-60 hover:brightness-110 hover:scale-105 duration-200">
      <div className="w-full shadow-lg rounded-lg">

      <img src= {`${IMAGE_BASE_URL}${POSTER_SIZE}${image}`} alt={title} className="w-full shadow-lg rounded-t-lg object-cover	"/>
      <p className="bg-gray-lighten text-dark-darken text-center rounded-b-lg">{title}</p>
      </div>
      <div className="absolute bg-secondary text-gray-100 p-2 rounded-tl-lg px-4">
        {rate}
      </div>
     
      
    </div>
    </Link>
  )
}

export default Card