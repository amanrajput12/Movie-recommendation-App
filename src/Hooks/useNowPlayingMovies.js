import { useEffect } from "react"

import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/MovieSlice'

const useNowPlayingMovies =()=>{
 const dispatch = useDispatch()
 const nowplaying = useSelector((store)=>store.movies.nowPlayingMovies)
    useEffect(()=>{
      if(!nowplaying){
        console.log("now playing useeffect");
      getNowPlayingMovie()
      }
    },[])
    const getNowPlayingMovie =async()=>{
        try {
         const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-IN&api_key=${import.meta.env.VITE_API_KEY}&page=1`)
       
         const json = await  data.json()
         console.log(json);
        
         dispatch(addNowPlayingMovies(json.results))
       
        
        } catch (error) {
         console.log(error.message);
        }
       }
}
export default useNowPlayingMovies