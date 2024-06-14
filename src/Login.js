// -----------------------------------This code is done by Piyush Joshi-------------------------------------------
import React, { useState } from 'react';
import './Login.css';
import DigitalFlakeLogo from './DigitalFlakeLogo.png';

const Login = ({ onForgotPassword, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsButtonEnabled(e.target.value && password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsButtonEnabled(email && e.target.value);
  };

  const handleLogin = async () => {
    console.log('Login button clicked');
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login successful', data);
        onLoginSuccess();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

return (
    <div className="login-container">
      <div className="login-logo">
        <img src={DigitalFlakeLogo} alt="DigitalFlake Logo" />
      </div>
      <h2>Welcome to DigitalFlake Admin</h2>
      <div className="login-form">
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="input-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
        <button className="forgot-button" onClick={onForgotPassword}>
          Forgot?
        </button>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
