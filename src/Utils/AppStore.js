import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice'
import moviesReducer from "./MovieSlice"
import gptReducer from './GptSlice'
const Appstore = configureStore(
    {
        reducer:{
            user:UserReducer,
            movies:moviesReducer,
            gpt:gptReducer
        }
    }
)

export default Appstore