import ReactDOM from 'react-dom/client'


import React from 'react'

import MovieSearch from './MovieSearch.jsx'

import { createElement, useEffect, useState } from 'react'

import Login from './Login'
import Browse from './Browse'
import { Provider } from 'react-redux'
import Appstore from '../Utils/AppStore'

import { Outlet, Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'
import PlayVideo from './PlayVideo'

 

const appRouter = createBrowserRouter([
  {
      path:'/',
      element:<Body/>,
      children:[
         
        {
          path:'',
          element:<Browse/>
      },
      {
     path:'/search',
     element:<MovieSearch/>
      },
      {
        path:"/play",
        element:<PlayVideo/>
      }
      ]
     
  }
  
])






const App = () => {



      
  return (
    <div>
     <Provider store={Appstore}>
      
      <RouterProvider router={appRouter} >
       
       
        </RouterProvider>
     </Provider> 
    </div>
  )
}

export default App
