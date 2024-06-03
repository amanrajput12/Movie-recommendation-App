import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { accountVal } from '../Utils/Firebase'
import { removeUser } from '../Utils/UserSlice'
import { FaSearch } from "react-icons/fa";

import { removeAllMovies } from '../Utils/MovieSlice'
import logo from '../../public/movielogoheader.png'
import { MovieSearch } from '../Utils/GptSlice'
const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store)=>store.user)

  const [handleSearch,setHandleSearch]= useState(false)
  const [searchValue,setSearchValue]= useState('')
  
useEffect(()=>{
if(!handleSearch){
  navigate('/')
}

},[handleSearch])  
  const dispatch = useDispatch()
 
 const Search =()=>{
  if(searchValue){
    dispatch(MovieSearch(searchValue))
    navigate('/search')
  }
  
 }
  
  const handlehome =()=>{
    navigate('/')
  }
  return (
    <div className=' flex flex-col md:flex-row justify-between items-center static md:absolute z-10 px-8 py-2 w-screen bg-gradient-to-b from-black '>
   
        <img onClick={handlehome} className='w-36 cursor-pointer rounded-lg' src={logo} alt="logo" />
       { handleSearch &&  
        <div className='w-1/2 flex'>
        <input onChange={(e)=>setSearchValue(e.target.value)} className='w-[80%] rounded-md shadow-xl' type="text" />    
        <button onClick={Search} className='bg-red-950 p-2 ml-2 rounded-lg hover:text-white'>Search</button>
        </div>
        }
        <div>
        
         
         
       <div> 
             <button onClick={()=>setHandleSearch(!handleSearch)} className='text-white p-2 bg-red-500 rounded-md hover:bg-red-800 mr-3'><FaSearch/></button>
          </div>
       

          </div>
    </div>
  )
}

export default Header