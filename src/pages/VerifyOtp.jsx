import { useState } from "react";
import "../css/Register.css";
import { GiGoldNuggets } from "react-icons/gi";
import axios from "axios";
import API_URL from "../utils/constants.jsx";
import {ToastContainer,toast} from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";


export default function VerifyOtp(){

    const [data, setData] = useState({
    
        email: "",
        otp:""
       
      });
      const[loading,setLoading]=useState(false);
      function handleChange(e){

        const{name,value}=e.target;
        setData((prev)=>{
            return{
                ...prev,
                [name]:value,
            }
        })

      }
     async function handleClick(){
        setLoading(true);
        try{
            const response=await axios.post(`${API_URL}/users/verify-otp`,data);
            console.log(response);
            toast.success("User Verified Successfully");
            setData({
              
              email:"",
             otp:"",
            })

        }catch(error){
            console.log(error);
            toast.error("User cannot be verified");

        }finally{
            setLoading(false);
        }

      }
    return(
        <div className="main">
              <ToastContainer/>
              <div className="verify-form">
                <div>
                  <div className="verify-img-reg"></div>
                  <p className="icon-reg">
                    <GiGoldNuggets color="#eeeeee" size={25} /> Goldnest
                  </p>
                  <div className="img-info">
                    <p className="welcome">Welcome Back!</p>
                    <p className="wel-info">
                      To keep connected with us please verify yourself with otp
                    </p>
                    <p className="signup-btn">VERIFY</p>
                  </div>
                </div>
                <div className="register-info">
                  <p className="register-head">VERIFY ACCOUNT</p>
                  
                  <label for="email" className="labels">
                    Enter Your Email:
                  </label>
                  <input
                    className="register-input"
                    name="email"
                    value={data.email}
                    type="text"
                    placeholder="Enter Email"
                    onChange={handleChange}
                  />
                  <label for="otp" className="labels">
                    Enter OTP:
                  </label>
                  <input
                    className="register-input"
                    name="otp"
                    value={data.otp}
                    type="text"
                    placeholder="************"
                    onChange={handleChange}
                  />
                
                  
                  <div className="reg-btn"><button onClick={handleClick}>{loading?
                  <BeatLoader color="white" size={15}/>
                  :
                  "VERIFY YOURSELF"}</button></div>
                 
                </div>
              </div>
            </div>
    )
}