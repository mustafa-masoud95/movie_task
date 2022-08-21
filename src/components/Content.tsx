import React, { useEffect, useState, useRef } from "react";
import {
  TRENDING_URL,
  POPULAR_BASE_URL,

} from "./common/Api/data";
import Trend from "./Trend";
import Popular from "./Popular";

import Top from "./Top";

const Content = () => {
  // const [latest, setLatest] = useState<[]>([])
  const [popular, setPopular] = useState<[]>([]);
  const [trend, setTrend] = useState<[]>([]);

  useEffect(() => {
    fetchPopular();
    // fetchLatest();
    fetchTrend();
  }, []);

  const fetchPopular = () => {
    fetch(`${POPULAR_BASE_URL}`)
      .then((response) => response.json())
      .then((data) => setPopular(data.results))
      // .then(res=>console.log(res.results))
      .catch((err) => console.error(err));
  };

  // const fetchLatest=()=>{
  //   fetch(`${TV_LATEST_URL}`)
  //   .then(response=>response.json())
  //   // .then(data=>setLatest(data))
  //   .then(res=>console.log(res))
  //   .catch(err=>console.error(err))
  // }

  const fetchTrend = () => {
    fetch(`${TRENDING_URL}`)
      .then((response) => response.json())
      .then((data) => setTrend(data.results))
      // .then(res=>console.log(res.results))
      .catch((err) => console.error(err));
  };

  return (
    <div className=" flex w-full  flex-col gap-12 ">
      <div className="flex  w-full  rounded-lg">
        <Top trend={trend} />
      </div>

      <div className="w-full flex flex-col">
        <h1 className="mb-4 text-xl font-bold tracking-wider shadow-sm w-full">
          Trending
        </h1>

        <Trend trend={trend} />
      </div>

      <div className="w-full flex flex-col">
        <h1 className="mb-4 text-xl font-bold tracking-wider shadow-sm w-full">
          Popular
        </h1>

        <Popular popular={popular} />
      </div>
    </div>
  );
};

export default Content;
