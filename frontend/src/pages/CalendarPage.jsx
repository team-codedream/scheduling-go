// src/components/calendar/CalendarPage.jsx
import React, { useState } from 'react';
import '../styles/CalendarPage.css';
import HeaderBar from '../components/HeaderBar';
import FullCalendarView from '../components/FullCalendarView';
import IntroductionView from '../components/IntroductionView'; // Assuming this component exists

export default function CalendarPage({ onLogout }) {
  const [isSideOpen, setSideOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [activeView, setActiveView] = useState('calendar'); // 'calendar' or 'introduction'

  const toggleSide = () => {
    if(window.innerWidth<=425){
      closeProfile();
    }
    setSideOpen(prev => !prev);
  }
  const toggleProfile = () => {
    if(window.innerWidth<=425){
      closeSide();
    }
    setProfileOpen(prev => !prev);
  }
  
  const closeProfile = () => setProfileOpen(false);
  const closeSide = () => setSideOpen(false);
  const handleMenuClick = (view) => {
    if(window.innerWidth <= 425){
      closeSide(); 
    } setActiveView(view);
  }

  return (
    <div className="calendar-page">
      <header className='header'>
        <HeaderBar
          onToggleSide={toggleSide}
          onToggleProfile={toggleProfile}
          isProfileOpen={isProfileOpen}
          onLogout={onLogout}
        />
      </header>

      {/* Side Panel: raw aside element */}
      {isSideOpen && (
        <aside className="side-panel">
          <div className="panel-content">
           <p className="content-hover" onClick = {()=>{handleMenuClick('introduction')}}>About SchedulingGo</p>
           <hr/>
           <p className="content-hover" onClick = {()=>{handleMenuClick('calendar')}}>MyCalendar</p>
          </div>
        </aside>
      )}

      {/* Main Content: click to close panels */}
      <main
        className={`main-content ${isSideOpen ? 'shifted' : ''}`}
        onClick={() => { closeSide(); closeProfile(); }}
      >
        <div className="main-content-layer">
          {activeView === 'calendar' && <FullCalendarView />}
          {activeView === 'introduction' && <IntroductionView/>}
        </div>
      </main>

      <footer className="footer">
        <div>copyright © 2025 / codedream team all rights reserved.</div>
      </footer>
    </div>
  );
}