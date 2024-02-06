import { useEffect } from 'react';
import { API_Key } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../Utils/MovieSlice';

const  usePopulatMovies =()=>{
    const dispatch = useDispatch()
useEffect(()=>{
getPopularMovies()
},[])

    const getPopularMovies =async()=>{
         try {
          const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&page=1`)  
          const json = await data.json()
          console.log('popular movies',json);
          dispatch(addPopularMovies(json.results))
         } catch (error) {
            console.log(error.message);
         }
    }
}


export default usePopulatMovies
