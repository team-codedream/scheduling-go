import React, { useState, useEffect } from 'react';
import { DatePicker, TimePicker, ColorPicker } from 'antd';
import { FaRegTimesCircle } from "react-icons/fa";
import '../styles/CalendarModal.css';

export default function CreateEventForm({ onSubmit }) {

const initialFormState = {
  title: '',
  startDate: '',
  endDate: '',
  startTime: '',
  endTime: '',
  color: '',
  description: ''
};

const [formData, setFormData] = useState({
  title: '',
  startDate: '',
  endDate: '',
  startTime: '',
  endTime: '',
  color: '',
  description: ''
});

  useEffect(() => {
    console.log('formData 변경됨:', formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('[submitted data]', formData);
    // API 호출 시점
    onSubmit();
  };

  const handleClearField = (field) => {
    setFormData(prev => ({ ...prev, [field]: '' }));
  };

  const handleClearForm = () => {
    setFormData(initialFormState);
  }; 

  return (   
    <form onSubmit={handleSubmit}>
        <h2>Schedule Registration</h2>
        {/* title */}
        <div className="input-fld">
        <div className="label-pnl">
            <label for="title" className="mt">Title</label>
            <span className="required">*</span>
        </div>
        {/* title input */}
        <div className="title-pnl">
            <input
                className="input-border-width"
                id="title"
                name="title"
                type="text"
                placeholder="타이틀을 입력하세요"
                value={formData.title}
                onChange={handleChange}
            />
            {/* clear title */}
            {formData.title && (
            <button className="clear-button" onClick={() => handleClearField('title')}>
                <FaRegTimesCircle />
            </button>
            )}
        </div>
        </div>

        {/* date */}
        <div className="row">
        {/* start date */}
        <div className="input-fld">
            <div className="label-pnl">
            <label for="start-date" className="mt">Start date</label>
            <span className="required">*</span>
            </div>
            {/* start date input */}
            <div className="date-pnl">
            {/* datepicker */}
            <DatePicker className="picker" onChange={(date, dateString) => setFormData(prev => ({ ...prev, startDate: dateString }))} />
            </div>
        </div>

            {/* end date */}
            <div className="input-fld">
            <div className="label-pnl">
                <label for="end-date" className="mt">End date</label>
                <span className="required">*</span>
            </div>
            {/* end date input */}
            <div className="date-pnl">
                {/* datepicker */}
                <DatePicker className="picker" onChange={(date, dateString) => setFormData(prev => ({ ...prev, endDate: dateString }))} />
            </div>
            </div>    
        </div>

        {/* time */}
        <div className="row">
            {/* start time */}
            <div className="input-fld">
            <label for="start-time" className="mt">Start time</label>
                <div className="time-pnl">
                {/* timepicker */}
                <TimePicker className="picker" onChange={(time, timeString) => setFormData(prev => ({ ...prev, startTime: timeString }))}/>
                </div>
            </div>

            {/* end time */}
            <div className="input-fld">
            <label for="end-time" className="mt">End time</label>
                <div className="time-pnl">
                {/* timepicker */}
                <TimePicker className="picker" onChange={(time, timeString) => setFormData(prev => ({ ...prev, endTime: timeString }))}/>
                </div>
            </div>
        </div>

        {/* color */}
        <div className="color-fld">
            <label for="color" className="mt">Color</label>
            <span className="required">*</span>
            {/* colorpicker */}
            <div>
                <ColorPicker defaultValue="#1677ff" showText onChangeComplete={(color) => setFormData(prev => ({ ...prev, color: color.toHexString() }))} />
            </div>
        </div>

        {/* description */}
        <div className="description-fld">
        <label for="description" className="mt">Description</label>
            <textarea
            id="description"
            name="description"
            placeholder="내용을 입력하세요"
            value={formData.description}
            onChange={handleChange}
            />
        </div>

        {/* button */}
        <div className="btn-fld">
            <button type="button" className="btn1" onClick={handleClearForm}>Cancel</button>
            <button type="submit" className="btn2">Submit</button>
        </div>
    </form>
  );
}