import React from 'react';
import '../styles/ProfileForm.css';
import { FaUserCircle } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export default function ProfileForm() {
  return (
    <div className="account-panel">
      <h3 className="section-title">Account</h3>
      <div className="user-info">
        <FaUserCircle className="profile-icon" />
        <div>
          <div className="user-name">Gildong Hong</div>
          <div className="user-email">unknown@codedream.com</div>
        </div>
      </div>

      <div className="version-info">
        <div>Version: v1.0.0-beta</div>
        <div>Release Date: 2025.06.26</div>
      </div>

      <div className="bottom-section">
        <button className="logout-button">Log Out</button>
        <a href="https://www.instagram.com/scheduling_go/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="instagram-icon" />
        </a>
      </div>
    </div>
  );
};

