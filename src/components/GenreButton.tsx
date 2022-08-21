import React from 'react'

const GenreButton:React.FC<any> = ({children}) => {
  return (
    <button className="bg-gray-darken py-2 px-4 rounded-2xl hover:bg-dark-lighten duration-100 ease-linear">
        {children}
    </button>
  )
}

export default GenreButton