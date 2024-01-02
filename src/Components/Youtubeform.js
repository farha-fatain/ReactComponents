import React from 'react'
import { useState } from 'react';

export const Youtubeform = () => {
  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[channel, setChannel] = useState("");
  const[AllEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    
    const newEntry = {username: username, email : email, channel: channel};

    setAllEntry([... AllEntry, newEntry]);
    console.log(AllEntry);
  }
  return (
    <div>
        <form action="" onSubmit={submitForm}>
            <label htmlFor="username">Username</label>
            <input type = "text" 
            id = "username" 
            name="username" 
            value={username} 
            onChange={(e)=>setUsername(e.target.value)} /> 

            <label htmlFor="email">E-mail</label>
            <input type = "email" 
            id = "email" 
            name="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>

            <label htmlFor="channel">Channel</label>
            <input type = "text" 
            id = "channel" 
            name="channel" 
            value={channel}
            onChange={(e)=>setChannel(e.target.value)}/>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
