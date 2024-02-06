import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router-dom'


import Footer from './Footer'
import { accountVal } from '../Utils/Firebase'


const Body = () => {
  const navigate = useNavigate()
    useEffect(()=>{
         getUser()
    },[])
    console.log('check the body');
    const getUser = async()=>{
      const getusercheck =await accountVal.get()
          
      console.log('after login we check ',getusercheck);
      
      
    }
  return (
    <div className='static w-screen h-screen'>
     
   

    <Header/>
    <Outlet/>
    <Footer/>
  
  
    </div>
  )
}

export default Body