import React, { useState, useEffect } from "react";
import { TRENDING_URL } from "../components/common/Api/data";
import Media from "../components/Media";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import SideIcon from "../components/SideIcon";
const Explore = () => {
  const [trend, setTrend] = useState<[]>([]);

  useEffect(() => {
    // fetchLatest();
    fetchTrend();
  }, []);

  const fetchTrend = () => {
    fetch(`${TRENDING_URL}`)
      .then((response) => response.json())
      .then((data) => setTrend(data.results))
      // .then(res=>console.log(res.results))
      .catch((err) => console.error(err));
  };

  return (
    <div className=" w-full flex justify-between">
      <SideIcon />
      <div
        className="flex flex-col mx-8 w-full "
        style={{ borderRight: ".2px solid #6363637b" }}
      >
        <Navbar />

        <Media trend={trend} />
      </div>
      <Side />
    </div>
  );
};

export default Explore;
