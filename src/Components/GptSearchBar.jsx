import React, { useRef, useState } from 'react';
import openai from '../Utils/OpenAi';
import { API_Key } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import { addGptMovieResult, emptyGptMovieResult } from '../Utils/GptSlice';

const GptSearchBar = () => {

    const dispatch = useDispatch()
  const searchText = useRef(null);

  const searchMovieTMBD = async(movie) =>{
    try {
        
    
       const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${API_Key}`)
       const json = data.json()
      
        return json;
    } catch (error) {
        console.log(error.message);
    }
  }
  const handleGptSearch = async () => {
   dispatch(emptyGptMovieResult())
   
    const gptQuery =
      'Act as a Movie Recommendation system and suggest some movies for the query: ' +
      searchText.current.value +
      ' only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya';

    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      
      const gptMovie = gptResults?.choices[0]?.message?.content.split(",")
     
    //   for all movies 
    const promiseArray = gptMovie.map((movie)=>searchMovieTMBD(movie))
// ["promise","promise"]

    const tmdbResult = await Promise.all(promiseArray)

   
     for(let i=0;i<tmdbResult.length;i++){
      
    
       
      
       dispatch(addGptMovieResult(tmdbResult[i].results))
      
     }
 ;

   
   

    


    } catch (error) {
      console.error('Error fetching GPT results:', error);
    }
  };

  return (
    <div className='pt-[20%] mb-6 w-screen flex  justify-center'>
      <div className='w-screen   md:w-1/2  '>
        <form onSubmit={(e) => e.preventDefault()} className='bg-black    rounded-md justify-center  grid grid-cols-12'>
          <input
            ref={searchText}
            type='text'
            className='p-4 m-4 col-span-10'
            placeholder='What would you like to watch today?'
          />
          <button
            onClick={handleGptSearch}
            className='py-2 self-center  md:h-1/2 col-span-2 mr-2 rounded-lg px-2 bg-red-700 text-white text-sm md:text-lg'
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
