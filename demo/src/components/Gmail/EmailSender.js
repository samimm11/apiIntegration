import React, { useState } from 'react';

const EmailSender = () => {
  const [accessToken, setAccessToken] = useState(null);


  return (
    <div>
      <button className='btn btn-primary'>Login with Google</button>

    </div>
  );
};

export default EmailSender;
