// src/layout/Header.jsx
import React from 'react';
import '../styles/HeaderBar.css';

export default function HeaderBar({ onToggleSide, onToggleProfile, isProfileOpen }) {
  return (
    <header className="headerbar">
      <button className="hamburger-btn" onClick={onToggleSide}>☰</button>
      <h1 className="title">Calendar</h1>
      <button className="toggle-btn" onClick={onToggleProfile}>👤</button>
        {isProfileOpen && (
          <div className="pulldown-menu visible">
            Profile Content
          </div>
        )}
    </header>
  );
}