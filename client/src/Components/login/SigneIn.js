import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './login.css';
import {login} from '../../redux/actions/action';
import { Navigate } from 'react-router-dom';

const SigneIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {loading, users}= useSelector(state=>state.reducer)
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({email, password}));
  };

  return (
    <div className="container">
      
         {
          loading ? <h1>loading...</h1>
          :localStorage.getItem('token') ? <Navigate to="/accueil"></Navigate>
          :
      <>
      <form className='form2' onSubmit={handleLogin} >
      <p>Sign In</p>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}required placeholder="example@gmail.com..."/><br/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}required placeholder="enter password..."/><br/>
      <input type="submit" value="Log In"/>
      </form>
      </>
    }
      <div class="drop drop-1"></div>
      <div class="drop drop-2"></div>
     
      <div class="drop drop-4"></div>
      <div class="drop drop-5"></div>
      <div class="drop drop-6"></div>
       
     
    </div>
  );
};

export default SigneIn;