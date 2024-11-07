import React, { useState, useEffect } from 'react';
import './index.css';
import { useAuth0 } from '@auth0/auth0-react'

const AttendeePortal = () => {
  const { user } = useAuth0()
  const name = user.name
  const [sessionId, setSessionId] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Event Buddy', message: 'Welcome to DevWorld! How can I assist you today?' }
  ]);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Fetch session data from API
    fetch('http://localhost:5001/api/event/101')
      .then((response) => response.json())
      .then((data) => {
        if (data.sessions) {
          // Filter out empty objects and map sessions
          const filteredSessions = data.sessions.filter(session => Object.keys(session).length !== 0);
          setSessions(filteredSessions);
        }
      })
      .catch((error) => console.error('Error fetching sessions:', error));
  }, []);

  const checkInSession = () => {
    const serialNumber = parseInt(sessionId);
    if (serialNumber && serialNumber > 0 && serialNumber <= sessions.length) {
      const mappedSessionId = sessions[serialNumber - 1].sessionId;
      const attendeeId = name;

      // Make the API call to check in
      fetch('http://localhost:5001/api/checkin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sessionId: mappedSessionId, attendeeId: attendeeId })
      })
        .then((response) => response.json())
        .then((data) => {
          alert(`Checked in to session: ${mappedSessionId}`);
        })
        .catch((error) => {
          console.error('Error during check-in:', error);
          alert('Failed to check in. Please try again.');
        });
    } else {
      alert('Please enter a valid session number.');
    }
  };

  const sendMessage = () => {
    if (chatInput.trim() === '') {
      return;
    }

    const userMessage = { sender: 'You', message: chatInput };
    setChatMessages((prevMessages) => [...prevMessages, userMessage]);

    setChatInput('');

    setTimeout(() => {
      const eventBuddyMessage = chatInput.toLowerCase() === 'hi'
        ? { sender: 'Event Buddy', message: 'Hello!' }
        : { sender: 'Event Buddy', message: "I'm here to help!" };
      setChatMessages((prevMessages) => [...prevMessages, eventBuddyMessage]);
    }, 2000);
  };

  return (
    <div className="badge-page-container">
      <div className="form-container">
        <h2>Session Check-in</h2>
        <div className="session-list">
          <ul>
            {sessions.map((session, index) => (
              <li key={session.sessionId}>Session {index + 1}: {session.name}</li>
            ))}
          </ul>
        </div>
        <input
          type="text"
          value={sessionId}
          onChange={(e) => setSessionId(e.target.value)}
          placeholder="Enter Session ID to Check-in"
        />
        <div className="buttons">
          <button onClick={checkInSession}>Check-in</button>
        </div>
      </div>

      <div className="nft">
        <div className="main">
          <h2>Event Buddy</h2>
          <div className="chat-window">
            {chatMessages.map((msg, index) => (
              <div key={index} className="chat-message">
                {msg.sender}: {msg.message}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Ask me anything..."
          />
          <div className="buttons">
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendeePortal;
