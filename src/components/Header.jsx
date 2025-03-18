import { useState } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiGoldNuggets } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate=useNavigate();
  function handleClick(){
  navigate("/");
  }
    return (
        <div className="header">
            
            <RxHamburgerMenu className="hamburger" onClick={() => setMenuOpen(!menuOpen)} size={24} />

            
            <p className="web-name" onClick={handleClick}><GiGoldNuggets /> Goldnest</p>

        
            <div className={`categories ${menuOpen ? "open" : ""}`}>
             <Link to="/projects" className="head-link"> PROJECTS</Link>
            <Link to="/products"  style={{color:"#504B38",textDecoration: "none"}}>   PRODUCTS</Link>
            <Link to="/services"  style={{color:"#504B38",textDecoration: "none"}}>  SERVICES</Link>
             <Link to="/aboutus"  style={{color:"#504B38",textDecoration: "none"}}>    ABOUT US</Link>
            <Link to="/contactus"  style={{color:"#504B38",textDecoration: "none"}}>   CONTACT US</Link>
            <Link to="/blogs"  style={{color:"#504B38",textDecoration: "none"}}>   BLOGS</Link>
            </div>
            
            <ul className="icons">
                <li><Link to="/login"><FiUser color="black" size={24} /></Link></li>
                <li><Link to="/register"><LuLogIn color="black" size={24} /></Link></li>
                <li><Link to="/cart"><IoCartOutline color="black" size={24} /></Link></li>
            </ul>
        </div>
    );
}
