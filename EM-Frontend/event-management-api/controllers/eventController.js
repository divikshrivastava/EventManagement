const { getEventCollection } = require('../models/Event');
const { ObjectId } = require('mongodb');

// POST /event - Create a new event
exports.createEvent = async (req, res) => {
  try {
    const event = req.body;
    const result = await getEventCollection().insertOne(event);
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// POST /event/:eventId/session - Add a new session to an existing event
exports.addSessionToEvent = async (req, res) => {
    try {
      const { eventId } = req.params;
      const session = req.body;
      const event = await getEventCollection().findOne({ eventId });
      if (event) {
        event.sessions.push(session);
        await getEventCollection().updateOne(
          { eventId },
          { $set: { sessions: event.sessions } }
        );
        res.status(200).json({ success: true, message: 'Session added successfully' });
      } else {
        res.status(404).json({ success: false, message: 'Event not found' });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };

  
// GET /event/:eventId - Get sessions of an event
exports.getEventSessions = async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await getEventCollection().findOne({ eventId });
    if (event) {
      res.status(200).json({ sessions: event.sessions });
    } else {
      res.status(404).json({ success: false, message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET /session - Get session details
exports.getSessionDetails = async (req, res) => {
  try {
    const { sessionId, speakerId } = req.query;
    const event = await getEventCollection().findOne({ 'sessions.sessionId': sessionId, 'sessions.speakerId': speakerId });
    if (event) {
      const session = event.sessions.find(s => s.sessionId === sessionId);
      res.status(200).json(session);
    } else {
      res.status(404).json({ success: false, message: 'Session not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// POST /checkin - User check-in to a session
exports.checkInToSession = async (req, res) => {
  try {
    const { sessionId, attendeeId } = req.body;
    const event = await getEventCollection().findOne({ 'sessions.sessionId': sessionId });
    if (event) {
      const session = event.sessions.find(s => s.sessionId === sessionId);
      const attendee = event.attendees.find(a => a.email === attendeeId);
      if (session && attendee) {
        session.attendees.push(attendee);
        await getEventCollection().updateOne(
          { _id: event._id },
          { $set: { sessions: event.sessions } }
        );
        res.status(200).json({ success: true, message: 'Checked in successfully' });
      } else {
        res.status(404).json({ success: false, message: 'Session or attendee not found' });
      }
    } else {
      res.status(404).json({ success: false, message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET /session-update - Fetch updated list of attendees for a session
exports.getSessionAttendees = async (req, res) => {
  try {
    const { sessionId } = req.query;
    const event = await getEventCollection().findOne({ 'sessions.sessionId': sessionId });
    if (event) {
      const session = event.sessions.find(s => s.sessionId === sessionId);
      res.status(200).json({ attendees: session.attendees });
    } else {
      res.status(404).json({ success: false, message: 'Session not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
