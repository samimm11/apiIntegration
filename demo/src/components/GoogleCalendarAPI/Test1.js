import React from 'react'
import { gapi } from 'gapi-script'
import { useEffect, useState } from 'react'
import Event from './Event'

const Test1 = () => {

    const CLIENT_ID = "1015639639567-ehno8vfd7u6ivtlil5ou7ar8fecoj9qe.apps.googleusercontent.com"
    const SCOPES = "https://www.googleapis.com/auth/calendar"
    const accessToken = '4/0Adeu5BUNe4LWIUHOIZ4NAT3VAMmBHRKS8ENeq1houC_h_IGncC6fA7MzCAeOzL824n-aRA'
    const API_key = "AIzaSyCNFa3AzgOU8RrLdhN9l4TBOOooDH-vtOw"
    const CALENDAR_ID = "AIzaSyCNFa3AzgOU8RrLdhN9l4TBOOooDH-vtOw"

    const [events, setEvents] = useState([])

    useEffect(() => {
        const events = getEvents(CALENDAR_ID, API_key);
        setEvents(events);
    }, []);

    var event = {
        summary: "Hello World",
        location: "",
        start: {
          dateTime: "2022-08-28T09:00:00-07:00",
          timeZone: "America/Los_Angeles",
        },
        end: {
          dateTime: "2022-08-28T17:00:00-07:00",
          timeZone: "America/Los_Angeles",
        },
        recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
        attendees: [],
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 },
            { method: "popup", minutes: 10 },
          ],
        },
      };
      
    const addEvent = (CALENDAR_ID, event) => {
        function initiate() {
            gapi.client
                .request({
                    path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
                    method: "POST",
                    body: event,
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                .then(
                    (response) => {
                        return [true, response];
                    },
                    function (err) {
                        console.log(err);
                        return [false, err];
                    }
                );
        }
        gapi.load("client", initiate);
    };


    const getEvents = (calendarId, apiKey) => {
        function initiate() {
            gapi.client
                .init({
                    apiKey: API_key,
                })
                .then(function () {
                    return gapi.client.request({
                        path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
                    });
                })
                .then(
                    (response) => {
                        let events = response.result.items;
                        setEvents(events);
                    },
                    function (err) {
                        return [false, err];
                    }
                );
        } gapi.load("client", initiate);
    }



    return (
        <>
            <h1>Test 1</h1>
            <ul>
                {events?.map((event) => (
                    <li key={event.id} className="flex justify-center">
                        <Event description={event.summary} />
                    </li>
                ))}
            </ul>
            <button onClick={addEvent}>Add Event</button>
        </>
    )
}

export default Test1