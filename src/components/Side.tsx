import React,{useState} from 'react'

import Genre from '../components/Genre'

const Side = () => {

  const [genre, setGenre] = useState([]);

  return (
    <div className="relative w-1/4  m-2 hidden h-screen lg:flex">
        <div className="fixed top-0  mt-12 flex flex-col gap-8  lg:w-2/6  h-full">
          
            <div className=" w-full flex gap-3 flex-wrap  max-w-[250px]">
            <Genre type="tv" genre={genre} setGenre={setGenre} />

            </div>
        </div>
    </div>
  )
}

export default Side