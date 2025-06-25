import React, { useState, useEffect } from 'react';
import { DatePicker, TimePicker, ColorPicker } from 'antd';
import moment from 'moment';
import { IoCloseCircleSharp } from 'react-icons/io5';
import '../styles/CalendarModal.css';
import { createEvent } from '../api/api';

export default function CreateEventForm({ calendarId, onSuccess }) {
  const initialFormState = {
    title: '',
    startDate: null,
    endDate: null,
    startTime: null,
    endTime: null,
    color: '#1677ff',
    description: ''
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleClearField = (field) => {
    setFormData(prev => ({ ...prev, [field]: '' }));
  };

  const handleClearForm = () => {
    setFormData({ ...initialFormState });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const newErrors = {};

    if (!formData.title) newErrors.title = '* Title is required.';
    if (!formData.startDate) newErrors.startDate = '* Start date is required.';
    if (!formData.endDate) newErrors.endDate = '* End date is required.';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    // validation
    if (!formData.title || !formData.startDate || !formData.endDate) {
      setError('Title, start date and end date are required.');
      return;
    }

    // format to yyyy-MM-ddThh:mm+09:00
    const fmt = (date, time, defaultTime) => {
      const t = time ? time.slice(0,5) : defaultTime;
      return `${date}T${t}+09:00`;
    };

    const eventData = {
      calendarId: calendarId ?? 1, // to fix
      title: formData.title,
      start: fmt(formData.startDate, formData.startTime, '00:00'),
      end: fmt(formData.endDate, formData.endTime, '23:59'),
      description: formData.description || undefined,
      bgcolor: formData.color
    };

    try {
      setSubmitting(true);
      const event = await createEvent(eventData);
      console.log(event);
      onSuccess();
      handleClearForm();
    } catch (err) {
      console.error(err);
      setError('Failed to create event.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="create-event-form" onSubmit={handleSubmit}>
      <h2>Schedule Registration</h2>

      {error && <div className="error-text">{error}</div>}

      <div className="input-fld">
        <label htmlFor="title" className="mt">
          Title <span className="required">*</span>
        </label>
        <div className="title-pnl">
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter the title"
            value={formData.title}
            onChange={handleChange}
            className="input-border-width"
          />
          {formData.title && (
            <button
              type="button"
              className="clear-button"
              onClick={() => handleClearField('title')}
            >
              <IoCloseCircleSharp  />
            </button>
          )}
        </div>
        {errors.title && <div className="error-msg">{errors.title}</div>}
      </div>

      <div className="row">
        <div className="input-fld">
          <label htmlFor="start-date" className="mt">
            Start date <span className="required">*</span>
          </label>
          <DatePicker
            className="picker"
            value={formData.startDate ? moment(formData.startDate) : null}
            onChange={(date, dateString) =>
              setFormData(prev => ({ ...prev, startDate: dateString }))
            }
            allowClear
        />
        {errors.startDate && <div className="error-msg">{errors.startDate}</div>}
        </div>

        <div className="input-fld">
          <label htmlFor="end-date" className="mt">
            End date <span className="required">*</span>
          </label>
          <DatePicker
            className="picker"
            value={formData.endDate ? moment(formData.endDate) : null}
            onChange={(date, dateString) =>
              setFormData(prev => ({ ...prev, endDate: dateString }))
            }
          />
          {errors.endDate && <div className="error-msg">{errors.endDate}</div>}
        </div>
      </div>

      <div className="row">
        <div className="input-fld">
          <label htmlFor="start-time" className="mt">Start time</label>
          <TimePicker
            className="picker"
            value={formData.startTime ? moment(formData.startTime, 'HH:mm') : null}
            onChange={(time, timeString) =>
              setFormData(prev => ({ ...prev, startTime: timeString }))
            }
            allowClear
        />
        </div>

        <div className="input-fld">
          <label htmlFor="end-time" className="mt">End time</label>
          <TimePicker
            className="picker"
            value={formData.endTime ? moment(formData.endTime, 'HH:mm') : null}
            onChange={(time, timeString) =>
              setFormData(prev => ({ ...prev, endTime: timeString }))
            }
          />
        </div>
      </div>

      <div className="color-fld">
        <label htmlFor="color" className="mt">
          Color
        </label>
        <div>
          <ColorPicker
            defaultValue={initialFormState.color}
            value={formData.color}
            showText
            onChangeComplete={(color) =>
              setFormData(prev => ({ ...prev, color: color.toHexString() }))
            }
          />
          {errors.color && <div className="error-msg">{errors.color}</div>}
        </div>
      </div>

      <div className="description-fld">
        <label htmlFor="description" className="mt">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter the contents"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="btn-fld">
        <button 
          type="button"
          className="btn1"
          onClick={handleClearForm}
          disabled={submitting}>
          Reset
        </button>
        <button 
          type="submit"
          className="btn2"
          disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}