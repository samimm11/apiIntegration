import React from "react";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";
import { useState } from "react";
// import DateTimePicker from 'react-calendar-datetime-picker'
import { TimePicker } from "react-ios-time-picker";
import DatePicker from "react-multi-date-picker";
import axios from "axios";

const CalendarAPI = () => {
  const session = useSession(); //for tokens
  // console.log("session",session.access_token)
  const supabase = useSupabaseClient();
  const sessionContext = useSessionContext();
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [time, setTime] = useState("10:00");

  const handleCreateCalendarEvent = () => {
    const event = {
      summary: eventName,
      start: {
        dateTime: startDate.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    };
    // fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events',
    // {
    //   method:'POST',
    //   'body':JSON.stringify(event),
    //   headers:{
    //     'Authorization':'Bearer '+session.access_token,
    //     'Content-Type': 'application/json'
    //   },

    // }).then(res=>res.json()).then(res=>{console.log("response",res)
    // alert('Event Created Successfully')})
    // var payload=JSON.stringify(event)
    console.log("Event", event);
    // axios.post('https://www.googleapis.com/calendar/v3/calendars/primary/event',payload,{headers: {
    //   'Authorization':'Bearer '+session.access_token,
    //   "Content-Type": "application/json",
    //    Accept: "application/json",
    // }}).then((res)=>console.log("data",res))
    axios
      .post(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events",
        event,
        {
          headers: {
            Authorization: "Bearer " + session.access_token,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => console.log("data", res.data))
      .catch((error) => {
        console.error("Error creating calendar event:", error);
        if (error.response) {
          console.error("Server error response:", error.response.data);
        }
      });
  };

  const googleSignIn = () => {
    const { error } = supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: ["https://www.googleapis.com/auth/calendar"],
      },
    });
    console.log("error", error);
    if (error) {
      alert("Error Loggin In");
      console.log(error);
    }
  };

  const googleSignOut = () => {
    supabase.auth.signOut();
  };

  return (
    <>
      <h1>Google Calendar API</h1>
      {console.log("Start date", startDate)}
      {console.log("supabase", supabase)}
      {session ? (
        <>
          {console.log("sessionCheck", session)}
          <h2>Hi User {session.user.email}</h2>
          {/* <p>Event Start</p> <DateTimePicker onChange={setStartDate}   value={startDate}></DateTimePicker> */}
          <p>Event Name </p>
          <input
            type="text"
            placeholder="Enter Event here"
            onChange={(event) => {
              setEventName(event.target.value);
            }}
          ></input>
          <p>Event Time</p>{" "}
          <TimePicker onChange={setTime} value={time}></TimePicker>
          Start Date
          <DatePicker onChange={setStartDate} value={startDate}></DatePicker>
          <br></br>
          End Date{" "}
          <DatePicker onChange={setEndDate} value={endDate}></DatePicker>
          <br></br>
          {/* <div>Event End <DateTimePicker onChange={setEndDate}   value={endDate}></DateTimePicker></div>
           */}
          <button onClick={handleCreateCalendarEvent}>
            Create Calendar Event
          </button>
          <br></br>
          <button onClick={googleSignOut}> Sign Out</button>
        </>
      ) : (
        <button style={{backgroundColor:'#d29f8bba'}} onClick={googleSignIn}> Sign in with Google</button>
      )}
    </>
  );
};

export default CalendarAPI;
