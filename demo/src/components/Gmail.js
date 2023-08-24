import React from 'react'
import GoogleLogin from 'react-google-login'
import * as constConfig from '../config/config'

const Gmail = ({onSuccess,onFailure}) => {
const clientId=constConfig.GMAIL_CLIENT_ID
  return (
    <>
        <GoogleLogin
        clientId={clientId}
        buttonText='Sign in with Gmail'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        responseType="code"
        accessType="offline"
        scope="https://www.googleapis.com/auth/gmail.send"
        >            
        </GoogleLogin>
    </>
  )
}

export default Gmail