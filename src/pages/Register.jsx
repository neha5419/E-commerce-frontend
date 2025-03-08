import { useState } from "react";
import "../css/Register.css";
import { GiGoldNuggets } from "react-icons/gi";
export default function Register() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    shippingAddress: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <div className="main">
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
          <p className="reg-btn">SIGN UP</p>
         
        </div>
      </div>
    </div>
  );
}
