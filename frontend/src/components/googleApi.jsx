import { gapi } from 'gapi-script';

// const API_KEY 
const CALENDAR_ID = 'lolahere09@gmail.com';  // Replace with your public calendar ID
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.events.readonly";

export const initClient = () => {
  return new Promise((resolve, reject) => {
    gapi.load('client', () => {
      gapi.client.init({
        // apiKey: API_KEY, * reva's api key take out
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      }).then(() => {
        resolve(gapi);
      }, error => {
        reject(error);
      });
    });
  });
};

export const listUpcomingEvents = () => {
  return gapi.client.calendar.events.list({
    calendarId: CALENDAR_ID,
    timeMin: (new Date()).toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: 'startTime',
  });
};
