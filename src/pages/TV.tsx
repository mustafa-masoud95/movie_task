import React,{useEffect,useState} from 'react'
import { API_KEY } from '../components/common/Api/data'
import SideIcon from '../components/SideIcon'
import Navbar from '../components/Navbar'
import Side from '../components/Side'
import {useAppDispatch} from '../features/hooks'
import {addMovies} from '../features/media/movieSlice'
import TvList from '../components/TvLIst'

const MovieCollection = () => {
const [genre,setGenre]=useState([])
  // const [movieData,setMovieData]=useState<[]>([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchTv();
    getGenre()

 
    
  }, [])
  const fetchTv=()=>{
    // &with_genre=${genreUrl}
     fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
    .then(response=>response.json())
    .then((data)=>dispatch(addMovies(data.results)))
    // .then(data=>setMovieData(data.results))
    // .then(res=>console.log(res.results))
  
    .catch(err=>console.error(err))
  }

  const getGenre=()=>{
    fetch(`
    https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}`)
    .then(response=>response.json())
    .then(data=>setGenre(data.results))
  }

 

  
  return (
    <div className=" w-full flex justify-between" >
      <SideIcon/>
      <div className="flex flex-col mx-8 w-full "style={{borderRight:".2px solid #6363637b"}}>
        <Navbar/>
        {/* <MovieList movieData={movieData}/> */}
        <TvList />
      </div>
      <Side/>
     
    </div>
  )
}

export default MovieCollection