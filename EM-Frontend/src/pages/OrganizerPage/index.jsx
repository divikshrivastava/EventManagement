import React, { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { getEventSessions } from '../../util/apiFunc';
import { useNavigate } from "react-router-dom";
import './index.css'

const OrganizerPage = () => {

  const nav = useNavigate();

  const goToNewSession = () => {
    nav("/new-session")
  }

  const goToEvent = (id) => {
    nav("/speaker?sessionId=" + id)
  }

  const [eventsList, setEventsList] = useState([])


  useEffect(() => {
    getEventSessions().then((res) => {
      const updatedSessions = res.sessions.map((session) => {
        const currentTime = new Date();
        const fromTime = new Date(currentTime); // Set the current date first
        const toTime = new Date(currentTime); // Set the current date first

        // Set the hours for fromTime and toTime based on the from and to values (using session.from and session.to)
        fromTime.setHours(session.from, 0, 0, 0);  // session.from is an integer representing the hour (e.g., 3 = 3AM)
        toTime.setHours(session.to, 0, 0, 0);      // session.to is an integer representing the hour (e.g., 13 = 1PM)

        // Format from and to times for easier reading if needed
        const from = fromTime.toUTCString();
        const to = toTime.toUTCString();

        // Determine status based on date comparison
        if (toTime < currentTime) {
          session.status = "completed";
          console.log(session.name + ":" + toTime);
        } else if (fromTime <= currentTime && currentTime <= toTime) {
          session.status = "progress";
        } else {
          session.status = "not-started";
        }

        return session;
      });
      setEventsList(updatedSessions);
    });
  }, []);



  const Item = (event) => {
    return (
      <div className={"item " + event.status} onClick={() => { goToEvent(event.sessionId) }}>
        <h3>{event.name}</h3>
        <p>Speaker: {event.speakerName}</p>
        <p><b>From:</b> {event.from}</p> <p><b>To:</b>{event.to} </p>
      </div>
    )
  }

  const { logout } = useAuth0();
  return (
    <div className="org-container">
      <div className="header">
        <h1>Organize Sessions</h1>
        <div style={{ "display": "flex", gap: '20px' }}>
          <button onClick={goToNewSession}>+ Session</button>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <div className="list">
        <div className="list-spot">
          <h3>Done</h3>
          {eventsList.map((event) => event.status === "completed" && Item(event))}
        </div>
        <div className="list-spot">
          <h3>On Going</h3>
          {eventsList.map((event) => event.status === "progress" && Item(event))}
        </div>
        <div className="list-spot">
          <h3>Upcoming</h3>
          {eventsList.map((event) => event.status === "not-started" && Item(event))}
        </div>
      </div>
    </div>
  )
}

export default OrganizerPage