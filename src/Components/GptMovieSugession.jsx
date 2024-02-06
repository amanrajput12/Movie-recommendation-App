import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import MovieList from './MovieList';
import MovieCard from './MovieCard';

const GptMovieSugession = () => {
  const [data, setData] = useState([]);
  const gpt = useSelector((store) => store.gpt);
          
  useEffect(() => {
  
       

      setData(gpt?.gptMovies?.flat(2));
    
  }, []);

  
 
  return (
    <div className='flex flex-wrap bg-black justify-around gap-5'>

       {
        data.map((resultmovie)=><MovieCard key={resultmovie.id} posterPath={resultmovie.poster_path}/>)
      }
      
    
    </div>
  );
};

export default GptMovieSugession;
