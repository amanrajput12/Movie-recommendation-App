import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { accountVal } from '../Utils/Firebase'
import { removeUser } from '../Utils/UserSlice'
import { FaSearch } from "react-icons/fa";
import { headerbtnToogle, headerlogoToogle, toogleGptSearchView } from '../Utils/GptSlice'
import { removeAllMovies } from '../Utils/MovieSlice'
import logo from '../../public/movielogoheader.png'
const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store)=>store.user)
  const gptbtn = useSelector((store)=>store.gpt.showGptSearch)
  const headerbtn = useSelector((store)=>store.gpt.headerBtn)
  const headerlogo = useSelector((store)=>store.gpt.headerLogo)
  const [logoutBtn,setLogoutBtn]= useState(false)
  
useEffect(()=>{
 if(user.email["sessioId"]==undefined){
  
  setLogoutBtn(false)
 }
 else {
  setLogoutBtn(true)
 }

},[user])  
  const dispatch = useDispatch()
 
 
  const handleLogout =()=>{
    const detail = accountVal.deleteSession(user.email['sessioId']);

    detail.then((result)=>{
     
      dispatch(removeUser())
      dispatch(headerbtnToogle(false))
     dispatch(headerlogoToogle(false))
     dispatch(removeAllMovies())
      navigate('/')
     

    } )
  }
  const handleGptserach =()=>{
    
    dispatch(toogleGptSearchView())
  }
  const handlehome =()=>{
    navigate('/')
  }
  return (
    <div className=' flex flex-col md:flex-row justify-between items-center static md:absolute z-10 px-8 py-2 w-screen bg-gradient-to-b from-black '>
       { headerlogo &&
        <img onClick={handlehome} className='w-36 cursor-pointer rounded-lg' src={logo} alt="logo" />
       }
        <div>
        
        
       <div> 
    
        {
          headerbtn &&
              <button onClick={handleGptserach} className='text-white p-2 bg-red-500 rounded-md hover:bg-red-800 mr-3'>{ gptbtn?"Homepage":<FaSearch />}</button>  
              
        }
              {
                 logoutBtn &&
          <button  onClick={handleLogout} className='text-white p-2 bg-cyan-700 rounded-md hover:bg-cyan-800'>Sign out</button>
              }
          </div>
       

          </div>
    </div>
  )
}

export default Header