import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        MovieSearch:'',
        
    },
    reducers:{
        MovieSearch:(state,action)=>{
            state.MovieSearch = action.payload
        },
      
       
       
        
    }
})
export const {MovieSearch} = GptSlice.actions

export default GptSlice.reducer