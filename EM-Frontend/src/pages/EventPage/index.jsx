import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useSearchParams } from 'react-router-dom';
import { getSessionDetails } from '../../util/apiFunc';
import './index.css'

const EventPage = () => {

  const attended = 10
  const { logout } = useAuth0();

  const [searchParams] = useSearchParams();

  // Access the query parameter
  const id = searchParams.get("sessionId");

  const [session, setSession] = useState({ name: "API World", attendees: [], capacity: 20 })
  const sync = () => {
    getSessionDetails(id).then((res) => {
      setSession(res)
      console.log(res)
    })
  }
  useEffect(() => {
    sync()
  }, []);

  return (
    <div className="event-container">
      <div className='header'>
        <h1>{session.name}</h1>
        <div style={{ "display": "flex", justifyContent: 'center', gap: "10px", alignItems: "center" }}>
          <h3>Speaker - {session.speakerName}</h3>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <div className="footer">
        <div className="left">
          <button onClick={sync}>Re-Sync</button>
          <br></br>
          <br></br>
          {
            Array.from({ length: session.capacity }, (_, index) => {
              return (
                index <= session.attendees.length - 1 ?
                  <img src="/green.svg" alt="person is attended" className='person-img' />
                  :
                  <img src="/person.svg" alt="person is attended" className='person-img' />
              )
            })
          }
        </div>
        <table className="right-list">
          <tr>
            <th><h3>Attendees List</h3></th>
          </tr>
          {
            session.attendees &&
            session.attendees.map((a) => <tr><td><b>{a.name}</b><br />{a.info}</td></tr>)
          }

        </table>
      </div>
    </div>
  )
}

export default EventPage