import { useDispatch } from "react-redux"
import { addMovieTrailer } from "../Utils/MovieSlice"
import { API_Key } from "../Utils/Constant"
import { useEffect } from "react"

const useMovieTrailer =( movieId )=>{
    const dispatch = useDispatch()
 
    useEffect(()=>{
        getMovieVideos()    
    },[])

    const getMovieVideos =async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_Key}`)
        const json = await data.json()
       
        const filterData = json.results.filter((video)=>video.type=="Trailer")
        const {key} = filterData[0]
        
         dispatch(addMovieTrailer(key))
           }
}
export default useMovieTrailer