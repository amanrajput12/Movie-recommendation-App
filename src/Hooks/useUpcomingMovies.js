import { useEffect } from 'react';
import { API_Key } from '../Utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../Utils/MovieSlice';

const useUpcomingMovies =()=>{
    const dispatch = useDispatch()
    const upcoming = useSelector((store)=>store.movies.upcomingMovies)
    useEffect(()=>{
        
      getUpcomingMovies()
    },[])
    const getUpcomingMovies =async()=>{
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_Key}&page=1`)
            const json = await data.json()
            console.log('upcoming movies',json.results);
            dispatch(addUpcomingMovies(json.results))

        } catch (error) {
            console.log(error.message);
        }
    }


}

export default useUpcomingMovies