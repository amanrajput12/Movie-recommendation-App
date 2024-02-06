import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovies:null
    },
    reducers:{
        toogleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult:(state,action)=>{
            state.gptMovies = [...state.gptMovies,action.payload];
        },
        emptyGptMovieResult:(state,action)=>{
            state.gptMovies =""
        }
    }
})
export const {toogleGptSearchView,addGptMovieResult,emptyGptMovieResult} = GptSlice.actions

export default GptSlice.reducer