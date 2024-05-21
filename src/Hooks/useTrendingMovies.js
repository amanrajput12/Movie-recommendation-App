import {  useCallback, useEffect } from 'react';
import { API_Key } from '../Utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { addTrendingMovies } from '../Utils/MovieSlice';

const TrendingMovies =()=>{
    console.log("use tredning hook call");
    const dispatch = useDispatch()
    const trending = useSelector((store)=>store.movies.trendingMovies)
useEffect(()=>{
      if(!trending){
    getTrendingMovies()
      }
},[])
    const getTrendingMovies=async()=>{
        try {
            const data = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_Key}&page=1`) 
            const json = await data.json()
           
               dispatch(addTrendingMovies(json.results))
            
        } catch (error) {
            console.log(error.message);
        }
    }
} 
export default TrendingMovies