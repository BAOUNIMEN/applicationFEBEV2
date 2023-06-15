import "./login.css";
import {Link, Navigate} from 'react-router-dom';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {register} from '../../redux/actions/action';

const SigneUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const {loading, users}= useSelector(state=>state.reducer)
  const dispatch = useDispatch();


  // registering users
  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      fullName,
      email,
      phone,
      address,
      password,
    };
    dispatch(register(newUser));
  };
  return (
    <div className="container">
      {
         loading ? <h1>loading...</h1>
         : users ? <Navigate to="/SigneIn"></Navigate>
         :
         <>
      <div >
        <form className="form" onSubmit={handleRegister}>
          <p>Sign up for latest offers and promotions</p>
          {/* <label>Name</label> */}
          <input
            type="text"onChange={(e) => setFullName(e.target.value)}value={fullName}required placeholder="Please fill in your full name..."/><br/>
          {/* <label>Email</label> */}
          <input
            type="email" onChange={(e) => setEmail(e.target.value)}value={email}required placeholder="example@gmail.com..."/><br />
          {/* <label>Phone</label> */}
          <input
            type="text"onChange={(e) => setPhone(e.target.value)} value={phone}required placeholder="Please fill in your phone number..."/><br />
          {/* <label>Address</label> */}
          <input
            type="text" onChange={(e) => setAddress(e.target.value)} value={address}required placeholder="Please fill in your address..."/><br />
          {/* <label>Password</label> */}
          <input
            type="password"onChange={(e) => setPassword(e.target.value)} value={password}required placeholder="Please fill in your password..."/><br />
          <input type="submit" value="Connect"/>
        </form>
      </div>

      <div class="drop drop-8"></div>
      <div class="drop drop-9"></div>
      <div class="drop drop-3"></div>
      <div class="drop drop-4"></div>
      <div class="drop drop-5"></div>
      <div class="drop drop-10"></div>
      <div class="drop drop-7"></div>
      </>
      }    
    </div>
  );
};

export default SigneUp;
