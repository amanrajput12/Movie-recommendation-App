import React from 'react'
import { IMG_CDN_URL } from '../Utils/Constant'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieKey } from '../Utils/MovieSlice';

const MovieCard = ({posterPath,id}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const gptuse = useSelector((store)=>store.gpt.showGptSearch)
  console.log('check the poster path',id,gptuse);
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
    <img className='rounded-md' alt="Movie Card" src={IMG_CDN_URL + posterPath} />
  </div>
  )
}

export default MovieCard