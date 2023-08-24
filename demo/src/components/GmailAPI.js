import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import * as constConfig from '../config/config'

const GmailAPI = () => {
    const [accessToken,setAccessToken]=useState('')
    const form=useRef()
    
    const handleGetEmails=()=>{

    }

    const onGoogleLoginSuccess=(response)=>{
      // setAccessToken(response.accessToken)
      console.log("accessToken",response.accessToken)
    }
    const onGoogleLoginFailure=(error)=>{
      console.log('Google login error:', error);
    }
    const handleSendEmail=(event)=>{
      event.preventDefault();
      console.log('form.current',form.current)
      emailjs.sendForm(constConfig.SERVICE_ID, constConfig.TEMPLATE_ID, form.current, constConfig.PUBLIC_KEY)
      .then((result) => {
          console.log('result.text',result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    
  return (
    <div>
      <h1>Gmail Integration</h1>
      {!accessToken ? (
        // <button onClick={handleGetEmails}>Fetch Emails</button>        
        <div>
          <h2>Hello User</h2>
          <form ref={form} onSubmit={handleSendEmail}>
            <input style={{borderColor:'aliceblue'}} type='text' placeholder='Enter name here' name="user_name"></input>
            <input type='email' placeholder='Enter Email here' name="user_email"></input>
            <input type="subject" placeholder='Enter Subject here' name='Subject'></input>
            <textarea name="message"></textarea>
            <button type='submit'>Send message</button>
          </form>          
        </div>
      ) : (
        <GoogleLogin
          clientId={constConfig.GMAIL_CLIENT_ID}
          onSuccess={onGoogleLoginSuccess}
          onFailure={onGoogleLoginFailure}
        />
      )}
    </div>
  )
}

export default GmailAPI