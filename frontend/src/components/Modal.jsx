import React from 'react';

 // Modal component
 // Props:
 // - isOpen: boolean
 // - onClose: () => void
 // - children: React.ReactNode
 
export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}