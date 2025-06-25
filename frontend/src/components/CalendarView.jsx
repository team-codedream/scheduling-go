import React, { useState } from 'react';
import CreateEventModal from '../components/CreateEventModal';
import { Button } from 'antd';

export default function CalendarView(){
    // modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    // for test
    const calenderId = 1;

    return(
        <div>
            <div style={{ padding: '20px' }}>
                <Button type="primary" onClick={handleOpenModal}>
                    + Create New Event
                </Button>
                <CreateEventModal 
                    open={isModalOpen}
                    onClose={handleCloseModal}
                    calenderId={calenderId} />
            </div>
        나는 캘린더
        </div>
    );
}
