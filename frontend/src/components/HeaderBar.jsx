// src/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import '../styles/HeaderBar.css';
import ProfileForm from './ProfileForm';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { getCurrentUser } from '../api/api';

export default function HeaderBar({ onToggleSide, onToggleProfile, isProfileOpen, onLogout }) {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then(data => setUser(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <header className="headerbar">
      <div className="headbar-left">
        <RxHamburgerMenu className="hamburger-btn headerbar-icon" onClick={onToggleSide}/>
        <div className="header-title">        
          <FaCalendarCheck className="calendar-icon headerbar-icon"/>
          <h1 className="title">SchedulingGo</h1>
          <span className="team-name">by codedream</span>
        </div>
      </div>
      <div className="headbar-right">
      <span className="headbar-email">{user.email}</span>
      <FaCircleUser className="toggle-btn headerbar-icon" onClick={onToggleProfile}/>     
        <div className={`pulldown-menu ${isProfileOpen ? 'visible' : ''}`}>
          <ProfileForm onLogout={onLogout} />
        </div>
      </div>      
    </header>
  );
}