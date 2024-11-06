import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './index.css'

const OrganizerPage = () => {
  const eventsList = [
    {
      id: "Jiobkjsdjkn",
      name: "Event1",
      from: "Tuesday 11 AM",
      to: "Tuesday 5 PM",
      status: "completed"
    },
    {
      id: "Jiobkjsdjkn",
      name: "Event2",
      from: "Tuesday 11 AM",
      to: "Tuesday 5 PM",
      status: "progress"
    },
    {
      id: "Jiobkjsdjkn",
      name: "Event3",
      from: "Tuesday 11 AM",
      to: "Tuesday 5 PM",
      status: "not-started"
    },
    {
      id: "Jiobkjsdjkn",
      name: "Event4",
      speaker: 'speaker 4',
      from: "Tuesday 11 AM",
      to: "Tuesday 5 PM",
      status: "not-started"
    },
    {
      id: "Jiobkjsdjkn",
      name: "Event5",
      speaker: 'speaker 5',
      from: "Tuesday 11 AM",
      to: "Tuesday 5 PM",
      status: "not-started"
    },
    {
      id: "Jiobkjsdjkn",
      name: "Event6",
      speaker: 'speaker 6',
      from: "Tuesday 11 AM",
      to: "Tuesday 5 PM",
      status: "not-started"
    },
    {
      id: "Jiobkjsdjkn",
      name: "Event7",
      speaker: 'speaker 7',
      from: "Tuesday 11 AM",
      to: "Tuesday 5 PM",
      status: "not-started"
    },
    {
      id: "Jiobkjsdjkn",
      name: "Event8",
      speaker: 'speaker 8',
      from: "Tuesday 11 AM",
      to: "Tuesday 5 PM",
      status: "not-started"
    },
    {
      id: "Jiobkjsdjkn",
      name: "Event9",
      speaker: 'speaker 9',
      from: "Tuesday 11 AM",
      to: "Tuesday 5 PM",
      status: "not-started"
    }
  ]

  const Item = (event) => {
    return (
      <div className={"item " + event.status}>
        <h3>{event.name}</h3>
        <p>Speaker: {event.speaker}</p>
        <p><b>From:</b> {event.from} <b>To:</b>{event.to} </p>
      </div>
    )
  }

  const { logout } = useAuth0();
  return (
    <div className="org-container">
      <div className="header">
        <h1>Organize Sessions</h1>
        <div style={{ "display": "flex" }}>
          <button>+ Event</button>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <div className="list">
        <div className="completed-list">
          <h3>Done</h3>
          {eventsList.map((event) => event.status === "completed" && Item(event))}
        </div>
        <div className="progress-list">
          <h3>On Going</h3>
          {eventsList.map((event) => event.status === "progress" && Item(event))}
        </div>
        <div className="not-started-list">
          <h3>Upcoming</h3>
          {eventsList.map((event) => event.status === "not-started" && Item(event))}
        </div>
      </div>
    </div>
  )
}

export default OrganizerPage