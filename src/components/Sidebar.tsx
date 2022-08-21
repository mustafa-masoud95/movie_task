import React from "react";
import { MdOutlineLocalMovies, MdOutlineExplore } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      className=" sticky top-0 w-1/4 md:w-1/5 hidden md:flex h-screen flex-col"
      style={{ borderRight: ".2px solid #6363637b" }}
    >
      <div className=" flex w-full justify-center mt-12">
        <Link to="/">
          <h1 className="flex items-center ">
            {" "}
            <MdOutlineLocalMovies className="text-gray-200 text-5xl md:text-2xl " />
            <span className="text-secondary text-4xl">Q</span>{" "}
            <span className="text-primary tracking-wider font-bold text-3xl">
              STAR
            </span>{" "}
          </h1>
        </Link>
      </div>
      <div className="flex flex-col w-full gap-8 mt-12 justify-center items-center">
        <h2 className="flex text-gray-100 items-start justify-items-start w-36 font-bold text-xl ml-4">
          MENU
        </h2>
        <ul className="flex w-full flex-col justify-center gap-6">
          <Link to="/">
            <li className="flex  justify-center items-center gap-4 text-lg  hover:text-secondary  hover:border-r-8 focus:text-secondary">
              <AiOutlineHome className="text-xl" />
              Home
            </li>
          </Link>
          <Link to="/explore">
            <li className="flex justify-center  items-center gap-4 text-lg hover:text-secondary hover:border-r-8 focus:border-secondary hover:transition duration-150 ease">
              <MdOutlineExplore className="text-xl" />
              Explore
            </li>
          </Link>
          <Link to="/search">
            <li className="flex  justify-center items-center gap-4 text-lg hover:text-secondary hover:border-r-8 focus:border-secondary hover:transition duration-150 ease">
              <BsSearch className="text-xl" />
              Search
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
