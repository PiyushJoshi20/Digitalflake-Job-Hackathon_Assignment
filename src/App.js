// -----------------------------------This code is done by Piyush Joshi-------------------------------------------
import React, { useState } from 'react';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import StateManagement from './components/StateManagement';
import CityManagement from './components/CityManagement';
import WarehouseManagement from './components/WarehouseManagement';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handleLoginSuccess = () => {
    setCurrentPage('home');
  };

const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onLoginSuccess={handleLoginSuccess} onForgotPassword={() => setCurrentPage('forgotPassword')} />;
      case 'forgotPassword':
        return <ForgotPassword onBackToLogin={() => setCurrentPage('login')} />;
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'stateManagement':
        return <StateManagement />;
      case 'cityManagement':
        return <CityManagement />;
      case 'warehouseManagement':
        return <WarehouseManagement />;
      default:
        return <Login onLoginSuccess={handleLoginSuccess} onForgotPassword={() => setCurrentPage('forgotPassword')} />;
    }
  };

  return (
    <div className="app-container">
      {renderPage()}
    </div>
  );
};

export default App;
