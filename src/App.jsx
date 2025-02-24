import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css'
import HomeLayout from './components/HomeLayout.jsx';
import CustomError from './components/CustomError.jsx';
import Body from './pages/Body.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';

function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<HomeLayout/>,
      errorElement:<CustomError/>,
      children:[
        {
          index:true,
          element:<Body/>
        },
        {
           path:"/register",
           element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        }
      ]
    }
  ])
 
return(
  <div>
    <RouterProvider router={router}></RouterProvider>

  </div>
)
}

export default App
