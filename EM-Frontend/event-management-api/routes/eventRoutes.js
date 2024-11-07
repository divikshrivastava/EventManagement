const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/event', eventController.createEvent);
router.post('/event/:eventId/session', eventController.addSessionToEvent);
router.get('/event/:eventId', eventController.getEventSessions);
router.get('/session', eventController.getSessionDetails);
router.post('/checkin', eventController.checkInToSession);
router.get('/session-update', eventController.getSessionAttendees);

module.exports = router;