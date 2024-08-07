import { useDispatch } from "react-redux"
import { addMovieTrailer } from "../Utils/MovieSlice"

import { useEffect } from "react"

const useMovieTrailer =( movieId )=>{
    const dispatch = useDispatch()
  
    useEffect(()=>{
        getMovieVideos()    
    },[])

    const getMovieVideos =async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${import.meta.env.VITE_API_KEY}`)
        const json = await data.json() 
        const search = await fetch(`https://api.themoviedb.org/3/search/movie?query=welcome&api_key=${import.meta.env.VITE_API_KEY}`)
        const serachdata = await search.json()
        console.log("search seecifyc data of movie",serachdata);
        const filterData = json.results.filter((video)=>video.type=="Trailer")
        const {key} = filterData[0]
        
         dispatch(addMovieTrailer(key))
           }
}
export default  useMovieTrailer