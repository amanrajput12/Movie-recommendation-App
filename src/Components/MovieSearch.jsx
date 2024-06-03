import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NEW_API_KEY } from '../Utils/Constant';
import MovieList from './MovieList';

const MovieSearch = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store?.gpt?.MovieSearch);
  const [moviedata, setMovieData] = useState([]);

  useEffect(() => {
    SearchMovie();
  }, [data]);

  async function SearchMovie() {
    const movie = await fetch(`https://api.themoviedb.org/3/search/movie?query=${data}&api_key=${NEW_API_KEY}`);
    const jsonmovie = await movie.json();
    setMovieData(jsonmovie.results);
  }

  return (
    <div className="relative mt-4">
      <div
        className="absolute -z-30 w-full h-full"
        style={{
          backgroundImage: 'url("https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg")',
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'cover'
        }}
      />
      <div className="relative pt-[10%] ">
        <MovieList title={"Search Movie"} movies={moviedata} />
      </div>
    </div>
  );
};

export default MovieSearch;
