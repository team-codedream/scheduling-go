// src/components/calendar/CalendarPage.jsx
import React, { useState } from 'react';
import '../styles/CalendarPage.css';
import HeaderBar from '../components/HeaderBar';
import CalendarView from '../components/CalendarView';
import IntroductionView from '../components/IntroductionView'; // Assuming this component exists

export default function CalendarPage() {
  const [isSideOpen, setSideOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [activeView, setActiveView] = useState('calendar'); // 'calendar' or 'introduction'

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
          <div className="panel-content">
           <p className="content-hover" onClick = {()=>{setActiveView('introduction')}}>About SchedulingGo</p>
           <hr/>
           <p className="content-hover" onClick = {()=>{setActiveView('calendar')}}>MyCalender</p>
          </div>
        </aside>
      )}

      {/* Main Content: click to close panels */}
      <main
        className={`main-content ${isSideOpen ? 'shifted' : ''}`}
        onClick={() => { closeSide(); closeProfile(); }}
      >
        <div>
          {activeView === 'calendar' && <CalendarView />}
          {activeView === 'introduction' && <IntroductionView/>}

        </div>
      </main>

      <footer className="footer">
        <div>Footer Content</div>
      </footer>
    </div>
  );
}