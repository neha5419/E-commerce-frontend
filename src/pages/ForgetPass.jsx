import "../css/Register.css";
import { GiGoldNuggets } from "react-icons/gi";
import axios from "axios";
import API_URL from "../utils/constants.jsx";
import {ToastContainer,toast} from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";
import {useNavigate} from "react-router-dom";
import { useState } from "react";

export default function ForgetPass(){

    const[data,setData]=useState({
        email:"",
        otp:"",
        newPass:""
    })
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
        const response=await axios.post(`${API_URL}/users/forget-pass`,data);
        console.log(response);
        toast.success("Password Changed Successfully");
        setData({
          
          email:"",
         otp:"",
         newPass:""
        })

    }catch(error){
        console.log(error);
        toast.error("Password Cannot be Changed");

    }finally{
        setLoading(false);
    }
  }
    return(
        <div className="main">
        <ToastContainer />
        <div className="form">
          <div>
            <div className="img-reg"></div>
            <p className="icon-reg">
              <GiGoldNuggets color="#eeeeee" size={25} /> Goldnest
            </p>
            <div className="img-info">
              <p className="welcome">Welcome Back!</p>
              <p className="wel-info">
                Create Password by otp.Check your emails
              </p>
              <p className="signup-btn">CHANGE PASSWORD</p>
            </div>
          </div>
          <div className="register-info">
            <p className="register-head">FORGET PASSWORD</p>
  
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
              Enter Your OTP:
            </label>
            <input
              className="register-input"
              name="otp"
              value={data.otp}
              type="text"
              placeholder="******"
              onChange={handleChange}
            />
             <label for="newpass" className="labels">
              Enter Your New Password:
            </label>
            <input
              className="register-input"
              name="newPass"
              value={data.newPass}
              type="password"
              placeholder="*******"
              onChange={handleChange}
            />
  
            <div className="reg-btn">
              <button onClick={handleClick}>
                {loading ? <BeatLoader color="white" size={15} /> : "CHANGE PASSWORD"}
              </button>
            </div>
            
          </div>
        </div>
      </div>
    )
}