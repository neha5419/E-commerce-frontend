import { useState } from "react";
import "../css/Register.css";
import { GiGoldNuggets } from "react-icons/gi";
import axios from "axios";
import API_URL from "../utils/constants.jsx";
import {ToastContainer,toast} from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";
import {useNavigate} from "react-router-dom";
export default function Register() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    shippingAddress: "",
  });
  const navigate=useNavigate();
  const[loading,setLoading]=useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function handleNavigate(){
   navigate("/verify-you");
  }
 async function handleClick(){
  setLoading(true);
  try{
      const response=await axios.post(`${API_URL}/users/register`,data);
      console.log(response);
      toast.success("User Registered Successfully");
      setData({
        fullName:"",
        email:"",
        password:"",
        phoneNumber:"",
        shippingAddress:""
      })
  }catch(error){
    console.log(error);
    toast.error("User cannot be registered");
  }finally{
    setLoading(false);
  }
  }
  return (
    <div className="main">
      <ToastContainer/>
      <div className="form">
        <div>
          <div className="img-reg"></div>
          <p className="icon-reg">
            <GiGoldNuggets color="#eeeeee" size={25} /> Goldnest
          </p>
          <div className="img-info">
            <p className="welcome">Welcome Back!</p>
            <p className="wel-info">
              To keep connected with us please register with your personal info
            </p>
            <p className="signup-btn">SIGN UP</p>
          </div>
        </div>
        <div className="register-info">
          <p className="register-head">CREATE ACCOUNT</p>
          <label for="name" className="labels">
            Enter Your Fullname:
          </label>
          <input
            className="register-input"
            name="fullName"
            value={data.fullName}
            type="text"
            placeholder="Enter Name"
            onChange={handleChange}
          />
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
          <label for="password" className="labels">
            Enter Your Password:
          </label>
          <input
            className="register-input"
            name="password"
            value={data.password}
            type="text"
            placeholder="************"
            onChange={handleChange}
          />
          <label for="number" className="labels">
            Enter Your Number
          </label>
          <input
            className="register-input"
            name="phoneNumber"
            value={data.phoneNumber}
            type="text"
            placeholder="**********"
            onChange={handleChange}
          />
          <label for="address" className="labels">
            Enter Your Address
          </label>
          <input
            className="register-input"
            name="shippingAddress"
            value={data.shippingAddress}
            type="text"
            placeholder="Enter Address"
            onChange={handleChange}
          />
          <div className="reg-btn"><button onClick={handleClick}>{loading?
          <BeatLoader color="white" size={15}/>
          :
          "SIGN UP"}</button></div>
         <button onClick={handleNavigate} className="verify-btn">VERIFY OTP AFTER SIGN UP</button>
        </div>
      </div>
    </div>
  );
}
