import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../components/common/Api/data";
import {BsSearch} from 'react-icons/bs'

import SearchData from "../components/SearchData";
import SideIcon from "../components/SideIcon";
import NotFound from "./NotFound";

const Search: React.FC = () => {
  const [movies, setMovies] = useState<[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) {
      return;
    }
    searchFetch();
  }, []);

  const searchFetch = () => {
    fetch(`${API_URL}search/movie?api_key=${API_KEY}&query=${search}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      // .then(data=>console.log(data.results))
      .catch((err) => console.error(err));
  };

  const searchMovies = (e: any) => {
    e.preventDefault();
      if(!search){
        return <NotFound/>
      }
    searchFetch();
    setSearch("")
  };
  return (
    <div className="flex flex-col gap-8 m-4 ">
     
      <div className="py-4 mb-4  shadow-xl  flex items-center justify-center w-full">

      <form onSubmit={searchMovies} className="flex w-2/5 relative items-center  ">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" flex w-full py-2 px-4 rounded-lg mb-4 border-0 outline-none"
        />

        <button type="submit" className=" absolute right-0 ml-4 mb-4 px-2 cursor-pointer flex items-center justify-center">
          {" "}
          <BsSearch className=" flex items-center   text-gray-800 cursor-pointer text-4xl  " />
        </button>
      </form>
      </div>
      <div className=" flex  w-full">
      <div className="mr-4">

        <SideIcon/>
      </div>
        <SearchData movies={movies} />
      </div>
    </div>
  );
};

export default Search;
