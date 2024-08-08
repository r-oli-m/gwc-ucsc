import React, { useEffect, useState } from 'react';
import { initClient, listUpcomingEvents } from './googleApi';
import '../styles/UpcomingEvents.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  const calendarEmbed = `<iframe src="https://calendar.google.com/calendar/embed?src=lolahere09%40gmail.com&ctz=America%2FLos_Angeles" width="90%" height="90%" frameborder="0" scrolling="no"></iframe>`;

  useEffect(() => {
    initClient()
      .then(() => {
        loadEvents();
      })
      .catch((error) => {
        console.error("Error loading GAPI client for API", error);
      });
  }, []);

  const loadEvents = () => {
    listUpcomingEvents()
      .then(response => {
        const eventItems = response.result.items.map(event => ({
          id: event.id,
          summary: event.summary,
          start: event.start.dateTime || event.start.date,
          location: event.location || 'No location provided', // Handle missing location
          description: event.description || 'No description provided' // Handle missing description
        }));
        setEvents(eventItems);
      })
      .catch((error) => {
        console.error("Error fetching events", error);
      });
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <div className='upcoming-events'>
      <h1>Calendar</h1>
      <div className="container">
        <div className="upcoming-events-left-container">
          <h2>Upcoming Events</h2>
          <div className="events-list">
            {events.map((event, index) => (
              <div key={index} className="event-item">
                <h3 className="event-title">{event.summary}</h3>
                <p className="event-date">{event.start}</p>
                <p className="event-description">{event.description}</p>
                <p className="event-location">{event.location}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="calendar" dangerouslySetInnerHTML={{ __html: calendarEmbed }} />
      </div>
    </div>
  );
};

export default UpcomingEvents;
