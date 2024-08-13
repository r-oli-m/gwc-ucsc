import { gapi } from 'gapi-script';

// const API_KEY 
const CALENDAR_ID = 'b9543132592733d502fbaea4d0b8307a9f277c0f1632f03bf7855ca6588c3047@group.calendar.google.com';  
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.events.readonly";
const API_KEY = process.env.REACT_APP_GAPI_KEY;  // Replace with your API key

export const initClient = () => {
  return new Promise((resolve, reject) => {
    gapi.load('client', () => {
      gapi.client.init({
        apiKey: API_KEY, 
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
