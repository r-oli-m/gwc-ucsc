import React, { useEffect, useState } from 'react';
import { initClient, listUpcomingEvents } from './googleApi';
import '../styles/UpcomingEvents.css';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const calendarLink = "https://calendar.google.com/calendar/embed?src=b9543132592733d502fbaea4d0b8307a9f277c0f1632f03bf7855ca6588c3047%40group.calendar.google.com&ctz=America%2FLos_Angeles&showTime=0";

  // Memoize the loadEvents function with useCallback
  const loadEvents = useCallback(() => {
    listUpcomingEvents()
      .then(response => {
        const eventItems = response.result.items.map(event => ({
          id: event.id,
          summary: event.summary,
          start: formatEventDate(event.start.dateTime || event.start.date),
          location: truncateLocation(event.location),
          description: event.description || 'No description provided'
        }));
        setEvents(eventItems);
      })
      .catch((error) => {
        console.error("Error fetching events", error);
      });
  }, []); // Empty dependency array to ensure the function is only created once

  useEffect(() => {
    initClient()
      .then(() => {
        loadEvents();
      })
      .catch((error) => {
        console.error("Error loading GAPI client for API", error);
      });
  }, [loadEvents]);

  

  const formatEventDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedTime = `${hours % 12 || 12}${minutes === 0 ? '' : `:${minutes.toString().padStart(2, '0')}`} ${ampm}`;
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    return `${formattedTime} → ${month}/${day}/${year} (${dayOfWeek})`;
  };

  const truncateLocation = (location) => {
    if (!location) return 'No location provided';
    let lastCommaIndex = location.length - 15;
    return location.substring(0, lastCommaIndex);
  };

  const handleNextEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const handlePreviousEvent = () => {
    if (currentEventIndex > 0) {
      setCurrentEventIndex((prevIndex) => (prevIndex - 1));
    }
  };

  const openCalendarInNewTab = () => {
    window.open(calendarLink, '_blank');
  };

  return (
    <div className='upcoming-events'>
      <h1 className='cal-title'>Calendar</h1>
      <div className="container">
        
        {/* Scrollable list of events for large screens */}
        <div className="upcoming-events-left-container">
          <h2 className='ue-title'>Upcoming Events</h2>

          {events.length > 0 && (
            <div className="events-list">
              {/* For larger screens: render all events */}
              {events.map((event, index) => (
                <div key={index} className="event-item">
                  <h3 className="event-title">{event.summary}</h3>
                  <p className="event-date">{event.start}</p>
                  <p className="event-description">{event.description}</p>
                  <p className="event-location"><i>{event.location}</i></p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Event navigation for smaller screens */}
        {events.length > 0 && (
          <div className="event-navigation-container">
            <div className="event-item-single-event">
              <h3 className="event-title">{events[currentEventIndex].summary}</h3>
              <p className="event-date">{events[currentEventIndex].start}</p>
              <p className="event-description">{events[currentEventIndex].description}</p>
              <p className="event-location"><i>{events[currentEventIndex].location}</i></p>
            </div>
            <div className="event-navigation">
              {currentEventIndex > 0 && (
                <IoIosArrowDropleft onClick={handlePreviousEvent} className="nav-arrow" />
              )}
              {currentEventIndex < events.length - 1 && (
                <IoIosArrowDropright onClick={handleNextEvent} className="nav-arrow" />
              )}
            </div>
          </div>
        )}

        <div className="calendar-container">
          <div className="calendar" dangerouslySetInnerHTML={{ __html: `<iframe src="${calendarLink}" style="border: 0" width="100%" height="110%" frameborder="0" scrolling="no"></iframe>` }} />
          <button onClick={openCalendarInNewTab} className="calendar-share-btn">Open Calendar in New Tab</button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
