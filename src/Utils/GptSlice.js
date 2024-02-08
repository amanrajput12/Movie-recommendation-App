import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovies:null,
        headerBtn:false,
        headerLogo:false
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
        },
        headerbtnToogle:(state,action)=>{
            state.headerBtn=action.payload
         },
         headerlogoToogle:(state,action)=>{
             state.headerLogo=action.payload
         }
    }
})
export const {toogleGptSearchView,addGptMovieResult,emptyGptMovieResult,headerbtnToogle,headerlogoToogle} = GptSlice.actions

export default GptSlice.reducer