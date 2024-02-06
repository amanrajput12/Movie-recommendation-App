import { useEffect } from "react"
import { API_Key } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/MovieSlice'
const useNowPlayingMovies =()=>{
 const dispatch = useDispatch()
    useEffect(()=>{
      getNowPlayingMovie()
    },[])
    const getNowPlayingMovie =async()=>{
        try {
         const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}&page=1`)
       
         const json = await  data.json()
        
         console.log("playing data ",json.results);
         dispatch(addNowPlayingMovies(json.results))
        } catch (error) {
         console.log(error.message);
        }
       }
}
export default useNowPlayingMovies