import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

export default function HomeLayout(){
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>

        </div>
    )
}