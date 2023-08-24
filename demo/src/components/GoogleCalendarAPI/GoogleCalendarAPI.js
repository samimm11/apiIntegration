// import React from 'react'
// import { useState } from 'react'
// import GoogleLogin from 'react-google-login'
// import { useEffect } from 'react'




// const GoogleCalendarAPI = () => {
//     var gapi = window.gapi
//     const clientId = '1015639639567-ehno8vfd7u6ivtlil5ou7ar8fecoj9qe.apps.googleusercontent.com'
//     const API_key = 'AIzaSyCNFa3AzgOU8RrLdhN9l4TBOOooDH-vtOw'
//     const DISCOVERY_DOC = "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
//     const SCOPES = "https://www.googleapis.com/auth/calendar"

//     const [accessToken, setAccessToken] = useState('');
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         gapi.load('client:auth2', () => {
//             gapi.client.init({
//                 apiKey: 'YOUR_API_KEY',
//                 clientId: 'YOUR_CLIENT_ID',
//                 discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
//                 scope: 'https://www.googleapis.com/auth/calendar',
//             });
//             gapi.auth2.getAuthInstance().isSignedIn.listen((isSignedIn) => {
//                 if (isSignedIn) {
//                     handleApiCall();
//                 }
//             });
//         });
//     }, [])

//     gapi.client.calendar.events
//     .list({
//       calendarId: 'primary',
//       timeMin: new Date().toISOString(),
//       showDeleted: false,
//       singleEvents: true,
//       maxResults: 10,
//       orderBy: 'startTime',
//     })
//     .then((response) => {
//       const fetchedEvents = response.result.items;
//       setEvents(fetchedEvents);
//     });
// };

//     const handleApiCall = async () => {
//         if (!accessToken) {
//           console.log('Not logged in.');
//           return;
//         }
//     }

    

//     const handleClick = () => {
//         gapi.load('client:auth2', () => {
//             console.log("loaded client")

//             gapi.client.init({
//                 apikey: API_key,
//                 clientId: clientId,
//                 discoveryDocs: DISCOVERY_DOC,
//                 scope: SCOPES

//             })
//             gapi.client.load('calendar', 'v3', () => {
//                 console.log("loaded")
//             })

//             gapi.auth2.getAuthInstance().signIn().then(() => {
//                 var event = {
//                     'summary': 'Awesome Event!',
//                     'location': 'Chennai',
//                     'description': 'Good',
//                     'start': {
//                         'dateTime': '2023-08-24T20:00:00-21:00:00',
//                         'timeZone': 'America/Los_Angeles'
//                     }
//                 }
//             })

//             //get events
//             // gapi.client.calendar.events.list({
//             //     'calendarId': 'primary',
//             //     'timeMin': (new Date()).toString(),
//             //     'showDeleted': false,
//             //     'singleEvents': true,
//             //     'maxResults': 10,
//             //     'orderBy': 'startTime'
//             // }).then(response => {
//             //     const events = response.result.items
//             //     console.log("Events", events)
//             // })
//         })
//     }

//     // const accessToken=localStorage.getItem('access_token')
//     // const expiresIn=localStorage.getItem('expires_in')

//     // let gapInited=false,gisInited=false,tokenclient;

//     // useEffect(() => {
//     //   gapiLoaded()
//     //   gisLoaded()
//     // }, [])

//     // function gapiLoaded(){
//     //     gapi.load('client', initializeGapiClient)
//     // }

//     // async function initializeGapiClient(){

//     // }

//     // const [accessToken, setAccessToken] = useState('')
//     // const handleLoginSuccess = (res) => {
//     //     const token = res.accessToken
//     //     setAccessToken(token)
//     // }
//     // const handleApiCall = async () => {
//     //     if (!accessToken) {
//     //         console.log('Not logged in.');
//     //         return;
//     //     }
//     //     else {
//     //         console.log("logged in")
//     //     }
//     // }


//     return (
//         <>
//             <div>GoogleCalendarAPI</div>
//             {/* <GoogleLogin
//                 clientId={clientId}
//                 onSuccess={handleLoginSuccess}
//                 onFailure={(error) => console.error('Login error:', error)}
//                 buttonText="Login with Google"
//             />
//             <button onClick={handleApiCall}>Fetch Calendar Events</button> */}
//             <button onClick={handleClick}>Add Event</button>
//         </>
//     )
// }

// export default GoogleCalendarAPI