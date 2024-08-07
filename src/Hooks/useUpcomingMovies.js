import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../Utils/MovieSlice';

const useUpcomingMovies =()=>{
    const dispatch = useDispatch()
    const upcoming = useSelector((store)=>store.movies.upcomingMovies)
    useEffect(()=>{
         if(!upcoming){
      getUpcomingMovies()
         }
    },[])
    const getUpcomingMovies =async()=>{
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&page=1`)
            const json = await data.json()
         
            dispatch(addUpcomingMovies(json.results))

        } catch (error) {
            console.log(error.message);
        }
    }


}

export default useUpcomingMovies