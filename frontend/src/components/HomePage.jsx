// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/HomePage.css'; // Import the CSS for styling

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <h1>Welcome to the Food Donation System</h1>
      <p>Help the needy by donating or receiving food!</p>

      <div className="button-container">
      
        <button className="primary-button" onClick={() => navigate('/login-admin')}>
          Admin Login
        </button>
        <button className="primary-button" onClick={() => navigate('/login-donator')}>
          Donator Login
        </button>
        <button className="primary-button" onClick={() => navigate('/login-receiver')}>
          Receiver Login
        </button>
      </div>
    </div>
  );
};

export default HomePage;
