// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'



import { createElement, useState } from 'react'

import Login from './Components/Login'
import Browse from './Components/Browse'
import { Provider } from 'react-redux'
import Appstore from './Utils/AppStore'

import { Outlet, Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './Components/Body'
import Header from './Components/Header'
import Footer from './Components/Footer'
import PlayVideo from './Components/PlayVideo'

 

const appRouter = createBrowserRouter([
  {
      path:'/',
      element:<Body/>,
      children:[
       {
        path:'/',
        element:<Login/>
       },     
        {
          path:'/browse',
          element:<Browse/>
      },
      {
        path:"/play",
        element:<PlayVideo/>
      }
      ]
     
  }
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Appstore}>
      
  <RouterProvider router={appRouter} >
   
   
    </RouterProvider>
 </Provider>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
