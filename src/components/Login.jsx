import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUnlock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BiSolidUser } from 'react-icons/bi';
import { HiPhone } from 'react-icons/hi';

import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

export default function Login({onLogin}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  //Must be Default
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    
    const existingUser = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUser.find((user) => user.username === username);
    if (!user) {
      setError("User does not exist");
      return;
    }

    //if user's password does not match to password
    if (user.password !== password) {
      setError("Password is incorrect");
      return;
    }

    //if its successuly login, navigate to Home Page
    //localStorage.setItem("user", JSON.stringify(user));
    onLogin(user); //pass the props in Register
    //setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
      <div>
            <div className='user'><MdEmail /></div>
            <input 
            type="email"
            placeholder='Email'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div>
        <div className='user'><FaUnlock /></div>
        <div className='user2' onClick={togglePasswordVisibility}>{showPassword ? <MdVisibilityOff /> : <MdVisibility />}</div>
          <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        </div>

        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
