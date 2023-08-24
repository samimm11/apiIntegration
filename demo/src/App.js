import CalendarAPI from "./components/CalendarAPI";
import {BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom'
import MapAPI from "./components/MapAPI";
import LinkedInAPI from "./components/LinkedInAPI";
import { useState } from "react";
import GmailAPI from "./components/GmailAPI";
import {GoogleAuthProvider} from '@react-oauth/google'
import EmailSender from "./components/Gmail/EmailSender";
import OutlookAPI from "./components/Outlook/OutlookAPI";
import GoogleCalendarAPI from "./components/GoogleCalendarAPI/GoogleCalendarAPI";
import CalendarApp from "./components/GoogleCalendarAPI/CalendarApp"
import Test from "./components/GoogleCalendarAPI/Test";
import Test1 from "./components/GoogleCalendarAPI/Test1";
import EmailJs from "./components/Gmail/EmailJs";

function App() {
const [activeComponent,setActiveComponent]=useState('calendar')

  
  
  return (
    <>
    {console.log("activeComponent",activeComponent)}
    <h1>API's</h1>
      {/* <CalendarAPI></CalendarAPI> */}
        <Router>
          <div>
            <nav>
              <ul style={{display:"grid",gridAutoFlow:"column",gridColumnGap:"10px"}}>
                <li style={{listStyleType:"none"}}>
                  <Link to={"/calendar"} onClick={()=>setActiveComponent('calendar')}>Calendar</Link>
                </li>
                <li style={{listStyleType:"none"}}>
                  <Link to={"/map"} onClick={()=>setActiveComponent('map')}>Map</Link>
                </li>
                <li style={{listStyleType:"none"}}>
                  <Link to={"/linkedIn"} onClick={()=>setActiveComponent('linkedIn')}>LinkedIn</Link>
                </li>
                <li style={{listStyleType:"none"}}>
                  <Link to={"/gmail"} onClick={()=>setActiveComponent('gmail')}>Email</Link>
                </li>
                <li style={{listStyleType:"none"}}>
                  <Link to={"/outlook"} onClick={()=>setActiveComponent('outlook')}>outlook</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route  path="/calendar" element={activeComponent==='calendar'?<Test1/>:''}></Route>
              <Route  path="/map" element={activeComponent==='map'?<MapAPI/>:''}></Route>
              <Route  path="/linkedIn" element={activeComponent==='linkedIn'?<LinkedInAPI/>:''}></Route>
              <Route  path="/gmail" element={activeComponent==='gmail'?<EmailJs/>:''}></Route>
              <Route  path="/outlook" element={activeComponent==='outlook'?<OutlookAPI/>:''}></Route>
            </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
