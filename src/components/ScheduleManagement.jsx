import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ScheduleManagement = () => {
    const [schedules, setSchedules] = useState([]);

    const handleAddSchedule = () => {
        Swal.fire({
            title: 'Add New Schedule',
            html: `
                <input id="swal-input1" class="swal2-input" placeholder="Title">
                <input id="swal-input2" class="swal2-input" type="datetime-local">
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Add',
            cancelButtonText: 'Cancel',
            preConfirm: () => {
                const title = document.getElementById('swal-input1').value;
                const dateTime = document.getElementById('swal-input2').value;
                return { title, dateTime };
            }
        }).then((result) => {
            if (result.value) {
                const newSchedule = result.value;
                setSchedules([...schedules, newSchedule]);
                Swal.fire('Added!', 'Your schedule has been added.', 'success');
            }
        });
    };

    const handleDeleteSchedule = (index) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This will permanently delete the schedule.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedSchedules = schedules.filter((_, i) => i !== index);
                setSchedules(updatedSchedules);
                Swal.fire('Deleted!', 'The schedule has been deleted.', 'success');
            }
        });
    };

    return (
        <div className="schedule-management">
            <h2>Schedule Management</h2>
            <button onClick={handleAddSchedule}>Add Schedule</button>

            <ul className="schedule-list">
                {schedules.map((schedule, index) => (
                    <li key={index} className="schedule-item">
                        <span>{schedule.title} - {new Date(schedule.dateTime).toLocaleString()}</span>
                        <button onClick={() => handleDeleteSchedule(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScheduleManagement;
