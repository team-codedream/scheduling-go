// src/components/calendar/CalendarPage.jsx
import React, { useState } from 'react';
import '../styles/CalendarPage.css';
import HeaderBar from '../components/HeaderBar';
import SideMenu from '../components/SideMenu';

export default function CalendarPage() {
  const [isSideOpen, setSideOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleSide = () => setSideOpen(prev => !prev);
  const toggleProfile = () => setProfileOpen(prev => !prev);
  const closeProfile = () => setProfileOpen(false);
  const closeSide = () => setSideOpen(false);

  return (
    <div className="calendar-page">
      <header className='header'>
         <HeaderBar
            onToggleSide={toggleSide}
            onToggleProfile={toggleProfile}
            isProfileOpen={isProfileOpen}
        />
      </header>

      {/* Side Panel: raw aside element */}
      {isSideOpen && (
        <aside className="side-panel">
          <div className="panel-content">SidePanel Content</div>
        </aside>
      )}

      {/* Main Content: click to close panels */}
      <main
        className={`main-content ${isSideOpen ? 'shifted' : ''}`}
        onClick={() => { closeSide(); closeProfile(); }}
      >
        <div>Calendar Content</div>
      </main>

      <footer className="footer">
        <div>Footer Content</div>
      </footer>
    </div>
  );
}