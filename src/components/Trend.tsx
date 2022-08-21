import React from 'react'
import Card from './Card'
import { Movie } from './common/Api/fetch'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation'

type Props={
   
    trend?:[] | undefined
   
}
const Trend:React.FC<Props> = ({trend}) => {
  return (
    <div className="w-full flex gap-2 flex-wrap cursor-pointer my-4 justify-center items-center shadow-lg">
     <Swiper
        modules={[Navigation]}
        navigation
        speed={800}
        loop
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
  
      > 
        {!trend
          ? "loading ..."
          : trend?.map((movie: Movie) => {
              return (
                <SwiperSlide  key={movie.id}>
                  <div className="flex flex-wrap justify-center">
                    <Card
                    id={movie.id}
                      key={movie.id}
                      title={movie.title||movie.name }
                      image={movie.poster_path}
                      rate={Math.floor(movie.vote_average)}
                    />
                  </div>
                 </SwiperSlide> 
              );
            })}
      </Swiper>
    </div>
  )
}

export default Trend