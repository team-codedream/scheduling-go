import React, { useState, useEffect } from 'react';
import CreateEventModal from '../components/CreateEventModal';
import { Button } from 'antd';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../styles/FullCalendarView.css';
import { listUserEvents } from '../api/api';

export default function FullCalendarView(){
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calendarId = 1;

  const loadEvents = async () => {
    try {
      const data = await listUserEvents(calendarId);
      setEvents(data);
    } catch (e) {
      console.error('Failed to load events', e);
    }
  };

  useEffect(() => { loadEvents(); }, [calendarId]);
  const handleAddEvent = async () => { await loadEvents(); };

  return (
    <div>
      <div style={{ padding: 20 }}>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          + Create New Event
        </Button>
        <CreateEventModal
          open={isModalOpen}
          calendarId={calendarId}
          onClose={() => setIsModalOpen(false)}
          onAddEvent={handleAddEvent}
        />
      </div>
      <div className="full-calendar-view-wrapper">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          height="100%"
          contentHeight="auto"
          events={events}
        />
      </div>
    </div>
  );
}
