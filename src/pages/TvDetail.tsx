import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { API_KEY, API_URL } from '../components/common/Api/data';
import SideIcon from '../components/SideIcon';
import TvShow from '../components/ShowDetail';
import Navbar from '../components/Navbar';


const MovieDetail = () => {
  const [detail,setDetailTv]=useState()
  const  {id}  = useParams<{id?: string}>()

  useEffect(() => {
    
    fetchDetailTv()
  
  }, [])


  

  const fetchDetailTv=()=>{
    fetch(`${API_URL}tv/${id}?api_key=${API_KEY}&language=en-US`)
    .then(res=>res.json())
    .then(data=>setDetailTv(data))
    .catch(err=>console.log(err))

  }
  return (
    <div className="flex">

      <SideIcon/>
      
      <div className="flex flex-col">
        <Navbar/>
     <TvShow detail={detail}/>
      </div>
      
  

      
     
      
    </div>
  )
}

export default MovieDetail