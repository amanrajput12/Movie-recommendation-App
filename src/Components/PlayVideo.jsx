import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer';

const PlayVideo = () => {
 const videoId = useSelector((store)=>store.movies?.movieKey)
 const trailervideo = useSelector((store)=>store.movies?.trailerVideo)
 console.log('check the movie id',videoId);
 useMovieTrailer(videoId)
 
  return (
 
<div className="w-screen mx-auto">
    <iframe
      className="w-screen aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        trailervideo +
        "?&autoplay=1"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div>
   
  )
}

export default PlayVideo