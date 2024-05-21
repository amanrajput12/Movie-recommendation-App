import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import usePopulatMovies from '../Hooks/usePopluarMovies'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'
import useToprateMovies from '../Hooks/useTopratedMovies'
import TrendingMovies from '../Hooks/useTrendingMovies'

const SecondaryContainer = () => {
 
 

    TrendingMovies()

    usePopulatMovies()
    useUpcomingMovies()
    useToprateMovies()
  

 
    
    const movies = useSelector((store)=>store.movies)
   
  return (
    <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList   title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList  title={"Trending"} movies={movies.trendingMovies} />
          <MovieList  title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
          <MovieList title={"Top Rated"} movies={movies.topratedMovies} />
        </div>
      </div>
  )
}

export default SecondaryContainer