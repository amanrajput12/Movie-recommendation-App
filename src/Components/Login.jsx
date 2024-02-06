import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utils/Validate'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../Utils/UserSlice'
import { accountVal } from '../Utils/Firebase'
import {v4} from "uuid"


const Login = () => {
 const [isSignInForm,setIsSignInForm] = useState(true)
 const [handleLogin,setHandleLogin]= useState(true)
 const [errorMessage,setErrorMessage]=useState(null)
 const navigate = useNavigate()
 const email =useRef(null)
  const password =useRef(null)
  const name = useRef(null)
  const dispatch = useDispatch()
  const handleSignInForm=()=>{
        
      setIsSignInForm(!isSignInForm)
      setHandleLogin(!handleLogin)
      console.log('check which is correct ',handleLogin,isSignInForm);
  }
  const handleform = async()=>{
    console.log(email.current.value,password.current.value);
    const message =checkValidData(email.current.value,password.current.value,name)
    console.log(message);
    console.log("check what is !messsage",!message);
    setErrorMessage(message)
      const userId =v4()
   
    if(!message){
      
        if(handleLogin){
           const login =  accountVal.createEmailSession(email.current.value,password.current.value)
           login.then(function async (rst){
            console.log('login sucessfully',rst);
            dispatch(addUser({email:email.current.value,password:password.current.value,sessioId:rst.$id}))
            navigate('/browse') 
           })
          console.log('check if handleform work ');
        }
         else {  
         const signIn =  accountVal.create(userId,email.current.value,password.current.value,name.current.value)
    signIn.then(function async (res){
       console.log('result and signin sucessfully',res);
       dispatch(addUser({email:email.current.value,password:password.current.value}))
      navigate('/browse')
    })
  }

        }
  }

  
  return (
    <div >
        
        <div className='absolute'>
            <img className='h-screen w-screen object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className='absolute my-36 md:w-1/4 p-12 mx-auto rounded-md bg-opacity-60 bg-black right-0 left-0 text-white '>
            <h1 className='font-bold text-3xl py-4 '>{isSignInForm?
            "Sign In":"Sign up"}</h1>
           { !isSignInForm && <input ref={name} type="text" placeholder='Name' className='p-4 my-4 rounded-lg w-full bg-gray-800' />  }
            <input ref={email} type="text" placeholder='Email address' className='p-4 my-4 rounded-lg w-full bg-gray-800' />
            <input ref={password} type="password" placeholder='Password' className='p-4 rounded-lg my-4 w-full bg-gray-800' />
            <p className='text-red-600 font-bold text-lg '>{errorMessage}</p>
             <button onClick={handleform} className='p-4 my-6 rounded-lg  bg-red-700 w-full'>{isSignInForm?"Sign In":
             "Sign Up"}</button>
             <p className='cursor-pointer' onClick={handleSignInForm}>{isSignInForm?"New to MovieCinema? Sign Up Now":"Already registered? Sign In Now"}</p>
        </form>
        
    </div>
  )
}

export default Login