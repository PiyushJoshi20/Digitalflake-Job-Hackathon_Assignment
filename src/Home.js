// -----------------------------------This code is done by Piyush Joshi-------------------------------------------
import React, { useState } from 'react';
import './Home.css';
import DigitalFlakeLogo from './DigitalFlakeLogo.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCity, faWarehouse, faFlag } from '@fortawesome/free-solid-svg-icons';

const Home = ({ onNavigate }) => {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleProfileClick = () => {
    setShowLogoutDialog(true);
  };

  const handleCloseDialog = () => {
    setShowLogoutDialog(false);
  };

  const handleConfirmLogout = () => {
    // Handle logout logic here
    localStorage.removeItem('authToken'); // Clear authentication token or user data
    alert("Logged out");
    setShowLogoutDialog(false);
    onNavigate('login'); // Redirect to login page
  };

  return (
    <div className="home-container">
      <div className="sidebar">
        <div className="menu-item" onClick={() => onNavigate('home')}>
          <FontAwesomeIcon icon={faHome} className="menu-icon" />
          Home
        </div>
        <div className="menu-item" onClick={() => onNavigate('stateManagement')}>
          <FontAwesomeIcon icon={faFlag} className="menu-icon" />
          State
        </div>
        <div className="menu-item" onClick={() => onNavigate('cityManagement')}>
          <FontAwesomeIcon icon={faCity} className="menu-icon" />
          City
        </div>
        <div className="menu-item" onClick={() => onNavigate('warehouseManagement')}>
          <FontAwesomeIcon icon={faWarehouse} className="menu-icon" />
          Warehouse
        </div>
      </div>
      <div className="main-content">
        <div className="header">
          <div className="profile-icon" onClick={handleProfileClick}>👤</div>
        </div>
        <div className="welcome-section">
          <img src={DigitalFlakeLogo} alt="DigitalFlake Logo" />
          <h2>Welcome to Digitalflake admin</h2>
        </div>
      </div>
      {showLogoutDialog && (
        <div className="logout-dialog">
          <div className="logout-dialog-content">
            <h3>Log Out</h3>
            <p>Are you sure you want to log out?</p>
            <button className="cancel-button" onClick={handleCloseDialog}>Cancel</button>
            <button className="confirm-button" onClick={handleConfirmLogout}>Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
