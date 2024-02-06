import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { accountVal } from '../Utils/Firebase'
import { removeUser } from '../Utils/UserSlice'
import { toogleGptSearchView } from '../Utils/GptSlice'
const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store)=>store.user)
  const gptbtn = useSelector((store)=>store.gpt.showGptSearch)
  const [logoutBtn,setLogoutBtn]= useState(true)
useEffect(()=>{
 if(user.email["sessioId"]==undefined){
  console.log("check season id",user,user.email['sessionId']);
  setLogoutBtn(false)
 }
 else {
  setLogoutBtn(true)
 }

},[user])  
  const dispatch = useDispatch()
  console.log('i need to check the user of store',user.email["sessioId"],user,"gpt btn check",gptbtn);
 
  const handleLogout =()=>{
    const detail = accountVal.deleteSession(user.email['sessioId']);
console.log('handlelogout clicked');
    detail.then((result)=>{
      console.log('logout sucessfully',result);
      dispatch(removeUser())
    
      navigate('/')
     

    } )
  }
  const handleGptserach =()=>{
    console.log('click on gpt icon');
    dispatch(toogleGptSearchView())
  }
  const handlehome =()=>{
    navigate('/browse')
  }
  return (
    <div className=' flex flex-col md:flex-row justify-between items-center absolute z-10 px-8 py-2 w-screen bg-gradient-to-b from-black '>
        <img onClick={handlehome} className='w-36 rounded-lg' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        <div>
       {  logoutBtn &&
       <div> 
                <button onClick={handleGptserach} className='text-white p-2 bg-red-500 rounded-md hover:bg-red-800 mr-3'>{ gptbtn?"Homepage":"Search Gpt"}</button>
          <button  onClick={handleLogout} className='text-white p-2 bg-cyan-700 rounded-md hover:bg-cyan-800'>Sign out</button>
          </div>
       } 

          </div>
    </div>
  )
}

export default Header