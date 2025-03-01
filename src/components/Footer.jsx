import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

export default function Footer(){
    return(
        <div className="footer">

            <div className="wrap-footer">
            <p className="about">
                <p className="about-head">ABOUT</p>
                <p className="desc-foot">Goldnest aims to amalgamating Indian <br></br>craftsmanship with functionality and asthethetics.<br></br>
                    Customisation is at the core of Goldnest Homes.With<br></br> a focus on personalization
                    and attention to detail,we<br></br> transform your vision into 
                    beautifully curated spaces<br></br> that reflect your unique style.</p>
            </p>

            <p className="policy">
                <p className="policy-head">POLICIES</p>
                <p  className="desc-foot">Privacy Policy</p>
                <p className="desc-foot">Terms & Conditions</p>
                <p className="desc-foot">Shipping & Delivery</p>
                
            </p>
            <p className="links">
                <p className="links-head">QUICK LINKS</p>
                <p className="desc-foot"> Material & Care</p>
                <p className="desc-foot">FQA</p>
                <p className="desc-foot">Contact Us</p>
            </p>
       </div>

  <div className="footer-icons">
 <a href="https://www.instagram.com/nehu_.5419?igsh=ODBoMTg1YWpsNTJs"> <FaInstagram color="white" size={24}/></a>  
 <a href="https://www.linkedin.com/in/neha-phadtare-97a31a20b"><FaLinkedin color="white" size={24}/></a> 
 <a href="https://github.com/neha5419"> <FaGithub color="white" size={24}/></a> 
 <a href="https://app.netlify.com/teams/nehaphadtare5419/sites"> <SiNetlify color="white" size={24}/></a> 
  </div>


  <div className="copyright">
    <p>© 2025 - GOLDNEST</p>
    </div>
        </div>
    )
}