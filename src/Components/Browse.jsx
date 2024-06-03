import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';

import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';
import GptSearch from './MovieSearch';
import GptMovieSugession from './GptMovieSugession';

const Browse = () => {
  const navigate = useNavigate()
 

 
 
useNowPlayingMovies()
  useEffect(()=>{
  
   
  },[])
 

  
  return (
    <div className=' absolute '>
     
     
    
      
      <>
       <MainContainer/>
      <SecondaryContainer/>
      </>
     
     
       
      </div>

  )
}

export default Browse