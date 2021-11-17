import React, { useState, useEffect } from 'react';

function Message() {
  const [message, setMessage] = useState("Hello World!");

  useEffect(() => {
    const id = setInterval(() => {
      console.log(message);
    }, 2000);

    // cleanup function
    return () => {
      clearInterval(id);
    }
  }, [message]);

  return(
    <div>
      <h1>Type the message to log to console</h1>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <p>I'm loggin to console: "{message}"</p>
    </div>
  );
}

export default Message;
