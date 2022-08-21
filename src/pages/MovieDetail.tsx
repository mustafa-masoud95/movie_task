import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { API_KEY, API_URL } from '../components/common/Api/data';
import SideIcon from '../components/SideIcon';
import ShowDetail from '../components/ShowDetail';
import Navbar from '../components/Navbar';


const MovieDetail = () => {
  const [detail,setDetail]=useState()
  const  {id}  = useParams<{id?: string}>()

  useEffect(() => {
    
    fetchDetailMovie()
   
  }, [])

  const fetchDetailMovie=()=>{
    fetch(`${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(res=>res.json())
    .then(data=>setDetail(data))
    .catch(err=>console.log(err))

  }

  
  return (
    <div className="flex">

      <SideIcon/>
      
      <div className="flex flex-col">
        <Navbar/>
     <ShowDetail detail={detail} />
      </div>
      
  

      
     
      
    </div>
  )
}

export default MovieDetail