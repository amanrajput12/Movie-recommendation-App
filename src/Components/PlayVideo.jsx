import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';
import { removeMovieTrailer } from '../Utils/MovieSlice';



const PlayVideo = () => {
  const videoId = useSelector((store) => store.movies?.movieKey);
  const trailervideo = useSelector((store) => store.movies?.trailerVideo);
  const dispatch = useDispatch();
  

  useMovieTrailer(videoId);

  useEffect(() => {
   
    return () => {
      cleanup();
    };
  }, []);

  const cleanup = () => {
    dispatch(removeMovieTrailer());
  };


  

  return (
    <div className="w-screen h-screen  mx-auto">
      <iframe
        className="w-screen  aspect-video"
        src={'https://www.youtube.com/embed/' + trailervideo + '?&autoplay=1'}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      
    </div>
  );
};

export default PlayVideo;
