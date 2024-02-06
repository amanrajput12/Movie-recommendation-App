import React from 'react'

import useMovieTrailer from '../Hooks/useMovieTrailer'
import { useSelector } from 'react-redux'
const VideBackground = ({movieId}) => {

const trailervideo = useSelector((store)=>store.movies?.trailerVideo)


useMovieTrailer(movieId)
    


  return (
    <div className="w-screen mx-auto">
    <iframe
      className="w-screen aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        trailervideo +
        "?&autoplay=1&mute=1"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div>

  
  )
}

export default VideBackground