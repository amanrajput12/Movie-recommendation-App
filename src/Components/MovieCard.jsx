import React from 'react'

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieKey } from '../Utils/MovieSlice';

const MovieCard = ({posterPath,id}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const gptuse = useSelector((store)=>store.gpt.showGptSearch)

if(!posterPath){
  return   null
}
const handelPlay =()=>{
  if (gptuse) return 
dispatch(addMovieKey(id))
 navigate('/play')
}
  return (
    <div onClick={handelPlay} className="w-36 md:w-48 pr-4  hover:cursor-pointer">
    <img className='rounded-md' alt="Movie Card" src={ `https://image.tmdb.org/t/p/w780` + posterPath} />
  </div>
  )
}

export default MovieCard