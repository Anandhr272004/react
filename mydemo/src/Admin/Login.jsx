import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Furni.</h2>
        <p>If you have an account, please login</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="Enter Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          {/* <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div> */}
          <button type="submit" className="login-button">Log In</button>
        </form>
        {/* <div className="separator">OR</div>
        <p>If you don't have an account... <a href="/register">Register</a></p> */}
      </div>
    </div>
  );
};

export default Login;
