import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import MovieList from './MovieList';
import MovieCard from './MovieCard';

const GptMovieSugession = () => {
  const [data, setData] = useState([]);
  const gpt = useSelector((store) => store.gpt);
              // console.log(' now work on flat array',gpt.gptMovies.flat(2)[11]);
  useEffect(() => {
    // Initialize state based on Redux store when gpt changes
       

      setData(gpt?.gptMovies?.flat(2));
    
  }, []);

  
  // console.log('redux gpt suggestion movies', data.flat(3), Array.isArray(data));
  // console.log('redux check withou array', data[0].poster_path);
  // console.log('redux check', data[1].poster_path,Array.isArray(data));
  return (
    <div className='flex flex-wrap bg-black justify-around gap-5'>

       {
        data.map((resultmovie)=><MovieCard key={resultmovie.id} posterPath={resultmovie.poster_path}/>)
      }
      
    
    </div>
  );
};

export default GptMovieSugession;
