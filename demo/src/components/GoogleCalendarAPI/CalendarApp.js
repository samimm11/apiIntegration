import React from 'react'
import { useState,useEffect } from 'react'
import GoogleLogin from 'react-google-login';


const Calendar = () => {
    const [accessToken, setAccessToken] = useState('');
    const [events, setEvents] = useState([]);
    var gapi = window.gapi
  
    const handleLoginSuccess = (res) => {
      const token = res.accessToken;
      setAccessToken(token);
    };
  
    const handleApiCall = async () => {
      if (!accessToken) {
        console.log('Not logged in.');
        return;
      }
  
      gapi.client.calendar.events
        .list({
          calendarId: 'primary',
          timeMin: new Date().toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: 'startTime',
        })
        .then((response) => {
          const fetchedEvents = response.result.items;
          setEvents(fetchedEvents);
        });
    };
  
    const handleAddEvent = () => {
      if (!accessToken) {
        console.log('Not logged in.');
        return;
      }
  
      const event = {
        summary: 'Awesome Event!',
        location: 'Chennai',
        description: 'Good',
        start: {
          dateTime: '2023-08-24T20:00:00-07:00', // Adjust timezone accordingly
          timeZone: 'America/Los_Angeles',
        },
        end: {
          dateTime: '2023-08-24T22:00:00-07:00', // Adjust timezone accordingly
          timeZone: 'America/Los_Angeles',
        },
      };
  
      gapi.client.calendar.events
        .insert({
          calendarId: 'primary',
          resource: event,
        })
        .then((response) => {
          console.log('Event added:', response.result);
          handleApiCall(); // Fetch updated events
        });
    };
  
    useEffect(() => {
      gapi.load('client:auth2', () => {
        gapi.client.init({
          apiKey: 'AIzaSyCNFa3AzgOU8RrLdhN9l4TBOOooDH-vtOw',
          clientId: '1015639639567-ehno8vfd7u6ivtlil5ou7ar8fecoj9qe.apps.googleusercontent.com',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
          scope: 'https://www.googleapis.com/auth/calendar',
        });
  
        gapi.auth2.getAuthInstance().isSignedIn.listen((isSignedIn) => {
          if (isSignedIn) {
            handleApiCall();
          }
        });
      });
    }, []);
  
    return (
      <div>
        <h1>Google Calendar API</h1>
        <GoogleLogin
          clientId='1015639639567-ehno8vfd7u6ivtlil5ou7ar8fecoj9qe.apps.googleusercontent.com'
          onSuccess={handleLoginSuccess}
          onFailure={(error) => console.error('Login error:', error)}
          buttonText="Login with Google"
        />
        <button onClick={handleApiCall}>Fetch Calendar Events</button>
        <button onClick={handleAddEvent}>Add Event</button>
        <div>
          <h2>Events:</h2>
          <ul>
            {events.map((event) => (
              <li key={event.id}>{event.summary}</li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default Calendar