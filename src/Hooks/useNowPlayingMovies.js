import { useEffect } from "react"
import { API_Key } from '../Utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/MovieSlice'
import { headerbtnToogle } from "../Utils/GptSlice";
const useNowPlayingMovies =()=>{
 const dispatch = useDispatch()
 const nowplaying = useSelector((store)=>store.movies.nowPlayingMovies)
    useEffect(()=>{
     
      getNowPlayingMovie()
    },[])
    const getNowPlayingMovie =async()=>{
        try {
         const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-IN&api_key=${API_Key}&page=1`)
       
         const json = await  data.json()
        
        
         dispatch(addNowPlayingMovies(json.results))
         dispatch(headerbtnToogle(true))
        
        } catch (error) {
         console.log(error.message);
        }
       }
}
export default useNowPlayingMovies