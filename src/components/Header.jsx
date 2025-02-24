import { useState } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiGoldNuggets } from "react-icons/gi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header">
            
            <RxHamburgerMenu className="hamburger" onClick={() => setMenuOpen(!menuOpen)} size={24} />

            
            <p className="web-name"><GiGoldNuggets /> Goldnest</p>

        
            <div className={`categories ${menuOpen ? "open" : ""}`}>
                <p>PROJECTS</p>
                <p>PRODUCTS</p>
                <p>SERVICES</p>
                <p>ABOUT US</p>
                <p>CONTACT US</p>
                <p>BLOGS</p>
            </div>
            
            <ul className="icons">
                <li><Link to="/login"><FiUser color="black" size={24} /></Link></li>
                <li><Link to="/register"><LuLogIn color="black" size={24} /></Link></li>
                <li><Link to="/cart"><IoCartOutline color="black" size={24} /></Link></li>
            </ul>
        </div>
    );
}
