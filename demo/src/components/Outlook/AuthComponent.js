// import React from 'react'
// import { useAuth } from 'react-oauth2-pkce'
// import * as constConfig from '../../config/config'

// const AuthComponent = () => {
//     const redirectURI = 'http://localhost:3000/'
//     const { accessToken, authenticate } = useAuth({
//         authorizationUrl: 'https://login.microsoftonline.com/YOUR_TENANT_ID/oauth2/v2.0/authorize',
//         clientId: constConfig.OUTLOOK_CLIENT_ID,
//         redirectUri: redirectURI,
//         scopes: ['openid', 'profile', 'email', 'offline_access'],
//     })

//     const handleLogin = () => {
//         authenticate();
//     };
//     return (
//         <div>
//             {!accessToken ? (
//                 <button onClick={handleLogin}>Log In</button>
//             ) : (
//                 <p>You are logged in!</p>
//             )}
//         </div>
//     )
// }

// export default AuthComponent