import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,title}) => {
    // console.log("movies ",movies);
  return (
    <div className="px-6">
    <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
    <div className="  ">
      <div className="flex  flex-wrap" >
        {movies?.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default MovieList