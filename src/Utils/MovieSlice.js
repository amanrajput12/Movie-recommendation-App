import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        upcomingMovies:null,
        topratedMovies:null,
        trendingMovies:null,
        movieKey:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addMovieTrailer:(state,action)=>{
         state.trailerVideo=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
         state.upcomingMovies=action.payload
        },
        addTopratedMovies:(state,action)=>{
         state.topratedMovies=action.payload
        },
        addTrendingMovies:(state,action)=>{
        state.trendingMovies=action.payload
        },
        addMovieKey:(state,action)=>{
            state.movieKey=action.payload
        }


    }
})
export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies,addUpcomingMovies,addTopratedMovies,addTrendingMovies,addMovieKey} = movieSlice.actions

export default movieSlice.reducer