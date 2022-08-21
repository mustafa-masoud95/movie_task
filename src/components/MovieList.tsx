import React from 'react'
import Card from './Card'
import { Movie} from './common/Api/fetch'
import {useAppSelector} from '../features/hooks'
import { getAllMovies } from '../features/media/movieSlice'

type Props={
   
    movieData?:[] | undefined
   
}
const MovieList:React.FC<Props> = ({movieData}) => {
  const media = useAppSelector(getAllMovies)

  return (
    <div className="flex flex-wrap gap-4 cursor-pointer my-4">
        
        {  
        (!media)? "loading ...":

          media?.map((movie:Movie)=>{
              return (
                <div key={movie.id} className="flex">

                    <Card key={movie.id}title={movie.title} image={movie.poster_path} rate={Math.floor(movie.vote_average)} id={movie.id} />

                </div>
              )
            })
        }
    </div>
  )
}

export default MovieList