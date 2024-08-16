// src/pages/SchedulePage.js
import React, { useState, useEffect } from 'react';
import ScheduleManagement from '../components/ScheduleManagement';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SchedulePage = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    // Fetch schedules from API
    const fetchSchedules = async () => {
      try {
        const response = await fetch('/api/schedules');
        const data = await response.json();
        setSchedules(data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>Schedule Management</h1>
        <ScheduleManagement schedules={schedules} />
      </main>
      <Footer />
    </div>
  );
};

export default SchedulePage;
