import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideBackground from './VideBackground';

const MainContainer = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies)
    console.log("movies in maincontaner",movies);
    if(!movies) return
    const mainMovie = movies[0]
    console.log(' check for the url of youtbe play',mainMovie);
    const {original_title,overview,id}= mainMovie
    console.log(mainMovie);
  return (
    <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle title={original_title} overview={overview}/>
        <VideBackground movieId={id}/>
    </div>
  )
}

export default MainContainer