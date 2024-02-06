import { useDispatch } from "react-redux"
import { addMovieTrailer } from "../Utils/MovieSlice"
import { API_Key } from "../Utils/Constant"
import { useEffect } from "react"

const useMovieTrailer =( movieId )=>{
    const dispatch = useDispatch()
    console.log(movieId);
    useEffect(()=>{
        getMovieVideos()    
    },[])

    const getMovieVideos =async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_Key}`)
        const json = await data.json()
        console.log('movie data of usemoviehook background',json.results);
        const filterData = json.results.filter((video)=>video.type=="Trailer")
        const {key} = filterData[0]
        console.log('filterdata hook',filterData);
         dispatch(addMovieTrailer(key))
           }
}
export default useMovieTrailer