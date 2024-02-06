import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';
import { accountVal } from '../Utils/Firebase';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import GptMovieSugession from './GptMovieSugession';

const Browse = () => {
  const navigate = useNavigate()
  const gptdata = useSelector(store=>store.gpt)
  const {showGptSearch,gptMovies}=gptdata
  console.log(' log the result for solve error ',gptMovies);
  if(gptMovies){
    console.log(' i slove the problem',gptMovies.length);
  }
useNowPlayingMovies()
  useEffect(()=>{
    getUser()
   
  },[])
  const getUser = async()=>{
    try {
      const user = await accountVal.get()
      console.log('my browse check',user);
if(!user) navigate('/')



    } catch (error) {
            console.log('error',error);      
            navigate('/')
    }
   
  }

  
  return (
    <div className=' absolute '>
     {
      showGptSearch? 
      <>
      <GptSearch/>
      {gptMovies && <GptMovieSugession/>}
      </>
      :
      <>
       <MainContainer/>
      <SecondaryContainer/>
      </>
     }
     
       
      </div>

  )
}

export default Browse