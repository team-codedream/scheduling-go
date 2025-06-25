// src/components/calendar/CreateEventModal.jsx
import React, { useState } from 'react';
import { Modal, message } from 'antd';
import { FaRegTimesCircle } from 'react-icons/fa';
import CreateEventForm from './CreateEventForm';

export default function CreateEventModal({
  calendarId,
  open,
  onClose,
  onAddEvent
}) {
  const [formKey, setFormKey] = useState(0);

  // 이벤트 생성 성공 시
  const handleOnSuccess = async createdEvent => {
    message.success('Added!');
    onClose();            // close modal
    await onAddEvent();   // update all events
  };

  // from reset after modal closed
  const handleAfterClose = () => {
    setFormKey(prev => prev + 1);
  };

  return (
    <Modal
      open={open}
      footer={null}
      closable={false}
      afterClose={handleAfterClose}
    >
      <div style={{ textAlign: 'right' }}>
        <FaRegTimesCircle
          style={{ fontSize: 20, cursor: 'pointer' }}
          onClick={onClose}
        />
      </div>
      <CreateEventForm
        key={formKey}
        calendarId={calendarId}
        onSuccess={handleOnSuccess}
      />
    </Modal>
  );
}