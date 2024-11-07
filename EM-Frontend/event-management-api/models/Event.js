const { getDB } = require('../config/db');

const getEventCollection = () => getDB().collection('events');

module.exports = { getEventCollection };