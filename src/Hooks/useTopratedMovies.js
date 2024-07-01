import { useDispatch, useSelector } from 'react-redux';

import { addTopratedMovies } from '../Utils/MovieSlice';
import { useEffect } from 'react';

const useToprateMovies =()=>{
    console.log("use top rated call");
 const dispatch = useDispatch()
   const toprated = useSelector((store)=>store.movies.topratedMovies)
    useEffect(()=>{
       if(!toprated){
 getToprateMovies()
       }
    },[])
    const getToprateMovies =async()=>{
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&page=1`)
            const json = await data.json()
           
              dispatch(addTopratedMovies(json.results))
        } catch (error) {
            console.log(error.message);
        }
    }

}
export default useToprateMovies