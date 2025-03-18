import { useState } from "react";
import "../css/Register.css";
import { GiGoldNuggets } from "react-icons/gi";
import axios from "axios";
import API_URL from "../utils/constants.jsx";
import { ToastContainer, toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";
import { useNavigate } from "react-router-dom";
export default function GetOtp() {
  const [email, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  function handleChange(e) {
    setData(e.target.value);
  }

  async function handleClick() {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/users/get-otp`, {email});
      console.log(response);
      toast.success("OTP Sent Successfully");
      setData("");
    } catch (error) {
      console.log(error);
      toast.error("Unable to send otp");
    } finally {
      setLoading(false);
    }
  }

  function handleNavigate(){
   navigate("/forget-pass")
  }
  return (
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
              Forgot Your Password? Enter your email to get otp.
            </p>
            <p className="signup-btn">CHANGE PASSWORD</p>
          </div>
        </div>
        <div className="register-info">
          <p className="register-head">GET OTP</p>

          <label for="email" className="labels">
            Enter Your Email:
          </label>
          <input
            className="register-input"
            value={email}
            type="text"
            placeholder="Enter Email"
            onChange={handleChange}
          />

          <div className="reg-btn">
            <button onClick={handleClick}>
              {loading ? <BeatLoader color="white" size={15} /> : "GET OTP"}
            </button>
          </div>
          <button onClick={handleNavigate} className="verify-btn">
            FORGET PASSWORD
          </button>
        </div>
      </div>
    </div>
  );
}
