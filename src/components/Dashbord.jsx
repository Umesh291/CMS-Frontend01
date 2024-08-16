import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="dashboard-grid">
                <div className="card">
                    <h3>Content Management</h3>
                    <p>Manage your articles and content here.</p>
                </div>
                <div className="card">
                    <h3>Media Management</h3>
                    <p>Upload and manage your media files.</p>
                </div>
                <div className="card">
                    <h3>Schedule Management</h3>
                    <p>Plan and schedule your content publication.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
