import React from 'react'
import './index.css'

const EventPage = () => {
  const attendees = [
    {
      name: "a1",
      hookQ: "I work at",
      hookA: "My place",

    }, {
      name: "a2",
      hookQ: "I work at",
      hookA: "My place"
    }, {
      name: "a3",
      hookQ: "I work at",
      hookA: "My place"
    }, {
      name: "a4",
      hookQ: "I work at",
      hookA: "My place"
    }, {
      name: "a5",
      hookQ: "I work at",
      hookA: "My place"
    }, {
      name: "a6",
      hookQ: "I work at",
      hookA: "My place"
    }, {
      name: "a7",
      hookQ: "I work at",
      hookA: "My place"
    }
  ]

  const totalAttendees = 30
  const attended = 10
  return (
    <div className="event-container">
      <div className='header'>
        <h1>Event 1</h1>
        <h3>Speaker - Speaker1</h3>
      </div>
      <div className="footer">
        <div className="left">
          {
            Array.from({ length: totalAttendees }, (_, index) => {
              return (
                index <= attended ?
                  <img  src="/green.svg" alt="person is attended" className='person-img' />
                  :
                  <img  src="/person.svg" alt="person is attended" className='person-img' />
              )
            })
          }
        </div>
        <table className="right-list">
          <tr>
            <th><h3>Attendees List</h3></th>
          </tr>
          {
            attendees.map((a) => <tr><td><b>{a.name}</b><br />{a.hookQ + " " + a.hookA}</td></tr>)
          }

        </table>
      </div>
    </div>
  )
}

export default EventPage