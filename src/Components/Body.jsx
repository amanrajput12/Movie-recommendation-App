import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router-dom'



import { accountVal } from '../Utils/Firebase'


const Body = () => {
  const navigate = useNavigate()
    useEffect(()=>{
      
         getUser()
    },[])
   
    const getUser = async()=>{
      const getusercheck =await accountVal.get()
    }
  return (
    <div className='static w-screen h-screen'>
    
    <Header/>
    <Outlet/>

  
  
    </div>
  )
}

export default Body