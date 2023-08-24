import React from 'react'
import jwtDecode from 'jwt-decode'
import { useState , useEffect} from 'react'


const Test = () => {
    const CLIENT_ID = "1015639639567-ehno8vfd7u6ivtlil5ou7ar8fecoj9qe.apps.googleusercontent.com"
    const SCOPES = "https://www.googleapis.com/auth/calendar"
    const [accessToken,setAccessToken]=useState('4/0Adeu5BUNe4LWIUHOIZ4NAT3VAMmBHRKS8ENeq1houC_h_IGncC6fA7MzCAeOzL824n-aRA')

    const [user, setUser] = useState({});
    const [tokenClient, setTokenClient] = useState({});

    function handleCallBackResponse(response) {
        console.log('encoded JWT ID token:' + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject)
        setUser(userObject);
        document.getElementById('signInDiv').hidden = true;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById('signInDiv').hidden = false;
    }

    useEffect(() => {
        const google = window.google
        google.accounts.id.initialize({
            clientId: CLIENT_ID,
            callback: handleCallBackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: 'outline', size: 'large' }
        );

        setTokenClient(
            google.accounts.oauth2.initTokenClient({
                client_id: CLIENT_ID,
                scope: SCOPES,
                callback: (tokenResponse) => {
                    console.log('tokenResponse=', tokenResponse);
                    // we now have access to a live token to use for ANY google API
                    if (tokenResponse && tokenResponse.access_token) {
                        // create the calendar event here

                        fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
                            method: 'POST',
                            headers: {
                                'Authorization': 'Bearer ' + tokenResponse.access_token
                            },
                            body: JSON.stringify(TEST_EVENT)
                        }).then((data) => {
                            return data.json();
                        }).then((data) => {
                            console.log(data);
                            alert('event created check google calendar')
                        })

                    }
                }
            })
        );


    }, [])

    function createCalendarEvent() {
        tokenClient.requestAccessToken();
    }


    const TEST_EVENT = {
        'summary': 'Example Event',
        'location': 'New York, NY',
        'description': 'a description for this',
        'start': {
            'dateTime': '2023-03-26T10:00:00-04:00',
            'timeZone': 'America/New_York',
        },
        'end': {
            'dateTime': '2023-03-26T11:00:00-04:00',
            'timeZone': 'America/New_York',
        },
    };


    return (
        <>
            <div>Test</div>
            <div className='main-cover' style={{ backgroundColor: 'lightblue', width: '100%', height: '100%', zIndex: '10000' }}   >

                <div id="signInDiv"></div>
                {Object.keys(user).length != 0 &&
                    <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
                }

                {user &&
                    <div>
                        <img src={user['picture']}></img>
                        <h3>{user.name}</h3>
                        <button onClick={() => createCalendarEvent()}>Create calendar event</button>
                    </div>
                }
            </div>
        </>

    )
}

export default Test