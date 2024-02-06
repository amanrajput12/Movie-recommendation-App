import { useDispatch, useSelector } from 'react-redux';
import { API_Key } from '../Utils/Constant';
import { addTopratedMovies } from '../Utils/MovieSlice';
import { useEffect } from 'react';

const useToprateMovies =()=>{
 const dispatch = useDispatch()
   const toprated = useSelector((store)=>store.movies.topratedMovies)
    useEffect(()=>{
       
 getToprateMovies()
    },[])
    const getToprateMovies =async()=>{
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}&page=1`)
            const json = await data.json()
           
              dispatch(addTopratedMovies(json.results))
        } catch (error) {
            console.log(error.message);
        }
    }

}
export default useToprateMovies