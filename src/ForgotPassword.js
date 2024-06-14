// -----------------------------------This code is done by Piyush Joshi-------------------------------------------
import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = ({ onBackToLogin }) => {
  const [email, setEmail] = useState('');

  const handleRequestReset = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/request-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2>Did you forget password?</h2>
        <div className="input-field">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="reset-button" onClick={handleRequestReset}>
          Request reset link
        </button>
        <div className="back-to-login" onClick={onBackToLogin}>
          Back to log in
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
