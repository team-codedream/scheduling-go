import React, { useState, useEffect } from 'react';
import CreateEventModal from '../components/CreateEventModal';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import { Button } from 'antd';
import { listUserEvents } from '../api/api';

import '../styles/FullCalendarView.css';

export default function FullCalendarView(){
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calendarId = 1;

  const loadEvents = async () => {
    try {
      const events = await listUserEvents(calendarId);
      const mappedEvents = events.map(evt => ({
        id: evt.id,
        title: evt.title,
        start: evt.start,
        end: evt.end,
        backgroundColor: evt.bgcolor,
        borderColor: evt.bgcolor,
      }));
      setEvents(mappedEvents);
    } catch (e) {
      console.error('Failed to load events', e);
    }
  };

  useEffect(() => { loadEvents(); }, [calendarId]);
  const handleAddEvent = async () => { await loadEvents(); };

  return (
    <div className="full-calendar-view-wrapper">
      <div className="create-event-button-wrapper">
        <Button
          className="create-event-button"
          type="primary"
          onClick={() => setIsModalOpen(true)}>
          + Create New Event
        </Button>
        <CreateEventModal
          open={isModalOpen}
          calendarId={calendarId}
          onClose={() => setIsModalOpen(false)}
          onAddEvent={handleAddEvent}
        />
      </div>
      <div className="full-calendar-view-content">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left:   'prev,next today',
            center: 'title',
            right:  'dayGridMonth,dayGridWeek,dayGridDay'
          }}
          views={{
            dayGridWeek: { buttonText: 'Week' },
            dayGridDay:  { buttonText: 'Day'  }
          }}
          displayEventTime={false}
          events={events}
          height="100%"
          contentHeight="auto"
        />
      </div>
    </div>
  );
}
