import { createElement, useState } from 'react'

// import Login from './Components/Login'
import Browse from './Components/Browse'
import { Provider } from 'react-redux'
import Appstore from './Utils/AppStore'

import { Outlet, Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './Components/Body'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {


  const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<Body/>,
       
    },
    {
        path:'/browse',
        element:<Browse/>
    },
])
 
    
  return (
    <div>
    <Provider store={Appstore}>
      
    <RouterProvider router={appRouter} >
      
      <Outlet/>
      
      </RouterProvider>
   </Provider>
   </div>
  )
}

export default App
