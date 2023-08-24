import React from 'react'
import {useLinkedIn} from 'react-linkedin-login-oauth2'
import linkedInImg from 'react-linkedin-login-oauth2/assets/linkedin.png'

const LinkedInAPI = () => {
  return (
    <img src={linkedInImg} 
    alt='Sign in with Linked In'
    style={{ maxWidth: '180px', cursor: 'pointer' }}
    />
    
  )
}

export default LinkedInAPI