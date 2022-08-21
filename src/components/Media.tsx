import React from 'react'
import Card from './Card';
import { Movie } from './common/Api/fetch';


type Props={
   
    trend?:[] | undefined
   
}
const Media:React.FC<Props> = ({trend}) => {
  return (
    <div className="flex flex-wrap gap-4">
        {!trend
          ? "loading ..."
          : trend?.map((media: Movie) => {
              return (
              
                  <div key={media.id} className="flex flex-wrap justify-center">
                    <Card
                    id={media.id}
                      key={media.id}
                      title={media.title||media.name }
                      image={media.poster_path}
                      rate={Math.floor(media.vote_average)}
                    />
                  </div>
               
              );
            })}
    </div>
  )
}

export default Media