import { useState } from "react";
import "../css/Register.css";
import { GiGoldNuggets } from "react-icons/gi";
import axios from "axios";
import API_URL from "../utils/constants.jsx";
import {ToastContainer,toast} from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";
import {useNavigate} from "react-router-dom";

export default function Login(){
    const[data,setData]=useState({
        email:"",
        password:""
    });
    const[loading,setLoading]=useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [userData, setUserData] = useState(null);
    const [slideOut, setSlideOut] = useState(false);

    function handleChange(e){
       const{name,value}= e.target;

       setData((prev)=>{
        return{
            ...prev,
            [name]:value,
        }
       })
       
    }


    const navigate=useNavigate();
    function handleForget(){
       navigate("/get-otp")
    }
   async function handleClick(){
        setLoading(true);
        try{
            const response=await axios.post(`${API_URL}/users/login`,data,{ withCredentials: true });
            console.log(response);
            toast.success("User LoggedIn Successfully");
            setData({
              
              email:"",
             password:"",
            })

            const user = response.data.user;
              setUserData(user);
              if (user.allowNotifications === null || user.allowNotifications === undefined) {
                setShowPopup(true);
            }


        }catch(error){
            console.log(error);
            toast.error("User cannot login");

        }finally{
            setLoading(false);
        }


    }

    async function handleNotificationResponse(allow) {
      
      try {
          await axios.put(`${API_URL}/users/update-notifications`, 
          { allowNotifications: allow }, 
          { withCredentials: true }); // Send token for authMiddleware

          setSlideOut(true);
          setTimeout(() => {
            setShowPopup(false);
            toast.success(`Notifications ${allow ? "enabled" : "disabled"} successfully`);
        }, 500);
      }catch (error) {
          console.error("Error updating notification preference:", error);
          toast.error("Something went wrong");
      }
  }
    return(
        <div className="main">
        <ToastContainer/>


        {showPopup && (
                <div className={`popup ${slideOut ? "slide-out" : "slide-in"}`}>
                    <p>Would you like to receive notifications?</p>
                    <button onClick={() => handleNotificationResponse(true)}>Allow</button>
                    <button onClick={() => handleNotificationResponse(false)}>Decline</button>
                </div>
            )}



        <div className="verify-form">
          <div>
            <div className="verify-img-reg"></div>
            <p className="icon-reg">
              <GiGoldNuggets color="#eeeeee" size={25} /> Goldnest
            </p>
            <div className="img-info">
              <p className="welcome">Welcome Back!</p>
              <p className="wel-info">
                To keep connected with us please login user.
              </p>
              <p className="signup-btn">LOGIN IN</p>
            </div>
          </div>
          <div className="register-info">
            <p className="register-head">LOGIN USER</p>
            
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
              Enter Password:
            </label>
            <input
              className="register-input"
              name="password"
              value={data.password}
              type="password"
              placeholder="************"
              onChange={handleChange}
            />
          
            
            <div className="reg-btn"><button onClick={handleClick}>{loading?
            <BeatLoader color="white" size={15}/>
            :
            "LOGIN"}</button></div>

        <button onClick={handleForget} className="verify-btn">FORGET PASSWORD</button>
           
          </div>
        </div>
       
      </div>
    )
}