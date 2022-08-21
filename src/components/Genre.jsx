import React, { useEffect } from "react";
import axios from "axios";
import GenreButton from "./GenreButton";





const Genre = ({

  type,
genre,
setGenre,
 
}) => {


 
  useEffect(() => {
    fetchGenre();
   
   
    // eslint-disable-next-line 
  },[]);

  const fetchGenre = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=5c1a7f84b13a314e22aed4a212650c0d&language=en-US`
      );
    setGenre(data.genres);
  };
 


  return (
    <>
  
{
  genre?.map((data) => {
    return (
      <div className="flex flex-wrap cursor-pointer">
        <GenreButton>

                {data.name}  
            </GenreButton>
        </div>
    );
  })
}
      </>

  );
};

export default Genre;
