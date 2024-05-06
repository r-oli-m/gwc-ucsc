import React from 'react';
import '../styles/UpcomingEvents.css';

const UpcomingEvents = () => {
  return (
    <div className='upcoming-events-container'>
      <h1 className="upcoming-events-header">Upcoming Events</h1>
      <div className="upcoming-events-content">
        <div className="left-column">
            <div className="event-item">
                <h2 className="event-title">Weekly Meetings</h2>
                <div className="event-description">
                <p className="event">Leetcode Session   ⟶</p>
                <p className="event">Portfolio Workshop ⟶</p>
                <p className="event">Portfolio Workshop ⟶</p>
                </div>
            </div>
        </div>
        <div className="right-column">
          <div className="green-square"></div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
