import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        MovieSearch:'',
        gptMovies:null,
        headerBtn:false,
        headerLogo:false
    },
    reducers:{
        MovieSearch:(state,action)=>{
            state.MovieSearch = action.payload
        },
        addGptMovieResult:(state,action)=>{
            state.gptMovies = [...state.gptMovies,action.payload];
        },
        emptyGptMovieResult:(state,action)=>{
            state.gptMovies =""
        },
        headerbtnToogle:(state,action)=>{
            state.headerBtn=action.payload
         },
         headerlogoToogle:(state,action)=>{
             state.headerLogo=action.payload
         }
    }
})
export const {MovieSearch,addGptMovieResult,emptyGptMovieResult,headerbtnToogle,headerlogoToogle} = GptSlice.actions

export default GptSlice.reducer