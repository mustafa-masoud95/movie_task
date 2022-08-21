import React, { useEffect } from "react";
import MovieList from "../components/MovieList";
import { API_KEY } from "../components/common/Api/data";
import SideIcon from "../components/SideIcon";
import Navbar from "../components/Navbar";
// import Side from '../components/Side'
import { useAppDispatch } from "../features/hooks";
import { addMovies } from "../features/media/movieSlice";
const MovieCollection = () => {
  // const [movieData,setMovieData]=useState<[]>([])
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => dispatch(addMovies(data.results)))
      // .then(data=>setMovieData(data.results))
      // .then(res=>console.log(res.results))
      .catch((err) => console.error(err));
  };

  return (
    <div className=" w-full flex justify-between">
      <SideIcon />
      <div
        className="flex flex-col px-8 w-full "
        style={{ borderRight: ".2px solid #6363637b" }}
      >
        <Navbar />
        {/* <MovieList movieData={movieData}/> */}
        <MovieList />
      </div>
      {/* <Side/> */}
    </div>
  );
};

export default MovieCollection;
