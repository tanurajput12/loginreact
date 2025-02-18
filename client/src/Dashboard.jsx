import React from 'react';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-header">Dashboard</h1>
            <div className="dash">
                <div className="dash1">Search</div>
                <div className="dash2">Display</div>
            </div>
        </div>
    );
}

export default Dashboard;