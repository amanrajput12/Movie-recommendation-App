import { createSlice } from "@reduxjs/toolkit";
 const initialstate ={
    email:"",
    password:"",
    sessionId:""
 }
const UserSlice = createSlice(
    {
        name:"user",
        initialState:initialstate,
        reducers:{
            addUser:(state, action)=>{
                state.email = action.payload,
                state.password=action.payload,
                state.sessionId=action.payload

            },
            removeUser:(state,action)=>{
                 state.email="",
                 state.password="",
                 state.sessionId=""
            }
        }
    }
)
export const {addUser,removeUser} = UserSlice.actions

export default UserSlice.reducer