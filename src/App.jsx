import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css'
import HomeLayout from './components/HomeLayout.jsx';
import CustomError from './components/CustomError.jsx';
import Body from './pages/Body.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import DiningDesc from './pages/DiningDesc.jsx';
import Services from './pages/Services.jsx';
import Products from './pages/Products.jsx';
import Projects from './pages/Projects.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Blogs from './pages/Blogs.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ModernDining from './pages/ModernDining.jsx';
import SofaLiving from './pages/SofaLiving.jsx';
import HomeDecor from './pages/HomeDecor.jsx';
import DressTable from './pages/DressTable.jsx';
import DesignerFurniture from './pages/DesignerFurniture.jsx';
import FabricSofa from './pages/FabricSofa.jsx';
import ModernFur from './pages/ModernFur.jsx';
import FurnitureSec from './pages/FurnitureSec.jsx';
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
        },
        {
          path:"/dining",
          element:<DiningDesc/>
        },
        {
          path:"/projects",
          element:<Projects/>
        },
        {
          path:"/products",
          element:<Products/>
        },
        {
          path:"/services",
          element:<Services/>
        },{
          path:"/aboutus",
          element:<AboutUs/>
        },{
          path:"/contactus",
          element:<ContactUs/>
        },{
          path:"/blogs",
          element:<Blogs/>
        },{
          path:"/moderndining",
          element:<ModernDining/>
        },{
          path:"/sofaliving",
          element:<SofaLiving/>
        },{
          path:"/homedecor",
          element:<HomeDecor/>
        },{
          path:"/dresstable",
          element:<DressTable/>
        },{
          path:"/designerfurniture",
          element:<DesignerFurniture/>
        },{
          path:"/fabricsofa",
          element:<FabricSofa/>
        },{
          path:"/modernfur",
          element:<ModernFur/>
        },{
          path:"/furniture-sec",
          element:<FurnitureSec/>
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
