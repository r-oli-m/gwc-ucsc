import React, { useEffect, useState } from 'react';
import { initClient, listUpcomingEvents } from './googleApi';
import '../styles/UpcomingEvents.css';
import 'react-calendar/dist/Calendar.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const calendarEmbed = `<iframe src="https://calendar.google.com/calendar/embed?src=b9543132592733d502fbaea4d0b8307a9f277c0f1632f03bf7855ca6588c3047%40group.calendar.google.com&ctz=America%2FLos_Angeles&showTime=0" style="border: 0" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>`;

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
          start: formatEventDate(event.start.dateTime || event.start.date),
          location: truncateLocation(event.location), // Handle missing location
          description: event.description || 'No description provided' // Handle missing description
        }));
        setEvents(eventItems);
      })
      .catch((error) => {
        console.error("Error fetching events", error);
      });
  };

  const formatEventDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedTime = `${hours % 12 || 12}${minutes === 0 ? '' : `:${minutes.toString().padStart(2, '0')}`} ${ampm}`;

    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${formattedTime} → ${month}/${day}/${year} (${dayOfWeek})`;
  };


  const truncateLocation = (location) => {
    if (!location) return 'No location provided'; // Handle empty location
    let lastCommaIndex = location.length - 15; // Truncate the last 15 characters ', CA 95064, USA' )
    return location.substring(0, lastCommaIndex);
  };
  


  return (
    <div className='upcoming-events'>
      <h1 className='cal-title'>Calendar</h1>
      <div className="container">
        <div className="upcoming-events-left-container">
          <h2 className='ue-title'>Upcoming Events</h2>
          <div className="events-list">
            {events.map((event, index) => (
              <div key={index} className="event-item">
                <h3 className="event-title">{event.summary}</h3>
                <p className="event-date">{event.start}</p>
                <p className="event-description">{event.description}</p>
                <p className="event-location"> <i>{event.location}</i></p>
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
