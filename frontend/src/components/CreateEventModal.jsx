import React from 'react';
import { Modal, message } from 'antd';
import { FaRegTimesCircle } from 'react-icons/fa';
import CreateEventForm from './CreateEventForm';

export default function CreateEventModal({ open, onClose }) {
  const handleSubmit = (title) => {
    console.log('폼 제출됨:', title);
    message.success('일정이 등록되었습니다!');
    onClose(); // 모달 닫기
  };

  return (
    <Modal open={open} footer={null} closable={false} onCancel={onClose}>
      <div style={{ textAlign: 'right' }}>
        <FaRegTimesCircle
          style={{ fontSize: 20, cursor: 'pointer' }}
          onClick={onClose}
        />
      </div>
      <CreateEventForm onSubmit={handleSubmit} />
    </Modal>
  );
}
