import React from 'react'
import { BACKDROP_SIZE, IMAGE_BASE_URL } from './common/Api/data';
import { Movie } from './common/Api/fetch';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

type Props={
   
    trend?:[] | undefined
   
}
const Top:React.FC<Props> = ({trend}) => {
  return (
    <div className="w-full h-5/6 flex cursor-pointer my-4 justify-center items-center shadow-lg">
    <Swiper
        modules={[Navigation,Autoplay]}
        autoplay
        navigation
        speed={2000}
        loop
       slidesPerView={1}
        className="w-full h-full"
      > 
        {!trend
          ? "loading ..."
          : trend?.map((movie: Movie) => {
              return (
            
                <SwiperSlide key={movie.id} className="w-full h-full  ">
                  <div key={movie.id} className=" flex flex-wrap h-full w-full rounded-lg">
                    <img src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`} alt={movie.title || movie.name} className=" w-full h-full fit-cover rounded-lg hover:bg-gray-500 opacity-50 "/>
                    <div className="absolute flex flex-col  pt-2 px-10  lg:gap-8 md:gap-4 sm:gap-0 ">
                        <h2 className="text-primary font-bold text-2xl  tracking-wider">{movie.title|| movie.name}</h2>
                        <p className="tracking-widest ">{movie.release_date || movie.first_air_date}</p>
                         <span className=" w-16 border-2 border-dark-lighten text-center text-primary uppercase rounded-3xl mt-4">{movie.media_type}</span>   
                        <p className="text-gray-200  w-full sm:w-3/4 lg:w-full text-xs py-1 xl:text-lg  lg:text-md md:text-lg text-justify mb-4 hidden lg:flex xl:flex 2xl:flex md:flex">{movie.overview}</p>
                    </div>
                        <div className="absolute right-0 top-0 bg-secondary p-4 rounded-tr-lg text-gray-100">{Math.floor(movie.vote_average)}</div>
                  </div>
               </SwiperSlide> 
              );
            })}
     </Swiper>
    </div>
  )
}
export default Top